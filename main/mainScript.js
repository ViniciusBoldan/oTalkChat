localStorage.setItem('mainPageAddress', document.URL)

//enviar mensagem
let formVar = document.getElementById('inputArea')
let inputVar = document.getElementById('messageText')

formVar.addEventListener('submit', function(e){
    e.preventDefault()
    inputVar.value = ''
})

function sendMessage(){
    let messageContent = document.getElementById('messageText').value
                
    let itemMessage = document.createElement('li')
    itemMessage.textContent = messageContent
    messageListArea.appendChild(itemMessage)
    window.scrollTo(0, document.body.scrollHeight)
}


//verifica se existem contatos salvose adiciona a lista
let i = 0
for(i=1; i<20; i++){

    if(localStorage.getItem(`ContactName${i}`)){

        contactItem = document.createElement('button')
        contactItem.textContent = localStorage.getItem(`ContactName${i}`)
        contactList.appendChild(contactItem)
    }
}

//cria novo conato
var counter = 1
function createContact(){
    let contactName = prompt('Nome do contato')
    localStorage.setItem(`ContactName${counter++}`, contactName)

    let contactemail = prompt('Email do contato')

    contactItem = document.createElement('button')
    contactItem.textContent = contactName
    contactList.appendChild(contactItem)
}

//abrir mensagens do contato
let contactsList = document.getElementById('contactList')

contactsList.addEventListener('click', function(){
    let chatArea = document.getElementById('messageListArea')
    chatArea.innerHTML = ''
})

//abrir e fechar aba esquerda em telas menores
function openTab(){
    document.getElementById('left').style.width = '60vw'
    document.getElementById('left').style.visibility = 'visible'
    document.getElementById('left').style.left = '0vw'
}
function closeTab(){
    document.getElementById('left').style.width = '25vw'
    document.getElementById('left').style.visibility = 'hidden'
    document.getElementById('left').style.left = '-30vw'
}