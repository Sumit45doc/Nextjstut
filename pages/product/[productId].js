import {useRouter} from "next/router";
function Product() {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            product - {productId}
        </div>
    )
}

export default Product
