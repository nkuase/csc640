#!/bin/bash

# Simple Build Script
# Builds src/App.tsx → app.js

echo "🔨 Building React App..."
echo ""

# Check if Node.js and npx are available
if ! command -v npx &> /dev/null; then
    echo "❌ Error: npx not found!"
    echo "Please install Node.js from: https://nodejs.org"
    exit 1
fi

echo "Building src/App.tsx → app.js"
echo ""

# Build with esbuild
npx -y esbuild src/App.tsx \
    --bundle \
    --outfile=app.js \
    --format=iife \
    --global-name=AppModule \
    --external:react \
    --external:react-dom \
    --banner:js="// React and ReactDOM from global scope
window.React = window.React || {};
window.ReactDOM = window.ReactDOM || {};
var require = function(name) {
  if (name === 'react') return window.React;
  if (name === 'react-dom') return window.ReactDOM;
  throw new Error('Module not found: ' + name);
};"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    
    if [ -f "app.js" ]; then
        SIZE=$(wc -c < app.js | tr -d ' ')
        echo "Generated: app.js ($(($SIZE / 1024))KB)"
    fi
else
    echo ""
    echo "❌ Build failed!"
    exit 1
fi
