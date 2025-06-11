// Carrossel funcional com várias imagens
const imagens = document.querySelectorAll(".carouselImage");
const dotsContainer = document.getElementById("dotsContainer");
let index = 0;

// Criar bolinhas
imagens.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => mostrarImagem(i));
  dotsContainer.appendChild(dot);
});

// Função para mostrar imagem atual
function mostrarImagem(i) {
  imagens.forEach((img, idx) => {
    img.classList.toggle("active", idx === i);
  });

  document.querySelectorAll(".dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === i);
  });

  index = i;
}

// Troca automática a cada 3 segundos
setInterval(() => {
  index = (index + 1) % imagens.length;
  mostrarImagem(index);
}, 3000);

// Mostrar a primeira imagem inicialmente
mostrarImagem(index);

// Contador de tempo desde 17/06/2022
const dataInicial = new Date("2022-06-17T00:00:00");

function atualizaTempo() {
  const agora = new Date();
  let diff = agora - dataInicial;

  const segundosTotais = Math.floor(diff / 1000);
  const segundos = segundosTotais % 60;
  const minutosTotais = Math.floor(segundosTotais / 60);
  const minutos = minutosTotais % 60;
  const horasTotais = Math.floor(minutosTotais / 60);
  const horas = horasTotais % 24;
  const diasTotais = Math.floor(horasTotais / 24);

  const anos = Math.floor(diasTotais / 365.25);
  const meses = Math.floor((diasTotais % 365.25) / 30.44);
  const dias = Math.floor((diasTotais % 365.25) % 30.44);

  document.getElementById("tempo").innerHTML = `
    <div>${String(anos).padStart(2, '0')}<br><small>anos</small></div>
    <div>${String(meses).padStart(2, '0')}<br><small>meses</small></div>
    <div>${String(dias).padStart(2, '0')}<br><small>dias</small></div>
    <div>${String(horas).padStart(2, '0')}<br><small>horas</small></div>
    <div>${String(minutos).padStart(2, '0')}<br><small>minutos</small></div>
    <div>${String(segundos).padStart(2, '0')}<br><small>segundos</small></div>
  `;
}

atualizaTempo(); // Atualiza imediatamente ao carregar
setInterval(atualizaTempo, 1000); // E depois a cada segundo
