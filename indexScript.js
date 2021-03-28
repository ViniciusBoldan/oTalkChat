if(localStorage.mainPageAddress){
    location.href = localStorage.getItem('mainPageAddress')

function saveLogin(){

    localStorage.setItem('userName', document.getElementById('userName').value)
    localStorage.setItem('userEmail', document.getElementById('userEmail').value)

}