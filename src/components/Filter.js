export const Filter = ({onChange}) => (
    
    <div className="filter-wrapper">
        <select name="launch-n-success" className="launch-n-success" onChange = {onChange}>
            <option >Filter</option>
            <option value="https://api.spacexdata.com/v3/launches?limit=100&launch_success=true" >Launch Success</option>
            <option value="https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true" >Launch and Land</option>
            <option value="https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014">All</option>
        </select>
    </div>
);