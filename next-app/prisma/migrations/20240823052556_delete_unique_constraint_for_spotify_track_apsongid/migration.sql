-- 一時的に外部キー制約を解除
ALTER TABLE
  `SpotifyTrack` DROP FOREIGN KEY `SpotifyTrack_apSongId_fkey`;

-- delete unique index
ALTER TABLE
  `SpotifyTrack` DROP INDEX `SpotifyTrack_apSongId_key`;

-- AddForeignKey
ALTER TABLE
  `SpotifyTrack`
ADD
  CONSTRAINT `SpotifyTrack_apSongId_fkey` FOREIGN KEY (`apSongId`) REFERENCES `APSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
