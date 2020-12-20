/**
 * Elemento pie de página
 * 
 * Autor: SusanaGE
 * Fecha:16-12-2020
 */

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML= `<footer>
        <a href="http://www.jcyl.es/"><img src="imagenes/logo-jcyl.png" alt="Junta Castilla y León"
        onError="this.onerror=null;        
        /* first condition */
        if (this.src != 'imagenes/logo-jcyl.png') {
            this.src='../imagenes/logo-jcyl.png';
        }
        if (this.src != '../imagenes/logo-jcyl.png') {
            this.src='../../imagenes/logo-jcyl.png';
        }"></a>
        <a href="https://www.educa.jcyl.es/es"><img src="imagenes/logo-educacyl.gif" alt="Educacyl"
        onError="this.onerror=null;        
        /* first condition */
        if (this.src != 'imagenes/logo-educacyl.gif') {
            this.src='../imagenes/logo-educacyl.gif';
        }
        if (this.src != '../imagenes/logo-educacyl.gif') {
            this.src='../../imagenes/logo-educacyl.gif';
        }"></a>
        <nav>
            <ul>
                <li><a>Acerca de</a> </li>
                <li><a>Ayuda</a></li>
                <li><a>Política de cookies</a></li>
                <li><a>Privacidad</a></li>
            </ul>
        </nav>
        <address>
            C.I.F.P. Atenea - C/Sol 09123 - Telf: 999 999 999 - Correo: info@atenea.com
        </address>
    </footer>`;
    }
}
customElements.define("footer-component",Footer);