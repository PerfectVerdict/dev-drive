"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "account",
    path: "/app/account",
  }
]
export default function AppHeader() {
  const pathName = usePathname()
  return (
    <header className='flex justify-between items-center border-b border-white/10 py-4'>

      <Link href="/app/dashboard">
        <Image
          src="/dev-drive.png"
          height={120}
          width={120}
          alt='logo'
          className='rounded-lg'
        />
        <p className='text-2xl text-white'>Escape tutorial hell.</p>
      </Link>

      <nav>
        <ul className='flex gap-2 text-lg'>
          {routes.map((route) => (
            <li key={route.path}>
              <Link className={`1px-2 py-2 hover:text-sky-100 text-white transition text-white/100 rounded-sm ${route.path === pathName ? " bg-black/20" : ""}`} href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header >
  )
}
