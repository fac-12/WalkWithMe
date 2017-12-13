BEGIN;

DROP TABLE IF EXISTS walkers CASCADE;
DROP TABLE IF EXISTS pets CASCADE;
DROP TABLE IF EXISTS walks CASCADE;

CREATE TABLE walkers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  photourl VARCHAR(1000) NOT NULL,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE walks (
  id SERIAL PRIMARY KEY,
  pet_id INT REFERENCES pets(id) ON DELETE CASCADE,
  postcode VARCHAR(10) NOT NULL,
  walk_date VARCHAR(11) NOT NULL,
  walk_time TIME,
  status BOOLEAN
);

INSERT INTO walkers (name, password, email) VALUES ('Becky', 'apple', 'a@b.com');
INSERT INTO walkers (name, password, email) VALUES ('Kitty', 'banana', 'k@l.com');

INSERT INTO pets (name, password, email, photourl, type) VALUES ('Fluffy', 'pear', 'f@g.com', 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'dog');
INSERT INTO pets (name, password, email, photourl, type) VALUES ('Nibbles', 'cherry', 'h@j.com', 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=333&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'dog');

INSERT INTO walks (pet_id, postcode, walk_date, walk_time, status) VALUES ((SELECT id FROM pets where name = 'Fluffy'), 'ME65 7UI', '2017-12-08', '23:54:00', false);
INSERT INTO walks (pet_id, postcode, walk_date, walk_time, status) VALUES ((SELECT id FROM pets where name = 'Nibbles'), 'IO54 7PO', '2017-11-01', '08:33:00', true);

COMMIT;
