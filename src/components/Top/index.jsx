import './style.css'
import  logo  from '../../img/logo.png'
export const Top = () =>{
    return(

        <section className="container" id='ini'>
            <img src={logo} alt="" />
            <ul className='btn'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </section>
    )
}
