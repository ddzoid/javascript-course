import "/src/css/styles.scss";
import "./contact.css"
<<<<<<< HEAD
import * as bootstrap from 'bootstrap'
=======
import * as bootstrap from 'bootstrap';
>>>>>>> b56b36f6ab4158f019677218893525f2310129ef


import { insertMainHeader } from "/src/modules/header/header";
import { insertMainFooter } from "/src/modules/footer/footer";


window.addEventListener( "load", async() => document.getElementById("app").innerHTML = `
    ${insertMainHeader()} 
    <main class="container text-center my-4">
      <h1>Contáctanos</h1>
    </main>
    ${insertMainFooter()}
`
);