import React from 'react';
import TableRow from './TableRow'

const Table = ({visits}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Station</th>
        <th>Visits</th>
      </tr>
      </thead>
      <tbody>
        {
         Object.keys(visits).map((station_code, key) => {
            const visit = visits[station_code];
            if (visit.visits.length) {
              return (
                <TableRow key={key} stationVisits={visit}/>
              );
            } else {
              return <tr />
            }
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
