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

ALTER TABLE pantry ADD CONSTRAINT fk_pantry_shoppers FOREIGN KEY
(u_id) REFERENCES shoppers(u_id) ON DELETE CASCADE;

ALTER TABLE pantry ADD CONSTRAINT fk_pantry_ingredient FOREIGN KEY
(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE;


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

ALTER TABLE recipe_ingredient ADD CONSTRAINT fk_recipe_ing_ingredient FOREIGN KEY
(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE;
ALTER TABLE recipe_ingredient ADD CONSTRAINT fk_recipe_ing_recipe FOREIGN KEY
(r_id) REFERENCES recipe(r_id) ON DELETE CASCADE;


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

ALTER TABLE shopping_list ADD CONSTRAINT fk_shopping_list_note FOREIGN KEY
(n_id) REFERENCES note(n_id) ON DELETE CASCADE;
ALTER TABLE shopping_list ADD CONSTRAINT fk_shopping_list_ingredient FOREIGN KEY
(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE;
ALTER TABLE shopping_list ADD CONSTRAINT fk_shopping_list_shoppers FOREIGN KEY
(u_id) REFERENCES shoppers(u_id) ON DELETE CASCADE;

CREATE TABLE stock (
    s_id NUMBER(10) PRIMARY KEY,
    ing_id NUMBER(10),
    amount NUMBER(10),
    price NUMBER(10) 
);

ALTER TABLE stock ADD CONSTRAINT fk_stock_ingredient FOREIGN KEY
(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE;


Insert into recipe Values(1,'Chicken Parmesan','italian','','');
Insert into recipe Values(2,'Enchiladas','mexican','','');
Insert into recipe Values(3,'Philly Cheesesteak','american','philly','classic');
Insert into recipe Values(4,'Moussaka','Greek','','');
Insert into recipe Values(5,'Vegetable Biryani','indian','vegan','vegetarian');
Insert into recipe Values(6,'Fettuccine Alfredo','italian','easy','');

/*Chicken Parmesan*/
INSERT INTO ingredient VALUES (1, 'Chicken Breast', 'ounces');
INSERT INTO ingredient VALUES (2, 'Eggs', 'number');
INSERT INTO ingredient VALUES (3, 'Breadcrumbs', 'ounces');
INSERT INTO ingredient VALUES (4, 'Flour', 'ounces');
INSERT INTO ingredient VALUES (5, 'Tomato Sauce', 'ounces');
INSERT INTO ingredient VALUES (6, 'Parmesan', 'ounces');
/* Enchiladas*/
INSERT INTO ingredient VALUES (7, 'Ground Beef', 'ounces');
INSERT INTO ingredient VALUES (8, 'Salsa', 'ounces');
INSERT INTO ingredient VALUES (9, 'Tortillas', 'number');
INSERT INTO ingredient VALUES (10, 'Cheese', 'ounces');
/* Tomato Sauce */
/* Cheese Steak*/ 
INSERT INTO ingredient VALUES (11, 'Onion', 'ounces');
INSERT INTO ingredient VALUES (12, 'Bell Pepper', 'ounces');
INSERT INTO ingredient VALUES (13, 'Steak', 'ounces');
INSERT INTO ingredient VALUES (14, 'Long Roll', 'ounces');
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


