import * as React from "react"

const useOutsideClicked = (ref, callback) => {
    React.useEffect(() => {
        const handleClickOutside = (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) callback()
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useOutsideClicked;