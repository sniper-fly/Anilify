-- CreateTable
CREATE TABLE `AppleMusicUrl` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `animeThemeId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AppleMusicUrl` ADD CONSTRAINT `AppleMusicUrl_animeThemeId_fkey` FOREIGN KEY (`animeThemeId`) REFERENCES `AnimeTheme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
