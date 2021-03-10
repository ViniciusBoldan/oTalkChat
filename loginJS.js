function changeToLight(){
    localStorage.setItem('fundo','white')
    localStorage.setItem('fonte','black')
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte
}
function changeToDark(){
    localStorage.setItem('fundo','black')
    localStorage.setItem('fonte','white')
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte
    document.body.input.style.color = localStorage.fonte
}

function changeTheme(){
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte
}
console.log(changeTheme())
