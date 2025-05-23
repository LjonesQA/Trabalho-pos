function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase()
}
function verificarSePodeSerAdotado(idade, tamanho ){
  if (idade>=1) {
    return (tamanho === "M"|| tamanho ==="G" )? true
    :"Tamanho não permitido pra adoção"   
  }else{
    return "Infelizmente a idade de adoção tem que ser no minimo maior 1 ano"
  }
  
}
function calcularConsumoDeRacao(nome,idade, peso) {
  let  idadeCachorro = idade + " anos"
  let consumoDiario = peso*300
  //cheguei nesse valor de 300 atarvés da divisão de 4350 por 14.5
  return consumoDiario 
    

  
  
}
function decidirTipoDeAtividadePorPorte(porte) {
  let lugar
  switch (porte) {
    case 'pequeno':
      lugar = "dentro de casa"
      break;
    case 'medio':
      lugar = 'no jardim'
      break;
    case 'grande':
      lugar = 'no parque'  
  }
   return `brincar ${lugar}`
}
function buscarDadoAsync(params) {
  
}

export{
 geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
  
}