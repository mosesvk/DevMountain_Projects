CREATE TABLE helo_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) not null,
    password VARCHAR(255) not null,
    profile_pic TEXT
);


CREATE TABLE helo_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45) not null,
    content TEXT,
    img TEXT,
    author_id INTEGER REFERENCES helo_users(id),
    date_created TIMESTAMP
);
