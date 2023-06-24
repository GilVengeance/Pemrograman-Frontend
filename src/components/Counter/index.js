import { useEffect, useState } from "react";

function Counter() {
    const [angka, setAngka] = useState(0);

    function addAngka() {
        setAngka(angka + 1);
    }

    // useEffect
    function updateDOM() {

        document.title = `Hasil: ${angka}`;
    }

    useEffect(updateDOM, [angka]);


    return (
        <div>
            <p>Hasil: {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;