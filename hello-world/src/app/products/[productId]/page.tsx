export default function ProductDetails({params,} : {params: {productId: string}}) {
    return (
        <div >
        <h1 className="text-blue-300">Product {params.productId} Details</h1>
        </div>
    );
}