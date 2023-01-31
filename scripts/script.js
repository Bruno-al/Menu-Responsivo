function abrirMenu(){
    let menu = document.querySelector("#menu")

    menu.addEventListener("click", () =>{
        document.querySelector(".pesquisa").classList.toggle("aparecer_menu")
        document.querySelector(".linguagens").classList.toggle("aparecer_menu")
        
    })

    
}
    
abrirMenu()