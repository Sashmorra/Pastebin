-- CreateTable
CREATE TABLE "Text" (
    "id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkToText" (
    "id" INTEGER NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "LinkToText_pkey" PRIMARY KEY ("id")
);
