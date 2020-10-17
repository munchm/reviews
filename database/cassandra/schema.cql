// schema.cql
// Drop if exists

DROP KEYSPACE IF EXISTS sdc_keyspace;
CREATE KEYSPACE sdc_keyspace WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1 };

USE sdc_keyspace;

CREATE TABLE businesses (
  id int PRIMARY KEY,
  name varchar,
  address varchar,
  city varchar,
  state varchar,
  is_open boolean,
  review_count int,
  stars smallint
);

CREATE TABLE users (
  id int PRIMARY KEY,
  name varchar,
  location varchar,
  friends int,
  review_count int,
  profile_pic varchar,
  photo_count int,
  elite boolean
);

// one business to many reviews
CREATE TABLE reviews_to_business (
  business_id int,
  review_id int,
  stars smallint,
  date date,
  content text,
  useful int,
  funny int,
  cool int,
  PRIMARY KEY (business_id, review_id)
);

// one user to many reviews
CREATE TABLE reviews_to_user (
  review_id int,
  user_id int,
  stars smallint,
  date date,
  content text,
  useful int,
  funny int,
  cool int,
  PRIMARY KEY (user_id, review_id)
);

// one review to many photos
CREATE TABLE photos_to_review (
  photo_id int,
  photo_url varchar,
  review_id int,
  caption text,
  PRIMARY KEY (photo_id, review_id)
);


