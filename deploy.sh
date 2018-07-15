#!/bin/sh

set -eu

rm -rf dist
yarn run build
cp -r nare5 dist/
cp -r shukujo dist/
cp -r synapse dist/
cp -r sound-recruiting dist/
cp -r web/img dist/img/

yarn run s3-deploy './dist/**' --cwd './dist/' --region us-west-2 --bucket nkwors.com

