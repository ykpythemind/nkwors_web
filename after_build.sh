#!/bin/sh

set -eu

# 管理外のフォルダをコピー
cp -r synapse build/
cp -r sound-recruiting build/

cp favicon.ico build/
