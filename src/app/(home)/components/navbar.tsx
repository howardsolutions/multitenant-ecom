'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
});

const navbarItems = [
  { href: '/', children: 'Home' },
  { href: '/about', children: 'About' },
  { href: '/features', children: 'Features' },
  { href: '/pricing', children: 'Pricing' },
  { href: '/contact', children: 'Contact' },
];

export function Navbar() {
  return (
    <nav className='h-20 flex border-b justify-between font-medium bg-white px-6'>
      <Link href='/' className='flex items-center'>
        <span className={cn('text-5xl font-semibold', poppins.className)}>
          Vendroad
        </span>
      </Link>

      <NavbarItems />
    </nav>
  );
}

type NavbarItemProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

function NavbarItems() {
  const pathName = usePathname();

  return (
    <div className='items-center gap-4 hidden lg:flex'>
      {navbarItems.map((item) => (
        <NavbarItem
          key={item.href}
          href={item.href}
          isActive={pathName == item.href}
        >
          {item.children}
        </NavbarItem>
      ))}
    </div>
  );
}

function NavbarItem({ href, children, isActive }: NavbarItemProps) {
  return (
    <Button
      asChild
      variant='outline'
      className={cn(
        'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg',
        isActive && 'bg-black text-white hover:bg-black hover:text-white'
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
