/*
  Warnings:

  - You are about to drop the column `streamingId` on the `AvailableMarket` table. All the data in the column will be lost.
  - You are about to drop the column `addedCount` on the `StreamingSong` table. All the data in the column will be lost.
  - You are about to drop the `AnimeThemeArtists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StreamingArtists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeToAnimeTheme` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `animeId` to the `AnimeTheme` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `AnimeThemeArtists` DROP FOREIGN KEY `AnimeThemeArtists_animeThemeId_fkey`;

-- DropForeignKey
ALTER TABLE `AvailableMarket` DROP FOREIGN KEY `AvailableMarket_streamingId_fkey`;

-- DropForeignKey
ALTER TABLE `StreamingArtists` DROP FOREIGN KEY `StreamingArtists_streamingId_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToAnimeTheme` DROP FOREIGN KEY `_AnimeToAnimeTheme_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToAnimeTheme` DROP FOREIGN KEY `_AnimeToAnimeTheme_B_fkey`;

-- AlterTable
ALTER TABLE `AnimeTheme` ADD COLUMN `animeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `AvailableMarket` DROP COLUMN `streamingId`;

-- AlterTable
ALTER TABLE `StreamingSong` DROP COLUMN `addedCount`,
    ADD COLUMN `addedTimes` INTEGER NOT NULL DEFAULT 0,
    MODIFY `songType` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `AnimeThemeArtists`;

-- DropTable
DROP TABLE `StreamingArtists`;

-- DropTable
DROP TABLE `_AnimeToAnimeTheme`;

-- CreateTable
CREATE TABLE `AnimeThemeArtist` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StreamingArtist` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeThemeToAnimeThemeArtist` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeThemeToAnimeThemeArtist_AB_unique`(`A`, `B`),
    INDEX `_AnimeThemeToAnimeThemeArtist_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_StreamingArtistToStreamingSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_StreamingArtistToStreamingSong_AB_unique`(`A`, `B`),
    INDEX `_StreamingArtistToStreamingSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AvailableMarketToStreamingSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AvailableMarketToStreamingSong_AB_unique`(`A`, `B`),
    INDEX `_AvailableMarketToStreamingSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnimeTheme` ADD CONSTRAINT `AnimeTheme_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToAnimeThemeArtist` ADD CONSTRAINT `_AnimeThemeToAnimeThemeArtist_A_fkey` FOREIGN KEY (`A`) REFERENCES `AnimeTheme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToAnimeThemeArtist` ADD CONSTRAINT `_AnimeThemeToAnimeThemeArtist_B_fkey` FOREIGN KEY (`B`) REFERENCES `AnimeThemeArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StreamingArtistToStreamingSong` ADD CONSTRAINT `_StreamingArtistToStreamingSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `StreamingArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StreamingArtistToStreamingSong` ADD CONSTRAINT `_StreamingArtistToStreamingSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AvailableMarketToStreamingSong` ADD CONSTRAINT `_AvailableMarketToStreamingSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `AvailableMarket`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AvailableMarketToStreamingSong` ADD CONSTRAINT `_AvailableMarketToStreamingSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
