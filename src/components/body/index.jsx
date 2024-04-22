import React from 'react';
import lord1 from '../../img/lord1.jpg'
import lord2 from '../../img/lord2.jpg'

import './style.css'


export const Bod = () =>{
    return(

        <section className='container-body'>
            <div className='container-img img1'>
                <img src={lord1} alt="lord" />
                <p>
                “Precisando de ajuda para conquistar a galáxia? Não procure mais, eu, Darth Vader, com minha maestria do Lado Sombrio da Força e habilidades de combate incomparáveis, posso ajudar. Minha experiência em liderança, estratégia e controle da Estrela da Morte me torna o aliado perfeito. Juntos, podemos governar a galáxia!”
                </p>
            </div>
            <div className='container-img img2' id='sobre'>
                <div>
                <h3>Sobre</h3>
                <p>
                Eu, Darth Vader, nasci como Anakin Skywalker, um escravo em Tatooine. Fui descoberto pelo Mestre Jedi Qui-Gon Jinn, que acreditava que eu era o escolhido para trazer equilíbrio à Força. Como Anakin, fui treinado por Obi-Wan Kenobi e me tornei um dos Jedi mais poderosos. No entanto, minha paixão e medo da perda me levaram ao Lado Sombrio da Força.
                </p>

                <p>
                Como Darth Vader, servi ao Imperador Palpatine e ajudei a erradicar a Ordem Jedi durante a Ordem 66. Minha habilidade com a Força e minha destreza com o sabre de luz eram inigualáveis. Eu era o executor do Imperador, impondo sua vontade em toda a galáxia.
                </p>

                <p>
                Comandei a construção e operação da Estrela da Morte, uma arma capaz de destruir planetas inteiros. Foi sob meu comando que o planeta Alderaan foi destruído, demonstrando o poder do Império para a galáxia.  
                </p>
                </div>
                <img src={lord2} alt="lord" />
            </div>
        </section>
    )
}

