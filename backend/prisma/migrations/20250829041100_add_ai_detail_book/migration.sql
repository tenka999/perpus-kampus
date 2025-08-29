-- AlterTable
ALTER TABLE `detailbook` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AddForeignKey
ALTER TABLE `Detailbook` ADD CONSTRAINT `DetailBook_id_fkey` FOREIGN KEY (`bookId`) REFERENCES `Books`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `detailbook` RENAME INDEX `DetailBook_bookId_key` TO `bookId`;
