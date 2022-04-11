import react from 'react';
import contact from "./contact.css"

export class Contact extends react.Component {
    render() {
        return(
            <div class="container-total-contact">
            <div class="container-contact" id="contact">
                <div class="container-contact-container-dos-colummas">

                    <div class="dos-columnas-container-title">
                        <h1 class="contacto-title">Contáctame</h1>
                    </div>

                <div class="container-contact-container-dos-colummas">
                    <div class="centrar-redes">
                    <div class="dos-columnas-dos-redes">
                        <div class="dos-redes-container">
                    <a class="enlace-redes" href="//wa.me/543424450497">
                      
                        <img class="img-redes"  src="./whatsapp.png" alt="wsp" />

                     </a>
                         </div>
                    </div>

                    <div class="dos-columnas-dos-redes">
                    <div class="dos-redes-container">
                         <a class="enlace-redes" href="//mailto:agustinlevental@gmail.com">
                            <img class="img-redes" src="gmail.png" alt="Gmail" />
                          </a>
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