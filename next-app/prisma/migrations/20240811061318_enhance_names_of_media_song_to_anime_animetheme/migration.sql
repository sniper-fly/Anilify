/*
  Warnings:

  - You are about to drop the column `mediaId` on the `StreamingSong` table. All the data in the column will be lost.
  - You are about to drop the column `songId` on the `StreamingSong` table. All the data in the column will be lost.
  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Song` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SongArtists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `animeId` to the `StreamingSong` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Song` DROP FOREIGN KEY `Song_mediaId_fkey`;

-- DropForeignKey
ALTER TABLE `SongArtists` DROP FOREIGN KEY `SongArtists_songId_fkey`;

-- DropForeignKey
ALTER TABLE `StreamingSong` DROP FOREIGN KEY `StreamingSong_mediaId_fkey`;

-- DropForeignKey
ALTER TABLE `StreamingSong` DROP FOREIGN KEY `StreamingSong_songId_fkey`;

-- AlterTable
ALTER TABLE `StreamingSong` DROP COLUMN `mediaId`,
    DROP COLUMN `songId`,
    ADD COLUMN `animeId` INTEGER NOT NULL,
    ADD COLUMN `animeThemeId` INTEGER NULL;

-- DropTable
DROP TABLE `Media`;

-- DropTable
DROP TABLE `Song`;

-- DropTable
DROP TABLE `SongArtists`;

-- CreateTable
CREATE TABLE `Anime` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anilistId` INTEGER NOT NULL,
    `myanimelistId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnimeTheme` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `jpTitle` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NULL,
    `animeId` INTEGER NOT NULL,

    UNIQUE INDEX `AnimeTheme_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnimeThemeArtists` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `animeThemeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnimeTheme` ADD CONSTRAINT `AnimeTheme_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StreamingSong` ADD CONSTRAINT `StreamingSong_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StreamingSong` ADD CONSTRAINT `StreamingSong_animeThemeId_fkey` FOREIGN KEY (`animeThemeId`) REFERENCES `AnimeTheme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnimeThemeArtists` ADD CONSTRAINT `AnimeThemeArtists_animeThemeId_fkey` FOREIGN KEY (`animeThemeId`) REFERENCES `AnimeTheme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
