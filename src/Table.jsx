import React from 'react';

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
                <tr key={station_code}>
                  <td>{visit.name}</td>
                  <td>{visit.length}</td>
                </tr>
              );
            } else {
              return <div></div>
            }
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
