// script.js

// Função para gerar uma chave PIX estática (para testes)
function gerarChavePIX() {
    return '00020101021126540014br.gov.bcb.pix0132gagoluisantoniovit0003@gmail.com5204000053039865802BR5915LUIS A V COELHO6013SANTANA DE MA62070503***63044200';
}

// Função para gerar QR Code (utilizando uma API de terceiros)
function gerarQRCode(dados) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(dados)}`;
}

// Evento ao clicar no botão de doação
document.getElementById('btn-doar').addEventListener('click', function() {
    const chavePIX = gerarChavePIX();
    const qrCodeURL = gerarQRCode(chavePIX);

    // Exibir chave gerada e QR code
    document.getElementById('chave-aleatoria').textContent = chavePIX;
    document.getElementById('qr-code').src = qrCodeURL;
    document.getElementById('painel-doacao').classList.add('show'); // Adicionar a classe 'show' para exibir o painel
});
