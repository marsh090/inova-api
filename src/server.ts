import express from "express";
import * as dotenv from "dotenv";
import path from "path";

import AlunoRoutes from "./backend/routes/AlunoRoutes";
import ProfessorRoutes from "./backend/routes/ProfessorRoutes";
import GrupoRoutes from "./backend/routes/GrupoRoutes";
import AvaliacaoRoutes from "./backend/routes/AvaliacaoRoutes";
import AuthRoutes from "./backend/routes/AuthRoutes";  // Adicione esta linha

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/alunos", AlunoRoutes);
app.use("/api/professores", ProfessorRoutes);
app.use("/api/grupos", GrupoRoutes);
app.use("/api/avaliacoes", AvaliacaoRoutes);
app.use("/auth", AuthRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'aluno_login.html'));
});

app.get("/professor", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'professor_login.html'));
});

try {
  const PORT = process.env.PORT;
  if (PORT) {
    app.listen(PORT, () => {
      console.log(`Server rodando na porta: http://localhost:${PORT}`);
    });
  } else {
    throw new Error("PORT não definida no .env");
  }
} catch (error) {
  console.error(`Falha ao carregar rodar o servidor: ${(error as Error).message}`);
}
