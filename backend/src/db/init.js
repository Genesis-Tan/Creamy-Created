const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

// Make path absolute to this file
const dbPath = path.join(__dirname, 'database.sqlite');
const schemaPath = path.join(__dirname, 'schema.sql');

// Ensure DB directory exists (defensive but optional in your case)
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Create and initialize DB
const db = new Database(dbPath);
const schema = fs.readFileSync(schemaPath, 'utf8');
db.exec(schema);

console.log('✅ Database initialized at', dbPath);
