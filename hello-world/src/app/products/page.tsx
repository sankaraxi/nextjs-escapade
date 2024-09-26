import Link from "next/link"


export default function Products() {

    const productId = 100;
    return (
        <div className="p-4 m-4">
        <h1>Products List</h1>
        <Link href="products/1"><h2>Product 1</h2></Link>
        <Link href="products/2"><h2>Product 2</h2></Link>
        <Link href="products/3" ><h2>Product 3</h2></Link>
        <Link href={`products/${productId}`} replace><h2>Product {productId}</h2></Link>

        <h2 className="text-4xl font-semibold">This uses dynamic routing</h2>
        </div>
    );
}