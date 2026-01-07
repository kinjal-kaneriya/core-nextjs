import './globals.css'
import {Archivo_Black} from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${archivoBlack.className} bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600`}
      >
        {children}
      </body>
    </html>
  )
}
