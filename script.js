const main = document.getElementById("main")
const modal = document.getElementById("modal")
const titulo = document.getElementById("titulo")
const texto = document.getElementById("texto")
const imagemModal = document.getElementById("modal-img")
const btnFechar = document.getElementById("fechar")

main.addEventListener("click", (event) => {
    const divClicada = event.target.closest("div")
    if (divClicada && main.contains(divClicada)) {
        const imagem = divClicada.dataset.imagem;

        if (imagem === "supere") {
            titulo.innerHTML = "Supere"
            imagemModal.src = "img/atlet/inicial.jpg"
            texto.innerHTML = "texto supere"
            modal.classList.add("aparece")
        } else if (imagem === "aprenda") {
            titulo.innerHTML = "Aprenda"
            imagemModal.src = ""
            texto.innerHTML = "texto aprenda"
            modal.classList.add("aparece")
        }else if (imagem === "jogue") {
            titulo.innerHTML = "jogue"
            imagemModal.src = ""
            texto.innerHTML = "texto jogue"
            modal.classList.add("aparece")
        }else if (imagem === "acredite") {
            titulo.innerHTML = "acredite"
            imagemModal.src = ""
            texto.innerHTML = "texto acredite"
            modal.classList.add("aparece")
        }else if (imagem === "juntos") {
            titulo.innerHTML = "juntos"
            imagemModal.src = ""
            texto.innerHTML = "texto juntos"
            modal.classList.add("aparece")
        }else if (imagem === "quadra") {
            titulo.innerHTML = "quadra"
            imagemModal.src = ""
            texto.innerHTML = "texto quadra"
            modal.classList.add("aparece")
        }else if (imagem === "estrategia") {
            titulo.innerHTML = "estrategia"
            imagemModal.src = ""
            texto.innerHTML = "texto estrategia"
            modal.classList.add("aparece")
        }else if (imagem === "paixao") {
            titulo.innerHTML = "paixao"
            imagemModal.src = ""
            texto.innerHTML = "texto paixao"
            modal.classList.add("aparece")
        }else if (imagem === "lance") {
            titulo.innerHTML = "lance"
            imagemModal.src = ""
            texto.innerHTML = "texto lance"
            modal.classList.add("aparece")
        }else if (imagem === "oloko") {
            titulo.innerHTML = "Cringe"
            imagemModal.src = ""
            texto.innerHTML = "texto MUITO cringe"
            modal.classList.add("aparece")
        }else if (imagem === "MVP") {
            titulo.innerHTML = "MVP1"
            imagemModal.src = ""
            texto.innerHTML = "texto MVP1"
            modal.classList.add("aparece")
        }else if (imagem === "MVP2") {
            titulo.innerHTML = "MVP2"
            imagemModal.src = ""
            texto.innerHTML = "texto MVP2"
            modal.classList.add("aparece")
        }else if (imagem === "MVP3") {
            titulo.innerHTML = "MVP3"
            imagemModal.src = ""
            texto.innerHTML = "texto MVP3"
            modal.classList.add("aparece")
        }else if (imagem === "MVP4") {
            titulo.innerHTML = "MVP4"
            imagemModal.src = ""
            texto.innerHTML = "texto MVP4"
            modal.classList.add("aparece")
        }
    }
})
fechar.addEventListener('click', ()=> {
    modal. classList.remove("aparece")
})