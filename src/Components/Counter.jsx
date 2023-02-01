import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Counter(props) {
    const [counter, setcounter] = useState(0);
    function minus() {

        if (Number(counter) > 0) {
            setcounter((prevCount) => prevCount - 1, props.setNum(props.num - 1));
            props.setSub(Number(props.sub) - Number(props.price));
        }
    }
    function plus() {

        props.setSub(Number(props.sub) + Number(props.price));
        setcounter((prevCount) => prevCount + 1, props.setNum(props.num + 1));
    }

    return (
        <>
            <div className="counter">
                <button id='minus' type="button" onClick={minus}><RemoveIcon /></button>
                <span>{counter}</span>
                <button id='plus' type="button" onClick={plus}><AddIcon /></button>
            </div>
        </>
    )
}
