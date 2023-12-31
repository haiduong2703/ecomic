import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { set } from "../redux/product-modal/productModalSlice";
import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="product-card">
        <Link to={`/catalog/${props.slug}`}>
          <div className="product-card__image">
            <img
              src={require(`../assets/images/products/${props.img01}`)}
              alt=""
            />

            <img
              src={require(`../assets/images/products/${props.img02}`)}
              alt=""
            />
          </div>
          <div className="product-card__name">{props.name}</div>
          <div className="product-card__price">
            {numberWithCommas(props.price)}
            <span className="product-card__price__old">
              <del>{numberWithCommas(399000)}</del>
            </span>
          </div>
        </Link>
        <div className="product-card__btn">
          <Button
            size="sm"
            icon="bx bx-cart"
            animate={true}
            onClick={() => dispatch(set(props.slug))}
          >
            Chọn mua
          </Button>
        </div>
      </div>
    </Fragment>
  );
};
ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};
export default ProductCard;
