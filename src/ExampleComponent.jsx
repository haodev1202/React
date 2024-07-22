import { useRef, useState } from "react";

const ExampleComponent = () => {
    // const refContainer = useRef(initialValue)
    // Lý do sử dụng
    // - Truy cập DOM nodes hoặc React element
    // - Lưu trữ một biến có thể mutate

    const textInput = useRef();

    const focusTextInput = () => textInput.current.focus();

    const [message, setMessage] = useState("");
    const sentMessage = useRef(0);

    const sendMessage = () => {
        if (sentMessage.current === 3) {
            return alert("Message Limit Reached");
        }

        sentMessage.current += 1;
        // code to handle sending message
    };

    return (
        <>
            <input type="text" ref={textInput} />
            <button onClick={focusTextInput}>
                Focus the text input
            </button>

            <h1>Lưu trữ một biến có thể mutate</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </>
    );
};

export default ExampleComponent;
