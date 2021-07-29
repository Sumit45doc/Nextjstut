import Link from "next/link"

function Products() {
    return (
        <div>
            <Link href="/product/1">
                <a><p>Product 1</p></a>
            </Link>
            <Link href="/product/2">
                <a><p>Product 2</p></a>
            </Link>
            <Link href="/product/3" replace>
                <a><p>Product 3</p></a>
            </Link>
            <Link href="/">
                <a>home</a>
            </Link>
        </div>
    )
}

export default Products
