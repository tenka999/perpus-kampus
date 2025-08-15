-- DropForeignKey
ALTER TABLE `detailbook` DROP FOREIGN KEY `DetailBook_id_fkey`;

-- AlterTable
ALTER TABLE `detailbook` MODIFY `id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `DetailBook` ADD CONSTRAINT `DetailBook_id_fkey` FOREIGN KEY (`id`) REFERENCES `Books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
