/*
  Warnings:

  - You are about to drop the column `animeTitle` on the `Media` table. All the data in the column will be lost.
  - Added the required column `title` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Media` DROP COLUMN `animeTitle`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
