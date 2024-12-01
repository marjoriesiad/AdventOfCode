const fs = require('fs');

let leftArray = [];
let rightArray = [];

fs.readFile('2024/Day_1/input.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    };

    const lines = data.split('\n');
    lines.forEach(line => {
        const number = line.trim().split(/\s+/);
        if (number.length === 2) {
            leftArray.push(parseInt(number[0], 10));
            rightArray.push(parseInt(number[1], 10));
        }
    });
    leftArray = leftArray.sort((a, b) => a - b);
    rightArray = rightArray.sort((a, b) => a - b);

    // Comparer les valeurs de rightArray et leftArray afficher la différence
    // entre les deux valeurs et additionner les différences
    let sum = 0;
    for (let i = 0; i < leftArray.length; i++) {
        sum += Math.abs(leftArray[i] - rightArray[i]);
    }
    

    console.log(sum);

    // Calculer le score de similarité entre les deux tableaux
    let similarityScore = 0;
    for (let i = 0; i < leftArray.length; i++) {
        const leftNumber = leftArray[i];
        const rightNumber = rightArray[i];
        const count = rightArray.filter(number => number === leftNumber).length;
        similarityScore += leftNumber * count;
    }

    console.log(similarityScore);

});

