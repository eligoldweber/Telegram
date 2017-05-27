#!/bin/bash

git add .
git commit -m $1
git push heroku master
git add .
git commit -m $1
git push https://github.com/eligoldweber/Telegram
echo "pushed to surver"