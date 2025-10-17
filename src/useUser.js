import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const useUser = () => { 
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAut(), function(user) {
            setUser(user);
            setIsLoading(false)
        })
        return unsubscribe
    }, []) // everytime when sth is changing function will be loading again
}

export default useUser