/**
 * Elemento encabezado páginas del administrador
 * 
 * Autor: SusanaGE
 * Fecha:20-12-2020
 */

class HeaderAdmin extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML= `<header>
        <!--Navegación móvil-->
        <a id="menu"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                </path>
            </svg></a>
        <!--Logo-->
        <img src="../../imagenes/logo.png" alt="C.I.F.P Atenea"
        onError="this.onerror=null;        
        if (this.src != '../../imagenes/logo.png') {
            this.src='../imagenes/logo.png';
        }
        if (this.src != '../imagenes/logo.png') {
            this.src='imagenes/logo.png';
        }">
        <!--Nombre usuario-->
        <a id=btt_usuario>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user"
                class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path fill="currentColor"
                    d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z">
                </path>
            </svg>
            <span id=usuario>Usuario</span>
        </a>
        <!--Navegación-->
        <nav id="navegacion">
            <ul id="lista">
                <li class="opcion"><a href="administrador.html">INICIO</a></li>
                <li class="opcion"><a href="">USUARIOS</a></li>
                <li class="opcion"><a href="alta.html">ALTA</a></li>
                <li class="opcion"><a href="">BAJA</a></li>
                <li id="acceso"> <a>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user"
                    class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z">
                    </path>
                    </svg>Usuario</a></li>
            </ul>
        </nav>
    </header>`;
    }
}
customElements.define("header-admin-component",HeaderAdmin);