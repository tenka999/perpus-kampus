/*
  Warnings:

  - You are about to drop the column `format` on the `detailbook` table. All the data in the column will be lost.
  - You are about to drop the column `tipecover` on the `detailbook` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `detailbook` DROP COLUMN `format`,
    DROP COLUMN `tipecover`;
