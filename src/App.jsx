import { useState, useEffect } from "react";

function App() {
    // State
    const [fullName, setFullName] = useState({
        name: "name",
        familyName: "family",
    });
    const [title, setTitle] = useState(
        "useEffect() in Hooks"
    );

    // useEffect
    useEffect(() => {
        setFullName({
            name: "Tran Van Hao",
            familyName:
                "Hoang gia, Cam vu, Cam giang, Hai duong",
        });
    });

    return (
        <>
            <div>
                <h1>{title}</h1>
                <h3>Name: {fullName.name}</h3>
                <h3>Family Name: {fullName.familyName}</h3>
            </div>
        </>
    );
}

export default App;
