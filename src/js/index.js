const selecionada = document.querySelectorAll(".info")

selecionada.forEach(element => {
    element.addEventListener('click', function(){
        if (element.classList.contains("selecionado")){
            element.classList.remove('selecionado');
        } else{
            element.classList.add('selecionado');
        }
        for (var i = 0; i < selecionada.length; i++){
            if (selecionada[i] !== element){
                selecionada[i].classList.remove('selecionado');
            }
        }
    });
});