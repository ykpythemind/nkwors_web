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

task :deploy => [:build, :sync]
