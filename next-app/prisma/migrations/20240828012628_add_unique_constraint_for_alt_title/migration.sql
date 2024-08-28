/*
  Warnings:

  - A unique constraint covering the columns `[malId,title]` on the table `AlternativeTitle` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `AlternativeTitle_malId_title_key` ON `AlternativeTitle`(`malId`, `title`);
