//Função que valida o botão "não" da index 
function validarBnt() {
        alert('Não é permitido a sua entrada, apenas clientes maiores de idade poderão participar das promoções.')
}
// função chamada pela "form" do formulario
// Responsavel por chamar as outra as outras funções 
//é a unica função que será iniciada com a variavel 'status = true' pois recebera o valor 'false' (falso) caso tenha algum erro de dados.
function validacaoAll() {
        let status = true;

        if (validarCaixaVazia()) {
                alert('Preencher todos os campos disponiveis!');
                status = false;
        }

        if (validarDados()) {
                alert('O tipo de dado não corresponde a sua caixa!');
                status = false;
        }

        if (validarData()) {
                alert('A data está Incorreta!')
                status = false;
        }
        if (requiridas()) {
                alert('Selecione um time')
                status = false;
        }
        if (verificar()) {
                status = false;
                alert('selecione um esporte')

        }



        return status;
}

//função que valida se  todas as caixas exceto o "checkbox" e a "opition"
//e as valida se estão vazias ou não

function validarCaixaVazia() {
        let status = false;
        let name = document.getElementById('name');
        let nickname = document.getElementById('nickname');
        let day = document.getElementById('day');
        let month = document.getElementById('month');
        let year = document.getElementById('year');
        let cpf = document.getElementById('cpf');

        //cor da caixa caso esteja certo
        name.style.backgroundColor = 'transparent'
        nickname.style.backgroundColor = 'transparent'
        day.style.backgroundColor = 'transparent'
        month.style.backgroundColor = 'transparent'
        year.style.backgroundColor = 'transparent'
        cpf.style.backgroundColor = 'transparent'

        //lógica
        //caso o nome esteja '' (vazio) se tornara 'true' (verdadeiro) e ficara vermelho
        if (name.value == '') {

                status = true;
                //cor da letra caso esteja errada
                name.style.backgroundColor = '#ffebeb';
        }

        if (nickname.value == '') {
                status = true;
                nickname.style.backgroundColor = '#ffebeb';
        }

        if (day.value == '') {
                status = true;
                day.style.backgroundColor = '#ffebeb';
        }

        if (month.value == '') {
                status = true;
                month.style.backgroundColor = '#ffebeb';
        }

        if (year.value == '') {
                status = true;
                year.style.backgroundColor = '#ffebeb';
        }

        if (cpf.value == '') {
                status = true;
                cpf.style.backgroundColor = '#ffebeb';
        }

        return status;

}

//essa função está validando os tipos de caracteres ou numeros de cada caixa
//e também as expreções regulares estão incluidas aqui
function validarDados() {
        let status = false;
        let name = document.getElementById('name')
        let nickname = document.getElementById('nickname')
        let day = document.getElementById('day')
        let month = document.getElementById('month')
        let year = document.getElementById('year')
        let cpf = document.getElementById('cpf')

        //expreção regular de caracteres
        let regexCar = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ]/;
        //expreção regular de numeros
        let regExNum = /^[0-9]/;
        //expreção regular e CPF         
        let regExCpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/; // desse jeito é obrigatorio colocar a pontuação!

        //cor da letra caso esteja certo
        name.style.color = '#000000'
        nickname.style.color = '#000000'
        day.style.color = '#000000'
        month.style.color = '#000000'
        year.style.color = '#000000'
        cpf.style.color = '#000000'

        //lógica
        //caso o nome receber quaisquer dados que não seja caracter  se tornara 'true' (verdadeiro)
        if (!regexCar.test(name.value)) {
                status = true;
                //cor da letra caso esteja errado
                name.style.color = '#f45b42';
        }

        if (!regexCar.test(nickname.value)) {
                status = true;
                nickname.style.color = '#f45b42';
        }

        if (!regExNum.test(day.value)) {
                status = true;
                day.style.color = '#f45b42';
        }

        if (!regExNum.test(month.value)) {
                status = true;
                month.style.color = '#f45b42';
        }

        if (!regExNum.test(year.value)) {
                status = true;
                year.style.color = '#f45b42';
        }

        if (!regExCpf.test(cpf.value)) {
                status = true;
                cpf.style.color = '#f45b42';
        }

        return status


}

//função que valida apenas a data
function validarData() {
        let status = false;
        let day = document.getElementById('day')
        let month = document.getElementById('month')
        let year = document.getElementById('year')
        let regDia = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])/; // expressão regular dos dias sem diferencia anos bissextos
        let regMes = /^(0[1-9]|1[0-2])/; // expressão regular do mes de 01 até 31 sem diferencia anos bissextos 
        let regAno = /^(19[0-9]{2}|20[0-21]{2})/; // expressão regular do ano de 1900 até 2021


        day.style.color = '#000000';
        month.style.color = '#000000';
        year.style.color = '#000000';

        //lógica
        //caso o dia for menor que 01 ou maior que 31 se tornara 'true' (verdadeiro)
        if (!regDia.test(day.value)) {
                status = true;
                day.style.color = '#e80707';
        }

        if (!regMes.test(month.value)) {
                status = true;
                month.style.color = '#e80707';
        }

        if (!regAno.test(year.value)) {
                status = true;
                year.style.color = '#e80707';
        }

        return status;



}

//Função que da obrigatoriedade de escolher uma opção
function requiridas() {
        let status = false;

        //logica ; O formulario é uma variavel
        let myform = document.forms['formulario'] || document.formulario;
        // se a seleção times tiver um valor de 0 será verdadeiro
        if (myform.times.value == "0" || myform.times.selectedIndex == 0) {
                status = true
        }

        return status
}

//Função obriga ter pelo menos um checkbox selecionado
function verificar() {
        let status = false; //Variavel de Verdadeiro ou Falso

        if (document.getElementsByName("sport")[0].checked) {

        } else if (document.getElementsByName("sport")[1].checked) {

        } else if (document.getElementsByName("sport")[2].checked) {

        } else if (document.getElementsByName("sport")[3].checked) {

        } else if (document.getElementsByName("sport")[4].checked) {

        } else if (document.getElementsByName("sport")[5].checked) {

        } else if (document.getElementsByName("sport")[6].checked) {

        } else {
                status = true;
        }
        return status;
}