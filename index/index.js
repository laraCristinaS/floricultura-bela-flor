const plantas = [
    {
        nome: "Espada de São Jorge",
        imagem: "https://www.jardineiro.net/wp-content/uploads/espada-de-sao-jorge.jpg",
        cuidados: {
            luz: "Meia sombra",
            agua: "1 vez por semana",
            temperatura: "15°C a 30°C"
        }
    },
    {
        nome: "Suculenta",
        imagem: "https://www.jardineiro.net/wp-content/uploads/suculentas.jpg",
        cuidados: {
            luz: "Sol pleno",
            agua: "A cada 10 dias",
            temperatura: "20°C a 30°C"
        }
    },
    {
        nome: "Orquídea",
        imagem: "https://www.jardineiro.net/wp-content/uploads/orquidea.jpg",
        cuidados: {
            luz: "Luz indireta",
            agua: "2 vezes por semana",
            temperatura: "18°C a 28°C"
        }
    }
];

const container = document.getElementById("plantas-container");

plantas.forEach((planta, index) => {
    const div = document.createElement("div");
    div.classList.add("planta");
    div.innerHTML = `
        <img src="${planta.imagem}" alt="${planta.nome}">
        <div class="planta-content">
            <h3>${planta.nome}</h3>
            <button onclick="mostrarDetalhes(${index})">Ver cuidados</button>
            <div class="planta-details" id="detalhes-${index}">
                <p><strong>Luz:</strong> ${planta.cuidados.luz}</p>
                <p><strong>Água:</strong> ${planta.cuidados.agua}</p>
                <p><strong>Temperatura:</strong> ${planta.cuidados.temperatura}</p>
            </div>
        </div>
    `;
    container.appendChild(div);
});

function mostrarDetalhes(index) {
    const detalhes = document.getElementById(`detalhes-${index}`);
    detalhes.style.display = detalhes.style.display === "block" ? "none" : "block";
}
