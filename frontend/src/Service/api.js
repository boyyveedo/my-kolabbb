const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl); // Should log your API URL from .env

export const subscribeEmail = async (email) => {
    const url = `${apiUrl}/api/v1/waitlist`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        // Check if the response is not ok
        if (!response.ok) {
            const errorData = await response.json();  // Parsing error response
            throw new Error(errorData.message || 'Something went wrong with the request, please try again.');
        }

        // If the response is successful, parse the JSON
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error subscribing email:', error);
        throw error;  // Rethrow error so it can be handled in the component
    }
};
