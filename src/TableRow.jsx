import React from 'react';

const TableRow = ({stationVisits}) => {
  const {name, visits} = stationVisits;

  return (
      <tr>
        <td>{name}</td>
        <td>{visits.length}</td>
        <td>
          { visits.map( (visit, i) => {
            return (<div key={i} >{visit.toString()}</div>);
            }) 
          }
        
        </td>
      </tr>
  );
}

export default TableRow;
