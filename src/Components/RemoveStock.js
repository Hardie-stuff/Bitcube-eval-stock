import React from "react";

export default function RemoveStock() {
  return (
    <div className="RemoveStock" id="RemoveStock">
      <form>
        <div className="form-group mb-3">
          <h2 className="text-center">Remove Stock</h2>
        </div>
        <div className="form-group">
          <br />
          <div class="form-group">
            <label>Select a Product Code</label>
            <select class="form-control mb-3">
              <option>--Select--</option>
              <option>PRODUCT1</option>
              <option>PRODUCT2</option>
              <option>PRODUCT3</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Buyer Email Address</label>
            <input
              className="form-control"
              type="text/number"
              name="product_name"
              placeholder="user@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Amount of Items Bought</label>
            <input
              className="form-control"
              type="text/number"
              name="product_name"
              placeholder="Enter amount"
              required
            />
          </div>

          <button type="submit" className="btn btn-dark mt-4 mb-2">
            Item(s) Shipped
          </button>
        </div>
      </form>
    </div>
  );
}
