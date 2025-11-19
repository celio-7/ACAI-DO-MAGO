// Carrega componentes reutilizáveis (header e footer)
async function carregarComponente(caminho, seletor) {
  try {
    const resposta = await fetch(caminho);
    const html = await resposta.text();
    const alvo = document.querySelector(seletor);
    if (alvo) {
      alvo.innerHTML = html;
    }
  } catch (erro) {
    console.error("Erro ao carregar componente:", caminho, erro);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  carregarComponente("componentes/header.html", "#header-container");
  carregarComponente("componentes/footer.html", "#footer-container");
});
