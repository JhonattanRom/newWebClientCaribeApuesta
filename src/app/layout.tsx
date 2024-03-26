import type { Metadata } from "next";
import { gotham } from "./_ui/fonts";
import "./_ui/globals.css";
import Image from "next/image";
import { Login } from "./_ui/Login";
import { NavigationMenu } from "./_ui/NavigationMenu";
import 'normalize.css/normalize.css';
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import QueryProvider from "@/context/QueryProvider";


export const metadata: Metadata = {
  title: "CaribeApuesta",
  /*es el sitio número uno de apuestas en Venezuela y uno de los mejores en Hipódromos y Apuestas Deportivas. Ya sea que busques deportes competitivos, probabilidades de apuestas, emocionantes juegos de Casino Online y Slots Machines, o las últimas noticias deportivas, todo está en un mismo lugar. ¡Regístrate gratis y comienza a ganar! */
  description: "CaribeApuesta es el sitio número uno de apuestas en Venezuela, donde encontraras una variedad de opciones como apuestas deportivas, carreras de caballos nacionales e internacionales, tragamonedas, casino en vivo, entre otros juegos.",
  keywords: [
    'Apuestas deportivas',
    'Apuestas en vivo',
    'Apuestas en Venezuela',
    'Pronósticos deportivos',
    'Apuestas deportivas en línea en Venezuela',
    'Casino en línea',
    'Casino en línea en Venezuela',
    'Juegos de azar',
    'Hipódromo',
    'Carrera de caballos',
    'Apuestas Hípicas',
    'Caballos de carrera',
    'Resultados de carreras de caballos',
    'Tragamonedas',
    'Juegos',
    'Mejores apuestas deportivas en línea en Venezuela',
    'Tragamonedas emocionantes en CaribeApuesta',
  ],
  metadataBase: new URL("http://localhost:3000/"),
  openGraph: {
    title: "¡Te damos la bienvenida a CaribeApuesta!",
    description: "El sitio número uno de apuestas en Venezuela."
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${gotham.className} antialiased`} >
        <SessionAuthProvider> {/* nextAuth on client component */}
          <QueryProvider > {/* React Query on client component */}
            <header>
              <div className="HeaderContainer">
                <div className="Header_Title_Container">
                  <div className="Header_Title">
                    <Image
                      src={"/caribeApuestaLogo.svg"}
                      alt={"Caribe Apuesta Logo"}
                      width={50} height={50}
                    />
                    <Link href="/">CARIBE APUESTA</Link>
                  </div>
                </div>
                <div className="Header_Logo">
                  <Image
                    src={"/img/LogoHeader.png"}
                    alt={"Caribe Apuesta Logo"}
                    width={921} height={379}
                  />
                </div>
                <div className="Header_Login_Container">
                  <Login container={true} />
                </div>
              </div>
              <NavigationMenu />
            </header>
            <main>
              {children}
            </main>
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
                <ul>
                  <li><Link href="/Sports/About">SPORTS</Link></li>
                  <li><Link href="/Live/About">LIVE</Link></li>
                  <li><Link href="/Casino/About">CASINO</Link></li>
                  <li><Link href="/Pragmatic/About">PRAGMATIC</Link></li>
                  <li><Link href="/Slots/About">SLOTS</Link></li>
                  <li><Link href="/MyPoker/About">MyPOKER</Link></li>
                  <li><Link href="/Information/AboutUs">INFORMACION</Link></li>
                  <li><Link href="/Personal/Information">PERSONAL</Link></li>
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
            {/* Agregamos el nodo para el modal */}
            <div id="modal-root"></div>
          </QueryProvider>
        </SessionAuthProvider>
      </body>
    </html>
  );
} 
