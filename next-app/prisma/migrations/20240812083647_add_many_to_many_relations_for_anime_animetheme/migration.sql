/*
  Warnings:

  - You are about to drop the column `animeId` on the `AnimeTheme` table. All the data in the column will be lost.
  - You are about to drop the column `animeId` on the `StreamingSong` table. All the data in the column will be lost.
  - You are about to drop the column `animeThemeId` on the `StreamingSong` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `AnimeTheme` DROP FOREIGN KEY `AnimeTheme_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `StreamingSong` DROP FOREIGN KEY `StreamingSong_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `StreamingSong` DROP FOREIGN KEY `StreamingSong_animeThemeId_fkey`;

-- AlterTable
ALTER TABLE `AnimeTheme` DROP COLUMN `animeId`;

-- AlterTable
ALTER TABLE `StreamingSong` DROP COLUMN `animeId`,
    DROP COLUMN `animeThemeId`;

-- CreateTable
CREATE TABLE `_AnimeToAnimeTheme` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeToAnimeTheme_AB_unique`(`A`, `B`),
    INDEX `_AnimeToAnimeTheme_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeToStreamingSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeToStreamingSong_AB_unique`(`A`, `B`),
    INDEX `_AnimeToStreamingSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeThemeToStreamingSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeThemeToStreamingSong_AB_unique`(`A`, `B`),
    INDEX `_AnimeThemeToStreamingSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AnimeToAnimeTheme` ADD CONSTRAINT `_AnimeToAnimeTheme_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToAnimeTheme` ADD CONSTRAINT `_AnimeToAnimeTheme_B_fkey` FOREIGN KEY (`B`) REFERENCES `AnimeTheme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToStreamingSong` ADD CONSTRAINT `_AnimeToStreamingSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToStreamingSong` ADD CONSTRAINT `_AnimeToStreamingSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToStreamingSong` ADD CONSTRAINT `_AnimeThemeToStreamingSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `AnimeTheme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToStreamingSong` ADD CONSTRAINT `_AnimeThemeToStreamingSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
