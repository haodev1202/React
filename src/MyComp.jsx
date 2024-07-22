import { useRef } from "react";


function MyComp() {
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    };

    return (
        <form onSubmit={onSubmitForm}>
            <input type="text" ref={inputRef} />
            <button htmltype="submit">Submit</button>
        </form>
    );
}
export default MyComp;
