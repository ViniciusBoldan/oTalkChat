function light(){
    localStorage.setItem('fundo','white')
    localStorage.setItem('fonte','black')
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte
}
function dark(){
    localStorage.setItem('fundo','black')
    localStorage.setItem('fonte','white')
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte
}

function temas(){
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte
}
console.log(temas())