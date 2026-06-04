/*
  Warnings:

  - Made the column `name` on table `Message` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "message" DROP NOT NULL;
