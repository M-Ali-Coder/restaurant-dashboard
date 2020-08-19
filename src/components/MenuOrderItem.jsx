import React from "react";
import { Media } from "react-bootstrap";
import Img from "../assets/images/latest-orders1.jpg";

const MenuOrderItem = () => {
  return (
    <div className="order-item">
      <Media>
        <img width={100} height={100} className="mr-3" src={Img} alt="Generic placeholder" />
        <Media.Body>
          <div className="d-flex justify-content-between pb-2">
            <h5>عرض كينج بوكس</h5>
            <h5>EGP 150</h5>
          </div>
          <p>
            ساندوتش هوت رينجز سينجل، ساندوتش دجاج هامر سينجل، ساندوتش بيف أورجينال سينجل و ساندوتش
            دجاج دايزر بيج سينجل ، يقدم مع 2 باكيت بطاطس محمرة و لتر كوكا كولا ،السعر: 149 جنيها
            بدلا من 201 جنيها
          </p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default MenuOrderItem;
