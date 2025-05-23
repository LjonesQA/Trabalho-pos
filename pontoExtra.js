function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number');
}

// Exemplo de uso:
const listaMista = [10, "maçã", 25, "banana", 42, "uva", 7, "teste", 88, 3, "código", 56, "javascript", 91, "fim","103"];
const apenasNumeros = filtrarNumeros(listaMista);

console.log(apenasNumeros); // [10, 25, 42, 7, 88, 3, 56, 91]

function contarVogais(texto) {
  const vogais = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
  let contador = 0;

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// Exemplo de uso:
const exemplo = "programacaO para Automacao de testes";
const totalDeVogais = contarVogais(exemplo);

console.log(`Total de vogais: ${totalDeVogais}`); // Saída: Total de vogais: 16