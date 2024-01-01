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
            {/* ... other filters */}
        </div>
    );
}

export default Filters;