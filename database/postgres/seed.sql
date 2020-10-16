-- Make sure using SDC database
\c sdc;

-- Import business.csv file to seed business table
COPY businesses FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/postgres/data/business.csv' DELIMITER ',' CSV HEADER;

-- Import users.csv file to seed users table
COPY users FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/postgres/data/users.csv' DELIMITER ',' CSV HEADER;

-- Import reviews.csv file to seed reviews table
COPY reviews FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/postgres/data/reviews.csv' DELIMITER ',' CSV HEADER;

-- Import photos.csv file to seed photos table
COPY photos FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/postgres/data/photos.csv' DELIMITER ',' CSV HEADER;

-- run this to seed
-- psql postgres < ./database/postgres/seed.sql
