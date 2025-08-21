import styles from './Produtos.module.css'

export default function Produtos() {
    return (
        <section id='produto' className={styles.produtos}>
            <div className={styles.titulos}>
                <h2>Produtos</h2>

                <p>
                    Aqui você encontra uma seleção dos nossos produtos mais populares. Navegue por categorias e descubra ofertas especiais. Se precisar de ajuda, nossa equipe está pronta para atender você!
                </p>

                <p>
                    Autenticidade e qualidade são nossas prioridades. Trabalhamos com fornecedores confiáveis para garantir que você receba apenas o melhor. Explore nossa coleção e aproveite a experiência de compra!
                </p>
            

                <div className={styles.calca_img}>
                    <div className={styles.card_calca}>
                        <span className={styles.selo}>Mais vendido</span>
                        <h3>calça jogger</h3>
                        <picture>
                            <img src="./calcas.png" alt="Calça Jeans"></img>
                        </picture>
                        <p className={styles.preco}>R$ 59,99</p>
                        <button className={styles.botao}>Comprar Agora</button>
                    </div>

                    <div className={styles.card_calca}>
                        <span className={styles.selo}>Mais vendido</span>
                        <h3>calça skinny</h3>
                        <picture>
                            <img src="./calcas.png" alt="Calça Jeans"></img>
                        </picture>
                        <p className={styles.preco}>R$ 59,99</p>
                        <button className={styles.botao}>Comprar Agora</button>
                    </div>

                    <div className={styles.card_calca}>
                        <span className={styles.seloNovo}>Novo</span>
                        <h3>calça boca de sino</h3>
                        <picture>
                            <img src="./calcas.png" alt="Calça Jeans"></img>
                        </picture>
                        <p className={styles.preco}>R$ 59,99</p>
                        <button className={styles.botao}>Comprar Agora</button>
                    </div>

                    <div className={styles.card_calca}>
                        <span className={styles.selo}>Mais vendido</span>
                        <h3>calça bege</h3>
                        <picture>
                            <img src="./calcas.png" alt="Calça Jeans"></img>
                        </picture>
                        <p className={styles.preco}>R$ 59,99</p>
                        <button className={styles.botao}>Comprar Agora</button>
                    </div>
                </div>
            </div>
        </section>
    )
}