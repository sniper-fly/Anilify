/*
  Warnings:

  - You are about to drop the column `searchedBySong` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `voteAsOfficial` on the `StreamingSong` table. All the data in the column will be lost.
  - Added the required column `songType` to the `StreamingSong` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Song` DROP COLUMN `searchedBySong`;

-- AlterTable
ALTER TABLE `StreamingSong` DROP COLUMN `voteAsOfficial`,
    ADD COLUMN `songType` VARCHAR(191) NOT NULL;
