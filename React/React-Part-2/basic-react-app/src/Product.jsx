import "./Product.css";
//react props
//if price dosent come it will be 1 by default
function Product({title,price=1,options}){
    let isDiscount=price>30000;
    let style={backgroundColor:isDiscount ? "yellow" : ""   }
    return (
        <div className="Product" style={style}>
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            {isDiscount && <p>Discount of 5%</p>}
        </div>
    );
}

export default Product;