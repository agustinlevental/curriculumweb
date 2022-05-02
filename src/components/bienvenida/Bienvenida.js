import react from "react";
import bienvenida from "./bienvenida.css";

// buton mostrar mas -----
function verMas() {
    let hide_verMas= document.getElementById("hide_verMas");
    let bienvenida= document.getElementById("bienvenida");
   
    
    hide_verMas.classList.add("container-parrafo-bienvenida-otros-show");
    bienvenida.classList.add("container-bienvenida-ver-mas");
  }


export class Bienvenida extends react.Component {
    render () {
        return (
<div class="container-bienvenida" id="bienvenida">

<div class="dos-containers-derecha">
            {/* CONTAINER DERECHA */}

    

    <div class="dos-containers-container-der">
        <div class="container-foto-camisa">
            <img class="foto-camisa" 
           src="./foto-cv.jpg"
            alt="Foto Agustin" />
        </div>
    </div>

        


   
    </div>

        {/* FIN CONTAINER DERECHA */}

    <div class="dos-containers-izquierda">
        <div class= "dos-containers-container-izq">

        {/* -----------3 columnas ----------- */}
            <div class="container-izq-dos-columnas-saludo">
                <div class= "tres-columnas-saludo">
                    <h3 class="hola">
                        Hola, soy 
                    </h3>
                    <h1 class= "Agustin">
                        Agustin Levental
                    </h1>
                   
                </div>
            </div>

            <div class="container-izq-dos-columnas-texto">
   
            <div class="container-parrafo-bienvenida-uno">
                <p class="parrafo-bienvenida">
                Soy desarrollador Front-End Trainee / Junior con la motivación de seguir aprendiendo y mejorando.
Realicé la primera etapa de Argentina Programa, y luego decidí especializarme en React a través de Codecademy.

                </p>
            </div>

            </div>

            

            <div class="container-button-centrar">
                
                <button class="bienvenida-ver-mas-button" onClick={verMas}> ver mas</button>
            
            </div>
            <div class="container-parrafo-bienvenida-otros" id="hide_verMas">
                <p class="parrafo-bienvenida">
                Busco mi primera experiencia laboral como desarrollador, y deseo tomar desafíos que me mantengan aprendiendo las tecnologías más usadas en el mercado.

                </p> <br/>
                <p class="parrafo-bienvenida">
                Soy una persona proactiva, autodidacta, con mucha facilidad para aprender , y apasionada por cada proyecto que afronto.

                </p> <br/>
                <p class="parrafo-bienvenida">
                Soy Licenciado en Relaciones Públicas e Institucionales, le doy mucha importancia al ambiente de trabajo y a la posibilidad de poder aprender de mis colegas.
                </p> 
            </div>
                
           

                
        {/* -----------3 columnas ----------- */}
        </div>
    </div>



  
</div>
        )
    }
}


