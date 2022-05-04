import react from "react";
import informacion from "./informacion.css"


export class Informacion extends react.Component {
    render(){
        return (
            <div class="container-informacion" id="about">

                <div class="sobre-mi-container-title">
                <h1 class="sobre-mi-title"  >Sobre mi</h1>
                </div>


                <div class= "info-dos-containers">
              
                
                   
                    {/* -------------------ESTUDIOS --------------- */}
                    <div class="dos-containers-sobre-mi-estudios">

                        <div class="sobre-mi-container-estudios">
                            <div class="container-informacion-title-estudios">
                                        <h1 class="informacion-title">
                                    Estudios
                                        </h1>
                                        <h3 class="informacion-subtitle">
                                            
                                        </h3>
                               </div>

                                
                            <div class="container-informacion-parrafos-estudios">
                                    <p class="informacion-parrafos-title">
                                    Lic. en Relaciones Públicas e Institucionales 
                                </p>
                                    <p class="informacion-parrafos-parrafo">
                                    Título obtenido en UCES, Santa Fe | 2012-2018|
                                    </p>
                                    
                                    
                                    
                            </div>
                        
                      
                       
                       
                         <div class="container-informacion-parrafos-estudios">
                                

                             <p class="informacion-parrafos-title">
                                    Auxiliar Bilingüe en Inglés
                            </p>

                            <p class="informacion-parrafos-parrafo">
                                    Título obtenido en Instituto de idiomas San Roque 3015 |2006-2010|
                             </p>
                                   
                        </div>


                        <div class="container-informacion-parrafos-estudios">
                                

                             <p class="informacion-parrafos-title">
                               Tramo de formación Pedagógica (docente)
                            </p>

                            <p class="informacion-parrafos-parrafo">
                                Universidad FASTA |2020-2021|

                            </p>
                               
                        </div>
                        

                        <div class="container-informacion-parrafos-estudios">
                                

                             <p class="informacion-parrafos-title">
                             Fotografía y edición audiovisual
                            </p>

                            <p class="informacion-parrafos-parrafo">
                            Adobe Lightroom, Adobe Photoshop y Premier Pro

                            </p>
                               
                        </div>

                        </div>
                           
    
                        </div>

                      {/* -------------------ESTUDIOS --------------- */}

                    {/* --------------------EXPERIENCIA LABORAL------------- */}
                <div class="dos-containers-sobre-mi-experiencia">
                        
                            
                        <div class="container-informacion-title">
                            <h1 class="informacion-title" lang="es">
                           Experiencias laborales
                            </h1>
                            <h3 class="informacion-subtitle">
                                (ultimas)
                            </h3>
                        </div>

              


                  <div class="container-informacion-parrafos-trabajo">
                         <p class="informacion-parrafos-title">
                            2021 - Venta de espacio publicitario - Canal Veo (Trabajo actual)
                       </p>
                          <p class="informacion-parrafos-parrafo">
Visita a clientes, generación de vínculos , venta de intangibles. Trabajo administrativo (mapeo, tablas de excel, mailing, informes mensuales) . 
                          </p>
                        
                          <p class="informacion-parrafos-parrafo">
Referencia Leonardo Toretta, jefe
342 427-9000
                          </p>
                          
                <br/>
                <br/>

                                    <p class="informacion-parrafos-title">
        2020  -Comunicador Digital - Gobierno de la Provincia de Santa Fe
                                    </p>

                                    <p class="informacion-parrafos-parrafo">
        Redacción y manejo de redes sociales de Gobierno provincial y Omar Perotti, cobertura de actividades ministeriales,
         redacción de partes de prensa, creación de reporte diario de la provincia para medios, adaptación de decretos a lenguajes 
         de diseño gráfico para redes sociales y carteles en la vía pública, colaboración en el manual de estilo. Finalización por
          renuncia del ministro a cargo.                          
          <p class="informacion-parrafos-parrafo">
                Referencia Rocío Acosta, jefa
                342 537-8133
        </p>

                                    </p>
                                </div>
                        
                        
                    </div>
                   

                       

                       

                    </div>

                    
                   


          
            </div>
        )
    }
}