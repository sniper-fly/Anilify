-- DropIndex
DROP INDEX `Anime_anilistId_myanimelistId_kitsuId_anidbId_idx` ON `Anime`;

-- CreateIndex
CREATE INDEX `Anime_anilistId_myanimelistId_kitsuId_anidbId_createdAt_upda_idx` ON `Anime`(`anilistId`, `myanimelistId`, `kitsuId`, `anidbId`, `createdAt`, `updatedAt`);

-- CreateIndex
CREATE INDEX `AnimeTheme_createdAt_updatedAt_idx` ON `AnimeTheme`(`createdAt`, `updatedAt`);
