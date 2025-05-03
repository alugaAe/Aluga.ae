// Passo 1: Inicialize o mapa
var map = L.map('map').setView([-8.047, -34.883], 13);  // Substitua as coordenadas pelo local desejado
    
// Passo 2: Adicione o mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Passo 3: Dados das casas (coordenadas e textos)
var casas = [
    { nome: "Casa 1", descricao: "Endereço: Rua Exemplo, 123", coords: [-8.047, -34.883] },
    { nome: "Casa 2", descricao: "Endereço: Rua Teste, 456", coords: [-8.050, -34.880] },
    { nome: "Casa 3", descricao: "Endereço: Rua Fictícia, 789", coords: [-8.045, -34.885] }
];

// Passo 4: Adicionar marcadores para todas as casas
casas.forEach(function(casa) {
    var marker = L.marker(casa.coords).addTo(map);  // Cria o marcador nas coordenadas
    marker.bindPopup("<b>" + casa.nome + "</b><br>" + casa.descricao);  // Exibe o nome e a descrição da casa
});