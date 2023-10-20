/*
  Warnings:

  - Added the required column `senha` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "matriculaProfessor" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("id", "matriculaProfessor", "nome") SELECT "id", "matriculaProfessor", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE TABLE "new_Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "matriculaAluno" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "grupoId" TEXT,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Aluno" ("grupoId", "id", "matriculaAluno", "nome") SELECT "grupoId", "id", "matriculaAluno", "nome" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
