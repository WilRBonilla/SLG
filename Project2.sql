DROP TABLE shopping_list;
DROP TABLE pantry;
DROP TABLE note;
DROP TABLE stock;
DROP TABLE shoppers;
DROP TABLE recipe_ingredient;
DROP TABLE recipe;
DROP TABLE ingredient;

CREATE TABLE shoppers (
    u_id NUMBER(10) PRIMARY KEY,
    f_name VARCHAR2(50),
    l_name  VARCHAR2(50),
    username VARCHAR2(50),
    password VARCHAR2(50)
);

CREATE TABLE recipe (
    r_id NUMBER(10) PRIMARY KEY,
    title VARCHAR2(100),
    cuisine VARCHAR2(100),
    tag1 VARCHAR2 (100),
    tag2 VARCHAR2 (100)
);

CREATE TABLE pantry (
    p_id NUMBER(10) PRIMARY KEY,
    u_id NUMBER(10),
    ing_id NUMBER(10),
    amount NUMBER(10)
);

CREATE TABLE ingredient (
    ing_id NUMBER(10) PRIMARY KEY,
    name VARCHAR2(100),
    units VARCHAR2(100)
);

CREATE TABLE recipe_ingredient (
    ring_id NUMBER(10) PRIMARY KEY,
    ing_id NUMBER(10),
    r_id NUMBER(10),
    amount NUMBER(10)
);

CREATE TABLE note(
    n_id NUMBER(10) PRIMARY KEY,
    add_notes VARCHAR2(300)
);

CREATE TABLE shopping_list (
    entry_id NUMBER(10) PRIMARY KEY,
    ing_id NUMBER(10),
    u_id NUMBER(10),
    amount NUMBER(10),
    n_id NUMBER(10)
);

CREATE TABLE stock (
    s_id NUMBER(10) PRIMARY KEY,
    ing_id NUMBER(10),
    amount NUMBER(10),
    price NUMBER(10) 
);

ALTER TABLE stock ADD CONSTRAINT fk_stock_ingredient FOREIGN KEY
(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE;

ALTER TABLE pantry ADD CONSTRAINT fk_pantry_shoppers FOREIGN KEY
(u_id) REFERENCES shoppers(u_id) ON DELETE CASCADE;

ALTER TABLE pantry ADD CONSTRAINT fk_pantry_ingredient FOREIGN KEY
(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE;

ALTER TABLE shopping_list ADD CONSTRAINT fk_shopping_list_note FOREIGN KEY
(n_id) REFERENCES note(n_id) ON DELETE CASCADE;

ALTER TABLE shopping_list ADD CONSTRAINT fk_shopping_list_ingredient FOREIGN KEY
(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE;

ALTER TABLE shopping_list ADD CONSTRAINT fk_shopping_list_shoppers FOREIGN KEY
(u_id) REFERENCES shoppers(u_id) ON DELETE CASCADE;

ALTER TABLE recipe_ingredient ADD CONSTRAINT fk_recipe_ing_ingredient FOREIGN KEY
(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE;

ALTER TABLE recipe_ingredient ADD CONSTRAINT fk_recipe_ing_recipe FOREIGN KEY
(r_id) REFERENCES recipe(r_id) ON DELETE CASCADE;


INSERT INTO RECIPE VALUES(1,'Chicken Parmesan','italian','cheesy','classic');
INSERT INTO RECIPE VALUES(2,'Enchiladas','mexican','spicy','beef');
INSERT INTO RECIPE VALUES(3,'Philly Cheesesteak','american','cheesy','classic');
INSERT INTO RECIPE VALUES(4,'Moussaka','greek','family','unique');
INSERT INTO RECIPE VALUES(5,'Vegetable Biryani','indian','vegan','unique');
INSERT INTO RECIPE VALUES(6,'Fettuccine Alfredo','italian','easy','cheesy');
INSERT INTO RECIPE VALUES(7,'Shrimp Scampi', 'french', 'easy','seafood');
INSERT INTO RECIPE VALUES(8,'Apple Pie', 'american', 'dessert','classic');
INSERT INTO RECIPE VALUES(9,'Burritos','mexican','easy','spicy');
INSERT INTO RECIPE VALUES(10,'Lasagna', 'italian','family','classic');
INSERT INTO RECIPE VALUES(11,'Tres Leches', 'mexican','fancy','dessert');
INSERT INTO RECIPE VALUES(12,'Lobster Roll', 'american','fancy','seafood');
INSERT INTO RECIPE VALUES(13,'Shrimp Gumbo', 'american', 'spicy','seafood');
INSERT INTO RECIPE VALUES(14,'Szechuan Chicken', 'chinese', 'spicy', 'unique');
INSERT INTO RECIPE VALUES(15, 'Veggie Risotto', 'italian', 'vegan', 'easy');

/*Chicken Parmesan*/
INSERT INTO ingredient VALUES (1, 'Chicken Breast', 'number');
INSERT INTO ingredient VALUES (2, 'Eggs', 'number');
INSERT INTO ingredient VALUES (3, 'Breadcrumbs', 'ounces');
INSERT INTO ingredient VALUES (4, 'Flour', 'cups');
INSERT INTO ingredient VALUES (5, 'Tomato Sauce', 'ounces');
INSERT INTO ingredient VALUES (6, 'Parmesan', 'ounces');
/* Enchiladas*/
INSERT INTO ingredient VALUES (7, 'Ground Beef', 'ounces');
INSERT INTO ingredient VALUES (8, 'Salsa', 'ounces');
INSERT INTO ingredient VALUES (9, 'Tortillas', 'number');
INSERT INTO ingredient VALUES (10, 'Cheese', 'ounces');
/* Tomato Sauce */
/* Cheese Steak*/ 
INSERT INTO ingredient VALUES (11, 'Onion', 'number');
INSERT INTO ingredient VALUES (12, 'Bell Pepper', 'number');
INSERT INTO ingredient VALUES (13, 'Steak', 'ounces');
INSERT INTO ingredient VALUES (14, 'Long Roll', 'number');
/* Cheese */
/* Moussaka */
INSERT INTO ingredient VALUES (15, 'Eggplant', 'ounces');
INSERT INTO ingredient VALUES (16, 'Lamb', 'ounces');
INSERT INTO ingredient VALUES (17, 'Red Wine', 'ounces');
INSERT INTO ingredient VALUES (18, 'Potatoes', 'number');
/* Onion */
/* Vegetable Biryani  */
INSERT INTO ingredient VALUES (19, 'Garlic', 'ounces');
INSERT INTO ingredient VALUES (20, 'Rice', 'ounces');
INSERT INTO ingredient VALUES (21, 'Chickpeas', 'ounces');
INSERT INTO ingredient VALUES (22, 'Veggie Stock', 'ounces');
/* Onion
/* Fettuccine Alfredo*/
INSERT INTO ingredient VALUES (23, 'Butter', 'ounces');
INSERT INTO ingredient VALUES (24, 'Cream', 'ounces');
INSERT INTO ingredient VALUES (25, 'Pasta', 'ounces');
INSERT INTO ingredient VALUES (26, 'Parsley', 'ounces');
/* Parmesan Cheese */ 

/*Shrimp Scampi*/

INSERT INTO ingredient VALUES (27, 'Shrimp', 'ounces');
INSERT INTO ingredient VALUES (28, 'White Wine', 'ounces');
INSERT INTO ingredient VALUES (29, 'Lemon', 'ounces');
/*Butter, Garlic*/

/*Apple Pie*/
INSERT INTO ingredient VALUES (30, 'Brown Sugar', 'ounces');
INSERT INTO ingredient VALUES (31, 'Apples', 'number');
INSERT INTO ingredient VALUES (32, 'Cinnamon', 'ounces');

/*Flour, Butter*/

/*Burritos*/
INSERT INTO ingredient VALUES (33, 'Lettuce', 'ounces');

/* Steak, Rice, Cheese, Salsa */

/*Lasagna*/
/* Pasta, Cheese, Tomato Sauce, Ground Beef, Garlic */

/*Tres Leches
Flour, Butter, Cream*/
INSERT INTO ingredient VALUES (34, 'Sugar', 'ounces');
INSERT INTO ingredient VALUES (35, 'Milk', 'ounces');

/*Lobster Roll
Long Roll, Butter, Lettuce*/
INSERT INTO ingredient VALUES (36, 'Lobster', 'ounces');
INSERT INTO ingredient VALUES (37, 'Mayonnaise', 'ounces');

/*Shrimp Gumbo
  Onion, Shrimp, Rice,*/
INSERT INTO ingredient VALUES (38, 'Okra', 'ounces');
INSERT INTO ingredient VALUES (39, 'Chicken Stock', 'ounces'); 

/*Szechuan Chicken
Chicken Breast, onion, bell pepper, garlic*/
INSERT INTO ingredient VALUES (40, 'Red Chilies', 'number');

/*Veggie Risotto
Veggie Stock,Bell Pepper, Rice, White Wine */
INSERT INTO ingredient VALUES (41, 'Asparagus', 'number');

----------------------RECIPE_INGREDIENT-------------------------
--Chicken Parm
INSERT INTO recipe_ingredient VALUES (1, 1, 1, 4);
INSERT INTO recipe_ingredient VALUES (2, 2, 1, 2);
INSERT INTO recipe_ingredient VALUES (3, 3, 1, 6);
INSERT INTO recipe_ingredient VALUES (4, 4, 1, 1);
INSERT INTO recipe_ingredient VALUES (5, 5, 1, 16);
INSERT INTO recipe_ingredient VALUES (6, 6, 1, 2);

--Enchiladas
INSERT INTO recipe_ingredient VALUES (7, 7, 2, 18);
INSERT INTO recipe_ingredient VALUES (8, 8, 2, 6);
INSERT INTO recipe_ingredient VALUES (9, 9, 2, 8);
INSERT INTO recipe_ingredient VALUES (10, 10, 2, 10);
INSERT INTO recipe_ingredient VALUES (11, 5, 2, 8);

--CheeseSteak
INSERT INTO recipe_ingredient VALUES (12, 11, 3, 2);
INSERT INTO recipe_ingredient VALUES (13, 12, 3, 1);
INSERT INTO recipe_ingredient VALUES (14, 13, 3, 20);
INSERT INTO recipe_ingredient VALUES (15, 14, 3, 4);
INSERT INTO recipe_ingredient VALUES (16, 10, 3, 12);

--Moussaka
INSERT INTO recipe_ingredient VALUES (17, 15, 4, 12);
INSERT INTO recipe_ingredient VALUES (18, 16, 4, 10);
INSERT INTO recipe_ingredient VALUES (19, 17, 4, 2);
INSERT INTO recipe_ingredient VALUES (20, 18, 4, 4);
INSERT INTO recipe_ingredient VALUES (21, 11, 4, 1);

--Kevin Start

-- Vegetable Biryani 
--Garlic, Rice, ChickPeas, Veggie Stock, Onion
INSERT INTO recipe_ingredient VALUES (22, 19, 5, 2);
INSERT INTO recipe_ingredient VALUES (23, 20, 5, 8);
INSERT INTO recipe_ingredient VALUES (24, 21, 5, 6);
INSERT INTO recipe_ingredient VALUES (25, 22, 5, 12);
INSERT INTO recipe_ingredient VALUES (26, 11, 5, 1);

--Fettuccine Alfredo
--Butter, Cream, Pasta, Parsley, Parmesan Cheese
INSERT INTO recipe_ingredient VALUES (27, 23, 6, 4);
INSERT INTO recipe_ingredient VALUES (28, 24, 6, 6);
INSERT INTO recipe_ingredient VALUES (29, 25, 6, 6);
INSERT INTO recipe_ingredient VALUES (30, 26, 6, 1);
INSERT INTO recipe_ingredient VALUES (31, 6, 6, 3);

--Shrimp Scampi
--Shrimp, White Wine, Lemon, Butter, Garlic
INSERT INTO recipe_ingredient VALUES (32, 27, 7, 5);
INSERT INTO recipe_ingredient VALUES (33, 28, 7, 4);
INSERT INTO recipe_ingredient VALUES (34, 29, 7, 2);
INSERT INTO recipe_ingredient VALUES (35, 23, 7, 4);
INSERT INTO recipe_ingredient VALUES (36, 19, 7, 3);

--Apple Pie
--Brown Sugar, Apples, Cinnamon, Flour, Butter
INSERT INTO recipe_ingredient VALUES (37, 30, 8, 5);
INSERT INTO recipe_ingredient VALUES (38, 31, 8, 6);
INSERT INTO recipe_ingredient VALUES (39, 32, 8, 1);
INSERT INTO recipe_ingredient VALUES (40, 23, 8, 4);
INSERT INTO recipe_ingredient VALUES (41, 19, 8, 3);

--Burritos
--Lettuce, Steak, Rice, Cheese, Salsa
INSERT INTO recipe_ingredient VALUES (42, 33, 9, 3);
INSERT INTO recipe_ingredient VALUES (43, 13, 9, 6);
INSERT INTO recipe_ingredient VALUES (44, 20, 9, 6);
INSERT INTO recipe_ingredient VALUES (45, 10, 9, 2);
INSERT INTO recipe_ingredient VALUES (46, 8, 9, 3);


--Lasagna
--Pasta, Cheese, Tomato Sauce, Ground Beef, Garlic
INSERT INTO recipe_ingredient VALUES (47, 25, 10, 6);
INSERT INTO recipe_ingredient VALUES (48, 10, 10, 6);
INSERT INTO recipe_ingredient VALUES (49, 5, 10, 4);
INSERT INTO recipe_ingredient VALUES (50, 7, 10, 5);
INSERT INTO recipe_ingredient VALUES (51, 19, 10, 2);

--Tres Leches
--Sugar, Milk, Flour, Butter, Cream
INSERT INTO recipe_ingredient VALUES (52, 34, 11, 5);
INSERT INTO recipe_ingredient VALUES (53, 35, 11, 4);
INSERT INTO recipe_ingredient VALUES (54, 4, 11, 8);
INSERT INTO recipe_ingredient VALUES (55, 23, 11, 4);
INSERT INTO recipe_ingredient VALUES (56, 24, 11, 4);

--Lobster Roll
-- Lobster, Mayonnaise, Long Roll, Butter, Lettuce
INSERT INTO recipe_ingredient VALUES (57, 36, 12, 8);
INSERT INTO recipe_ingredient VALUES (58, 37, 12, 2);
INSERT INTO recipe_ingredient VALUES (59, 14, 12, 2);
INSERT INTO recipe_ingredient VALUES (60, 23, 12, 4);
INSERT INTO recipe_ingredient VALUES (61, 33, 12, 3);

--Shrimp Gumbo
--Okra, Chicken Stock, Onion, Shrimp, Rice,
INSERT INTO recipe_ingredient VALUES (62, 38, 13, 4);
INSERT INTO recipe_ingredient VALUES (63, 39, 13, 12);
INSERT INTO recipe_ingredient VALUES (64, 11, 13, 2);
INSERT INTO recipe_ingredient VALUES (65, 27, 13, 5);
INSERT INTO recipe_ingredient VALUES (66, 20, 13, 6);

--Szechuan Chicken
-- Red Chilies, Chicken Breast, Onion, Bell Pepper, Garlic
INSERT INTO recipe_ingredient VALUES (67, 40, 14, 4);
INSERT INTO recipe_ingredient VALUES (68, 1, 14, 9);
INSERT INTO recipe_ingredient VALUES (69, 11, 14, 2);
INSERT INTO recipe_ingredient VALUES (70, 12, 14, 4);
INSERT INTO recipe_ingredient VALUES (71, 19, 14, 3);

--Veggie Risotto
--Asparagus, Veggie Stock, Bell Pepper, Rice, White Wine
INSERT INTO recipe_ingredient VALUES (72, 41, 15, 5);
INSERT INTO recipe_ingredient VALUES (73, 22, 15, 12);
INSERT INTO recipe_ingredient VALUES (74, 12, 15, 3);
INSERT INTO recipe_ingredient VALUES (75, 20, 15, 8);
INSERT INTO recipe_ingredient VALUES (76, 28, 15, 5);

