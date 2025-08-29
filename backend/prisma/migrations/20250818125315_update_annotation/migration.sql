/*
  Warnings:

  - You are about to drop the column `createdById` on the `annotation` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `annotation` table. All the data in the column will be lost.
  - You are about to drop the column `deletedById` on the `annotation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `annotation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `annotation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `annotation` DROP FOREIGN KEY `annotation_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `annotation` DROP FOREIGN KEY `annotation_deletedById_fkey`;

-- DropForeignKey
ALTER TABLE `annotation` DROP FOREIGN KEY `annotation_updatedById_fkey`;

-- DropIndex
DROP INDEX `annotation_createdById_fkey` ON `annotation`;

-- DropIndex
DROP INDEX `annotation_deletedById_fkey` ON `annotation`;

-- DropIndex
DROP INDEX `annotation_updatedById_fkey` ON `annotation`;

-- AlterTable
ALTER TABLE `annotation` DROP COLUMN `createdById`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `deletedById`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `updatedById`;
