// schema.cql
// Drop if exists

DROP KEYSPCE IF EXISTS sdc_keyspace;
CREATE KEYSPACE sdc_keyspace WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1 };

USE sdc_keyspace;

CREATE TABLE business (
  business_id int PRIMARY KEY,
  name varchar,
  address varchar,
  city varchar,
  state varchar,
  review_count int,
  stars smallint
);

CREATE TABLE users (
  user_id int PRIMARY KEY,
  name varchar,
  location varchar,
  friends int,
  review_count int,
  profile_picture varchar,
  photo_count int,
  elite boolean
)

CREATE TABLE review (
  review_id int PRIMARY KEY,
  stars smallint,
  date date,
  text text,
  useful int,
  funny int,
  cool int
)

CREATE TABLE photo (
  photo_id int PRIMARY KEY,
  caption varchar
)

// one business to many reviews
CREATE TABLE reviews_to_business (
  business_id int,
  review_id int,
  stars smallint,
  date date,
  text text,
  useful int,
  funny int,
  cool int,
  PRIMARY KEY (business_id, review_id)
)

// one user to one review
CREATE TABLE user_to_review (
  review_id int,
  user_id int,
  name varchar,
  location varchar,
  friends int,
  review_count int,
  profile_picture varchar,
  photo_count int,
  elite boolean,
  PRIMARY KEY (user_id, review_id)
)

// one review to many photos
CREATE TABLE review_to_photos (
  photo_id int,
  user_id int,
  business_id int,
  review_id int,
  caption text,
  PRIMARY KEY (user_id, review_id, photo_id, business_id)
)


