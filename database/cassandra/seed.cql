// Make sure using SDC database
USE sdc_keyspace;

// Import business.csv file to seed business table
COPY businesses (id, name, address, city, state, is_open, review_count, stars) FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/cassandra/data/business.csv' with header=true and delimiter = ',';

// Import users.csv file to seed users table
COPY users (id, name, location, friends, review_count, profile_pic, photo_count, elite) FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/cassandra/data/users.csv' with header=true and delimiter = ',';

// Import businessReviews.csv file to seed reviews table
COPY reviews_to_business (business_id, id, stars, date, content, useful, funny, cool) FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/cassandra/data/businessReviews.csv' with header=true and delimiter = ',';

// Import userReviews.csv file to seed reviews table
COPY reviews_to_user (user_id, id, stars, date, content, useful, funny, cool) FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/cassandra/data/userReviews.csv' with header=true and delimiter = ',';


// Import photos.csv file to seed photos table
COPY photos_to_review (id, photo_url, review_id, caption) FROM '/Users/andrew_vuong/Desktop/HackReactor/SDC/reviews/database/cassandra/data/photos.csv' with header=true and delimiter = ',';

