/*
  Warnings:

  - Added the required column `isFavorite` to the `Text` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Text" ADD COLUMN     "isFavorite" BOOLEAN NOT NULL;
