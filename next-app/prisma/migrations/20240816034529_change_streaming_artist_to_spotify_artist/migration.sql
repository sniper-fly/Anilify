/*
  Warnings:

  - The primary key for the `AvailableMarket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `AvailableMarket` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `AvailableMarket` table. All the data in the column will be lost.
  - The primary key for the `StreamingSong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `addedTimes` on the `StreamingSong` table. All the data in the column will be lost.
  - You are about to drop the column `openLink` on the `StreamingSong` table. All the data in the column will be lost.
  - You are about to drop the column `provider` on the `StreamingSong` table. All the data in the column will be lost.
  - You are about to drop the column `uri` on the `StreamingSong` table. All the data in the column will be lost.
  - You are about to drop the `StreamingArtist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeThemeToStreamingSong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeToStreamingSong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AvailableMarketToStreamingSong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StreamingArtistToStreamingSong` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `code` to the `AvailableMarket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_AnimeThemeToStreamingSong` DROP FOREIGN KEY `_AnimeThemeToStreamingSong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeThemeToStreamingSong` DROP FOREIGN KEY `_AnimeThemeToStreamingSong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToStreamingSong` DROP FOREIGN KEY `_AnimeToStreamingSong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToStreamingSong` DROP FOREIGN KEY `_AnimeToStreamingSong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_AvailableMarketToStreamingSong` DROP FOREIGN KEY `_AvailableMarketToStreamingSong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AvailableMarketToStreamingSong` DROP FOREIGN KEY `_AvailableMarketToStreamingSong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_StreamingArtistToStreamingSong` DROP FOREIGN KEY `_StreamingArtistToStreamingSong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_StreamingArtistToStreamingSong` DROP FOREIGN KEY `_StreamingArtistToStreamingSong_B_fkey`;

-- DropIndex
DROP INDEX `StreamingSong_provider_uri_key` ON `StreamingSong`;

-- AlterTable
ALTER TABLE `AvailableMarket` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`code`);

-- AlterTable
ALTER TABLE `StreamingSong` DROP PRIMARY KEY,
    DROP COLUMN `addedTimes`,
    DROP COLUMN `openLink`,
    DROP COLUMN `provider`,
    DROP COLUMN `uri`,
    ADD COLUMN `isrc` VARCHAR(191) NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `previewUrl` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `StreamingArtist`;

-- DropTable
DROP TABLE `_AnimeThemeToStreamingSong`;

-- DropTable
DROP TABLE `_AnimeToStreamingSong`;

-- DropTable
DROP TABLE `_AvailableMarketToStreamingSong`;

-- DropTable
DROP TABLE `_StreamingArtistToStreamingSong`;

-- CreateTable
CREATE TABLE `SpotifyArtist` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeToSpotifySong` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AnimeToSpotifySong_AB_unique`(`A`, `B`),
    INDEX `_AnimeToSpotifySong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeThemeToSpotifySong` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AnimeThemeToSpotifySong_AB_unique`(`A`, `B`),
    INDEX `_AnimeThemeToSpotifySong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpotifyArtistToSpotifySong` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SpotifyArtistToSpotifySong_AB_unique`(`A`, `B`),
    INDEX `_SpotifyArtistToSpotifySong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CountryCodeToSpotifySong` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CountryCodeToSpotifySong_AB_unique`(`A`, `B`),
    INDEX `_CountryCodeToSpotifySong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AnimeToSpotifySong` ADD CONSTRAINT `_AnimeToSpotifySong_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToSpotifySong` ADD CONSTRAINT `_AnimeToSpotifySong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToSpotifySong` ADD CONSTRAINT `_AnimeThemeToSpotifySong_A_fkey` FOREIGN KEY (`A`) REFERENCES `AnimeTheme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToSpotifySong` ADD CONSTRAINT `_AnimeThemeToSpotifySong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyArtistToSpotifySong` ADD CONSTRAINT `_SpotifyArtistToSpotifySong_A_fkey` FOREIGN KEY (`A`) REFERENCES `SpotifyArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyArtistToSpotifySong` ADD CONSTRAINT `_SpotifyArtistToSpotifySong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CountryCodeToSpotifySong` ADD CONSTRAINT `_CountryCodeToSpotifySong_A_fkey` FOREIGN KEY (`A`) REFERENCES `AvailableMarket`(`code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CountryCodeToSpotifySong` ADD CONSTRAINT `_CountryCodeToSpotifySong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
