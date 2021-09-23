import React from "react";

export default function StockLevels() {
  return (
    <div className="StockLevels" id="StockLevels">
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Code</th>
            <th scope="col">Average Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>PRODUCT1</td>
            <td>R00.00</td>
            <td>#</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PRODUCT2</td>
            <td>R00.00</td>
            <td>#</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>PRODUCT3</td>
            <td>R00.00</td>
            <td>#</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
