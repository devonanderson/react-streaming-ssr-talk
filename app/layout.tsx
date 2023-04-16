import SideBar from './_components/SideBar'
import './globals.css'

export const metadata = {
  title: 'Geekle Streaming SSR',
  description: 'Live-coding example app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-screen grid-cols-[auto_1fr] justify-center gap-4 overflow-hidden">
          <SideBar/>
          {children}
        </div>
      </body>
    </html>
  )
}
