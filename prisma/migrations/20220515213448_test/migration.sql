-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "first_name" VARCHAR(32) NOT NULL,
    "middle_name" VARCHAR(32),
    "last_name" VARCHAR(32) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "password" VARCHAR(512) NOT NULL,
    "reset_token" VARCHAR(512),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
