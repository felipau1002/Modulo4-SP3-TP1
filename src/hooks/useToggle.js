import { useState } from "react"

function useToggle() {
    
    const [isOn, setIsOn] = useState(false)

    const toggle = () => {
        setIsOn((prev) => !prev)
    }

    return{ isOn, toggle }
}

export default useToggle