-- CreateTable
CREATE TABLE `Anime` (
    `id` INTEGER NOT NULL,
    `anilistId` INTEGER NULL,
    `myanimelistId` INTEGER NULL,
    `kitsuId` INTEGER NULL,
    `anidbId` INTEGER NULL,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Anime_anilistId_myanimelistId_kitsuId_anidbId_createdAt_upda_idx`(`anilistId`, `myanimelistId`, `kitsuId`, `anidbId`, `createdAt`, `updatedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnimeTheme` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `animeId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `AnimeTheme_createdAt_updatedAt_idx`(`createdAt`, `updatedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnimeThemeArtist` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `APSong` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `animeTitleId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `APAnimeTitle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppleMusicUrl` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `apSongId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AppleMusicUrl_apSongId_key`(`apSongId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpotifyTrack` (
    `id` VARCHAR(25) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `previewUrl` VARCHAR(191) NULL,
    `image` VARCHAR(191) NOT NULL,
    `durationMs` INTEGER NOT NULL,
    `isrc` VARCHAR(191) NULL,
    `apSongId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SpotifyTrack_apSongId_key`(`apSongId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpotifyAlbum` (
    `id` VARCHAR(25) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `apSongId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SpotifyAlbum_apSongId_key`(`apSongId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpotifyArtist` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CountryCode` (
    `code` VARCHAR(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnimeThemeToAnimeThemeArtist` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnimeThemeToAnimeThemeArtist_AB_unique`(`A`, `B`),
    INDEX `_AnimeThemeToAnimeThemeArtist_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_APSongToAnime` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_APSongToAnime_AB_unique`(`A`, `B`),
    INDEX `_APSongToAnime_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpotifyAlbumToSpotifyArtist` (
    `A` VARCHAR(25) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SpotifyAlbumToSpotifyArtist_AB_unique`(`A`, `B`),
    INDEX `_SpotifyAlbumToSpotifyArtist_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpotifyAlbumToSpotifyTrack` (
    `A` VARCHAR(25) NOT NULL,
    `B` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `_SpotifyAlbumToSpotifyTrack_AB_unique`(`A`, `B`),
    INDEX `_SpotifyAlbumToSpotifyTrack_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SpotifyArtistToSpotifyTrack` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `_SpotifyArtistToSpotifyTrack_AB_unique`(`A`, `B`),
    INDEX `_SpotifyArtistToSpotifyTrack_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CountryCodeToSpotifyTrack` (
    `A` VARCHAR(3) NOT NULL,
    `B` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `_CountryCodeToSpotifyTrack_AB_unique`(`A`, `B`),
    INDEX `_CountryCodeToSpotifyTrack_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnimeTheme` ADD CONSTRAINT `AnimeTheme_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `APSong` ADD CONSTRAINT `APSong_animeTitleId_fkey` FOREIGN KEY (`animeTitleId`) REFERENCES `APAnimeTitle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppleMusicUrl` ADD CONSTRAINT `AppleMusicUrl_apSongId_fkey` FOREIGN KEY (`apSongId`) REFERENCES `APSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpotifyTrack` ADD CONSTRAINT `SpotifyTrack_apSongId_fkey` FOREIGN KEY (`apSongId`) REFERENCES `APSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpotifyAlbum` ADD CONSTRAINT `SpotifyAlbum_apSongId_fkey` FOREIGN KEY (`apSongId`) REFERENCES `APSong`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToAnimeThemeArtist` ADD CONSTRAINT `_AnimeThemeToAnimeThemeArtist_A_fkey` FOREIGN KEY (`A`) REFERENCES `AnimeTheme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimeThemeToAnimeThemeArtist` ADD CONSTRAINT `_AnimeThemeToAnimeThemeArtist_B_fkey` FOREIGN KEY (`B`) REFERENCES `AnimeThemeArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_APSongToAnime` ADD CONSTRAINT `_APSongToAnime_A_fkey` FOREIGN KEY (`A`) REFERENCES `APSong`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_APSongToAnime` ADD CONSTRAINT `_APSongToAnime_B_fkey` FOREIGN KEY (`B`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyAlbumToSpotifyArtist` ADD CONSTRAINT `_SpotifyAlbumToSpotifyArtist_A_fkey` FOREIGN KEY (`A`) REFERENCES `SpotifyAlbum`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyAlbumToSpotifyArtist` ADD CONSTRAINT `_SpotifyAlbumToSpotifyArtist_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyAlbumToSpotifyTrack` ADD CONSTRAINT `_SpotifyAlbumToSpotifyTrack_A_fkey` FOREIGN KEY (`A`) REFERENCES `SpotifyAlbum`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyAlbumToSpotifyTrack` ADD CONSTRAINT `_SpotifyAlbumToSpotifyTrack_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyTrack`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyArtistToSpotifyTrack` ADD CONSTRAINT `_SpotifyArtistToSpotifyTrack_A_fkey` FOREIGN KEY (`A`) REFERENCES `SpotifyArtist`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SpotifyArtistToSpotifyTrack` ADD CONSTRAINT `_SpotifyArtistToSpotifyTrack_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyTrack`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CountryCodeToSpotifyTrack` ADD CONSTRAINT `_CountryCodeToSpotifyTrack_A_fkey` FOREIGN KEY (`A`) REFERENCES `CountryCode`(`code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CountryCodeToSpotifyTrack` ADD CONSTRAINT `_CountryCodeToSpotifyTrack_B_fkey` FOREIGN KEY (`B`) REFERENCES `SpotifyTrack`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
