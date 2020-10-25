module.exports = function check(str, bracketsConfig) {
    const inputBrackets = str.split('');
    let bracketStack = [];
    const openBrackets = [];
    const closeBrackets = [];
    bracketsConfig.forEach(x => {
        openBrackets.push(x[0]);
        closeBrackets.push(x[1]);
    });

    for (let i = 0; i < inputBrackets.length; i++) {
        if (openBrackets.some(x => x === inputBrackets[i])) {
            if (closeBrackets.some(x => x === inputBrackets[i])) {
                if (bracketStack[bracketStack.length - 1] === inputBrackets[i]) {
                    bracketStack.pop();
                } else {
                    bracketStack.push(inputBrackets[i])
                }
            } else {
                bracketStack.push(inputBrackets[i])
            }
        } else if (closeBrackets.some(x => x === inputBrackets[i])) {
            if (bracketStack[bracketStack.length - 1] === openBrackets[closeBrackets.indexOf(inputBrackets[i])]) {
                bracketStack.pop();
            } else {
                return false;
            }
        }
    }

    if (bracketStack.length > 0) 
        return false
    else return true;
}
