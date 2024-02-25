import type { Metadata } from "next";
import { gotham } from "./ui/fonts";
import "./ui/globals.css";
import Image from "next/image";
import { Login } from "./ui/Login";
import { NavigationMenu } from "./ui/NavigationMenu";
import 'normalize.css/normalize.css';
import Link from "next/link";

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
        <footer className="Layout_footer">

          <div className="stamps_container">
            <div className="stamp">
              <div className="stampIcon_container">
                <Image
                  src={"/img/Sello_LibreDeVirus.png"}
                  alt={"Caribe Apuesta Logo"}
                  width={149}
                  height={143}
                />
              </div>
              <h3>LIBRE DE VIRUS</h3>
            </div>
            <div className="stamp">
              <div className="stampIcon_container">
                <Image
                  src={"/img/Sello_Calidad.png"}
                  alt={"Caribe Apuesta Logo"}
                  width={117}
                  height={143}
                />
              </div>
              <h3>PROMESA DE CALIDAD</h3>
            </div>
            <div className="stamp">
              <div className="stampIcon_container">
                <Image
                  src={"/img/Sello_MayorDeEdad.png"}
                  alt={"Caribe Apuesta Logo"}
                  width={131}
                  height={142}
                />
              </div>
              <h3>SEGURIDAD PARA NIÑOS GARATIZADA</h3>
            </div>
            <div className="stamp">
              <div className="stampIcon_container">
                <Image
                  src={"/img/Sello_Encriptado.png"}
                  alt={"Caribe Apuesta Logo"}
                  width={127}
                  height={142}
                />
              </div>
              <h3>TRANSMISIÓN DE DATOSENCRIPTADOS</h3>
            </div>

          </div>
          <nav className="footer_navigation">
            <ul >
              <li><Link href="/SPORTS">SPORTS</Link></li>
              <li><Link href="/LIVE">LIVE</Link></li>
              <li><Link href="/CASINO">CASINO</Link></li>
              <li><Link href="/PRAGMATIC">PRAGMATIC</Link></li>
              <li><Link href="/SLOTS">SLOTS</Link></li>
              <li><Link href="/MyPOKER">MyPOKER</Link></li>
              <li><Link href="/MORE">MORE</Link></li>
            </ul>
          </nav>
          <section className="footer_details">
            <div className="footer_principalDetail">
              <p>
                Inversiones CaribeApuesta, C.A. Rif: J-409540634.
              </p>
              <p>
                Dirección: Porlamar, Estado NE, República Bolivariana de Venezuela.
              </p>
            </div>
            <p>
              © 2022 CARIBEAPUESTA. Todos los Derechos Reservados
            </p>
          </section>
        </footer>
      </body>
    </html>
  );
} 
