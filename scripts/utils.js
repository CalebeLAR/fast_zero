// GPT https://chatgpt.com/share/ee129875-ecc2-4bf4-8d55-7d7fe8d462b8
function formatString(input) {
  // Remove acentos e caracteres especiais
  let resultado = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // Substitui todos os espaços por underline
  resultado = resultado.replace(/ /g, '_');
  // Remove pontuações e outros caracteres especiais
  resultado = resultado.replace(/[^\w_]/g, '');
  // Converte todas as letras para minúsculas
  resultado = resultado.toLowerCase();
  return resultado;
}

module.exports = { formatString };
