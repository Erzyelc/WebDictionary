import '@styles/globals.css';

export const metadata = {
    title: "WebDictionary",
    description: "Free Web Dictionary using the Free Dictionary API."
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <body>
        <div className='main'>
        </div>

        <main className="app">
            {children}
        </main>
    </body>
    </html>
  )
}

export default RootLayout;