import react from 'react';
import certificaciones from "./certificaciones.css"

export class Certificaciones extends react.Component {
    render() {
        return  (
        <div class="container-certificaciones-total" id="certificaciones">
        <div class="container-certificaciones" >
            
                <div class="certificaciones-container-title">
                    <h1 class="certificaciones-title"> Certificaciones</h1>
                </div>

                
                <div class="certificaciones-container-tarjetas">
              {/* tarjeta 1 ---------- */}
                                <div class="tres-tarjetas">
                                        <div class="tarjeta-container-imagen-code-cademy">
                                            <img class="logo-codecademy" src=".\codecademylogo.jpg" alt="codecademy" />
                                        </div>
                                    <div class="tarjeta-informacion">
                                        
                                            <div class ="tarjeta-container-title">
                                                <h2 class="curso-title">Learn React Course </h2>
                                            </div>
                                            <div class="tarjeta-container-subtitle">
                                            <h2 class="curso-subtitle">  Codecademy </h2>
                                            </div>
                                            <div class="tarjeta-container-parrafo">
                                            <h3 class="curso-fecha"> Abril 2022 </h3>
                                            </div>
                                            <div class="tarjeta-container-credencial">
                                            <a class="enlace-ver-credencial" href="//drive.google.com/file/d/1SUwrKT9gQlDl1fJHvqRCIyUeWHIp1U5R/view?usp=sharing"> <h5 class="ver-credencial">ver credencial</h5> </a>
                                            </div>
                                        
                                    </div>

                                </div>
            {/* tarjeta 2 ---------- */}
                               <div class="tres-tarjetas">
                                        <div class="tarjeta-container-imagen-code-cademy">
                                            <img class="logo-codecademy" src=".\codecademylogo.jpg" alt="codecademy" />
                                        </div>
                                    <div class="tarjeta-informacion">
                                        
                                            <div class ="tarjeta-container-title">
                                                <h2 class="curso-title">Create a Front-End App wit React</h2>
                                            </div>
                                            <div class="tarjeta-container-subtitle">
                                            <h2 class="curso-subtitle">  Codecademy </h2>
                                            </div>
                                            <div class="tarjeta-container-parrafo">
                                            <h3 class="curso-fecha">  Marzo 2022 </h3>
                                            </div>
                                            <div class="tarjeta-container-credencial">
                                            <a class="enlace-ver-credencial" href="//drive.google.com/file/d/1oTbTICGEmAKkMXjMA6h-0GnWaZvkzmpo/view?usp=sharing"> <h5 class="ver-credencial">ver credencial</h5> </a>
                                            </div>
                                        
                                    </div>

                                </div>

            {/* tarjeta 3 ---------- */}
                                <div class="tres-tarjetas">
                                        <div class="tarjeta-container-imagen-code-cademy">
                                            <img class="logo-codecademy" src=".\codecademylogo.jpg" alt="codecademy" />
                                        </div>
                                    <div class="tarjeta-informacion">
                                        
                                            <div class ="tarjeta-container-title">
                                                <h2 class="curso-title">Learn CSS Course </h2>
                                            </div>
                                            <div class="tarjeta-container-subtitle">
                                            <h2 class="curso-subtitle">  Codecademy </h2>
                                            </div>
                                            <div class="tarjeta-container-parrafo">
                                            <h3 class="curso-fecha">  Marzo 2022</h3>
                                            </div>
                                            <div class="tarjeta-container-credencial">
                                            <a class="enlace-ver-credencial" href="//drive.google.com/file/d/1Ltcs1zgIo6tVQ9I2hwjd2KMdT6y6I295/view?usp=sharing"> <h5 class="ver-credencial">ver credencial</h5> </a>
                                            </div>
                                        
                                    </div>

                                </div>
                                
                     </div>

                        
                </div>
             </div>
    )}
}