import styles from "./index.module.css"

function Container(props) {
    return (
        <div className={styles.container}>{props.children}</div>
    )
}

export default Container;