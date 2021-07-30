import {useRouter} from "next/router"

function Product({ product }) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading......</h1>
    }
    return (
        <div>
            <h2>{product.id} {product.title}</h2>
            <p>{product.description}</p>
            <h1>{product.price}</h1>
        </div>
    )
}

export default Product


export async function getStaticPaths() {
    return {
        paths: [
            {params: {productId: "1"}}
        ],
        fallback: true
    }
}


export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:4000/product/${params.productId}`);
    const data = await response.json();

    return {
        props: {
            product: data
        },
        revalidate: 1
    }
}