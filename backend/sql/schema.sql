-- PostgreSQL schema starter for NEXUS
CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  specialization TEXT,
  supported_brands TEXT[],
  location TEXT,
  contacts TEXT,
  role TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL,
  company_id UUID REFERENCES companies(id)
);

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT,
  specifications TEXT,
  vendor TEXT NOT NULL
);
