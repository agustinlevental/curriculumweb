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
                    
                    <p class="parrafo-parrafo"> Aqui se pueden ver los dos proyectos de graduación realizados en Codecademy, que incluyen HTML , CSS responsive y React con sus respectivas request a API's. Posteriormente aprendí a realizar las request a través de Async y Await , y a través de Hooks con useEffect.</p>
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
                                        <a class="enlace-ver-repositorio" href="//github.com/agustinlevental/playlist"> <h5 class="ver-repositorio">ver repositorio</h5> </a>
                                    </div>
                                
                                    <div class="proyecto-container-img">
                                       <img src="./jammming.jpg" alt="jammming" class="imagen-proyecto" />
                                    </div>

                                    <div class="proyecto-container-descripcion-title">
                                        <p class="tarjeta-title">Jamming</p>
                                    </div>

                                    <div class="proyecto-container-descripcion-parrafo">
                                        <p class="tarjeta-parrafo">Aplicacion que consume la API de Spotify para traer un JSON de canciones y crear listas de reproduccion</p>
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

                                <a class="enlace-ver-repositorio" href="//github.com/agustinlevental/reavenous-foods"> <h5 class="ver-repositorio">ver repositorio</h5> </a>
                                 </div>

                                  <div class="proyecto-container-img">
                              <img src="./ravenous.jpg" alt="ravenous" class="imagen-proyecto" /> 
                                 </div>

                                 <div class="proyecto-container-descripcion-title">
                                <p class="tarjeta-title">Ravenous</p>
                                  </div>

                                 <div class="proyecto-container-descripcion-parrafo">
                                <p class="tarjeta-parrafo">Aplicacion que consume la API de Yelp para buscar restaurantes según diferentes criterios</p>
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