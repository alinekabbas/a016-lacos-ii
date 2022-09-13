const numeroDeGols = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

//Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols

for (let i = 0; i < numeroDeGols.length; i++) {
    console.log(`Temporada ${i+1} : Nº de gols: ${numeroDeGols[i]}`);
    
}