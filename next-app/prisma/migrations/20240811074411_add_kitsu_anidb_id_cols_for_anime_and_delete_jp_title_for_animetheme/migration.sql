/*
  Warnings:

  - You are about to drop the column `jpTitle` on the `AnimeTheme` table. All the data in the column will be lost.
  - Made the column `slug` on table `AnimeTheme` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Anime` ADD COLUMN `anidbId` INTEGER NULL,
    ADD COLUMN `kitsuId` INTEGER NULL,
    MODIFY `anilistId` INTEGER NULL,
    MODIFY `myanimelistId` INTEGER NULL;

-- AlterTable
ALTER TABLE `AnimeTheme` DROP COLUMN `jpTitle`,
    MODIFY `slug` VARCHAR(191) NOT NULL;
