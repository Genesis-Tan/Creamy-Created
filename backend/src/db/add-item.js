const Database = require('better-sqlite3');
const path = require('path');

// Path to your DB file
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new Database(dbPath);

// Prepare insert statement
const stmt = db.prepare(`
  INSERT INTO menu (name, price, available, remarks, category)
  VALUES (?, ?, ?, ?, ?)
`);

// Insert an item
stmt.run('Iced Coffee', 45.0, 1, 'Cold brew', 'Drinks');

console.log('✅ Menu item added successfully.');
