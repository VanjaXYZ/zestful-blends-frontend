import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderTop from '../components/HeaderTop'; 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body>
          <HeaderTop />

        <Header />
        <main>{children}</main>
        <Footer />

        
        
            
        
      </body>
    </html>
  );
}
