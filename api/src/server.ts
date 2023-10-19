import express from "express";
import * as dotenv from "dotenv";

import PacienteRouter from "./routes/PacienteRoutes";
import SecretariaRouter from "./routes/SecretariaRoutes";
import ConsultaRouter from "./routes/ConsultaRoutes";
import AgendaRouter from "./routes/AgendaRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/paciente", PacienteRouter);
app.use("/api/secretaria", SecretariaRouter);
app.use("/api/consulta", ConsultaRouter);
app.use("/api/agenda", AgendaRouter);

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