'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  {name: 'Register', href: '/register'},
  {name: 'Login', href: '/login'},
  {name: 'Forgot Password', href: '/forgot-password'},

]

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {


    const pathName = usePathname();
    


    return (
      <html lang="en">
        <body>
          <div className="p-4 m-4 ">
            {navLinks.map((link) =>{
              const isActive = pathName.startsWith(link.href);
              return(
                <Link className={isActive ? "font-bold mr-4" : "text-red-700 mr-4"} href={link.href}>{link.name}</Link>
              )
            })}
            {children}
          </div>
          </body>
      </html>
    )
  }