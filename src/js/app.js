export default class Validator {
  static validateUserName (name) {
    const exeptThreeNumbersInRow = '[0-9]{4,}';
    const onlyLatinLetters = '[a-zA-Z]';
    const dashCharacters = '-';
    const underscoreCharacters = '_';
    const anyNumbers = '0-9';

    // const re = new RegExp('^[a-zA-Z][a-zA-Z-_0-9]+[a-zA-Z]$', 'g');
      const re = new RegExp(onlyLatinLetters && onlyLatinLetters && dashCharacters && underscoreCharacters && anyNumbers + onlyLatinLetters, 'g');
      const reg = new RegExp(exeptThreeNumbersInRow, 'g');
  return re.exec(name) !== null && !reg.test(name);
  }
}

// console.log(Validator.validateUserName('Natasha_-332s'));
 