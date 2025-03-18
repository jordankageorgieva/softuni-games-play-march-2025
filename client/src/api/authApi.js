export const useLogin = () => {
    const baseURL = "http://localhost:3030/users/login";

    const login = async (email, password) => { 

        const formData = {email: email, password: password};

        const response = await fetch(
            `${baseURL}`, 
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        const resData = await response.json();
        console.log(resData);

        return resData;
    }

    return {
        login
    };
}