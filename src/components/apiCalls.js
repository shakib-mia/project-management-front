export const getProjects = async (url, setData) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    } catch (error) {
        console.error(error);
    } finally {
        // setLoading(false);
    }
}