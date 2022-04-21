import react from "react";
import skills from "./skills.css";

export class Skills extends react.Component {

    render() {
        return(
            <div class="container-skills-container-total" id="skills">
            <div class= "container-skills" >


                <div class= "container-tres-containers-title">
                    <div class="tres-containers-container-title">
                        <h2 class= "title-skills">Skills</h2>
                    </div>
                </div>


                <div class= "container-tres-containers-parrafo">
                <div class="tres-containers-container-parrafo">
                        <p class= "parrafo-skills">Estas habilidades las adquirí a través de los cursos anteriormente certificados, y de acuerdo al plan de desarrollador web full-stack de CodeCademy , del cual me falta terminar el tramo de Back-End</p>
                    </div>
                </div>


                <div class= "container-tres-containers-tarjetas">
                    <div class= "tres-containers-container-tarjetas"> {/* este conteiner no tiene que tener width 100% */}
                        <div class= "container-tarjetas-container-cinco-tarjetas">


                            <div class= "cinco-tarjetas-container-tarjeta">
                            
                                <div class="tarjeta-container-img">
                                    <img class="img-skill" src="./html5.png" alt= "HTML5"/>
                                </div>

                                <div class="tarjeta-container-title">
                                    <h2 class="title"> HTML 5</h2>
                                </div>

                                <div class="skills-tarjeta-container-parrafo">
                                    <p class="parrafo">Level:Intermediate</p>
                                </div>
                            </div>


                            <div class= "cinco-tarjetas-container-tarjeta">

                            <div class="tarjeta-container-img">
                                    <img class="img-skill" src="./css3.png" alt= "CSS"/>
                                </div>

                                <div class="tarjeta-container-title">
                                    <h2 class="title"> CSS</h2>
                                </div>

                                <div class="skills-tarjeta-container-parrafo">
                                    <p class="parrafo">Level:Intermediate</p>
                                </div>
                                
                            </div>

                            <div class= "cinco-tarjetas-container-tarjeta">
                          
                            <div class="tarjeta-container-img">
                                    <img class="img-skill" src="./javascript.png" alt= "JavaScript"/>
                                </div>

                                <div class="tarjeta-container-title">
                                    <h2 class="title"> JavaScript</h2>
                                </div>

                                <div class="skills-tarjeta-container-parrafo">
                                    <p class="parrafo">Level:Basic</p>
                                </div>
                                
                            </div>
                          

                            <div class= "cinco-tarjetas-container-tarjeta">
                            <div class="tarjeta-container-img">
                                    <img class="img-skill" src="./react.png" alt= "React"/>
                                </div>

                                <div class="tarjeta-container-title">
                                    <h2 class="title"> React</h2>
                                </div>

                                <div class="skills-tarjeta-container-parrafo">
                                    <p class="parrafo">Level:Basic</p>
                                </div>
                                
                            </div>
                            

                            <div class= "cinco-tarjetas-container-tarjeta">
                            <div class="tarjeta-container-img">
                                    <img class="img-skill" src="git.png" alt= "Git"/>
                                </div>

                                <div class="tarjeta-container-title">
                                    <h2 class="title"> Git</h2>
                                </div>

                                <div class="skills-tarjeta-container-parrafo">
                                    <p class="parrafo">Level:Basic</p>
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
