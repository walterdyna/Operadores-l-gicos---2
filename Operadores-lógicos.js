
/* Operadores lógicos

&& -> E -> Pessoa Exigente /  Pessoa Obediente
    true && true -> true
    true && false -> false
    false && true -> false
    false && false -> false

|| -> Ou -> Tanto faz / Filho Espertinho
    true || true = true
    true || false = true
    false || true = true
    false || false = false

! -> Negação
    !true = falso
    !false = verdadeiro

*/

/*
Mariazinha é exigente. Ela Não quer o Joãozinho
Bonito &&(E) Inteligente &&(E) Programador &&(E) Tem que ter carro -> Mariazinha quer tudo isso
Não e Bonito // Inteligente // Programador // Tem carro // Joãozinho
*/

console.log(false && true && true && true) //false -. Joãozinho esta fora

/* Luluzinha não é tão exigente. Ela quer o Paulinho
Bonito ||(Ou) Inteligente ||(Ou) Programador ||(Ou) Tem que ter carro -> Luluzinha quer qualquer coisa
Não e Bonito // Burro // Não é Programador // Tem carro // Paulinho
*/

console.log(false || false || false || true) // verdadeiro Paulinho ta dentro

//trabalhando no banco -- Senha, Token ou numero da conta

const digiteASenha = true
const digiteOToken = true
const digiteONumeroDaConta = true

//operador OU UMA das 3 alternativa esta certa
if(digiteASenha || digiteOToken || digiteONumeroDaConta) {
    console.log('Logado com sucesso')
}else {
    console.log('Não foi possível logar')
}

//operador E todas as 3 alternativa precisam estar certas
if(digiteASenha && digiteOToken && digiteONumeroDaConta) {
    console.log('Logado com sucesso')
}else {
    console.log('Não foi possível logar')
}

//Operador de inversão
//operador de inversão ele vai inverter o valor da variavel
if(!(digiteASenha && digiteOToken && digiteONumeroDaConta)) {
    console.log('Logado com sucesso')
}else {
    console.log('Não foi possível logar')
}