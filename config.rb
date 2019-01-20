# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :sprockets
sprockets.append_path File.join(root, "node_modules")

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end
activate :directory_indexes

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def live_date(str)
    date = Date.parse(str)
    week = date.strftime("%a").downcase
    date.strftime("%Y/%-m/%-d") + "(#{week})"
  end

  def contact_url
    "https://goo.gl/forms/mG7UfVwT9gSy060t2"
  end

  def twitter_link(id)
    s = ""
    s << %(<a href="https://twitter.com/#{id}" target="_blank">)
    s << image_tag("/images/twitter.svg", style: "width: 16px; vertical-align: bottom;")
    s << %(</a>)
    s
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

production = ENV['BUILD_ENV'] == 'production'

bucket = production ? 'nkwors.com' : 'nkwors-staging'

# dirty hack
Middleman::S3SyncExtension.class_eval do
  def manipulate_resource_list(mm_resources)
    dirs = Dir.glob(["synapse/*", "sound-recruiting/*"])
    ::Middleman::S3Sync.mm_resources = mm_resources + dirs.map do |t|
      Middleman::Sitemap::Resource.new(app.sitemap, t.gsub(/^build\//,""), File.join(app.root, t))
    end
  end
end
# ----------

activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = bucket # The name of the S3 bucket you are targeting. This is globally unique.
  s3_sync.region                     = 'ap-northeast-1'     # The AWS region for your bucket.
  s3_sync.aws_access_key_id          = ENV['AWS_ACCESS_KEY_ID']
  s3_sync.aws_secret_access_key      = ENV['AWS_SECRET_ACCESS_KEY']
  s3_sync.delete                     = true # We delete stray files by default.
  s3_sync.after_build                = false # We do not chain after the build step by default.
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
  s3_sync.prefix                     = ''
  s3_sync.version_bucket             = false
  s3_sync.index_document             = 'index.html'
  s3_sync.error_document             = '404/index.html'
end

default_caching_policy      max_age: (60 * 60 * 24 * 365)
caching_policy 'text/html', max_age: 0, must_revalidate: true

configure :build do
  activate :minify_css
  activate :minify_javascript

  activate :asset_hash

  # activate :asset_host, :host => '//YOURDOMAIN.cloudfront.net'
end

before_build do
  puts "production mode / deploy bucket: #{bucket}" if production
end

require 'fileutils'

after_build do
  require 'fileutils'

  # 管理外のフォルダをコピー
  FileUtils.cp_r 'synapse', 'build'
  FileUtils.cp_r 'sound-recruiting', 'build'
  FileUtils.cp 'favicon.ico', 'build'
end
