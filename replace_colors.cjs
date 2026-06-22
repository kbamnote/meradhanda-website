const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

walk('d:/meraDhanda/frontend/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
      .replace(/#2563EB/gi, '#2C5F34')
      .replace(/#1D4ED8/gi, '#234a2a') // themeGreen-700 equivalent
      .replace(/#3B82F6/gi, '#387848') // themeGreen-500 equivalent
      .replace(/blue-600/g, 'themeGreen-600')
      .replace(/blue-500/g, 'themeGreen-500')
      .replace(/blue-100/g, 'themeGreen-100')
      .replace(/blue-50/g, 'themeGreen-50')
      .replace(/blue-200/g, 'themeGreen-200')
      .replace(/blue-700/g, 'themeGreen-700')
      .replace(/blue-800/g, 'themeGreen-800')
      .replace(/blue-900/g, 'themeGreen-900')
      .replace(/rgba\(37,\s*99,\s*235/g, 'rgba(44, 95, 52');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
