import { Navbar } from './components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-1 bg-[#F4F4F0]'>{children}</div>
    </div>
  );
}
