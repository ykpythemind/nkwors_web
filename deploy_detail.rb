#!/usr/bin/env ruby

def slack_url
  ENV['SLACK_URL']
end

abort "SLACK_URL is not implemented" unless slack_url

git_log = `git log --date=iso --pretty=format:"[%ad] %h %an : %s" | head -n 5`

str = "deploy finished! \n\n  heading git log...\n #{git_log.chomp}"

`curl -X POST --data-urlencode 'payload={"text": "#{str}"}' #{slack_url}`

