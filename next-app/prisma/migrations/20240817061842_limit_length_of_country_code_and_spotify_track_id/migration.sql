/*
  Warnings:

  - The primary key for the `CountryCode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `code` on the `CountryCode` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(3)`.
  - The primary key for the `SpotifySong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `SpotifySong` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(25)`.
  - You are about to alter the column `B` on the `_AnimeThemeToSpotifySong` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(25)`.
  - You are about to alter the column `B` on the `_AnimeToSpotifySong` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(25)`.
  - You are about to alter the column `A` on the `_CountryCodeToSpotifySong` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(3)`.
  - You are about to alter the column `B` on the `_CountryCodeToSpotifySong` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(25)`.
  - You are about to alter the column `B` on the `_SpotifyArtistToSpotifySong` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(25)`.

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

-- AlterTable
ALTER TABLE `CountryCode` DROP PRIMARY KEY,
    MODIFY `code` VARCHAR(3) NOT NULL,
    ADD PRIMARY KEY (`code`);

-- AlterTable
ALTER TABLE `SpotifySong` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(25) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `_AnimeThemeToSpotifySong` MODIFY `B` VARCHAR(25) NOT NULL;

-- AlterTable
ALTER TABLE `_AnimeToSpotifySong` MODIFY `B` VARCHAR(25) NOT NULL;

-- AlterTable
ALTER TABLE `_CountryCodeToSpotifySong` MODIFY `A` VARCHAR(3) NOT NULL,
    MODIFY `B` VARCHAR(25) NOT NULL;

-- AlterTable
ALTER TABLE `_SpotifyArtistToSpotifySong` MODIFY `B` VARCHAR(25) NOT NULL;

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
