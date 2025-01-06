import Product from "./Product.jsx"

function ProductTab() {
    let features=["hi-tech, ","durable, ","fast"]
    return (
        <>
            <Product title="phone" price="30000" options={features}/>
            <Product title="laptop" price={40000} options={features} />
        </>
    );
}

export default ProductTab;