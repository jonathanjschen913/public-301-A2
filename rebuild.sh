#!/bin/bash

# Remove node_modules directory and package-lock.json file
rm -rf node_modules
rm -f package-lock.json

# Clean npm cache
npm cache clean --force

# Install npm dependencies
npm install

# Run the build script
npm run build