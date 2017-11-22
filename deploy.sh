#!/usr/bin/env bash

hugo
cd public
git add -A
git commit -m "Build site"
git push
cd -

