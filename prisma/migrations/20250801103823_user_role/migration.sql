-- CreateEnum
CREATE TYPE "public"."userRole" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "role" "public"."userRole" NOT NULL DEFAULT 'USER';
