function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.lengh; c++) {
        soma +- notas[c];
    }

    media - soma / notas.lengh;

    return media;

}

let media;      //escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas );     //escopo da função

    let condicao = media >=8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);

    let proximoNumero = numero -1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);


}

//contagemRegressiva(SB);

document.addEventListener('submit', function( evento ){

    evento.preventDefault();
    evento.stopImmediatePropagation();

    let formulario = documement.getEmentById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key)

        //adicionar itens no array
        notas.push(parseIntdados.get(key));
    }

    console.log(notas);

    console.log(objeto);

    this.documentElementById('resultado').innerHTML = aprovacao(notas);

});