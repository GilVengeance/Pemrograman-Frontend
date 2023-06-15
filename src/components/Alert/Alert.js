import styles from "./Alert.module.css";

function Alert(props) {
    /**
     * Children adalah props khusus.
     * Berisi konten/children yang ada di dalam component.
     */
    const { children } = props;

    return (
        <div>
            <span>{children}</span>
        </div>
    );
}

export default Alert;