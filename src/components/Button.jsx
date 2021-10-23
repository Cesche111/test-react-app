import React, { useState } from "react";

const Button = ({handler, name, style}) => {
    const [disaabled, setDisaabled] = useState(false);

    const handleSubmit = ()=> {
        handler();
        setDisaabled(true);
    }
    return (
        <div>
            <button type="button" style={{margin: "8px", backgroundColor: "grey"}} onClick={handleSubmit} disabled={disaabled}>{name}</button>
        </div>
    )
}

export default Button;