'use client';

import { useRouter } from "next/navigation";

export default function PlaceOrder(){

    const routerRR= useRouter();

    const handleClick = () => {
        alert('Order Placed!!!')
        routerRR.push('/')
    }
    return (

        <div className="flex flex-col justify-center items-center p-4 m-4 w-full">
            <h1 className="text-4xl font-bold">Place your Order!!!</h1>
            <div className="pt-2"   >
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place Order</button>
            </div>
            
        </div>
    )
}