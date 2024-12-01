import { useState } from "react";

function HelloWorld({ text }) {
    const [zadani, setName] = useState("Vítej!");

    // Function to handle input change and set the name
    function handleChange(event) {
        setName(event.target.value);
    }

    // Function to reverse the name
    function reverseText() {
        setName(prevName => prevName.split("").reverse().join(""));
    }

    return (
        <> 
            <input className="input" onChange={handleChange} placeholder="Zadejte text" />
            <button className="tlacitko" onClick={reverseText}>Převrátit text</button>
            <h1>{text} {zadani}</h1>
        </>
    );
}

export default HelloWorld;