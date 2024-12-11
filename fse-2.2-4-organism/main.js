// const fs = require('fs');  /* see notes below */
// return a random dna base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
// create a dna strand
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// map dna complements
const dnaComplements = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};
// P. Aequor factory function to create objects (good model, even if 100% fake)
const pAequorFactory = (specimenNumber, dna15BaseArr) => {
  return {
    specimenNum: specimenNumber,
    dna: dna15BaseArr,
    mutate() {
      const randPosition = Math.floor(Math.random() * this.dna.length);
      this.dna[randPosition] = newRandomBase(this.dna[randPosition]);
      return this.dna; 
    },
    // compare % of this dna to specimen2 in parameter, return % as decimal
    compareDNA(specimen2) {
      if (this.dna.length !== specimen2.dna.length) return 0;
      const matchCount = this.dna.filter((element, index) => element === specimen2.dna[index]).length;
      const matchPercent = (matchCount / specimen2.dna.length) * 100;
      console.log(
        `specimen #${this.specimenNum} and specimen #${specimen2.specimenNum} ` +
        `have ${100*matchPercent}% DNA in common`);
      return matchPercent; 
    },
    // C or G dna higher than 60% in strand likely to survive, return % as decimal
    willLikelySurvive() {
      const cgMatchCount = this.dna.filter(element => element === 'G' || element === 'C').length;
      const matchPercent = (cgMatchCount / this.dna.length) * 100;
      return (matchPercent >= 60);
    },
    // return complement (opposite) dna strand
    complementStrand() {
      return this.dna.map(neucleotide => dnaComplements[neucleotide]);
    },
    toString() {
      return `Specimen #${this.specimenNum}: ${this.dna.join('')}`;
    },    
  };
};
// to mutate, must change to a different base, return a random one
const newRandomBase = excludeBase => {
  const bases = ["A", "T", "C", "G"];
  const filteredBases = bases.filter(base => base !== excludeBase);
  return filteredBases[Math.floor(Math.random() * filteredBases.length)];
};
//  return the % relation of the 2 closest dna strands as a decimal %
const closestRelated = pAequorArr => {
  let closest = 0;
  let compare = 0;
  let pair = null;
  for (let i = 0; i < pAequorArr.length; i++) {
    for (let j = 0; j < pAequorArr.length; j++) {
      if (i !== j) { // Skip comparison if i === j
        compare = pAequorArr[i].compareDNA(pAequorArr[j]);
        if (compare > closest) {
          closest = compare;
          pair = [pAequorArr[i], pAequorArr[j]]; 
        }
      }
    }
  }
  console.log(`The closest related specimens are ${Math.round(closest)}% identical`);
};

// // Create array of 30 pAequor likely to survive 
// const createLikely30 = () => {
//   const likely30 = [];
//   let currentNumber = 1;
//   let unlikelyNumber = 1;
//   while (likely30.length < 30) {
//     const prospect = pAequorFactory(currentNumber, mockUpStrand());
//     if (prospect.willLikelySurvive()) {
//       likely30.push(prospect);
//       currentNumber++;
//     } else {
//       unlikelyNumber++;
//     }
//   }
//   return likely30;
// };
//
// Create the array
let likelyToSurvive30 = //createLikely30();
// Note: to create the array, I logged the array to likelyToSurvive30.json and copy/pasted
// To file log, I uncommented the first require line and removed type line from package.json
// Then, uncomment next 7 lines, and the array assignment half-line 3 lines above
// Note: I had to reformat as factory objects to get facotry object methods to work
// const oneLineStringify = (obj) => {
//   return JSON.stringify(obj).replace(/},/g, '},\n');
// };
// fs.writeFile('likelyToSurvive30.json', oneLineStringify(likelyToSurvive30), (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
[
pAequorFactory(1, ["T","T","G","A","C","A","C","A","G","C","T","G","C","G","C"] ),
pAequorFactory(2, ["T","G","G","A","C","C","C","C","A","G","A","C","A","G","G"] ),
pAequorFactory(3, ["A","C","T","G","G","C","A","G","C","G","A","A","G","G","A"] ),
pAequorFactory(4, ["C","G","C","T","C","G","C","A","C","G","G","G","G","C","T"] ),
pAequorFactory(5, ["C","C","A","T","C","C","A","G","A","G","G","C","G","C","T"] ),
pAequorFactory(6, ["T","G","C","G","G","T","T","A","G","G","G","C","C","T","T"] ),
pAequorFactory(7, ["T","C","C","G","C","C","G","T","C","A","G","C","A","A","A"] ),
pAequorFactory(8, ["A","C","G","C","C","T","C","A","C","G","C","C","A","C","C"] ),
pAequorFactory(9, ["A","T","C","G","G","C","G","G","C","A","C","C","T","T","T"] ),
pAequorFactory(10, ["G","G","A","A","T","C","G","T","G","G","C","T","G","G","A"] ),
pAequorFactory(11, ["C","A","A","C","G","C","A","A","G","G","G","A","A","G","C"] ),
pAequorFactory(12, ["T","C","C","C","G","G","G","A","T","C","G","G","T","T","C"] ),
pAequorFactory(13, ["A","T","G","G","T","A","C","C","G","C","C","G","C","G","A"] ),
pAequorFactory(14, ["T","C","A","C","G","A","A","G","C","G","C","A","G","C","T"] ),
pAequorFactory(15, ["T","A","C","C","C","C","C","G","C","G","T","A","T","T","C"] ),
pAequorFactory(16, ["G","G","G","C","C","A","T","C","C","T","G","C","G","T","G"] ),
pAequorFactory(17, ["G","G","G","A","G","A","A","G","G","T","G","G","T","C","G"] ),
pAequorFactory(18, ["G","C","G","C","G","G","A","C","T","A","T","C","T","G","G"] ),
pAequorFactory(19, ["C","A","A","C","G","T","G","G","C","G","G","G","T","T","A"] ),
pAequorFactory(20, ["C","C","C","G","C","G","T","A","G","C","T","G","A","T","G"] ),
pAequorFactory(21, ["A","G","G","G","C","T","T","C","C","A","A","G","C","C","A"] ),
pAequorFactory(22, ["G","G","G","A","A","T","G","A","G","G","A","G","G","G","T"] ),
pAequorFactory(23, ["C","C","G","A","T","T","C","T","G","G","G","C","G","G","A"] ),
pAequorFactory(24, ["C","T","T","C","T","C","G","C","T","C","T","T","C","G","C"] ),
pAequorFactory(25, ["G","C","T","C","C","C","A","T","G","T","T","C","T","C","C"] ),
pAequorFactory(26, ["C","A","C","G","G","G","T","G","C","T","C","A","T","C","T"] ),
pAequorFactory(27, ["T","T","T","C","G","T","T","T","G","G","C","G","G","G","C"] ),
pAequorFactory(28, ["G","A","G","C","T","T","T","G","C","G","G","G","T","A","C"] ),
pAequorFactory(29, ["A","T","G","A","C","C","C","T","A","C","T","C","C","G","G"] ),
pAequorFactory(30, ["G","C","G","C","C","C","T","A","G","G","C","T","C","A","A"] )
];

const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());

console.log(`pAequous DNA:      ${specimen1.dna.join(',')}`);
console.log(`Complement strand: ${specimen1.complementStrand()}`);
closestRelated(likelyToSurvive30);
// console.log(likelyToSurvive30);
// console.log('Original DNA:', specimen1.dna);
// console.log('Mutated DNA:', specimen1.mutate());
// console.log(specimen1.compareDNA(specimen2));
// console.log(specimen1.willLikelySurvive());