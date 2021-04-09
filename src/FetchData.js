import React from "react";
import "./css/Product.css";
import "./css/AddToBox.css";
import "./css/Box.css";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import logo from "./images/Logo.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import visa from "./images/icons8-visa.svg";
import mastercard from "./images/icons8-mastercard.svg";
import apple_pay from "./images/icons8-apple_pay.svg";
import Tooltip from "@material-ui/core/Tooltip";
import Rating from "@material-ui/lab/Rating";
import CircularProgress from "@material-ui/core/CircularProgress";
import security from "./images/security.svg";
import plus from "./images/plus.png";
import minus from "./images/minus.png";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./css/Quantity.css";
import NumberFormat from "react-number-format";
import Countdown from "react-countdown";
import IconButton from "@material-ui/core/IconButton";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    prod: null,
    count1: 0,
    count2: 0,
    count3: 0,
  };
  async componentDidMount() {
    const url = "https://fe-assignment.vaimo.net/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ prod: data.product, loading: false });
    console.log({ prod: data.product, loading: false });
  }
  ////QTY Rocker1
  increment1() {
    this.setState({
      count1: this.state.count1 + 1,
    });
  }
  decrement1() {
    this.setState({
      count1: this.state.count1 - 1,
    });
  }
  handleChange1 = (e) => {
    this.setState({
      count1: this.state.count1,
    });
  };

  ////QTY Rocker2
  increment2() {
    this.setState({
      count2: this.state.count2 + 1,
    });
  }
  decrement2() {
    this.setState({
      count2: this.state.count2 - 1,
    });
  }
  handleChange2 = (e) => {
    this.setState({
      count2: this.state.count2,
    });
  };

  ////QTY Rocker3
  increment3() {
    this.setState({
      count3: this.state.count3 + 1,
    });
  }
  decrement3() {
    this.setState({
      count3: this.state.count3 - 1,
    });
  }
  handleChange3 = (e) => {
    this.setState({
      count3: this.state.count3,
    });
  };
  

  render() {
    return (
      <div className="product">
        {this.state.loading || !this.state.prod ? (
          <div>
            <CircularProgress
              disableShrink
              style={{ fontSize: 60, color: "#ff6600" }}
            />
          </div>
        ) : (
          <section className="product__info">
            <div classname="product__image">
              <img
                src={this.state.prod.gallery[0].main}
                width="416"
                height="416"
                alt=""
              />
            </div>

            <section className="box">
              <div className="row__badges">
                {this.state.prod.shipping.props.ready_to_ship && (
                  <button className="ready__to__ship" disabled>
                    Ready to Ship
                  </button>
                )}
                {this.state.prod.shipping.props.ready_to_ship && (
                  <button className="in__stock" disabled>
                    <CheckCircleOutlineIcon style={{ fontSize: 12 }} /> In Stock
                  </button>
                )}
                {this.state.prod.shipping.props.ready_to_ship && (
                  <button className="fast__dispatch" disabled>
                    <CheckCircleOutlineIcon style={{ fontSize: 12 }} /> Fast
                    Dispatch
                  </button>
                )}
              </div>
              <div className="row__title">
                <p>
                  {this.state.prod.name}
                  <label className="tags">{this.state.prod.tags}</label>
                </p>
              </div>
              <div className="row__rating">
                <Rating
                  name="half-rating-read"
                  defaultValue={this.state.prod.reviews.rating}
                  precision={0.5}
                  readOnly
                  style={{ fontSize: 14, color: "#ff6600" }}
                />
                <p>{this.state.prod.reviews.rating}</p>
                <p className="reviews">
                  {this.state.prod.reviews.count} reviews
                </p>
                <p className="buyers">
                  {this.state.prod.reviews.total_buyers} buyers
                </p>
              </div>
              <div className="row__options">
                <p className="min__max__price">
                  {
                    this.state.prod.options.battery_accessories.price.currency
                      .symbol
                  }{" "}
                  {this.state.prod.options.battery_accessories.price.value} -{" "}
                  {this.state.prod.options["4k"].price.currency.symbol}{" "}
                  {this.state.prod.options["4k"].price.value} <br />
                  <span>
                    <strike>
                      {
                        this.state.prod.options.battery_accessories.old_price
                          .currency.symbol
                      }{" "}
                      {
                        this.state.prod.options.battery_accessories.old_price
                          .value
                      }{" "}
                      -{" "}
                      {this.state.prod.options["4k"].old_price.currency.symbol}{" "}
                      {this.state.prod.options["4k"].old_price.value}
                    </strike>
                  </span>
                </p>
                <p className="op__min__order">
                  {" "}
                  / Option <span clasName=".divider">|</span>{" "}
                  <span className="num__options">2 Options</span> (Min.Order)
                </p>
              </div>
              <div className="row__promo">
                <img src={logo} alt="" />
                <p className="free-shipping-up">• Free shipping (up to $40)</p>
                <p className="on-time-delivery-g">
                  • On-time delivery guaranteed
                </p>
                <p>
                  <ChevronRightIcon
                    style={{ fontSize: 20, color: "#FF6600", marginTop: 10 }}
                  />
                </p>
              </div>
              <div className="row__discount">
                <p className="discount__value">
                  {this.state.prod.discount.amount} OFF
                </p>
                <p className="discount-ends-in">Discount ends in</p>
                <p className="timer">
                  <QueryBuilderIcon
                    style={{ fontSize: 16, color: "#999999" }}
                  />{" "}
                  <Countdown date={this.state.prod.discount.end_date} />
                </p>
              </div>

              <section>
                <div className="row__products" id="1080p">
                  <div className="col1">
                    <p>Options:</p>
                  </div>
                  <div className="col2">
                    <p> {this.state.prod.options["1080p"].label} </p>
                  </div>
                  <div className="col3">
                    <p>
                      {" "}
                      {
                        this.state.prod.options["1080p"].price.currency.symbol
                      }{" "}
                      {this.state.prod.options["1080p"].price.value}{" "}
                    </p>
                  </div>
                  <div className="col4">
                    <ButtonGroup aria-label="outlined primary button group">
                      <Button
                        disabled={this.state.count1 < 1}
                        className="dec"
                        onClick={(e) => this.decrement1(e)}
                      >
                        <img src={minus} />
                      </Button>
                      <input
                        className="num"
                        type="number"
                        value={this.state.count1}
                        onChange={this.handleChange1}
                      />
                      <Button
                        className="inc"
                        onClick={(e) => this.increment1(e)}
                      >
                        <img src={plus} />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <div className="row__products" id="4k">
                  <div className="col1">
                    <p></p>
                  </div>
                  <div className="col2">
                    <p> {this.state.prod.options["4k"].label} </p>
                  </div>
                  <div className="col3">
                    <p>
                      {" "}
                      {this.state.prod.options["4k"].price.currency.symbol}{" "}
                      {this.state.prod.options["4k"].price.value}{" "}
                    </p>
                  </div>
                  <div className="col4">
                    <ButtonGroup aria-label="outlined primary button group">
                      <Button
                        disabled={this.state.count2 < 1}
                        className="dec"
                        onClick={(e) => this.decrement2(e)}
                      >
                        <img src={minus} />
                      </Button>
                      <input
                        className="num"
                        type="number"
                        value={this.state.count2}
                        onChange={this.handleChange2}
                      />
                      <Button
                        className="inc"
                        onClick={(e) => this.increment2(e)}
                      >
                        <img src={plus} />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <div className="row__products" id="battery_accessories">
                  <div className="col1">
                    <p></p>
                  </div>
                  <div className="col2">
                    <p>
                      {this.state.prod.options["battery_accessories"].label}
                    </p>
                  </div>
                  <div className="col3">
                    <p>
                      {
                        this.state.prod.options["battery_accessories"].price
                          .currency.symbol
                      }
                      {
                        this.state.prod.options["battery_accessories"].price
                          .value
                      }
                    </p>
                  </div>
                  <div className="col4">
                    <ButtonGroup
                      className="qty__rockers"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        disabled={this.state.count3 < 1}
                        className="dec"
                        onClick={(e) => this.decrement3(e)}
                      >
                        <img src={minus} />
                      </Button>
                      <input
                        id="qty"
                        className="num"
                        type="number"
                        value={this.state.count3}
                        onChange={this.handleChange3}
                      />
                      <Button
                        className="inc"
                        onClick={(e) => this.increment3(e)}
                      >
                        <img src={plus} />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </section>

              <section>
                <div className="row__trade-assurance">
                  <p className="trade-assurance">
                    <img src={security} /> Trade Assurance
                  </p>
                  <p className="protects-your-alibab">
                    {" "}
                    protects your Alibaba.com orders
                  </p>
                </div>
                <div className="row__payments">
                  <p className="payments">Payments: </p>
                  <img src={visa} alt="" /> <img src={mastercard} alt="" />{" "}
                  <img src={apple_pay} alt="" />
                </div>
                <div className="row__links">
                  <Link to="" className="alibaba-com-logistic">
                    Alibaba.com Logistics
                  </Link>
                  <Link to="" className="inspection-solutions">
                    Inspection Solutions
                  </Link>
                </div>
              </section>
            </section>

            <section className="addtobox">
              {/* Subtotal */}
              {this.state.count1 + this.state.count2 + this.state.count3 >
                0 && (
                <section>
                  <p className="summary">Subtotal</p>

                  <p className="cost">
                    <NumberFormat
                      value={
                        this.state.prod.options["1080p"].price.value *
                          this.state.count1 +
                        this.state.prod.options["4k"].price.value *
                          this.state.count2 +
                        this.state.prod.options["battery_accessories"].price
                          .value *
                          this.state.count3
                      }
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={
                        this.state.prod.shipping.method.cost.currency.symbol
                      }
                      decimalScale={2}
                    />
                    <br />
                  </p>
                </section>
              )}

              {/* Shipping */}
              <section>
                <p className="summary">
                  Ship to{" "}
                  <span>{this.state.prod.shipping.method.country} </span>
                  <br />
                  by <span>{this.state.prod.shipping.method.title} </span>
                </p>
                <p className="cost">
                  <NumberFormat
                    value={this.state.prod.shipping.method.cost.value}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={
                      this.state.prod.shipping.method.cost.currency.symbol
                    }
                    decimalScale={2}
                  />
                  <br />
                </p>
                <p className="lead-time">
                  Lead Time{" "}
                  <strong>{this.state.prod.shipping.lead_time.value} </strong>
                  <Tooltip
                    title={this.state.prod.shipping.lead_time.info}
                  >
                    <IconButton aria-label="info">
                      <InfoOutlinedIcon style={{ fontSize: 14 }} />
                    </IconButton>
                  </Tooltip>
                </p>
                <p className="shipping-time">
                  Shipping time{" "}
                  <strong>
                    {this.state.prod.shipping.method.shipping_time.value}{" "}
                  </strong>
                  <Tooltip
                    title={this.state.prod.shipping.method.shipping_time.info}
                  >
                    <IconButton aria-label="info">
                      <InfoOutlinedIcon style={{ fontSize: 14 }} />
                    </IconButton>
                  </Tooltip>
                </p>
                <div
                  className="login__contact"
                  aria-label="outlined primary button group"
                >
                  <button className="button__1">Login to Purchase</button>
                  <button className="button__2">
                    <MailOutlineOutlinedIcon style={{ fontSize: 14 }} /> Contact
                    the Supplier
                  </button>
                </div>
              </section>
            </section>
          </section>
        )}
      </div>
    );
  }
}
