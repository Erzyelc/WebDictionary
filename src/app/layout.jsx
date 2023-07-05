import '@styles/globals.css';
import Nav from '@components/Nav';
import { Provider } from 'react';

export const metadata = {
    title: "WebDictionary",
    description: "Free Web Dictionary using the Free Dictionary API."
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <body>
        <main className="app container mx-auto max-w-2xl">
            <Nav />
            {children}
        </main>
        <div className='main'>
        </div>
    </body>
    </html>
  )
}

export default RootLayout;