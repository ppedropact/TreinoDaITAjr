console.log('ex1')

function ola(texto) {
    console.log('ola, '.concat(texto).concat('!'))

}
ola('murilo')
console.log('ex2')

function ConverterIdadeemDias(idade) {
    funfunction = idade => idade * 365
    console.log(funfunction(idade))
}
ConverterIdadeemDias(25)
console.log('ex3')

function EncontrarSalario(Horas, PreçoporHora) {
    funfunction = Horas => Horas * PreçoporHora
    console.log('Salário igual a: '.concat(funfunction(Horas)))
}
EncontrarSalario(150, 40.5)
console.log('ex4')

function NumeroparaMes(numero) {
    const Meses = ['janeiro', 'fevereiro', 'abril', 'março', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    console.log(Meses[numero - 1])
}
NumeroparaMes(5)

console.log('ex5')
function MaiorOuIgual(num1, num2) {
    return console.log(num1 > num2)
}
MaiorOuIgual(0, 0)
MaiorOuIgual(0, "0")
MaiorOuIgual(5, 1)

console.log('ex6')
function inverso(valor) {
    let a = 0
    if (typeof valor == "number") { a = console.log(-valor) }
    else if (typeof valor == "boolean") { a = console.log(!valor) }
    else { a = console.log("booleano ou número esperados, mas o parâmetro é do tipo string") }
    return a
}
inverso(false)
inverso(2)
inverso('1')

console.log('ex7')
function EstaEntre(num, minimo, maximo, inclusivo = false) {
    if (inclusivo == false) {
        return console.log(minimo < num && num < maximo)
    }
    else {
        return console.log(minimo <= num && num <= maximo)
    }
}
EstaEntre(2, 1, 4)
EstaEntre(4, 4, 5, true)
EstaEntre(1, 2, 3)

console.log('ex8')
function Multiplicar(num1, num2) {
    let numf = 0
    for (let i = 0; i < num2; i++) {
        numf += num1
    }
    return console.log(numf)
}
Multiplicar(2, 3)
Multiplicar(0, 7)
console.log('ex9')
function repetir(objeto, repetições) {
    let a = []
    for (let i = 0; i < repetições; i++) {
        a[i] = objeto
    }
    return console.log(a)
}
repetir(1, 3)
repetir("fps", 4)
console.log('ex10')
function SimboloMais(numvezes) {
    let a = []
    for (let i = 0; i < numvezes; i++) {
        a += '+'
    }
    return console.log(a)
}
SimboloMais(3)
SimboloMais(6)
console.log('ex10')
function receberPrimeiroEUltimoElemento(ArrayEntrada) {
    let ArraySaida = ['', '']
    let n = ArrayEntrada.length

    ArraySaida[0] = ArrayEntrada[0]
    ArraySaida[1] = ArrayEntrada[n - 1]
    return console.log(ArraySaida)
}
receberPrimeiroEUltimoElemento(["12", "2", "3"])
receberPrimeiroEUltimoElemento([7, 14, 21, 34, "olá"])
console.log('ex11')
function removerPropriedade(objeto, _propriedade) {
    let a = new Object
    a = Object.assign({}, objeto)
    delete a[_propriedade]
    return console.log(a)
}
removerPropriedade({ b: 8, a: 6, type: "normal" }, 'a')
console.log('ex12')
function receberSomenteOsParesDeIndicesPares(ArrayEntrada) {
    let ArraySaida = []
    let counter = 0
    for (let i = 0; i < (ArrayEntrada.length) / 2; i++) {
        if (ArrayEntrada[i * 2] % 2 == 0) {
            ArraySaida[counter] = ArrayEntrada[i * 2]
            counter++
        }
    }
    return console.log(ArraySaida)
}
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])
console.log('ex13')
function checarAnoBissexto(ano) {
    return console.log(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0)
}
checarAnoBissexto(2020)
checarAnoBissexto(2100)
checarAnoBissexto(1600)
console.log('ex14')
function somarNumeros(ArrayEntrada) {
    let soma = 0
    for (let i = 0; i < (ArrayEntrada.length); i++) {
        soma += ArrayEntrada[i]
    }
    return console.log(soma)
}
somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])
console.log('ex15')
function despesasTotais(ObjetoEntrada) {
    let preço = 0
    for (let item of ObjetoEntrada) {
        preço += item.preço
    }
    return console.log(preço)
}
despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preço: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preço: 150 }
])
console.log('ex16')
function calcularMedia(ArrayEntrada) {
    let acumulador = 0
    for (let i = 0; i < ArrayEntrada.length; i++) {
        acumulador += ArrayEntrada[i]
    }
    return console.log(acumulador / ArrayEntrada.length)
}
calcularMedia([1, 2, 3, 4, 5])
console.log('ex17')
function areaDoTriangulo(base, altura) {
    return console.log((base * altura / 2).toFixed(2))
}
areaDoTriangulo(10, 15)
areaDoTriangulo(9.25, 13.1)
console.log('ex18')
function menorNumero(ArrayEntrada) {
    let menor = ArrayEntrada[0]
    for (let i = 0; i < ArrayEntrada.length; i++) {
        if (menor > ArrayEntrada[i]) { menor = ArrayEntrada[i] }
    }
    return console.log(menor)
}
menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])
console.log('ex19')
function funcaoDaSorte(NumeroEntrada) {
    let a = Math.floor(Math.random() * 10) == NumeroEntrada ? "Parabéns! O número sorteado foi o $(NumeroEntrada)" : "Que pena! O número sorteado foi o $()"
    return console.log(a)
}
funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)
console.log('ex20')
function contarPalavras(StringEntrada) {
    let counter = 0
    for (let i = 0; i < StringEntrada.length; i++) {
        if (i == 0) { if (StringEntrada[0] != ' ') { counter++ } }
        if (StringEntrada[i] == ' ' && (StringEntrada[i - 1] != ' ')) { counter++ }
    }
    return console.log(counter)
}
contarPalavras("Sou uma frase")
contarPalavras("Me divirto aprendendo a programar")

console.log('ex21')
function contarCaractere(Letra, StringEntrada) {
    let counter = 0
    for (let i = 0; i < StringEntrada.length; i++) {
        if (StringEntrada[i] == Letra) { counter++ }
    }
    return console.log(counter)
}
contarCaractere("r", "A sorte favorece os audazes")
contarCaractere("c", "Conhece-te a ti mesmo")

console.log('ex22')
function buscarPalavrasSemelhantes(Palavra, ArrayEntrada) {
    let ArraySaida = []
    let counter = 0
    let counter2 = 0
    for (let i = 0; i < ArrayEntrada.length; i++) {
        counter = 0
        for (let j = 0; j < ArrayEntrada[i].length; j++) {
            counter = 0
            for (let k = 0; k < Palavra.length; k++) {
                if (Palavra[k] == ArrayEntrada[i][j + k]) { counter++ }
                else { counter = 0 }
                if (counter == Palavra.length) {
                    ArraySaida[counter2] = ArrayEntrada[i]
                    counter2++
                    break
                }
            }
        }
    }
    return console.log(ArraySaida)
}
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
console.log('ex23')
//duvida
function removerVogais(StringEntrada) {
    let StringSaida = StringEntrada
    let counter = 0
    for (let i = 0; i < StringEntrada.length; i++) {
        if (!['a', 'e', 'i', 'o', 'u'].includes(StringEntrada[i])) {
            StringSaida[counter] = StringEntrada[i]
            counter++
        }
    }
    return console.log(StringSaida)
}
removerVogais("Cod3r")
removerVogais("Fundamentos")

console.log('ex24')
function inverter(ObjetoEntrada) {

}
inverter({ a: 1, b: 2, c: 3 })

console.log('ex25')
function filtrarPorQuantidadeDeDigitos() { }
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]

console.log('ex26')
function segundoMaior() { }
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6

console.log('ex27')
function recerberMelhorEstudante(ObjetoEntrada) {
    let mediaaluno = ['']
    for (let i = 0; i < ObjetoEntrada.length; i++) { mediaaluno[i] = calcularMedia(ObjetoEntrada[i]) }
    let maior = mediaaluno[0]
    Maiornew = 0
    for (let j = 0; j < ObjetoEntrada.length; j++) {
        if (mediaaluno[j] > maior) {
            maior = mediaaluno[j]
            Maiornew = j
        }
    }
    return console.log(ObjetoEntrada[Maiornew])
}
recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }


