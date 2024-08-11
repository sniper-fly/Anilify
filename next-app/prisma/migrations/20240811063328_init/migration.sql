-- CreateTable
CREATE TABLE `Anime` (
    `id` INTEGER NOT NULL,
    `anilistId` INTEGER NOT NULL,
    `myanimelistId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Anime_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnimeTheme` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `jpTitle` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NULL,
    `animeId` INTEGER NOT NULL,

    UNIQUE INDEX `AnimeTheme_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StreamingSong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `provider` VARCHAR(191) NOT NULL,
    `uri` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `openLink` VARCHAR(191) NOT NULL,
    `previewUrl` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `durationMs` INTEGER NOT NULL,
    `songType` VARCHAR(191) NOT NULL,
    `addedCount` INTEGER NOT NULL,
    `animeThemeId` INTEGER NULL,
    `animeId` INTEGER NOT NULL,

    UNIQUE INDEX `StreamingSong_provider_uri_key`(`provider`, `uri`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnimeThemeArtists` (
    `name` VARCHAR(191) NOT NULL,
    `animeThemeId` INTEGER NOT NULL,

    PRIMARY KEY (`animeThemeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StreamingArtists` (
    `name` VARCHAR(191) NOT NULL,
    `streamingId` INTEGER NOT NULL,

    PRIMARY KEY (`streamingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AvailableMarket` (
    `name` VARCHAR(191) NOT NULL,
    `streamingId` INTEGER NOT NULL,

    PRIMARY KEY (`streamingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnimeTheme` ADD CONSTRAINT `AnimeTheme_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StreamingSong` ADD CONSTRAINT `StreamingSong_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StreamingSong` ADD CONSTRAINT `StreamingSong_animeThemeId_fkey` FOREIGN KEY (`animeThemeId`) REFERENCES `AnimeTheme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnimeThemeArtists` ADD CONSTRAINT `AnimeThemeArtists_animeThemeId_fkey` FOREIGN KEY (`animeThemeId`) REFERENCES `AnimeTheme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StreamingArtists` ADD CONSTRAINT `StreamingArtists_streamingId_fkey` FOREIGN KEY (`streamingId`) REFERENCES `StreamingSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AvailableMarket` ADD CONSTRAINT `AvailableMarket_streamingId_fkey` FOREIGN KEY (`streamingId`) REFERENCES `StreamingSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
