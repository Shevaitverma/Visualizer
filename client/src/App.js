import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);
    // const [filters, setFilters] = useState({}); // Initial filters

    useEffect(() => {
        fetch('http://localhost:4000/api/data')
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData));
    }, []);
    console.log(data);

    // const filteredData = data.filter(item => {
    //     // Apply filtering logic based on filters state
    // });

    return (
        <div>
            <h1>Data Visualizer</h1>
            {/* <Filters onFilterChange={setFilters} /> */}
            {/* <Chart data={filteredData} /> */}
            {/* <DataList data={filteredData} /> */}
        </div>
    );
}

export default App;