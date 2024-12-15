/*
  Warnings:

  - Made the column `authorId` on table `recipes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `recipes` DROP FOREIGN KEY `recipes_authorId_fkey`;

-- AlterTable
ALTER TABLE `recipes` MODIFY `authorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `recipes` ADD CONSTRAINT `recipes_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
