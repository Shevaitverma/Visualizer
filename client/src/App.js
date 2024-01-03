import React, { useState, useEffect } from 'react';
import Filters from './components/Filters.js'
import DataList from './components/DataList.js';
import ChartView from './components/Chart.js';

function App() {

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/api/data')
        .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          return response.json();
      })
      .then(fetchedData => setData(fetchedData))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));

      if (data) {
        // Extract unique values for filter fields
        const uniqueTopics = Array.from(new Set(data.map(item => item.topic)));
        const uniqueSectors = Array.from(new Set(data.map(item => item.sector)));
        const uniqueCountries = Array.from(new Set(data.map(item => item.country)));
        const uniqueRegions = Array.from(new Set(data.map(item => item.region)));
        // ... extract other unique values
    
        // Pass unique values to Filters component
        setFilters({ ...filters, uniqueTopics, uniqueSectors, uniqueCountries, uniqueRegions });
      }
    }, []);

    // Handle loading and error states
    if (isLoading) {
      return <div>Loading data...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    // console.log(data);


    const filteredData = data.length > 0 ? data.filter(item => {
      // Filter for each field, allowing for empty filter values:
      return (
          (!filters.endYear || item.end_year === filters.endYear) && // Filter by end year
          // (filters.topics.length === 0 || filters.topics.includes(item.topic)) && // Filter by topics
          // (filters.sector === '' || item.sector === filters.sector) && // Filter by sector
          // (filters.region === '' || item.region === filters.region) && // Filter by region
          // (filters.PEST === '' || item.PEST === filters.PEST) && // Filter by PEST
          // (filters.source === '' || item.source === filters.source) && // Filter by source
          // (filters.SWOT === '' || item.SWOT === filters.SWOT) && // Filter by SWOT
          // (filters.country === '' || item.country === filters.country) && // Filter by country
          (filters.city === '' || item.city === filters.city) // Filter by city
      );
    }) : [];
    // console.log(filteredData);

    
    return (
      <div>
      <h1>Data Visualizer</h1>
      <Filters onFilterChange={setFilters} />
      <ChartView data={filteredData} />
      <DataList data={filteredData} />
  </div>
    );
}

export default App;