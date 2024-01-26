export const makeConcurrentRequest = async (url) => {
    if (!url) {
        // Handle the case where url is null or undefined
        return null;
    }

    const res = await Promise.all(url.map(async (urlItem) => {
        try {
            const response = await fetch(urlItem);
            const data = await response.json();
            return data;
        } catch (error) {
            // Handle fetch or JSON parsing errors
            console.error("Error fetching data:", error);
            return null;
        }
    }));

    return res;
}
