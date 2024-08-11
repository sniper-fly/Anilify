/*
  Warnings:

  - Added the required column `mediaId` to the `StreamingSong` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `StreamingSong` DROP FOREIGN KEY `StreamingSong_songId_fkey`;

-- AlterTable
ALTER TABLE `StreamingSong` ADD COLUMN `mediaId` INTEGER NOT NULL,
    MODIFY `songId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `StreamingSong` ADD CONSTRAINT `StreamingSong_mediaId_fkey` FOREIGN KEY (`mediaId`) REFERENCES `Media`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StreamingSong` ADD CONSTRAINT `StreamingSong_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
