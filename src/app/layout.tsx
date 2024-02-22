import type { Metadata } from "next";
import { gotham } from "./ui/fonts";
import "./ui/globals.css";
import Image from "next/image";
import { Login } from "./components/Login";
import { NavigationMenu } from "./components/NavigationMenu";
import 'normalize.css/normalize.css';

export const metadata: Metadata = {
  title: "CaribeApuesta",
  description: "Apuestas Deportivas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${gotham.className} antialiased`} >
        <header>
          <div className="HeaderContainer">
            <div className="Header_Title_Container">
              <div className="Header_Title">
                <Image
                  src={"/caribeApuestaLogo.svg"}
                  alt={"Caribe Apuesta Logo"}
                  width={50} height={50}
                />
                <h1>CARIBE APUESTA</h1>
              </div>
            </div>
            <div className="Header_Logo">
              <Image
                src={"/./img/LogoHeader.png"}
                alt={"Caribe Apuesta Logo"}
                width={921} height={379}
              />
            </div>
            <div className="Header_Login_Container">
              <Login />
            </div>
          </div>
          <NavigationMenu />
        </header>
        {children}
      </body>
    </html>
  );
} 
