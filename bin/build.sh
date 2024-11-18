#!/bin/bash
cd ..

npm install
npm run build

cp ./main.js '/Users/jplatta/Library/Mobile Documents/iCloud~md~obsidian/Documents/development_vault/.obsidian/plugins/intelligent-investor'
cp ./manifest.json '/Users/jplatta/Library/Mobile Documents/iCloud~md~obsidian/Documents/development_vault/.obsidian/plugins/intelligent-investor'
cp ./styles.css '/Users/jplatta/Library/Mobile Documents/iCloud~md~obsidian/Documents/development_vault/.obsidian/plugins/intelligent-investor'

mv ./main.js ./dist
cp ./styles.css ./dist
cp ./manifest.json ./dist