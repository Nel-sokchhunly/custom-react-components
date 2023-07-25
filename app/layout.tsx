import '../styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body>
        <div
          className="
            flex min-h-screen
            w-full items-center justify-center 
          "
        >
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
