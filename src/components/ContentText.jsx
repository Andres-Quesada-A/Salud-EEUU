import styles from "./ContentText.module.css";

export function ContentText({graphic}){
    return (
        <p className={styles.paragraph}> {graphic.content} </p>
    )
}