-- schema.sql
-- Drop if exists
DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

-- Make sure we're using our `SDC` database
\c sdc;

-- Create business table
CREATE TABLE IF NOT EXISTS business (
  business_id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  address VARCHAR(30),
  city VARCHAR(20),
  state VARCHAR(20),
  is_open bit,
  review_count INTEGER,
  stars SMALLINT
);

-- Create user table
CREATE TABLE IF NOT EXISTS users (
  users_id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  location VARCHAR(20),
  friends INTEGER,
  review_count INTEGER,
  profile_pic VARCHAR,
  photo_count INTEGER,
  elite bit
);

-- Create review table
CREATE TABLE IF NOT EXISTS review (
  review_id SERIAL PRIMARY KEY,
  business_id INTEGER REFERENCES business(business_id),
  users_id INTEGER REFERENCES users(users_id),
  stars SMALLINT,
  date DATE DEFAULT CURRENT_DATE,
  content TEXT,
  useful INTEGER,
  funny INTEGER,
  cool INTEGER
);

-- Create photo table
CREATE TABLE IF NOT EXISTS photo (
  photo_id SERIAL PRIMARY KEY,
  business_id INTEGER REFERENCES business(business_id),
  users_id INTEGER REFERENCES users(users_id),
  caption TEXT
);