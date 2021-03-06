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
        <a href="https://www.educa.jcyl.es/es"><img src="imagenes/logo-educacyl.png" alt="Educacyl"
        onError="this.onerror=null;        
        /* first condition */
        if (this.src != 'imagenes/logo-educacyl.png') {
            this.src='../imagenes/logo-educacyl.png';
        }
        if (this.src != '../imagenes/logo-educacyl.png') {
            this.src='../../imagenes/logo-educacyl.png';
        }"></a>
        <nav>
            <ul>
                <li><a href="">Acerca de</a> </li>
                <li><a href="">Ayuda</a></li>
                <li><a href="">Política de cookies</a></li>
                <li><a href="">Privacidad</a></li>
            </ul>
        </nav>
        <address>
            C.I.F.P. Atenea - C/Sol 09123 - Telf: 999 999 999 - Correo: info@atenea.com
        </address>
    </footer>`;
    }
}
customElements.define("footer-component",Footer);