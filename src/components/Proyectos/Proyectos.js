import react from "react";
import proyectos from "./proyectos.css";

export class Proyectos extends react.Component {

    render () {

        return (
            
            <div class="container-proyectos-total"id="proyectos" >

          
            <div class="container-proyectos"  >
                <div class="container-tres-filas-titulo">


                    <div class="cuatro-filas-container-header">
                    
                        <h1 class="header-title"  >Proyectos</h1>
                    </div>

                </div>


                <div class="container-tres-filas-parrafo">

                <div class="cuatro-filas-container-parrafo">
                    
                    <p class="parrafo-parrafo">Here you can watch and learn about some of the projects I've been working on and maybe share some ideas to improve and build more. If you'd like to provide me with some feedback, don't hesitate and contact me.

The next projects were developed on the Codecademy Full Stack Path: Web Development Fundamentals</p>
                </div>

                </div>


                <div class="container-tres-filas-tarjetas">

                    <div class= "tres-filas-container-tarjetas">
                        <div class= "container-tarjetas-dos-containers">
                            
                            <div class= "dos-containers-container-proyecto">

                                <div class="proyecto-container-proyecto-y-texto-encima">

                                    <div class ="proyecto-container-texto-encima">

                                        <h3 class="texto-encima-subtitulo">
                                            hecho con
                                        </h3>
                                        <h1 class ="texto-encima-titulo">
                                            React Js | Css | HTML
                                        </h1>
                                    </div>
                                
                                    <div class="proyecto-container-img">
                                        <img src="./jammming.jpg" alt="jammming" class="imagen-proyecto" />
                                    </div>

                                    <div class="proyecto-container-descripcion-title">
                                        <p class="tarjeta-title">Jamming</p>
                                    </div>

                                    <div class="proyecto-container-descripcion-parrafo">
                                        <p class="tarjeta-parrafo">Aplicacion hecha en Codecademy, que consume la API de Spotify para crear listas de reproduccion</p>
                                    </div>
                                    
                                </div>
                            </div>


                        <div class= "dos-containers-container-proyecto">
                            <div class="proyecto-container-proyecto-y-texto-encima">

                                <div class ="proyecto-container-texto-encima">

                                <h3 class="texto-encima-subtitulo">
                                    hecho con
                                </h3>
                                <h1 class ="texto-encima-titulo">
                                    React Js | Css | HTML
                                </h1>
                                 </div>

                                  <div class="proyecto-container-img">
                                <img src="./ravenous.jpg" alt="ravenous" class="imagen-proyecto" />
                                 </div>

                                 <div class="proyecto-container-descripcion-title">
                                <p class="tarjeta-title">Ravenous</p>
                                  </div>

                                 <div class="proyecto-container-descripcion-parrafo">
                                <p class="tarjeta-parrafo">Aplicacion hecha en Codecademy, que consume la API de Yep para buscar restaurantes</p>
                                  </div>

                            </div>


                        </div>





                        </div>
                    </div>
                    
                </div>



              
            </div>
            </div>
            
        )

    }
}