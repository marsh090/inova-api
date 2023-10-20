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
CREATE TABLE "Grupo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomeGrupo" TEXT NOT NULL,
    "nomeProjeto" TEXT NOT NULL,
    "descProjeto" TEXT NOT NULL,
    "mediaAlu" REAL,
    "mediaPro" REAL
);

-- CreateTable
CREATE TABLE "Avaliacao" (
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

-- CreateTable
CREATE TABLE "_gruposDesignados" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_gruposDesignados_A_fkey" FOREIGN KEY ("A") REFERENCES "Grupo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_gruposDesignados_B_fkey" FOREIGN KEY ("B") REFERENCES "Professor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_gruposDesignados_AB_unique" ON "_gruposDesignados"("A", "B");

-- CreateIndex
CREATE INDEX "_gruposDesignados_B_index" ON "_gruposDesignados"("B");
