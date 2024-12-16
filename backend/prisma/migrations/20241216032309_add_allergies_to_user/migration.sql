-- AlterTable
ALTER TABLE `users` ADD COLUMN `allergies` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `completedSurvey` BOOLEAN NOT NULL DEFAULT false;
