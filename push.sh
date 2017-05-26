#!/bin/bash

git add .
git commit -m $1
git push heroku master
echo "pushed to surver"