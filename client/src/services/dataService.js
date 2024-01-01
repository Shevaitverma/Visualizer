export async function dataService() {
    try {
      const response = await fetch('http://127.0.0.1:8000/dashboard/dataset');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw to allow error handling in App.js
    }
  }
  