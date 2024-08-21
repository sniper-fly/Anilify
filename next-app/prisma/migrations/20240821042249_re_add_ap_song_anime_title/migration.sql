/*
  Warnings:

  - You are about to drop the column `animeTitle` on the `APSong` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[type,animeTitleId]` on the table `APSong` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `animeTitleId` to the `APSong` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `APSong_type_animeTitle_key` ON `APSong`;

-- AlterTable
ALTER TABLE `APSong` DROP COLUMN `animeTitle`,
    ADD COLUMN `animeTitleId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `APAnimeTitle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `APSong_type_animeTitleId_key` ON `APSong`(`type`, `animeTitleId`);

-- AddForeignKey
ALTER TABLE `APSong` ADD CONSTRAINT `APSong_animeTitleId_fkey` FOREIGN KEY (`animeTitleId`) REFERENCES `APAnimeTitle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
