#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist


# 部署到自定义域域名
# echo 'www.example.com' > CNAME
echo > .nojekyll


git init
git checkout -B master
git add -A
git commit -m 'deploy'

# 部署到 https://char849.github.io/H-Figure
git push -f git@github.com:char849/H-Figure.git master:gh-pages

cd -