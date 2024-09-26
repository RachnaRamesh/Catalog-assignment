
function decodeBase(value, base) {
    return parseInt(value, base);
}

function findConstantTerm(points) {
    const n = points.length;
    let constantTerm = 0;

    for (let i = 0; i < n; i++) {
        let xi = points[i].x;
        let yi = points[i].y;

        let li = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                li *= (0 - points[j].x) / (xi - points[j].x);
            }
        }

        constantTerm += yi * li;
    }

    return constantTerm;
}


const firstTestCase = [
    { base: 10, value: "4", x: 1 },
    { base: 2, value: "111", x: 2 },
    { base: 10, value: "12", x: 3 },
    { base: 4, value: "213", x: 6 }
];


const decodedFirstTestCase = firstTestCase.map(point => ({
    x: point.x,
    y: decodeBase(point.value, point.base)
}));


const constantTerm1 = findConstantTerm(decodedFirstTestCase);
console.log("The constant term 'c' for the first test case is:", constantTerm1);


const secondTestCase = [
    { base: 10, value: "28735619723837", x: 1 },
    { base: 16, value: "1A228867F0C4", x: 2 },
    { base: 12, value: "32811AAA087B", x: 3 },
    { base: 11, value: "91978721331A", x: 4 },
    { base: 16, value: "1A2288672E1", x: 5 },
    { base: 10, value: "28735619654702", x: 6 },
    { base: 14, value: "71AB5070C4B", x: 7 },
    { base: 9, value: "122662581541670", x: 8 },
    { base: 8, value: "6421210303765", x: 9 }
];


const decodedSecondTestCase = secondTestCase.map(point => ({
    x: point.x,
    y: decodeBase(point.value, point.base)
}));

const constantTerm2 = findConstantTerm(decodedSecondTestCase);
console.log("The constant term 'c' for the second test case is:", constantTerm2);