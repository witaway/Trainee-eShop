USE OnlineShop;

CREATE TABLE users
(
	id           INT          NOT NULL        AUTO_INCREMENT,
    username     VARCHAR(100) NOT NULL,
    email        VARCHAR(100) NOT NULL,
    password     TINYBLOB     NOT NULL,
    wanna_delete BOOL         DEFAULT false,
    PRIMARY KEY (id)
);
    
CREATE TABLE roles
(
	id        INT          NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users_roles
(
	user_id INT NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE routes
(
	id         INT          NOT NULL AUTO_INCREMENT,
    route_path VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE routes_access
(
	route_id INT NOT NULL,
    role_id  INT NOT NULL,
    FOREIGN KEY (route_id) REFERENCES routes(id),
    FOREIGN KEY (role_id)  REFERENCES roles(id)
);

CREATE TABLE products
(
	id          INT              NOT NULL      AUTO_INCREMENT,
    description TEXT 	         DEFAULT NULL,
    cost        DECIMAL(12, 2)   NOT NULL,
    image_url   VARCHAR(500)     DEFAULT NULL,
    quantity 	INT 			 NOT NULL,
    last_update TIMESTAMP        DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE product_marks
(
	product_id INT      NOT NULL,
    user_id    INT      NOT NULL,
    mark       SMALLINT NOT NULL CHECK (mark between 1 and 5),
	FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);