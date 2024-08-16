/*
  Warnings:

  - You are about to drop the `AvailableMarket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StreamingSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_AnimeThemeToSpotifySong` DROP FOREIGN KEY `_AnimeThemeToSpotifySong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToSpotifySong` DROP FOREIGN KEY `_AnimeToSpotifySong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_CountryCodeToSpotifySong` DROP FOREIGN KEY `_CountryCodeToSpotifySong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CountryCodeToSpotifySong` DROP FOREIGN KEY `_CountryCodeToSpotifySong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_SpotifyArtistToSpotifySong` DROP FOREIGN KEY `_SpotifyArtistToSpotifySong_B_fkey`;

-- DropTable
DROP TABLE `AvailableMarket`;

-- DropTable
DROP TABLE `StreamingSong`;

-- CreateTable
CREATE TABLE `SpotifySong` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `previewUrl` VARCHAR(191) NULL,
    `image` VARCHAR(191) NOT NULL,
    `durationMs` INTEGER NOT NULL,
    `isrc` VARCHAR(191) NULL,
    `songType` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CountryCode` (
    `code` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AnimeToSpotifySong` ADD CONSTRAINT `_AnimeToSpotifySong_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifySong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToSpotifySong` ADD CONSTRAINT `_AnimeThemeToSpotifySong_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifySong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyArtistToSpotifySong` ADD CONSTRAINT `_SpotifyArtistToSpotifySong_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifySong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CountryCodeToSpotifySong` ADD CONSTRAINT `_CountryCodeToSpotifySong_A_fkey` FOREIGN KEY (`A`) REFERENCES `CountryCode`(`code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CountryCodeToSpotifySong` ADD CONSTRAINT `_CountryCodeToSpotifySong_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifySong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
