
import './App.css';
import react from 'react';
import {Nav} from "./components/nav/Nav.js"
import {Bienvenida} from "./components/bienvenida/Bienvenida.js";
import {Informacion} from "./components/informacion/Informacion.js"
import {Datos} from './components/datos/Datos.js'
import {Proyectos} from "./components/Proyectos/Proyectos.js"
import {Skills} from "./components/Skills/Skills.js";
import {Contact} from "./components/contact/Contact.js"

export class App extends react.Component {

  render () {
    return (
      <div>
   
   <Nav/>
   
   <Bienvenida />

   <Informacion />
  
  <Proyectos/>
  <Skills/>
  <Contact/>
   </div>
    )
  }
} 


