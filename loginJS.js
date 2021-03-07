function tema(){
    if(document.querySelector('head').innerHTML == '<link rel="stylesheet" href="loginStyle.css">' ){
         document.querySelector('head').innerHTML = '<link rel="stylesheet" href="loginDarkStyle.css">'
    }else{
        document.querySelector('head').innerHTML = '<link rel="stylesheet" href="loginStyle.css">'
    }

}