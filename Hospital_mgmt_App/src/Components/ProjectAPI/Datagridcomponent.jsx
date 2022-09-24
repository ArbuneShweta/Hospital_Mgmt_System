import React from "react";

const DataGridComponent = (props) => {
  return (
    <table className="table table-bordered table-info">
      <thead>
        <tr>
          {Object.keys(props.emp).map((header, index) => (
            <td key={index}><strong>{header}</strong></td>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.employees.map((e, index) => (
          <tr key={index}>
            {Object.keys(props.emp).map((header, index) => (
              <td key={index}>{String(e[header])}</td>
            ))}
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGridComponent;
