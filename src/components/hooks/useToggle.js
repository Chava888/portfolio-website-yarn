import { useState } from "react";

function useToggle(initialValue = true) {

    //call useState,"set default initial state"
    const [value, setValue] = useState(initialValue);
    const toggle = () => {
        setValue(value => !value)
    }

    return (
        [value, toggle]
    );
}

export default useToggle;