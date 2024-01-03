import React from 'react';

function DataList({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    {/* Display headers for relevant data fields */}
                    <th>Topic</th>
                    <th>Intensity</th>
                    <th>Likelihood</th>
                    <th>relivance</th>
                    <th>country</th>
                    <th>region</th>
                    {/* ... other headers */}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item._id}>
                        <td>{item.topic}</td>
                        <td>{item.intensity}</td>
                        <td>{item.likelihood}</td>
                        <td>{item.relevance}</td>
                        <td>{item.country}</td>
                        <td>{item.region}</td>
                        {/* ... other data fields */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataList;