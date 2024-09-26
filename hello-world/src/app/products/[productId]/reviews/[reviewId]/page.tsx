import { notFound } from "next/navigation";

export default function Reviews({params,} : {params: {productId: string, reviewId: string}}) {

    if(parseInt(params.reviewId) >1000){
        notFound();
    }
    return (
        <div >
        <h1 className="text-green-400 text-4xl font-mono font-bold p-4 m-4">Review {params.reviewId} for product {params.productId}</h1>
        </div>
    );
}