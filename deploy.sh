#!/bin/sh

set -eu

bundle exec middleman build --clean

# 管理外のフォルダをコピー
cp -r synapse build/
cp -r sound-recruiting build/

cp favicon.ico build/

yarn run s3-deploy './build/**' \
    --cwd './build/' \
    --region us-west-2 \
    --bucket nkwors.com \
    --distId E22MIW1G6SDNSA \
    --invalidate '/*' \
    --deleteRemoved

ruby deploy_detail.rb
