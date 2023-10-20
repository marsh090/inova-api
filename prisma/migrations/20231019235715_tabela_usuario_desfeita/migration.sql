/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `usuarioId` on the `Avaliacao` table. All the data in the column will be lost.
  - You are about to alter the column `tipo` on the `Avaliacao` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- DropIndex
DROP INDEX "Usuario_matricula_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usuario";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "matriculaAluno" TEXT NOT NULL,
    "grupoId" TEXT,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "matriculaProfessor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_gruposDesignados" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_gruposDesignados_A_fkey" FOREIGN KEY ("A") REFERENCES "Grupo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_gruposDesignados_B_fkey" FOREIGN KEY ("B") REFERENCES "Professor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" INTEGER NOT NULL,
    "nota" REAL NOT NULL,
    "alunoId" TEXT,
    "professorId" TEXT,
    "grupoId" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("grupoId", "id", "nota", "tipo") SELECT "grupoId", "id", "nota", "tipo" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_gruposDesignados_AB_unique" ON "_gruposDesignados"("A", "B");

-- CreateIndex
CREATE INDEX "_gruposDesignados_B_index" ON "_gruposDesignados"("B");
