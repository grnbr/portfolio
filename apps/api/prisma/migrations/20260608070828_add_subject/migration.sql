/*
  Warnings:

  - Made the column `email` on table `messages` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `messages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "subject" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "message" SET NOT NULL;
