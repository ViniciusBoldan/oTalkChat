localStorage.setItem('mainPage', document.URL)

function changeTheme(){
    document.body.style.background = localStorage.fundo
    document.body.style.color = localStorage.fonte
}
console.log(changeTheme())
//função das barras de navegação
function openLeftNav(){
    document.getElementById('left').style.display = 'block'
    document.getElementById('left').style.width= '50vw'
    document.getElementById('left').style.left = '0vw'

    document.getElementById('right').style.display = 'block'
    document.getElementById('right').style.width= '50vw'
    document.getElementById('right').style.right = '0vw'
}
function closeLeftNav(){
    document.getElementById('left').style.display = 'none'
    document.getElementById('left').style.left = '-20vw'

    document.getElementById('right').style.display = 'none'
    document.getElementById('right').style.right = '-20vw'
}


document.getElementById('foto').src = `${localStorage.img}`
document.getElementById('name').innerText = `${localStorage.nome} ${localStorage.sobrenome}`
document.getElementById('gmail').innerText = `${localStorage.email}`