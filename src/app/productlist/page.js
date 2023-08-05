import ShowDetails from "./product";

const fetchProducts = async () => {

    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products
}

// import Image from 'next/image'
const ProductList = async () => {

    const products = await fetchProducts();
    // console.log(products);
    return (
        <div>

            {
                products.map((product, i) => (
                    <>
                        <h1 key={i}>{product.title}</h1>
                        <ShowDetails price={product.price} />
                    </>
                ))
            }
        </div>
    )
}

export default ProductList