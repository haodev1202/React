import { useRef, useState } from "react";

const MessageInputComponent = () => {
    const [message, setMessage] = useState("");
    const sentMessage = useRef(0);

    const sendMessage = () => {
        if (sentMessage.current === 3) {
            return alert("Message limit reached");
        }
        sentMessage.current += 1;
        // code to handle sending message
    };

    return (
        <>
            <div>
                <input
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    value={message}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </>
    );
};

export default MessageInputComponent;
