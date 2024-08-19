/*
  Warnings:

  - You are about to drop the column `animeThemeId` on the `AppleMusicUrl` table. All the data in the column will be lost.
  - You are about to drop the column `songType` on the `SpotifyTrack` table. All the data in the column will be lost.
  - You are about to drop the `_AnimeThemeToSpotifyTrack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeToSpotifyTrack` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[apSongId]` on the table `AppleMusicUrl` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[apSongId]` on the table `SpotifyTrack` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apSongId` to the `AppleMusicUrl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apSongId` to the `SpotifyTrack` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `AppleMusicUrl` DROP FOREIGN KEY `AppleMusicUrl_animeThemeId_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeThemeToSpotifyTrack` DROP FOREIGN KEY `_AnimeThemeToSpotifyTrack_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeThemeToSpotifyTrack` DROP FOREIGN KEY `_AnimeThemeToSpotifyTrack_B_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToSpotifyTrack` DROP FOREIGN KEY `_AnimeToSpotifyTrack_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToSpotifyTrack` DROP FOREIGN KEY `_AnimeToSpotifyTrack_B_fkey`;

-- AlterTable
ALTER TABLE `AppleMusicUrl` DROP COLUMN `animeThemeId`,
    ADD COLUMN `apSongId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `SpotifyTrack` DROP COLUMN `songType`,
    ADD COLUMN `apSongId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_AnimeThemeToSpotifyTrack`;

-- DropTable
DROP TABLE `_AnimeToSpotifyTrack`;

-- CreateTable
CREATE TABLE `APSong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `animeTitleId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `APAnimeTitle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpotifyAlbum` (
    `id` VARCHAR(25) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `apSongId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SpotifyAlbum_apSongId_key`(`apSongId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_APSongToAnime` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_APSongToAnime_AB_unique`(`A`, `B`),
    INDEX `_APSongToAnime_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpotifyAlbumToSpotifyArtist` (
    `A` VARCHAR(25) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SpotifyAlbumToSpotifyArtist_AB_unique`(`A`, `B`),
    INDEX `_SpotifyAlbumToSpotifyArtist_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpotifyAlbumToSpotifyTrack` (
    `A` VARCHAR(25) NOT NULL,
    `B` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `_SpotifyAlbumToSpotifyTrack_AB_unique`(`A`, `B`),
    INDEX `_SpotifyAlbumToSpotifyTrack_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `AppleMusicUrl_apSongId_key` ON `AppleMusicUrl`(`apSongId`);

-- CreateIndex
CREATE UNIQUE INDEX `SpotifyTrack_apSongId_key` ON `SpotifyTrack`(`apSongId`);

-- AddForeignKey
ALTER TABLE `APSong` ADD CONSTRAINT `APSong_animeTitleId_fkey` FOREIGN KEY (`animeTitleId`) REFERENCES `APAnimeTitle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppleMusicUrl` ADD CONSTRAINT `AppleMusicUrl_apSongId_fkey` FOREIGN KEY (`apSongId`) REFERENCES `APSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpotifyTrack` ADD CONSTRAINT `SpotifyTrack_apSongId_fkey` FOREIGN KEY (`apSongId`) REFERENCES `APSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpotifyAlbum` ADD CONSTRAINT `SpotifyAlbum_apSongId_fkey` FOREIGN KEY (`apSongId`) REFERENCES `APSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_APSongToAnime` ADD CONSTRAINT `_APSongToAnime_A_fkey` FOREIGN KEY (`A`) REFERENCES `APSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_APSongToAnime` ADD CONSTRAINT `_APSongToAnime_B_fkey` FOREIGN KEY (`B`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyAlbumToSpotifyArtist` ADD CONSTRAINT `_SpotifyAlbumToSpotifyArtist_A_fkey` FOREIGN KEY (`A`) REFERENCES `SpotifyAlbum`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyAlbumToSpotifyArtist` ADD CONSTRAINT `_SpotifyAlbumToSpotifyArtist_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyAlbumToSpotifyTrack` ADD CONSTRAINT `_SpotifyAlbumToSpotifyTrack_A_fkey` FOREIGN KEY (`A`) REFERENCES `SpotifyAlbum`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyAlbumToSpotifyTrack` ADD CONSTRAINT `_SpotifyAlbumToSpotifyTrack_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyTrack`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
