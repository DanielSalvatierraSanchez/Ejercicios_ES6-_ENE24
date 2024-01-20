/* 7.1 Dado el siguiente array, haz una suma de todas las notas de los examenes de los alumnos usando la función .reduce(). */

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]

const sumaNotesExam = exams.reduce((acc, sumaNotes) => acc + sumaNotes.score, 0);
console.log(sumaNotesExam);

console.log(exams.reduce((acc, sumaNotes) => acc + sumaNotes.score, 0));

/* 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce(). */

const sumaNotesGoods = exams.reduce((acc, sumaValidExam) => {
     if (sumaValidExam.score >= 5) {
        return acc + sumaValidExam.score;
    } else {
     return acc;
    }
}, 0);
console.log(sumaNotesGoods);

console.log(exams.reduce((acc, sumaValidExam) => { return sumaValidExam.score >= 5 ? acc + sumaValidExam.score : acc }, 0));

/* 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */

const mediaOfNotes = exams.reduce((acc, medias) => acc + medias.score, 0) / exams.length;
console.log(mediaOfNotes);

console.log(exams.reduce((acc, media) => acc + media.score, 0) / exams.length)
