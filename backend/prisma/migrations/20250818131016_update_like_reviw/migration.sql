/*
  Warnings:

  - You are about to drop the column `bookId` on the `likedreview` table. All the data in the column will be lost.
  - Added the required column `reviewId` to the `likedReview` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `likedreview` DROP FOREIGN KEY `likedReview_bookId_fkey`;

-- DropIndex
DROP INDEX `likedReview_bookId_fkey` ON `likedreview`;

-- AlterTable
ALTER TABLE `likedreview` DROP COLUMN `bookId`,
    ADD COLUMN `reviewId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `likedReview` ADD CONSTRAINT `likedReview_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `review`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
