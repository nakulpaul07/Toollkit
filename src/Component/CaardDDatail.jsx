import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux/features/CaartSliice";
import toast from "react-hot-toast";

const CaardDDatail = () => {
  const { catrs } = useSelector((state) => state.allCart);
  // console.log(catrs);

  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  // remove to cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
    toast.success("Item Remove From Your Cart");
  };

  // count total price
  const total = () => {
    let totalprice = 0;
    catrs.map((ele, ind) => {
      totalprice = ele.price * ele.qnty + totalprice;
    });
    setPrice(totalprice);
  };

  // count total quantity
  const countquantity = () => {
    let totalquantity = 0;
    catrs.map((ele, ind) => {
      totalquantity = ele.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);

  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 m-5 cardsdetails">
          <div className="card">
            <div className="card-head bg-dark p-3 ">
              <div
                className="card-header-flex"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h5 className="text-white m-0">
                  Cart Calculation{catrs.length > 0 ? `(${catrs.length})` : ""}
                </h5>
                {catrs.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm">
                    Empty Cart
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {catrs.length === 0 ? (
                <table className="table card-table mb-0">
                  <tbody>
                    <tr>
                      <td col-span={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p className="mt-2">Your Cart Is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        <span id="amount" className="text-right">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {catrs.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDecrement(data.id)}
                              >
                                <i className="fa fa-trash-alt mr-2"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.imgdata} alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{data.dish}</p>
                              </div>
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className="prdct-qty-btn" type="button">
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={data.qnty}
                                  disabled
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() => handleIncrement(data)}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              {data.qnty * data.price}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp; </th>
                      <th colSpan={3}>&nbsp; </th>
                      <th>
                        Items In cart <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalquantity}</span>
                      </th>
                      <th className="text-right">
                        Total Price <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalprice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaardDDatail;
