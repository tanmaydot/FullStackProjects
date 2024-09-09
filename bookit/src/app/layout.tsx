import './globals.css'
import Provider from '@/components/Provider/Provider'

export const metadata = {
  title: 'BookIT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className='grow'>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
