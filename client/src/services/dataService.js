export async function dataService() {
    try {
      const response = await fetch('http://localhost:4000/api/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw to allow error handling in App.js
    }
  }
  