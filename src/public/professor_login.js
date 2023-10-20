document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("professorLoginForm");
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
      const matricula = document.getElementById("matriculaProfessor").value;
      const senha = document.getElementById("senhaProfessor").value;
  
      const response = await fetch("http://localhost:3000/auth/professor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ matricula, senha }),
      });
  
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        // Redirecionar para a página inicial do professor
      } else {
        alert("Erro ao fazer login");
      }
    });
  });
  