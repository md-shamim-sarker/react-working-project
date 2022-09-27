import React, {useRef} from 'react';

const LocalStorage = () => {
    const data = useRef();
    const handleClick = () => {
        localStorage.setItem("inputValue", data.current.value);
        console.log(localStorage.getItem("inputValue"));
        document.getElementById('input-value').innerText = localStorage.getItem("inputValue");
    };
    const previousInputValue = localStorage.getItem("inputValue");

    return (
        <div className='local-storage'>
            <h2>Use of Local Storage</h2>
            <input type="text" ref={data} />
            <button onClick={handleClick}>Submit</button>
            <h2 id='input-value'>{previousInputValue}</h2>
        </div>
    );
};

export default LocalStorage;