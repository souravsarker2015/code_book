import {useEffect} from "react";

export const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} -codeBook`
    }, [title])
    return null
};