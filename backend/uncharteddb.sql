-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2024 at 12:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uncharteddb`
--

-- --------------------------------------------------------

--
-- Table structure for table `meal_plans`
--

CREATE TABLE `meal_plans` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `day` varchar(191) NOT NULL,
  `mealType` varchar(191) NOT NULL,
  `recipeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meal_plans`
--

INSERT INTO `meal_plans` (`id`, `userId`, `day`, `mealType`, `recipeId`) VALUES
(1, 1, 'Monday', 'breakfast', 18);

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `picture` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `servings` int(11) NOT NULL,
  `prepTime` int(11) NOT NULL,
  `category` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `approvalStatus` enum('PENDING','APPROVED','DISAPPROVED') NOT NULL DEFAULT 'PENDING',
  `authorId` int(11) NOT NULL,
  `totalRating` double NOT NULL DEFAULT 0,
  `totalRatings` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `picture`, `description`, `servings`, `prepTime`, `category`, `createdAt`, `updatedAt`, `approvalStatus`, `authorId`, `totalRating`, `totalRatings`) VALUES
(18, 'Overnight Oats', '/uploads/303c6de3-e4de-46bb-8f85-5246b51da640.jpg', 'Healthy and easy breakfast option.', 1, 5, 'Breakfast', '2024-12-15 04:04:53.877', '2024-12-15 18:35:57.430', 'APPROVED', 9, 4.5, 2),
(19, 'Grilled Cheese Sandwich', '/uploads/d679ba80-86ba-4833-be07-4bbde8e58c07.jpg', 'Grilled Cheese Sandwich', 1, 10, 'Lunch', '2024-12-15 04:07:15.616', '2024-12-15 18:36:38.414', 'APPROVED', 9, 5, 1),
(20, 'Spaghetti and Meatballs', '/uploads/b141904a-9351-4e93-b5b3-1c6abb48450f.jpg', 'Classic Italian comfort food.', 2, 30, 'Dinner', '2024-12-15 04:09:33.349', '2024-12-15 18:42:32.977', 'APPROVED', 9, 5, 1),
(21, 'Peanut Butter Cookies', '/uploads/e72037bc-d7f2-4c00-a4b1-6d60e262e8c9.jpg', 'These classic cookies are packed with nutty flavor from chopped peanuts.', 1, 15, 'Breakfast', '2024-12-16 03:39:28.810', '2024-12-16 03:39:28.810', 'APPROVED', 9, 0, 0),
(22, 'Simple Stir-Fry', '/uploads/cffd2968-8eaf-4393-934f-eaa51c6bbbda.jpg', 'Quick and easy stir-fry with vegetables and protein.', 2, 15, 'Dinner', '2024-12-16 07:57:40.554', '2024-12-16 09:24:26.356', 'APPROVED', 9, 0, 0),
(23, 'Simple Green Salad', '/uploads/ba71108d-763b-41c2-b2fc-9c9576ca167b.jpg', 'A quick and easy salad.', 2, 10, 'Other', '2024-12-16 09:28:19.540', '2024-12-16 09:41:24.792', 'PENDING', 1, 0, 0),
(24, 'Scrambled Eggs', '/uploads/dacbe4ba-98af-483b-a0d2-9bc69addd86e.jpg', 'A classic breakfast.', 1, 5, 'Breakfast', '2024-12-16 11:34:29.185', '2024-12-16 11:34:29.185', 'PENDING', 1, 0, 0),
(25, 'Microwave Popcorn', '/uploads/99d51b48-6024-4cb2-8ced-683b909b00e9.jpg', 'Easy and quick snack.', 1, 3, 'Other', '2024-12-16 11:40:48.732', '2024-12-16 11:40:48.732', 'PENDING', 1, 0, 0),
(26, 'Mixed Fruit Salad', '/uploads/078de72b-da8e-48d0-8e2f-f25e599b7fc8.jpg', 'Refreshing and healthy.', 2, 10, 'Other', '2024-12-16 11:45:12.362', '2024-12-16 11:45:12.362', 'PENDING', 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `recipe_ingredients`
--

CREATE TABLE `recipe_ingredients` (
  `id` int(11) NOT NULL,
  `recipeId` int(11) NOT NULL,
  `ingredient` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `recipe_ingredients`
--

INSERT INTO `recipe_ingredients` (`id`, `recipeId`, `ingredient`) VALUES
(24, 18, 'Rolled oats'),
(25, 18, 'Milk'),
(26, 18, 'Yogurt'),
(27, 18, 'Fruits (berries, banana)'),
(28, 19, 'Bread'),
(29, 19, 'Cheese'),
(30, 19, 'Butter'),
(31, 20, 'Spaghetti'),
(32, 20, 'Meatballs'),
(33, 20, 'Tomato Sauce'),
(34, 20, 'Cheese'),
(35, 21, 'All-purpose flour'),
(36, 21, 'Granulated sugar'),
(37, 21, 'Butter'),
(38, 21, 'Eggs'),
(39, 21, 'Peanuts'),
(40, 22, 'Protein (chicken, tofu, shrimp)'),
(41, 22, 'Vegetables (broccoli, carrots, bell peppers)'),
(42, 22, '\"Stir-fry Sauce (soy sauce, ginger, garlic)'),
(43, 22, 'Rice'),
(44, 23, 'Lettuce'),
(45, 23, 'Tomatoes'),
(46, 23, 'Cucumber'),
(47, 24, 'Eggs'),
(48, 24, 'Milk'),
(49, 24, 'Butter'),
(50, 25, 'Popcorn kernels'),
(51, 25, 'Oil'),
(52, 26, 'Strawberries'),
(53, 26, 'Blueberries'),
(54, 26, 'Bananas');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_procedures`
--

CREATE TABLE `recipe_procedures` (
  `id` int(11) NOT NULL,
  `recipeId` int(11) NOT NULL,
  `step` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `recipe_procedures`
--

INSERT INTO `recipe_procedures` (`id`, `recipeId`, `step`) VALUES
(21, 18, 'Combine oats, milk, and yogurt in a jar.'),
(22, 18, 'Add toppings and refrigerate overnight.'),
(23, 19, 'Butter bread slices.'),
(24, 19, 'Place cheese between bread slices.'),
(25, 19, 'Grill until cheese is melted and bread is golden.'),
(26, 20, 'Cook spaghetti according to package directions.'),
(27, 20, 'Cook meatballs in tomato sauce.'),
(28, 20, 'Combine spaghetti and meatballs with sauce.'),
(29, 20, 'Top with cheese.'),
(30, 21, 'Combine flour and sugar in a bowl.'),
(31, 21, 'Cut in butter until mixture resembles coarse crumbs.'),
(32, 21, 'Stir in egg and chopped peanuts.'),
(33, 21, 'Drop by rounded teaspoons onto ungreased baking sheets.'),
(34, 21, 'Bake at 375°F (190°C) for 8-10 minutes or until lightly golden brown.'),
(35, 22, 'Prepare vegetables by cutting into bite-sized pieces.'),
(36, 22, 'Heat oil in a wok or large skillet over medium-high heat.'),
(37, 22, 'Cook protein until browned.'),
(38, 22, 'Pour stir-fry sauce over the vegetables and protein.'),
(39, 22, 'Cook for 1-2 minutes more, allowing sauce to thicken.'),
(40, 22, 'Serve over rice or noodles.'),
(41, 23, 'Wash and chop vegetables'),
(42, 23, 'Combine in a bowl'),
(43, 23, 'Dress with olive oil and vinegar'),
(44, 24, 'Whisk eggs and milk together.'),
(45, 24, 'Melt butter in a pan.\"'),
(46, 24, 'Pour egg mixture into pan and cook over low heat, stirring occasionally.'),
(47, 25, 'Place kernels and oil in a microwave-safe bowl.'),
(48, 25, 'Cook in microwave on high for 2-3 minutes, or until popping slows.'),
(49, 26, 'Wash and chop fruits.'),
(50, 26, 'Combine in a bowl.'),
(51, 26, 'Serve immediately.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_ratings`
--

CREATE TABLE `recipe_ratings` (
  `id` int(11) NOT NULL,
  `recipeId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `rating` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `recipe_ratings`
--

INSERT INTO `recipe_ratings` (`id`, `recipeId`, `userId`, `rating`) VALUES
(1, 18, 1, 4),
(2, 18, 9, 5),
(3, 19, 9, 5),
(4, 20, 9, 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `bio` varchar(191) DEFAULT NULL,
  `allergies` varchar(191) DEFAULT '',
  `completedSurvey` tinyint(1) NOT NULL DEFAULT 0,
  `role` enum('ADMIN','USER') NOT NULL DEFAULT 'USER'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`, `bio`, `allergies`, `completedSurvey`, `role`) VALUES
(1, 'TesterAgain', 'tester@gmail.com', '$2b$10$f6BlJfeTgG6fVlQjcAk9C.R1cx.W5adlhJPS6u7tQFcgExn6mCvCu', '2024-12-12 10:37:19.419', '2024-12-16 03:49:27.696', 'Testing bio', 'Peanuts,Dairy,Shellfish', 1, 'USER'),
(8, 'Test2', 'test2@gmail.com', '$2b$10$1C3USR5SAF/IOOXs8JJuwO6Q.Chq6PZPhZmbmUjUwlLDIN98iRom.', '2024-12-12 23:54:34.366', '2024-12-16 07:43:55.226', 'No bio', 'Eggs', 1, 'ADMIN'),
(9, 'Marky Joe', 'johndoe@gmail.com', '$2b$10$K7Rq/zZhOaXxNFkjPv34K.36Q4/w34filcfEP7ojcM91TpCQlM9ym', '2024-12-15 09:48:28.384', '2024-12-16 03:35:19.587', 'Yes my dear.', '', 1, 'USER');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1c83d037-9ef3-4f7c-8fc8-964a52e1f727', '6dc817cd27f9414e40c33dc5a967f266e12521db8c9102f0181537073b91b955', '2024-12-15 18:07:13.157', '20241215180713_add_ratings_again', NULL, NULL, '2024-12-15 18:07:13.075', 1),
('2d0e1fbf-4afd-4398-8408-52c3fdf89b10', '2be005d447824fd73a022d1dbab63a948c4664b1240ee62f0ac313ffe60532af', '2024-12-13 03:39:46.448', '20241213033946_create_recipes_table', NULL, NULL, '2024-12-13 03:39:46.369', 1),
('2dc8ddd8-dd1a-4bda-8a2f-2d327ab496ba', '68804271102a55edfef9960afd947679f9f1e218696bfdd32823efd26b95215d', '2024-12-15 09:46:28.870', '20241215094628_update_recipes_table', NULL, NULL, '2024-12-15 09:46:28.823', 1),
('33ec995b-c022-4e52-b04c-d79c2f69cb2e', 'f959f62a32d1c91b759049a8dc1303aa5b966f764734f7698ee7e3741c2e2cc8', '2024-12-16 10:09:13.685', '20241216100913_add_meal_plan', NULL, NULL, '2024-12-16 10:09:13.612', 1),
('381ced65-6ac6-46c7-afd4-7598356ab76c', '134d881bb56871019d233569deaca78517135ee855eb1b4ce89c4b3444586e80', '2024-12-15 09:52:09.350', '20241215095209_make_author_id_required', NULL, NULL, '2024-12-15 09:52:09.281', 1),
('6c8d42d3-4a0a-4d57-9046-ae456cdb40d7', '39b4a0907fc52e31c6f9c1dff25034f3b364deb9bf67fcb88a92ba148ad6da28', '2024-12-16 07:38:14.691', '20241216073814_add_user_roles', NULL, NULL, '2024-12-16 07:38:14.680', 1),
('8c74dd9a-c8a4-424e-9168-16a6c20f3f7a', '0630f6af390c123d3b4ecb7b29e4a0a02221ee9bc6cf1840da6852cac142c587', '2024-12-15 17:36:48.937', '20241215173648_add_ratings', NULL, NULL, '2024-12-15 17:36:48.826', 1),
('9388f5ae-9397-4e4a-ac16-b0eb0a731d49', '4229abcf8978849a0d4f85c05bd1a2cc32c271fa9f18b79e0b631a61f06eb981', '2024-12-16 03:23:09.408', '20241216032309_add_allergies_to_user', NULL, NULL, '2024-12-16 03:23:09.401', 1),
('94c1bbda-e2b6-4fde-9fc0-3d0b4fe5f732', '43ac22082a521b8fadbba95d17ecf576af4f0d0b1ef48f9c9ced6f86584b4364', '2024-12-15 17:56:03.890', '20241215175603_revert_update_user_table', NULL, NULL, '2024-12-15 17:56:03.879', 1),
('e8626f15-52e2-45e5-9296-0954caeffbc9', 'ef579d1d874155cdaedce86b6a12171d5fcf463477837cb37a4b39ac04576d71', '2024-12-12 09:00:31.361', '20241212090031_create_users_table', NULL, NULL, '2024-12-12 09:00:31.322', 1),
('fecfdb84-d588-44ac-9c87-736b8d3c65dd', 'ca9a8e62954e32b88f5f0b09c4d69ac6b768dd05bf89ece870700b2088ced679', '2024-12-15 14:21:09.180', '20241215142109_update_user_table', NULL, NULL, '2024-12-15 14:21:09.173', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meal_plans`
--
ALTER TABLE `meal_plans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `meal_plans_userId_day_mealType_key` (`userId`,`day`,`mealType`),
  ADD KEY `meal_plans_recipeId_fkey` (`recipeId`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipes_authorId_fkey` (`authorId`);

--
-- Indexes for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipe_ingredients_recipeId_fkey` (`recipeId`);

--
-- Indexes for table `recipe_procedures`
--
ALTER TABLE `recipe_procedures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipe_procedures_recipeId_fkey` (`recipeId`);

--
-- Indexes for table `recipe_ratings`
--
ALTER TABLE `recipe_ratings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `recipe_ratings_recipeId_userId_key` (`recipeId`,`userId`),
  ADD KEY `recipe_ratings_userId_fkey` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meal_plans`
--
ALTER TABLE `meal_plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `recipe_procedures`
--
ALTER TABLE `recipe_procedures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `recipe_ratings`
--
ALTER TABLE `recipe_ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meal_plans`
--
ALTER TABLE `meal_plans`
  ADD CONSTRAINT `meal_plans_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `meal_plans_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `recipes`
--
ALTER TABLE `recipes`
  ADD CONSTRAINT `recipes_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `recipe_ingredients`
--
ALTER TABLE `recipe_ingredients`
  ADD CONSTRAINT `recipe_ingredients_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `recipe_procedures`
--
ALTER TABLE `recipe_procedures`
  ADD CONSTRAINT `recipe_procedures_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `recipe_ratings`
--
ALTER TABLE `recipe_ratings`
  ADD CONSTRAINT `recipe_ratings_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `recipe_ratings_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
