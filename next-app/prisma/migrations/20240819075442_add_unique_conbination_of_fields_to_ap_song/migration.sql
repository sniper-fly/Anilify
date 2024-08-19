/*
  Warnings:

  - A unique constraint covering the columns `[type,animeTitle]` on the table `APSong` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `APSong_type_animeTitle_key` ON `APSong`(`type`, `animeTitle`);
