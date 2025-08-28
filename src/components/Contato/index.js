import estilos from './Contato.module.css';

export default function Contato() {
    return (
        <section id={estilos.contato}>
            <div className={estilos.contato}>
                <h2>Fale Conosco</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre
                    em contato através das nossas redes sociais ou da central de
                    atendimento.
                </p>

                <div className={estilos.central_redes}>
                    <div className={estilos.bloco_contato}>
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src="003-pin.png" alt="localização" />
                                </picture>
                                Caraguatatuba - SP
                            </li>

                            <li>
                                <picture>
                                    <img src="002-telephone.png" alt="telefone" />
                                </picture>
                                (12) 99999-9999
                            </li>

                            <li>
                                <picture>
                                    <img src="004-email.svg" />
                                </picture>
                                contato@email.com
                            </li>
                        </ul>
                    </div>

                    <div className={estilos.bloco_contato}>
                        <h4>Redes sociais</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src="./face.svg" />
                                </picture>
                                /Hyperion
                            </li>

                            <li>
                                <picture>
                                    <img src="001-instagram.png" alt="telefone" />
                                </picture>
                                @Hyperion
                            </li>

                            <li>
                                <picture>
                                    <img src="./twitter.svg" />
                                </picture>
                                @Hyperion
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}