/*
  Warnings:

  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `profile` ADD COLUMN `faculty` VARCHAR(191) NULL,
    ADD COLUMN `major` VARCHAR(191) NULL,
    ADD COLUMN `nidn` VARCHAR(191) NULL,
    ADD COLUMN `nim` VARCHAR(191) NULL,
    ADD COLUMN `profileUrl` VARCHAR(191) NULL,
    ADD COLUMN `yearEntry` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL;

-- RenameIndex
ALTER TABLE `books` RENAME INDEX `books_createdById_fkey` TO `Books_createdById_fkey`;

-- RenameIndex
ALTER TABLE `books` RENAME INDEX `books_deletedById_fkey` TO `Books_deletedById_fkey`;

-- RenameIndex
ALTER TABLE `books` RENAME INDEX `books_updatedById_fkey` TO `Books_updatedById_fkey`;
