import React, { useState } from "react";
import viteLogo from "/vite.svg";
import CardDataa from "./CardDataa";
import { addToCart } from "../redux/features/CaartSliice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Home = () => {
  const [cardData, setCardDataa] = useState(CardDataa);
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added in your cart");
  };
  return (
    <>
      <section className="container mt-4">
        <h2 className="mt-2 mb-4">Restaurants in Gwalior open now</h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {CardDataa.map((element, index) => {
            return (
              <>
                <div className="card mb-4" style={{ width: "22rem" }}>
                  <img
                    style={{ background: "cover" }}
                    src={element.imgdata}
                    variant="top"
                    alt=""
                    className="w-100 h-100"
                  />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between aling-ites-center mt-2 mb-2">
                      <h4 className="mt-2"> {element.dish}</h4>
                      <span>&nbsp; {element.rating}</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between">
                      <p className="mt-1">{element.address}</p>
                      <span>{element.price}</span>
                    </div>

                    <hr />

                    <div className="last_data d-flex justify-content-between mb-2">
                      <img src={element.arrimg} alt="" />
                      <button
                        className="btn bg-danger "
                        onClick={() => send(element)}
                      >
                        Add to card
                      </button>
                      <img src={element.delimg} alt="" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
