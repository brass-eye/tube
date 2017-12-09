import React from 'react';

const AddVisit = ({selected_station, stations, onSubmit, onChange}) => {
  return (
    <form onSubmit={onSubmit}>
      <select onChange={onChange}>
        {
          Object.keys(stations).map((stop_code, key) => {
            return (
                <option key={key}
                        value={stop_code}>
                        {stations[stop_code]}
              </option>
            )})
        }
      </select>
      <input type='submit'/>
    </form>
  );
};

export default AddVisit
