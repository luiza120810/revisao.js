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


const comidas = [
  'banana', 'maçã', 'uva', 'limão',
  'abóbora', 'beterraba', 'rabanete'
];

const frutas = comidas.map(comida =>
  ['banana', 'maçã', 'uva', 'limão'].includes(comida) ? comida : null
).filter(comida => comida !== null);

const legumes = comidas.map(comida =>
  ['abóbora', 'beterraba', 'rabanete'].includes(comida) ? comida : null
).filter(comida => comida !== null);

console.log("Frutas:", frutas);
console.log("Legumes:", legumes);