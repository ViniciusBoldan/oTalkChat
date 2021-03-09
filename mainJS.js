document.body.style.background = localStorage.fundo
document.body.style.color = localStorage.fonte


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