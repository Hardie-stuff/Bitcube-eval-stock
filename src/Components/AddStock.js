import React from "react";

export default function AddStock() {
  return (
    <div className="AddStock">
      <form>
        <div className="form-group mb-3">
          <h2 className="text-center">Add Stock</h2>
        </div>
        <div className="form-group">
          <br />
          <div className="form-group">
            <label>Select a Product Code</label>
            <select className="product_type form-control mb-3">
              <option className="product_type0">--Select--</option>
              <option className="product_type1">PRODUCT1</option>
              <option className="product_type2">PRODUCT2</option>
              <option className="product_type3">PRODUCT3</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Items Received</label>
            <input
              className="form-control"
              type="text/number"
              name="product_quantity"
              placeholder="Enter an amount"
              required
            />
          </div>
          <div className="form-group">
            <label>Price per Item Received (ZAR)</label>
            <input
              className="form-control"
              type="text/number"
              name="product_price"
              placeholder="Enter amount"
              required
            />
          </div>

          <button type="submit" className="btn btn-dark mt-4 mb-2">
            Add Stock
          </button>
        </div>
      </form>
    </div>
  );
}
