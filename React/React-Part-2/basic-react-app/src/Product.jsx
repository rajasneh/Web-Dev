import "./Product.css";
//react props
//if price dosent come it will be 1 by default
function Product({title,price=1,options}){
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            <p>{options.map((options)=><li>{options}</li>)}</p>
        </div>
    );
}

export default Product;