#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn install
yarn build
yarn typeorm migration:run -d dist/data-source