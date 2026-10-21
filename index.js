//let gloss = "francine";
//let quant = 3;
//let glossQuant = {nome: "gloss", quant: 3};
//console.log(gloss);
//console.log(quant);
//console.log(glossQuant);


//let preco;
//console.log(preco);
//console.log(typeof preco);


//let texto = "mundo js";
//let numero = 42;
//let ligado = true;
//let vazio = null;
//let indefirido;
//let numeroGrande = 100n;
//console.log(typeof texto);
//console.log(typeof numero);
//console.log(typeof ligado);
//console.log(typeof vazio);
//console.log(typeof indefirido);
//console.log(typeof numeroGrande);


//let soma = 2 + 2
//let subtracao = 8 - 2
//let multiplicacao = 3 * 3
//let divisao = 10 / 5
//let resto 10 % 5
//  console.log(`${soma} ${subtracao} ${multiplicaçao} ${divisao} ${resto}`);


//console.log(10 == '10');
//console.log(10 === '10');


//const num = 25; const texto '25'
//const resultado = num == texto; console.log(resultado)


//const temCarteira = true
//const maiorDeIdade = false
//const podeConduzir = temCarteira && maiorDeIdade;
//console.log(podeConduzir);


//const temCarteira = true
//const maiorDeIdade = false 
//const satisfaUm = temCarteira || maiorDeIdade
//console.log(satisfaUm)


//let ativo = true
//let inativo = !ativo
//console.log("Ativo:" , ativo)
//console.log("Inativo ")


//let resultado = '5' + 3;
//console.log(resultado); // 53


//let numero = number('10');
//console.log(numero + 5); // 15


//const resultado = '10' - 2;
//console.log(resultado);
//console.log(typeof resultado);


//const textoDecimal = '123.45'
//const numeroConvertido = Number(textoDecimal)
//const total = numeroConvertido + 10
//console.log(total);


//console.log(Boolean(0));
//console.log(Boolean(""));
//console.log(Boolean(100));
//console.log(Boolean("gato"));


//let saldo = 100
//saldo += 50
//saldo -= 20
//saldo *= 2
//saldo /= 4
//console.log("saldo final:", saldo)


//const idade = 20
//const mensagem = idade > 18 ? 'pode' : 'nao'
//console.log(mensagem)


//const color = 'vermelho';
//switch (color) {
//    case 'vermelho' :
//        console.log('pare')
//        break;
//        case 'amarelo' :
//            console.log('atençao');
//            case 'verde' :
//                console.log('siga');
//                break;
//}


//const frutas = ['uva', 'pera', 'maça'];
//for (const fruta of frutas) {
//    console.log("frutas da vez:", fruta);
//}


//let j = 0;
//while (j < 3) {
//    console.log("valor de j:", j);
//    j++;
//}


//let cotador = 10 
//while (contador > 0) {
//    console.log("contagem: ", contador);
//    cotador -- ; 
//}
//console.log("decolar!");


//const nums = [1, 2, 3, 4];
//const triplo = nums.map(n => n * 3);
//console.log(triplo);
//const idades = [12, 17, 18, 22, 15, 30];
//const idades = idades.filter(i => i > 18);
//console.log(maiores);


//const comidas = [
//  'banana', 'maçã', 'uva', 'limão',
//  'abóbora', 'beterraba', 'rabanete'
//];
//const frutas = comidas.map(comida =>
//  ['banana', 'maçã', 'uva', 'limão'].includes(comida) ? comida : null
//).filter(comida => comida !== null);
//const legumes = comidas.map(comida =>
//  ['abóbora', 'beterraba', 'rabanete'].includes(comida) ? comida : null
//).filter(comida => comida !== null);
//console.log("Frutas:", frutas);
//console.log("Legumes:", legumes);


//const idades = [12, 17, 18, 22, 15, 30];
//let filter = idades.filter((idade) => idade > 20);
//let map = idades.map ((idade) => idade * 20);
//console.log(filter);
//console.log(map);


//const objeto = {
  //nome: "luiza",
  //idade: 16,
//};
//const { idade } = objeto;
//console.log(idade);



const mesadas = [5, 10, 15];
const mesadasDobradas = mesadas.map(mesada => mesada * 2);
console.log("exercício 1:", mesadasDobradas);


const pontos = [3, 7, 10];
const pontosTurbinados = pontos.map(ponto => ponto + 5);
console.log("exercício 2:", pontosTurbinados);


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log("exercício 3:", pares);


const precos = [15, 30, 8, 22, 12];
const precosBaratos = precos.filter(preco => preco <= 20);
console.log("exercício 4:", precosBaratos);


const moedas = [1, 0.5, 0.25, 1, 0.25];
const totalMoedas = moedas.reduce((total, moeda) => total + moeda, 0);
console.log("exercício 5:", totalMoedas);


const fases = [120, 80, 200, 50];
const totalPontos = fases.reduce((total, pontos) => total + pontos, 0);
console.log("exercício 6:", totalPontos);


const colegas = ["qna", "pedro", "maria", "lucas", "joão"];
colegas.forEach(nome => console.log(`presente, ${nome}!`));


const figurinhas = ["leão", "tigre", "urso"];
figurinhas.forEach(animal => console.log(`tenho a figurinha do ${animal}`));


const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const imparesAoQuadrado = numeros2
    .filter(numero => numero % 2 !== 0)
    .map(numero => numero * numero);
console.log("exercício 9:", imparesAoQuadrado);


const lista = [1, 2, 3, 4, 5, 6];
const resultadoCombo = lista
    .filter(numero => numero % 2 === 0)
    .map(numero => numero * 2)
    .reduce((total, numero) => total + numero, 0);
console.log("exercício 10:", resultadoCombo);


const mochila1 = ["lápis", "caderno"];
const mochila2 = ["borracha", "régua"];
const mochilaCompleta = [...mochila1, ...mochila2];
console.log("exercício 11:", mochilaCompleta);
console.log("quantidade de itens:", mochilaCompleta.length);


const heroi = { nome: "raio azul", poder: "velocidade", nivel: 7 };
const { nome, poder } = heroi;
console.log(`exercício 12: ${nome} tem o poder de ${poder}`);
