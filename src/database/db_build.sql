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
  walkdate DATE,
  walktime TIME,
  status BOOLEAN
);

INSERT INTO walkers (name, password, email) VALUES ('Becky', '$2a$10$Dvo41SczFq9GD7vymGyHy.dFY09lsurZgQEwYLEV5NOY5hMRrsHxC', 'a@b.com');
INSERT INTO walkers (name, password, email) VALUES ('Kitty', '$2a$10$HBZ2/Lq7h72JRunJiAyl7OpYONVFpIpJI/wWg3hFz.qFxQkm0AjIa', 'k@l.com');

INSERT INTO pets (name, password, email, photourl, type) VALUES ('Fluffy', '$2a$10$j8TPlpZ9LREJS.ZaYqghvulYc8KCWsq75f8o9IzA.l4z8mR14bDVm', 'f@g.com', 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'dog');
INSERT INTO pets (name, password, email, photourl, type) VALUES ('Nibbles', '$2a$10$RoT2RtXQ/Nh6Z/CZwfohz.MaDDcGpBEl.cmqFiv2LWrFie2LINvJm', 'h@j.com', 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=333&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'dog');

INSERT INTO walks (pet_id, postcode, walkdate, walktime, status) VALUES ((SELECT id FROM pets where name = 'Fluffy'), 'ME65 7UI', '2017-12-08', '23:54:00', false);
INSERT INTO walks (pet_id, postcode, walkdate, walktime, status) VALUES ((SELECT id FROM pets where name = 'Nibbles'), 'IO54 7PO', '2017-11-01', '08:33:00', true);

COMMIT;
