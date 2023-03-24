export default class Validator {
  static validateUserName (name) {
      const re = new RegExp('^[a-zA-Z][a-zA-Z-_0-9]+[a-zA-Z]$', 'g');
      const reg = new RegExp('[0-9]{4,}', 'g');
  return re.exec(name) !== null && !reg.test(name);
  }
}

console.log(Validator.validateUserName('Natasha_-332s'));
 