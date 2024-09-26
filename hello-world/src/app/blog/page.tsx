import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
}


export default function Blog() {
    return (
        <div className="p-4 m-4">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <h3>This page is based on nested routing</h3>
        </div>
    );
}