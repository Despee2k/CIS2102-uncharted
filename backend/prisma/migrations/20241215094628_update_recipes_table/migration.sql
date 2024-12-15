-- AlterTable
ALTER TABLE `recipes` ADD COLUMN `approvalStatus` ENUM('PENDING', 'APPROVED', 'DISAPPROVED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `authorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `recipes` ADD CONSTRAINT `recipes_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
