/*
  Warnings:

  - You are about to drop the `Aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_gruposDesignados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `alunoId` on the `Avaliacao` table. All the data in the column will be lost.
  - You are about to drop the column `professorId` on the `Avaliacao` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_gruposDesignados_B_index";

-- DropIndex
DROP INDEX "_gruposDesignados_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Aluno";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Professor";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_gruposDesignados";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "grupoId" TEXT,
    CONSTRAINT "Usuario_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "nota" REAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "grupoId" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("grupoId", "id", "nota", "tipo") SELECT "grupoId", "id", "nota", "tipo" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_matricula_key" ON "Usuario"("matricula");
