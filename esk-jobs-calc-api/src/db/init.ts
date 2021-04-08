﻿import sqlite3 from "sqlite3";

const DATABASE_FILE = process.env.DATABASE_FILE || "database.sqlite";
if (!DATABASE_FILE) throw new Error("DATABASE_FILE não informado");

const initDb = {
  async init() {
    let db = new sqlite3.Database(DATABASE_FILE);
    console.log("rodou aqui");
    await db.exec(`      
        CREATE TABLE profile (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          avatar TEXT,
          monthly_budget INT,
          days_per_week INT,
          hours_per_day INT,
          vacation_per_year INT,
          value_hour INT
        );
      `);

    await db.exec(`
        CREATE TABLE jobs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          daily_hours INT,
          total_hours INT,
          created_at DATETIME
        );
      `);

    await db.run(`
        INSERT INTO profile (
          name, 
          avatar, 
          monthly_budget, 
          days_per_week, 
          hours_per_day, 
          vacation_per_year, 
          value_hour
        ) VALUES (
          "Jakeliny",
          "https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4",
          3000,
          5,
          5,
          4,
          75
        );
      `);

    await db.run(`
        INSERT INTO jobs (
          name,
          daily_hours,
          total_hours,
          created_at
        ) VALUES ( 
          "Pizzaria Guloso",
          2,
          60,
          1617514376018
        );
      `);

    await db.run(`
        INSERT INTO jobs (
          name,
          daily_hours,
          total_hours,
          created_at
        ) VALUES ( 
          "OneTwo Project",
          3,
          47,
          1617514376018
        );
      `);

    await db.close();
  },
};

initDb.init();
