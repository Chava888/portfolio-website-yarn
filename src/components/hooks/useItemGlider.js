import { useState } from "react";

//Inputs are an array of items and a start index, currently the default start index is zero
function useItemGlider(arrayItems, startIndex = 0) {

    /*This hooks takes an array and glides between elements of the array from previous and next functions*/

    const [index, setIndex] = useState(startIndex);
    const [array, setArray] = useState(arrayItems);


    const previousItem = () => {
        let number = index - 1
        if (0 <= number && number <= array.length) {
            setIndex(number)
        }
        else if (number < 0) {
            setIndex(array.length - 1)
        }
    }

    const nextItem = () => {
        let number = index + 1
        if (number >= 0 && number <= array.length - 1) {
            setIndex(number)
        }
        else if (number > array.length - 1) {
            setIndex(0)
        }
    }

    return (
        [index, array, previousItem, nextItem]
    )
}

export default useItemGlider