import graphics from "./graphics.json";
import styles from "./Container.module.css";
import Embed from "./Embed";
import { ContentText } from "./ContentText";


export function Container(){
    return (
        <div className={styles.container}>
            {graphics.map((graphic) => (
                <><Embed key={graphic.id} path={graphic.path} />
                <ContentText graphic={graphic} /></>
            ))}
        </div>
    );
}