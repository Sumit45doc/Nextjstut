import Link from "next/link"
function ProductList({products}) {
    return (
        <div>
            <h1>Product list</h1>
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link href={`/products/${product.id}`} passHref>
                               <h2>{product.id} {product.title}</h2>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList

export async function getStaticProps() {
    const response = await fetch("http://localhost:4000/product");
    const data = await response.json()
    return {
        props: {
            products: data
        },
        revalidate: 10
    }
}