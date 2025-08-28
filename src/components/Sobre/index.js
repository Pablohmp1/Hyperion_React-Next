import estilos from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id={estilos.sobre} className={estilos.sobre}>
            <div className={estilos.center}>
                <h2>Sobre nós</h2>
                <p>Fundada em 2003...</p>

                <div className={estilos.elementos_sobre}>
                    <picture>
                        <img src='fachada.jpg' alt='Nossa loja' />
                    </picture>

                    <div className={estilos.sobre_elementos}>
                        <h4>Nossas Filiais</h4>
                        <p>Hoje temos cinco filiais pelo Brasil.</p>
                    </div>

                    <div className={estilos.sobre_elementos}>
                        <h4>Atendimento individual</h4>
                        <p>Nossa equipe é treinada para te atender.</p>
                    </div>

                    <picture>
                        <img src='dentrodaloja.jpg' alt='' />
                    </picture>
                </div>
            </div>
        </section>
    )
}