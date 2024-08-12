-- CreateTable
CREATE TABLE `Anime` (
    `id` INTEGER NOT NULL,
    `anilistId` INTEGER NULL,
    `myanimelistId` INTEGER NULL,
    `kitsuId` INTEGER NULL,
    `anidbId` INTEGER NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnimeTheme` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `animeId` INTEGER NOT NULL,

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
    `songType` VARCHAR(191) NULL,
    `addedTimes` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `StreamingSong_provider_uri_key`(`provider`, `uri`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnimeThemeArtist` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StreamingArtist` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AvailableMarket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeToStreamingSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeToStreamingSong_AB_unique`(`A`, `B`),
    INDEX `_AnimeToStreamingSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeThemeToAnimeThemeArtist` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeThemeToAnimeThemeArtist_AB_unique`(`A`, `B`),
    INDEX `_AnimeThemeToAnimeThemeArtist_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeThemeToStreamingSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeThemeToStreamingSong_AB_unique`(`A`, `B`),
    INDEX `_AnimeThemeToStreamingSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_StreamingArtistToStreamingSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_StreamingArtistToStreamingSong_AB_unique`(`A`, `B`),
    INDEX `_StreamingArtistToStreamingSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AvailableMarketToStreamingSong` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AvailableMarketToStreamingSong_AB_unique`(`A`, `B`),
    INDEX `_AvailableMarketToStreamingSong_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnimeTheme` ADD CONSTRAINT `AnimeTheme_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToStreamingSong` ADD CONSTRAINT `_AnimeToStreamingSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeToStreamingSong` ADD CONSTRAINT `_AnimeToStreamingSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToAnimeThemeArtist` ADD CONSTRAINT `_AnimeThemeToAnimeThemeArtist_A_fkey` FOREIGN KEY (`A`) REFERENCES `AnimeTheme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToAnimeThemeArtist` ADD CONSTRAINT `_AnimeThemeToAnimeThemeArtist_B_fkey` FOREIGN KEY (`B`) REFERENCES `AnimeThemeArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToStreamingSong` ADD CONSTRAINT `_AnimeThemeToStreamingSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `AnimeTheme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToStreamingSong` ADD CONSTRAINT `_AnimeThemeToStreamingSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StreamingArtistToStreamingSong` ADD CONSTRAINT `_StreamingArtistToStreamingSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `StreamingArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StreamingArtistToStreamingSong` ADD CONSTRAINT `_StreamingArtistToStreamingSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AvailableMarketToStreamingSong` ADD CONSTRAINT `_AvailableMarketToStreamingSong_A_fkey` FOREIGN KEY (`A`) REFERENCES `AvailableMarket`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AvailableMarketToStreamingSong` ADD CONSTRAINT `_AvailableMarketToStreamingSong_B_fkey` FOREIGN KEY (`B`) REFERENCES `StreamingSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
