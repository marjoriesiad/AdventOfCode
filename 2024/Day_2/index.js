const fs = require('fs');

fs.readFile('Day_2/input.txt', 'utf8', (err, data) => {
    // On divise le contenu du fichier en ligne en supprimant les lignes vides
 const lines = data.split('\n').filter((line) => line.trim() !== '');

 const isValid = (arr) => {
    // On vérifie si la séquence est croissante ou décroissante
    const increase = arr[0] < arr[arr.length - 1];

    // On vérifie les différences entre les nombres adjacents
    for(let i = 1; i < arr.length; i++) {
        const diff = increase ? arr[i] - arr[i - 1] : arr[i - 1] - arr[i];
        if(diff < 1 || diff > 3) return false;
    }
    return true;
 }

 const Dampener = (arr) => {
    // On vérifie que les conditions de bases sont remplies
    if(isValid(arr)) return true;

    // On crée un nouveau tableu en supprimant l'index
    // On verifie le nouveau tableau
    for(let i = 0; i < arr.length; i++) {
        const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
        if(isValid(newArr)) return true;
    }
    return false;
 }

    let safeReports = 0;
    let safeReportsRemoval = 0;
    for(const report of lines) {
        const arr = report.split(' ').map(Number);
        if(isValid(arr)) safeReports++;
        if(Dampener(arr)) safeReportsRemoval++;
    }

    console.log(`Part 1: ${safeReports}`);
    console.log(`Part 2: ${safeReportsRemoval}`);
});

