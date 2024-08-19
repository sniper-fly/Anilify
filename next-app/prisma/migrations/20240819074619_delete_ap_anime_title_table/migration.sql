/*
  Warnings:

  - You are about to drop the column `animeTitleId` on the `APSong` table. All the data in the column will be lost.
  - You are about to drop the `APAnimeTitle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `animeTitle` to the `APSong` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `APSong` DROP FOREIGN KEY `APSong_animeTitleId_fkey`;

-- AlterTable
ALTER TABLE `APSong` DROP COLUMN `animeTitleId`,
    ADD COLUMN `animeTitle` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `APAnimeTitle`;
