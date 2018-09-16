module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(pair => pair.join(''));
  const trim = (string) => {
    let result = string;
    brackets.forEach((bracket) => { result = result.replace(bracket, ''); });
    if (result.length === 0) return true;
    if (string.length === result.length) return false;
    return trim(result, brackets);
  };

  return trim(str, brackets);
};
