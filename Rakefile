require 'bundler/setup'

task default: :preview

desc "Run the preview server at http://localhost:4567"
task :preview do
  exec "bundle exec middleman server"
end

task :build do
  system "bundle exec middleman build"
end

task :sync do
  system "bundle exec middleman s3_sync"
end

task :notify_git_log do
  slack_url = ENV['SLACK_URL']
  exit 'SLACK_URL is not implemented' unless slack_url

  git_log = `git log --date=iso --pretty=format:"[%ad] %h %an : %s" | head -n 3`
  str = "deploy finished! \n\nheading git log...\n #{git_log.chomp}"
  `curl -X POST --data-urlencode 'payload={"text": "#{str}"}' #{slack_url}`
end

deploytask = [:build, :sync]
deploytask += [:notify_git_log] if ENV['BUILD_ENV'] == 'production'

task :deploy => deploytask
