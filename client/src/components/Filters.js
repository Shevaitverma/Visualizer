import React, { useState } from 'react';

function Filters() {
    const [filters, setFilters] = useState({
        endYear: '',
        topics: [],
        sector: '',
        region: '',
        PEST: '',
        source: '',
        SWOT: '',
        country: '',
        city: ''
    });

    // Handle filter changes
    const handleFilterChange = (filterName, value) => {
        setFilters({ ...filters, [filterName]: value });
    };

    return (
        <div>
            {/* Render filter options, e.g., dropdowns, checkboxes */}
            <label>
                End Year:
                <input type="text" value={filters.endYear} onChange={e => handleFilterChange('endYear', e.target.value)} />
            </label>
            <label>
                Topics:
                <select multiple value={filters.topics} onChange={e => handleFilterChange('topics', e.target.value)}>
                    {/* Populate options based on available topics in data */}
                </select>
            </label>

            <label>
                Sector:
                <select value={filters.sector} onChange={e => handleFilterChange('sector', e.target.value)}>
                    {/* Populate options based on available sectors in data */}
                </select>
            </label>
            <label>
                Region:
                <select value={filters.region} onChange={e => handleFilterChange('region', e.target.value)}>
                    {/* Populate options based on available regions in data */}
                </select>
            </label>
            <label>
                PEST:
                <select value={filters.PEST} onChange={e => handleFilterChange('PEST', e.target.value)}>
                    {/* Populate options based on available PEST categories in data */}
                </select>
            </label>
            <label>
                Source:
                <select value={filters.source} onChange={e => handleFilterChange('source', e.target.value)}>
                    {/* Populate options based on available sources in data */}
                </select>
            </label>
            <label>
                SWOT:
                <select value={filters.SWOT} onChange={e => handleFilterChange('SWOT', e.target.value)}>
                    {/* Populate options based on available SWOT categories in data */}
                </select>
            </label>
            <label>
                Country:
                <select value={filters.country} onChange={e => handleFilterChange('country', e.target.value)}>
                    {/* Populate options based on available countries in data */}
                </select>
            </label>
            <label>
                City:
                <input type="text" value={filters.city} onChange={e => handleFilterChange('city', e.target.value)} />
            </label>
        </div>
    );
}

export default Filters;