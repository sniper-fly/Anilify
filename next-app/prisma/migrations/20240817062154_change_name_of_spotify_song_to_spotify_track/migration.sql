/*
  Warnings:

  - You are about to drop the `SpotifySong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeThemeToSpotifySong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnimeToSpotifySong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CountryCodeToSpotifySong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SpotifyArtistToSpotifySong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_AnimeThemeToSpotifySong` DROP FOREIGN KEY `_AnimeThemeToSpotifySong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeThemeToSpotifySong` DROP FOREIGN KEY `_AnimeThemeToSpotifySong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToSpotifySong` DROP FOREIGN KEY `_AnimeToSpotifySong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AnimeToSpotifySong` DROP FOREIGN KEY `_AnimeToSpotifySong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_CountryCodeToSpotifySong` DROP FOREIGN KEY `_CountryCodeToSpotifySong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CountryCodeToSpotifySong` DROP FOREIGN KEY `_CountryCodeToSpotifySong_B_fkey`;

-- DropForeignKey
ALTER TABLE `_SpotifyArtistToSpotifySong` DROP FOREIGN KEY `_SpotifyArtistToSpotifySong_A_fkey`;

-- DropForeignKey
ALTER TABLE `_SpotifyArtistToSpotifySong` DROP FOREIGN KEY `_SpotifyArtistToSpotifySong_B_fkey`;

-- DropTable
DROP TABLE `SpotifySong`;

-- DropTable
DROP TABLE `_AnimeThemeToSpotifySong`;

-- DropTable
DROP TABLE `_AnimeToSpotifySong`;

-- DropTable
DROP TABLE `_CountryCodeToSpotifySong`;

-- DropTable
DROP TABLE `_SpotifyArtistToSpotifySong`;

-- CreateTable
CREATE TABLE `SpotifyTrack` (
    `id` VARCHAR(25) NOT NULL,
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
CREATE TABLE `_AnimeToSpotifyTrack` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `_AnimeToSpotifyTrack_AB_unique`(`A`, `B`),
    INDEX `_AnimeToSpotifyTrack_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeThemeToSpotifyTrack` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `_AnimeThemeToSpotifyTrack_AB_unique`(`A`, `B`),
    INDEX `_AnimeThemeToSpotifyTrack_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpotifyArtistToSpotifyTrack` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `_SpotifyArtistToSpotifyTrack_AB_unique`(`A`, `B`),
    INDEX `_SpotifyArtistToSpotifyTrack_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CountryCodeToSpotifyTrack` (
    `A` VARCHAR(3) NOT NULL,
    `B` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `_CountryCodeToSpotifyTrack_AB_unique`(`A`, `B`),
    INDEX `_CountryCodeToSpotifyTrack_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AnimeToSpotifyTrack` ADD CONSTRAINT `_AnimeToSpotifyTrack_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToSpotifyTrack` ADD CONSTRAINT `_AnimeToSpotifyTrack_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyTrack`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToSpotifyTrack` ADD CONSTRAINT `_AnimeThemeToSpotifyTrack_A_fkey` FOREIGN KEY (`A`) REFERENCES `AnimeTheme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToSpotifyTrack` ADD CONSTRAINT `_AnimeThemeToSpotifyTrack_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyTrack`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyArtistToSpotifyTrack` ADD CONSTRAINT `_SpotifyArtistToSpotifyTrack_A_fkey` FOREIGN KEY (`A`) REFERENCES `SpotifyArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyArtistToSpotifyTrack` ADD CONSTRAINT `_SpotifyArtistToSpotifyTrack_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyTrack`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CountryCodeToSpotifyTrack` ADD CONSTRAINT `_CountryCodeToSpotifyTrack_A_fkey` FOREIGN KEY (`A`) REFERENCES `CountryCode`(`code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CountryCodeToSpotifyTrack` ADD CONSTRAINT `_CountryCodeToSpotifyTrack_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyTrack`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
