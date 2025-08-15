-- CreateTable
CREATE TABLE `Books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `author` VARCHAR(255) NULL,
    `year` YEAR NOT NULL,
    `ISBN` VARCHAR(13) NOT NULL,
    `cover` TEXT NOT NULL,
    `stok` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `genreId` INTEGER NOT NULL,

    UNIQUE INDEX `ISBN`(`ISBN`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Genre_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailBook` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `originaltitle` TEXT NULL,
    `rating` DOUBLE NULL DEFAULT 0,
    `review_count` INTEGER NOT NULL DEFAULT 0,
    `deskripsi` TEXT NULL,
    `pages` INTEGER NULL,
    `language` VARCHAR(30) NULL,
    `tipecover` VARCHAR(15) NULL,
    `format` VARCHAR(20) NULL,
    `pdf_url` VARCHAR(255) NULL,
    `bookId` INTEGER NOT NULL,

    UNIQUE INDEX `DetailBook_bookId_key`(`bookId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailBook` ADD CONSTRAINT `DetailBook_id_fkey` FOREIGN KEY (`id`) REFERENCES `Books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
