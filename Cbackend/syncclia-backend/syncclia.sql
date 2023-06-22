-- create database Syncclia
-- use syncclia

-- 1. USERS TABLE 
--create
CREATE TABLE Users (
  UserID INT IDENTITY(1,1) PRIMARY KEY,
  Username VARCHAR(50) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  Password VARCHAR(100) NOT NULL
);
--insert data
INSERT INTO Users ( Username, Email, Password)
VALUES ( 'joan', 'joan@gmail.com', 'password123');

INSERT INTO Users ( Username, Email, Password)
VALUES ( 'joy', 'joy@gmail.com', 'password123');

INSERT INTO Users ( Username, Email, Password)
VALUES ('joash', 'joash@gmail.com', 'password123');

--SELECT

SELECT * FROM Users

--Select a specific user by id

SELECT * FROM Users WHERE UserID = 1

--Update user details

-- Update username for a specific user
UPDATE Users
SET Username = 'jelimo'
WHERE UserID = 1;

-- Update email for a specific user
UPDATE Users
SET Email = 'jelimo@gmail.com'
WHERE UserID = 1;

-- Update password for a specific user
UPDATE Users
SET Password = 'jelimo123'
WHERE UserID = 1;


-- Delete a user by UserID
DELETE FROM Users
WHERE UserID = 1;

--2. ACTIONS TABLE

--CREATE
-- Create Actions table 
CREATE TABLE Actions (
  ActionID INT IDENTITY(1,1) PRIMARY KEY,
  Title VARCHAR(255) NOT NULL,
  Reflection TEXT NOT NULL
);

-- Insert data into Actions table
INSERT INTO Actions ( Title, Reflection)
VALUES
  ( 'Plant Trees', 'Reflect on the importance of planting trees for carbon sequestration.'),
  ( 'Reduce Plastic Usage', 'Reflect on ways to reduce plastic usage in daily life.'),
  ( 'Conserve Water', 'Reflect on the significance of conserving water and ways to do so.');

-- Select all rows from Actions table
SELECT * FROM Actions;

-- Select a specific action from Actions table
SELECT * FROM Actions WHERE actionid = 1;

-- Update an action in the Actions table
UPDATE Actions
SET title = 'plant trees', reflection = 'Reflect on the importance of planting trees for carbon sequestration.'
WHERE actionid = 3;

-- Delete an action from the Actions table
DELETE FROM Actions WHERE actionid = 1;

--3. BLOGS TABLE
--CREATE
-- Create Blogs table
CREATE TABLE Blogs (
  BlogID INT IDENTITY(1,1) PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);

-- Insert data into Blogs table
INSERT INTO Blogs ( title, content)
VALUES
  ( 'First Blog', 'This is the content of the first blog.'),
  ( 'Second Blog', 'This is the content of the second blog.'),
  ( 'Third Blog', 'This is the content of the third blog.');

-- Select all data from Blogs table
SELECT * FROM Blogs;

-- Select a specific blog by ID
SELECT * FROM Blogs WHERE BlogID = 1;

-- Update a blog by ID
UPDATE Blogs SET title = 'New Title', content = 'Updated content' WHERE BlogID = 1;

-- Delete a blog by ID
DELETE FROM Blogs WHERE BlogID = 1;










