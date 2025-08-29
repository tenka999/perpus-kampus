/*
  Warnings:

  - You are about to drop the column `createdById` on the `likedbook` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `likedbook` table. All the data in the column will be lost.
  - You are about to drop the column `deletedById` on the `likedbook` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `likedbook` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `likedbook` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `likedreview` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `likedreview` table. All the data in the column will be lost.
  - You are about to drop the column `deletedById` on the `likedreview` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `likedreview` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `likedreview` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `likedbook` DROP FOREIGN KEY `likedBook_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `likedbook` DROP FOREIGN KEY `likedBook_deletedById_fkey`;

-- DropForeignKey
ALTER TABLE `likedbook` DROP FOREIGN KEY `likedBook_updatedById_fkey`;

-- DropForeignKey
ALTER TABLE `likedreview` DROP FOREIGN KEY `likedReview_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `likedreview` DROP FOREIGN KEY `likedReview_deletedById_fkey`;

-- DropForeignKey
ALTER TABLE `likedreview` DROP FOREIGN KEY `likedReview_updatedById_fkey`;

-- DropIndex
DROP INDEX `likedBook_createdById_fkey` ON `likedbook`;

-- DropIndex
DROP INDEX `likedBook_deletedById_fkey` ON `likedbook`;

-- DropIndex
DROP INDEX `likedBook_updatedById_fkey` ON `likedbook`;

-- DropIndex
DROP INDEX `likedReview_createdById_fkey` ON `likedreview`;

-- DropIndex
DROP INDEX `likedReview_deletedById_fkey` ON `likedreview`;

-- DropIndex
DROP INDEX `likedReview_updatedById_fkey` ON `likedreview`;

-- AlterTable
ALTER TABLE `likedbook` DROP COLUMN `createdById`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `deletedById`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `updatedById`;

-- AlterTable
ALTER TABLE `likedreview` DROP COLUMN `createdById`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `deletedById`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `updatedById`;
