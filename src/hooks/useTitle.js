import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Rooftop Expert`
    },[title])
}
export default useTitle;