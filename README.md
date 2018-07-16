# README #

猫を堕ろすのwebサイトのソースを管理するレポジトリ

## develop 
```
yarn
yarn run dev
```

## host

Amazon S3
http://nkwors.com.s3-website-ap-northeast-1.amazonaws.com/

## deploy

.envrc

```
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export SLACK_URL=
```

```
sh ./deploy.sh
```

