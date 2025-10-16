function entrar() {
  document.getElementById("login").style.display = "none";
  document.getElementById("feed").style.display = "block";
}

function publicar() {
  let texto = document.getElementById("post").value;
  if (texto.trim() === "") return alert("Escreve algo!");
  
  let div = document.createElement("div");
  div.innerHTML = `<p><b>Tu:</b> ${texto}</p><hr>`;
  
  document.getElementById("publicacoes").prepend(div);
  document.getElementById("post").value = "";
}