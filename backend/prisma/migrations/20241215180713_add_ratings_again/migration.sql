-- AlterTable
ALTER TABLE `recipes` ADD COLUMN `totalRating` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `totalRatings` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `recipe_ratings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `recipeId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `rating` DOUBLE NOT NULL,

    UNIQUE INDEX `recipe_ratings_recipeId_userId_key`(`recipeId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `recipe_ratings` ADD CONSTRAINT `recipe_ratings_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recipe_ratings` ADD CONSTRAINT `recipe_ratings_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
