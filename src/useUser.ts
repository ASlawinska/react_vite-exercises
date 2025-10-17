import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => { 
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [user, setUser] = useState<null|string>(null)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), function(user) {
            setUser(user);
            setIsLoading(false)
        })
        return unsubscribe
    }, []) // everytime when sth is changing function will be loading again
    return {isLoading, user}
}

export default useUser