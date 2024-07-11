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
    // Xử lí thực hiện các side-effects
    // Side effects là chương trình phần mềm khi có một tác động xảy ra thì dữ liệu thay đổi
    // update dom , dom api ,...

    // Được gọi mỗi khi component re-render
    // Gọi callback sau khi thêm element vào dom
    useEffect(() => {
        console.log("2");
    });

    // Gọi callback một lần sau khi component được mounted
    useEffect(() => {
        setFullName({
            name: "Tran Van Hao",
            familyName:
                "Hoang Gia Cam Vu Cam Giang Hai Duong",
        });
        console.log(3);
    }, []);

    // Gọi callback sau khi deps thay đổi
    useEffect(() => {
        console.log(4);
    } , [fullName])


    console.log("Tran van hao");
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
