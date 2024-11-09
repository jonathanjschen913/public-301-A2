-- CreateTable
CREATE TABLE "Calculation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expression" TEXT NOT NULL,
    "result" REAL NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
