import React from "react";

const Table = ({ data }) => {
  return (
    <table className="mx-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Comercio</th>
          <th>CUIT</th>
          <th>Concepto 1</th>
          <th>Concepto 2</th>
          <th>Concepto 3</th>
          <th>Concepto 4</th>
          <th>Concepto 5</th>
          <th>Concepto 6</th>
          <th>Balance actual</th>
          <th>Activo</th>
          <th>Ultima venta</th>
        </tr>
      </thead>
      <tbody>
        {data
          ? data.map((item) => {
              return (
                <tr>
                  <th>{item.id}</th>
                  <th>{item.name}</th>
                  <th>{item.CUIT}</th>
                  <th>{item.Conc1}</th>
                  <th>{item.Conc2}</th>
                  <th>{item.Conc3}</th>
                  <th>{item.Conc4}</th>
                  <th>{item.Conc5}</th>
                  <th>{item.Conc6}</th>
                  <th>{item.balance}</th>
                  <th>{item.active}</th>
                  <th>{item.lastSale}</th>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

export default Table;
