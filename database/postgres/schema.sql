-- schema.sql
-- Drop if exists
DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

-- Make sure we're using our `SDC` database
\c sdc;

-- Create business table
CREATE TABLE IF NOT EXISTS businesses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  address VARCHAR(30),
  city VARCHAR(30),
  state VARCHAR(30),
  is_open BOOLEAN,
  review_count INTEGER,
  stars SMALLINT
);

-- Create user table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  location VARCHAR(30),
  friends INTEGER,
  review_count INTEGER,
  profile_pic VARCHAR,
  photo_count INTEGER,
  elite BOOLEAN
);

-- Create review table
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  business_id INTEGER,
  users_id INTEGER,
  stars SMALLINT,
  date VARCHAR(70),
  content TEXT,
  useful INTEGER,
  funny INTEGER,
  cool INTEGER
);

-- Create photo table
CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  photo_url VARCHAR,
  review_id INTEGER,
  caption TEXT
);

-- run this to create
-- psql postgres < ./database/postgres/schema.sql

-- look up ratios
-- 69 million users ~ 25%
-- 171 million reviews ~ 70%
-- 5 million businesses ~ 5%