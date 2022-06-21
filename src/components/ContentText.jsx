import styles from "./ContentText.module.css";

export function ContentText({ graphic }) {
  const graphic_paragraphs = graphic.content;
  console.log(graphic_paragraphs);
  return (
    <>
      {graphic_paragraphs.map((paragraph, index) => (
        <p className={styles.paragraph} key={index} >
          {paragraph.contenido}
        </p>
      ))}
    </>
  );
}
