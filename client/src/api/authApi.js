import { useEffect, useRef } from "react";

export const useLogin = () => {
    const baseURL = "http://localhost:3030/users/login";

    // Initialize the AbortController
    const abortRef = useRef(new AbortController);

    const login = async (email, password) => {

        const formData = { email: email, password: password };

        const response = await fetch(
            `${baseURL}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                signal: abortRef.current.signal,
            });

        const resData = await response.json();
        console.log(resData);

        return resData;
    }

    useEffect(() => {

        const abortController = abortRef.current;

        // Cleanup function to abort fetch on unmount
        return () => abortController.abort;
    }, []);

    return {
        login
    };
}