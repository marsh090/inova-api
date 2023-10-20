document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("alunoLoginForm");

  form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const matricula = document.getElementById("matriculaAluno").value;
    const senha = document.getElementById("senhaAluno").value;

    const response = await fetch("http://localhost:3000/auth/aluno", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matricula, senha }),
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      // Redirecionar para a página inicial do aluno
      window.location.href = "aluno_aval.html";
    } else {
      alert("Erro ao fazer login");
    }
  });
});
