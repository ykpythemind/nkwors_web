#!/bin/sh

set -eu

rm -rf dist # clean up
yarn run build

# parcel管理外のフォルダをコピー
cp -r nare5 dist/
cp -r shukujo dist/
cp -r synapse dist/
cp -r sound-recruiting dist/

cp favicon.ico dist/

cp -r web/img dist/img/ # parcel で管理されていない静的画像ファイル

yarn run s3-deploy './dist/**' --cwd './dist/' --region us-west-2 --bucket nkwors.com

ruby deploy_detail.rb

