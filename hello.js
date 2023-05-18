function hello(str) {
    return "Hello, " + str + "!";
};

let nome = "Lucas";
let saudacao = hello(nome);
console.log(saudacao);

module.exports = hello;