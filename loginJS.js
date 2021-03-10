alert('Para foto de perfil: Pegue o link de uma imagem qualquer, de preferencia de proporção 1:1(quadrada), pra não ficar distorcida.')
alert('Não existe qualquer segurança aqui, então não use uma de suas senhas')

function changeToLight(){
    localStorage.setItem('fundo','white')
    localStorage.setItem('fonte','red')
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte

    document.querySelector('input#imagem').style.color = localStorage.fonte
    document.querySelector('input#nome').style.color = localStorage.fonte
    document.querySelector('input#sobrenome').style.color = localStorage.fonte
    document.querySelector('input#email').style.color = localStorage.fonte
    document.querySelector('input#senha').style.color = localStorage.fonte
}
function changeToDark(){
    localStorage.setItem('fundo','black')
    localStorage.setItem('fonte','white')
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte

    document.querySelector('input#imagem').style.color = localStorage.fonte
    document.querySelector('input#nome').style.color = localStorage.fonte
    document.querySelector('input#sobrenome').style.color = localStorage.fonte
    document.querySelector('input#email').style.color = localStorage.fonte
    document.querySelector('input#senha').style.color = localStorage.fonte
}


    let cor = localStorage.getItem('fonte')
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte
    document.querySelector('input#nome').style.color = localStorage.fonte
    document.querySelector('input#sobrenome').style.color = localStorage.fonte
    document.querySelector('input#email').style.color = localStorage.fonte
    document.querySelector('input#senha').style.color = localStorage.fonte


function criarPerfil(){

    localStorage.setItem('img', document.getElementById('imagem').value)
    localStorage.setItem('nome', document.getElementById('nome').value)
    localStorage.setItem('sobrenome', document.getElementById('sobrenome').value)
    localStorage.setItem('email', document.getElementById('email').value)
    localStorage.setItem('senha', document.getElementById('senha').value)

}