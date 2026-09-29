import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Тёпло — кофе и хорошие люди",description:"Ваша кофейня по соседству. Любимый кофе, свежая выпечка и место, где вам всегда рады.",icons:{icon:"/coffee-icon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
