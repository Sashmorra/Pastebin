/*
  Warnings:

  - You are about to drop the column `isFavorite` on the `Text` table. All the data in the column will be lost.
  - Added the required column `isFamous` to the `Text` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Text" DROP COLUMN "isFavorite",
ADD COLUMN     "isFamous" BOOLEAN NOT NULL;
