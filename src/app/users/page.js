async function CallApi() {
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json()
    return data.products
}

const User = async () => {
    const data = await CallApi();
    console.log(data);
    return (
        <div>
            <h1>This is User Page</h1>

            <div>
                {
                    data.map((product, i) =>
                        <>
                            {/* <Image src={product.thumbnail} alt="not found" width={200} height={200} /> */}
                            <h3 key={i}>{product.title}</h3>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default User