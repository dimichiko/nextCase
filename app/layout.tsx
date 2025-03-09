import { Montserrat } from 'next/font/google';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${montserrat.className} antialiased'}>
        Esto es parte del layout
        {children}
        <footer className='py-10 flex justify-center items-center'> 
        De nada, con cariño de Next.js
        </footer>
      </body>
    </html>
  );
}
