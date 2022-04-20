import react from 'react';
import nav from "./nav.css"; 


export class Nav extends react.Component {
    render() {
        return (
            <div class="nav-container">

        

                <div class="nav-container-tres-side">
                    <div class= "tres-containers-izq">
                    <div class="tres-containers-container-logo">
                        <a class="logo-enlace" href="#bienvenida">
                        <img class= "logo" src= "./programacion-logo.png" alt="conejo" />
                        </a>
                    </div>
                    </div>
                </div>

                <div class="nav-container-tres-containers-center">
                    <div class="tres-containers-container-menues">
                        <a class="menu" href="#certificaciones"> Certificaciones</a>
                        <a class="menu" href="#proyectos"> Proyectos</a>
                        <a class="menu" href="#skills" >Skills</a>
                        <a class="menu" href="#about" >Sobre mi </a>
                        <a class="menu" href="#contact">Contacto</a>
                       
                        
                    </div>
                </div>

                <div class="nav-container-tres-side">
                <div class= "tres-containers-der">
                    <div class="tres-containers-container-redes">
                        <a class="a-linked-in" href="//www.linkedin.com/in/agustinlevental/"><img class="linked-in" src="./linedinazul.png" alt="linked-in"/></a>
                    </div>    
                </div>
                </div>


            </div>
        )
    }
}

