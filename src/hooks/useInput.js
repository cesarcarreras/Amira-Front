import { useState } from "react";

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue)
    const onChange = e => setValue(e.target.value)
    const clean = () => setValue('')

    return{value, onChange, clean}
}

export default useInput;