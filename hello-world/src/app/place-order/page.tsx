'use client';

import { useRouter } from "next/navigation";

export default function PlaceOrder(){

    const routerRR= useRouter();

    const handleClick = () => {
        alert('Order Placed!!!')
        routerRR.push('/')
    }
    return (

        <div>
            <h1 className="text-4xl font-bold">Place your Order!!!</h1>
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place Order</button>
        </div>
    )
}