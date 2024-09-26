import Link from 'next/link';

export default function Page() {
    return (
        <div className='p-4 m-4'>
        <h1 className='text-red-500 font-bold text-4xl' >Hello, World!</h1>
        <div className='flex space-x-2'>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>
            <Link href='/products'>Products</Link>
            <Link href='/register'>Register</Link>
        </div>

        </div>
    );
}