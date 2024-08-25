function criptografar(event) {
  event.preventDefault();

  const texto = document.getElementById('texto').value;

  if (/[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÇáéíóúàèìòùâêîôûãõäëïöüç]/.test(texto)) {
    alert('O texto não pode conter letras maiúsculas ou acentuadas.');

    limparTexto();
    return;
  }

  const textoCriptografado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  const textareaCriptografado = document.getElementById('texto-criptografado');
  textareaCriptografado.value = textoCriptografado;

  textareaCriptografado.style.display = 'block';
  document.querySelector('.container__conteudo__botao__copiar').style.display =
    'block';
  const botaoCopiar = document.querySelector(
    '.container__conteudo__botao__copiar',
  );
  botaoCopiar.style.display = 'block';

  document.getElementById('titulo').innerText = 'Mensagem Criptografada:';
  document.getElementById('paragrafo').innerText = '';
}

function descriptografar(event) {
  event.preventDefault();
  const texto = document.getElementById('texto').value;
  const textoDescriptografado = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  const textareaCriptografado = document.getElementById('texto-criptografado');
  textareaCriptografado.value = textoDescriptografado;
  textareaCriptografado.style.display = 'block';

  const botaoCopiar = document.querySelector(
    '.container__conteudo__botao__copiar',
  );
  botaoCopiar.style.display = 'block';

  document.getElementById('titulo').innerText = 'Mensagem Descriptografada:';
  document.getElementById('paragrafo').innerText = '';
}

function copiarTexto() {
  const textareaCriptografado = document.getElementById('texto-criptografado');
  textareaCriptografado.select();

  try {
    const sucesso = document.execCommand('copy');
    if (sucesso) {
      alert('Texto copiado com sucesso!');
    } else {
      alert('Não foi possível copiar o texto.');
    }
  } catch (err) {
    console.error('Erro ao copiar o texto: ', err);
  }
}
