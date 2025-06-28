CREATE TABLE menu (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    available BOOLEAN DEFAULT 1,
    remarks TEXT,
    category TEXT
);