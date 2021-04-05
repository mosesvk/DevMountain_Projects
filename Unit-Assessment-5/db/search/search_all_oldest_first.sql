-- SELECT *
-- FROM helo_posts p
-- JOIN helo_users u ON p.author_id = u.id
-- WHERE u.username LIKE $1
-- ORDER BY date_created DESC;


SELECT *
FROM helo_posts p
JOIN helo_users u ON p.author_id = u.id AS post_id
-- WHERE u.username AS author_username LIKE $1
ORDER BY date_created DESC;
