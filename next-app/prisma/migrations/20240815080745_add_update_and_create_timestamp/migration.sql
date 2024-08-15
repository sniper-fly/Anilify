/*
  Warnings:

  - Added the required column `updatedAt` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AnimeTheme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AnimeThemeArtist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AvailableMarket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `StreamingArtist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `StreamingSong` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Anime` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `AnimeTheme` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `AnimeThemeArtist` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `AvailableMarket` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `StreamingArtist` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `StreamingSong` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
