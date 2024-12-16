/*
  Warnings:

  - You are about to drop the column `averageRating` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the `ratings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ratings` DROP FOREIGN KEY `ratings_recipeId_fkey`;

-- DropForeignKey
ALTER TABLE `ratings` DROP FOREIGN KEY `ratings_userId_fkey`;

-- AlterTable
ALTER TABLE `recipes` DROP COLUMN `averageRating`;

-- DropTable
DROP TABLE `ratings`;
