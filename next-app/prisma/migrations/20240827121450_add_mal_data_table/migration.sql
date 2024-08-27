-- CreateTable
CREATE TABLE `MyAnimeList` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `picture` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NULL,
    `endDate` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlternativeTitle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `malId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AlternativeTitle` ADD CONSTRAINT `AlternativeTitle_malId_fkey` FOREIGN KEY (`malId`) REFERENCES `MyAnimeList`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
