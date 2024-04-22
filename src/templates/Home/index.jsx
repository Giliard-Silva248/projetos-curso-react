import { Component } from 'react';
import './style.css'
import { Top } from '../../components/Top';
import { Footer } from '../../components/Footer';
import { Bod } from '../../components/body';


class Home extends Component{
    render(){
        return(
            <section> 
                <Top/>
                <Bod/>
                <Footer/>
            </section>
        )
    }
}

export default Home