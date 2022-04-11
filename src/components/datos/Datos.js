import react from "react";
import datos from "./datos.css";



let frase_inspiradora="hola";


function mostrarFrase() {
  let hide_container= document.getElementById("container-tres-columnas_hide");
  hide_container.classList.add("tresColumnasShow")
}

function borrarFrase () {
  let hide_container= document.getElementById("container-tres-columnas_hide");
  hide_container.classList.remove("tresColumnasShow")
}


function displayFrase ()  {

  alert("hola");
const optionIndex =  Math.floor (Math.random()*4);
let frases = ["caca1","caca2","caca3","caca4","caca5"]
frase_inspiradora  = frases [optionIndex];




}




export class Datos extends react.Component {




    render () {
        return (

            <div class="container-datos" >

              <button class= "button_diviertete" id="button_diviertete" onClick={mostrarFrase}  >
                               inspirate
              </button>
                
                
              
            
              <div class="container-tres-columnas" id="container-tres-columnas_hide">
             
              
    
                <div class="container-title">
                    <h1 class="datos-title">Frases inspiracionales</h1> 

                </div>

                <div class="container-frase-inspiracional">
                  {frase_inspiradora}
                </div>

                <div class="container-botones-mostrar-y-cerrar">
                <button class="button_diviertete" onClick={displayFrase}>
                    mostrar frase
                  </button>

                  <button class="button_diviertete" onClick={borrarFrase}>
                    cerrar
                  </button>
                </div>

              

              </div>

            </div>
        )
    }
}