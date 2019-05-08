activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end
activate :directory_indexes

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

page '/anatanitotte/*.html', :layout => "anata_layout"
page '/sound-recruiting/*.html', :layout => "sr_layout"

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

activate :blog do |blog|
  blog.prefix = "news"
  blog.permalink = "{year}-{month}-{day}-{title}.html"
  blog.layout = "news_layout"
  blog.publish_future_dated = true
end

helpers do
  def live_date(str)
    date = Date.parse(str)
    week = date.strftime("%a").downcase
    strftime(date) + "(#{week})"
  end

  def strftime(str)
    str.strftime("%Y/%-m/%-d")
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

  def link_link(url)
    s = ""
    s << %(<a href="#{url}">)
    s << %(<img style="padding-top: 5px; width: 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACwSURBVEhL7ZJNCsIwEEZzDT2SP7WXEd0KLjyU1DtJN670e6HR9iOCRboo5MFbzExm6iSGQmF+1PImW/k0Ha/TQ28ls1ykN/V1cmeSZzlgJyk85F4u5VjoOUhmMGsr37AayWOM/oMZzGpi1JHufBGjD+R+sQ+bkLvHqGPyD7AOycmuiAchyQNxgF8xFnroTY+8lgP4a1H4ppM7kzzJLBvJatyfNzlep+cqV7JQmA8hvAAerGYlT/uC3QAAAABJRU5ErkJggg==">)
    s << %(</a>)
  end

  def link_to_if(msg, url, **opt)
    op = proc { |opt| opt.merge!(class: "active-link") }

    # p current_page.path

    if current_page.path == url.delete_prefix("/")
      op.call opt
    elsif url == "/old_live.html"
      op.call opt
    elsif url == "/" && current_page.path == "index.html"
      op.call opt
    elsif url == "/news.html" && current_page.path.include?("news")
      op.call opt
    end

    link_to msg, url, **opt
  end
end

production = ENV['BUILD_ENV'] == 'production'

bucket = production ? 'nkwors.com' : 'nkwors-staging'

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

activate :external_pipeline, {
  name:    :parcel,
  command: build? ? 'yarn build' : 'yarn dev',
  source:  'tmp/dist'
}

configure :build do
  activate :minify_css
  activate :minify_javascript

  activate :asset_hash

  # activate :asset_host, :host => '//YOURDOMAIN.cloudfront.net'
end

before_build do
  require 'fileutils'
  puts "production mode / deploy bucket: #{bucket}" if production

  puts "cleanup"
  FileUtils.rm_r "build"
end

after_build do
  require 'fileutils'

  # 管理外のフォルダをコピー
  FileUtils.cp 'favicon.ico', 'build'
end
