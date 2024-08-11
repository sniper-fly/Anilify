/*
  Warnings:

  - You are about to drop the column `mediaAnilistId` on the `Song` table. All the data in the column will be lost.
  - Added the required column `mediaId` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Song` DROP FOREIGN KEY `Song_mediaAnilistId_fkey`;

-- DropIndex
DROP INDEX `Media_anilistId_key` ON `Media`;

-- AlterTable
ALTER TABLE `Song` DROP COLUMN `mediaAnilistId`,
    ADD COLUMN `mediaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Song` ADD CONSTRAINT `Song_mediaId_fkey` FOREIGN KEY (`mediaId`) REFERENCES `Media`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
