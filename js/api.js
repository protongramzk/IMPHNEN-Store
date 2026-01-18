// API functions to fetch applications data

const API_URL = 'https://your-api-url.com/applications';

// Fetch all applications
async function fetchAllApplications() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching applications:', error);
    }
}

// Fetch application by ID
async function fetchApplicationById(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching application:', error);
    }
}

export { fetchAllApplications, fetchApplicationById };