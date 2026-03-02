import styles from "./Hero.module.scss"

export default function Hero({ data }) {
    return (
        <section className={styles.hero}>
            <h1>{data.heroTitle}</h1>
            <p>{data.heroSubtitle}</p>
        </section>
    )
}