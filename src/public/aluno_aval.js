document.addEventListener("DOMContentLoaded", async function() {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "aluno_login.html";
        return;
    }

    const response = await fetch("http://localhost:<PORT>/api/grupos", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const grupos = await response.json();

    const grupoList = document.getElementById("grupo-list");

    grupos.forEach(grupo => {
        const listItem = document.createElement("li");
        listItem.textContent = grupo.nomeGrupo;
        grupoList.appendChild(listItem);
    });
});
