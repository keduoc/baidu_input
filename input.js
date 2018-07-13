keyWord.oninput = function (e) {
    if(keyWord.value){
        suggestion.classList.add('active')
    }else{
        suggestion.classList.remove('active')
    }
}