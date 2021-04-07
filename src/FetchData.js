import React from "react";
import "./css/Product.css";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import logo from "./images/Logo.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import visa from "./images/icons8-visa.svg";
import mastercard from "./images/icons8-mastercard.svg";
import apple_pay from "./images/icons8-apple_pay.svg";
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';
import LockIcon from '@material-ui/icons/Lock';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class FetchData extends React.Component {
  state = {
    loading: true,
    prod: null,
  };
  async componentDidMount() {
    const url = "https://fe-assignment.vaimo.net/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ prod: data.product, loading: false });
    console.log({ prod: data.product, loading: false });
  }
  
//   reduction = id =>{
//     const {cart} = this.state;
//     cart.forEach(item =>{
//         if(item._id === id){
//             item.count === 1 ? item.count = 1 : item.count -=1;
//         }
//     })
//     this.setState({cart: cart});
//     this.getTotal();
// };
// increase = id =>{
//     const {cart} = this.state;
//     cart.forEach(item =>{
//         if(item._id === id){
//             item.count += 1;
//         }
//     })
//     this.setState({cart: cart});
//     this.getTotal();
// };
  render() {
    //const { increase, reduction,  total } = this.context;
    return (
      <div className="product">
        {this.state.loading || !this.state.prod ? (
          <div><CircularProgress disableShrink style={{ fontSize: 60, color: "#ff6600"}}/></div>
        ) : (
          <div className="product__info">
              <div classname="product__image">
            <img src={this.state.prod.gallery.main} width="416" height="416" alt="" />
            </div>
                   
               <div className="box">
                 <div className="row__badges">
                   <button className="ready__to__ship" disabled>Ready to Ship</button>
                   <button className="in__stock" disabled>
                     <CheckCircleOutlineIcon style={{ fontSize: 12 }}/> In Stock
                   </button>
                   <button className="fast__dispatch" disabled>
                     <CheckCircleOutlineIcon style={{ fontSize: 12 }}/> Fast Dispatch
                   </button>
                 </div>
                 <div className="row__title">
                   <p>
                     {this.state.prod.name} 
                     <label className="tags">{this.state.prod.tags}</label>
                   </p>
                 </div>
                 <div className="row__rating">
                 <Rating name="half-rating-read" defaultValue={this.state.prod.reviews.rating} precision={0.5} readOnly style={{ fontSize: 14, color:"#ff6600"}}/>
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
                    {this.state.prod.options.battery_accessories.price.currency.symbol}{" "}
                    {this.state.prod.options.battery_accessories.price.value} - {this.state.prod.options.battery_accessories.price.currency.symbol}{" "}
                    {this.state.prod.options.battery_accessories.price.value} <br/>
                    <span><strike>
                    {this.state.prod.options.battery_accessories.price.currency.symbol}{" "}
                    {this.state.prod.options.battery_accessories.price.value} - {this.state.prod.options.battery_accessories.price.currency.symbol}{" "}
                    {this.state.prod.options.battery_accessories.price.value}
                    </strike>
                    </span> 
                    
                  </p>
                  {/* {this.state.prod.options.4k.price.currency.symbol} {this.state.prod.options.4k.price.value}</p> */}
                  <p className="op__min__order">
                    {" "}
                    / Option | <span>2 Options</span> (Min.Order) 
                  </p>
                  
                </div>
                <div className="row__promo">
                  <img src={logo} alt="" />
                  <p className="free-shipping-up">• Free shipping (up to $40)</p>
                  <p className="on-time-delivery-g">• On-time delivery guaranteed</p>
                  <p>
                    <ChevronRightIcon style={{ fontSize: 20, color: "#FF6600", marginTop: 10}}/>
                  </p>
                </div>
                <div className="row__discount">
                  <p className="discount__value">
                    {this.state.prod.discount.amount} OFF
                  </p>
                  <p className="discount-ends-in">
                      Discount ends in   
                    </p>
                    <p className="timer"><QueryBuilderIcon style={{ fontSize: 16, color: "#999999"}}/> {this.state.prod.discount.end_date}</p>

                </div>
                <div className="row__products">
                    <div className="col1">
                        <p>Options:</p>
                    </div>
                    <div className="col2">
                    <p> {this.state.prod.options.battery_accessories.label} </p>
                    </div>
                    <div className="col3">
                    <p> {this.state.prod.options.battery_accessories.price.currency.symbol}{" "}{this.state.prod.options.battery_accessories.price.value} </p>
                    </div>
                    <div className="col4">
                    <button
                      className="count"
                    //   onClick={() => reduction(item._id)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span>1</span>
                    <button
                      className="count"
                    //   onClick={() => increase(item._id)}
                    >
                      {" "}
                      +{" "}
                    </button>
                    </div>
                </div>
                <div className="row__trade-assurance">
                    <p className="trade-assurance"><LockIcon style={{ fontSize: 16, color: "#fabf2c"}}/> Trade Assurance</p>
                    <p className="protects-your-alibab"> protects your Alibaba.com orders</p>
                </div>
                <div className="row__payments">
                    <p className="payments">Payments: </p>
                    <img src={visa} alt=""/> <img src={mastercard} alt=""/> <img src={apple_pay} alt=""/>
                </div>
                <div className="row__links">
                    <Link to="" className="alibaba-com-logistic">Alibaba.com Logistics</Link>
                    <Link to="" className="inspection-solutions">Inspection Solutions</Link>
                </div>
              </div>
                
              <div className="addtobox">
                        <p className="subtotal">{this.state.prod.shipping.method.cost.currency.symbol} {this.state.prod.shipping.method.cost.value}</p>
                        <p className="ship-to">
                            Ship to <span>{this.state.prod.shipping.method.country} </span><br/>  
                            by <span>{this.state.prod.shipping.method.title} </span>
                        </p>
                        
                        <p className="lead-time">
                            Lead Time <strong>{this.state.prod.shipping.lead_time.value}  </strong>      
                            <Tooltip title={this.state.prod.shipping.lead_time.info}>
                                <InfoOutlinedIcon style={{ fontSize: 14 }}/>
                            </Tooltip>
                            
                        </p>
                        <p className="shipping-time">
                            Shipping time <strong>{this.state.prod.shipping.method.shipping_time.value}   </strong> 
                            <Tooltip title={this.state.prod.shipping.method.shipping_time.info}>
                                <InfoOutlinedIcon style={{ fontSize: 14 }}/>
                            </Tooltip>
                        </p>
                        <div classname="buttons">
                            <button className="button__1">Login to Purchase</button>
                            <button className="button__2"><MailOutlineOutlinedIcon style={{ fontSize: 14 }}/>    Contact the Supplier</button>
                        </div>
            
        </div>
            
            </div>
        )}

      </div>
      
    );
  }
}
