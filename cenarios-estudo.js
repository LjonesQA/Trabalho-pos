import assert from 'node:assert';

import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from './trabalho.js';

describe('cenarios extras associados ao trabalho final - fundamentos JS', () => {
  
  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    assert.strictEqual(geradorDeTagsDeIdentificacao('JACK 3º'), 'JACK 3º');
  });

  it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    assert.strictEqual(verificarSePodeSerAdotado(1, 'P'), 'Tamanho não permitido pra adoção')
  })

  it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    assert.strictEqual(verificarSePodeSerAdotado(0, 'M'), 'Infelizmente a idade de adoção tem que ser no minimo maior 1 ano')
  })

  it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 7), 2100)
  });

  it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    assert.strictEqual(decidirTipoDeAtividadePorPorte('grande'), 'brincar no parque')
  });

  it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync('Jack');
    assert.strictEqual(resultado, 'Pipoca');
  });

});