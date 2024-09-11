const makeFirstCapital = ([initialChar, ...remainingChars]) =>
    initialChar.toUpperCase() + remainingChars.join('');

const colorList = ['red', 'green', 'blue'];

const formattedColors = colorList.map(color => makeFirstCapital(color));

console.log(formattedColors);
