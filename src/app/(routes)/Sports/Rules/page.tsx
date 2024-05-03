import { Metadata } from "next";
import styles from "./styles.module.css";
import Collapsible from "@/app/_components/Collapsible";

export const metadata: Metadata = {
    title: "Reglas para apuestas deportivas en linea | CaribeApuesta",
    description: "Descubre las reglas esenciales de apuestas deportivas en linea en CARIBEAPUESTA - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave, comprende las obligaciones del jugador, y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas de las apuestas deportivas', 'Reglas de las apuestas deportiva en linea', 'Reglas de las apuestas deportiva en caribeapuesta'],
    openGraph: {
        title: "Reglas para apuestas deportivas",
        description: "Descubre las reglas esenciales de apuestas deportivas en linea en CARIBEAPUESTA - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave, comprende las obligaciones del jugador, y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!"
    }
};

export default function Rules() {
    return (
        <div className={styles.container}>
            <Collapsible title={"1.- REGLAS GENERALES. "}>
                <p>
                    <span>1.1</span> - Las reglas en <mark>CARIBEAPUESTA</mark> existen para proteger tanto a la compañía como al apostador.
                </p>
                <p>
                    <span>1.2</span> - Todas las apuestas de <mark>CARIBEAPUESTA</mark> están sujetas a estas reglas.
                </p>
                <p>
                    <span>1.3</span> - <mark>CARIBEAPUESTA</mark> se reserva el derecho de eliminar cualquier apuesta realizada en una línea con error: Número de Rotación, Nombres, Cuotas, Horarios, Máximo de una Apuesta entre otros. Como también eliminar apuestas realizadas después de que el juego ha comenzado.
                </p>
                <p>
                    <span>1.4</span> - <mark>CARIBEAPUESTA</mark> se reserva el derecho de rechazar o suspender sin previo aviso a cualquier cliente que sea sospechoso de realizar trampas, piratería informática, manipulación o daños a nuestras operaciones normales de apuestas. (Incluyendo apuestas por internet). Las apuestas realizadas con la intención de engañar, piratear, atacar, manipular o dañar nuestras operaciones se consideraran nulas y sin previo aviso a discreción de <mark>CARIBEAPUESTA</mark>.
                </p>
                <p>
                    <span>1.5</span> - Todos nuestros clientes deben ser mayores de 18 años.
                </p>
                <p>
                    <span>1.6</span> - Todas las reglas, políticas y dividendos publicados aquí, están sujetos a cambios sin previo aviso. Todos los mínimos y máximos pagos están sujetos a cambios sin previo aviso. El máximo precio a pagar en una apuesta de parlay o combinada es Bsf. 10.000.000,00.
                </p>
                <p>
                    <span>1.7</span> - Con respecto a juegos suspendidos, decisiones protestadas o anuladas, <mark>CARIBEAPUESTA</mark> sigue las reglas establecidas en Las Vegas, USA. De lo contrario, <mark>CARIBEAPUESTA</mark> no reconocerá ninguna de ellas. Las reglas de las Vegas aplicaran a cualquier regla o apuesta que no esté estipulada aquí.
                </p>
                <p>
                    <span>1.8</span> - Montos mínimos y máximos a apostar en todos los eventos deportivos serán determinados por <mark>CARIBEAPUESTA</mark> y están sujetos a cambios sin previo aviso. <mark>CARIBEAPUESTA</mark> también se reserva el derecho de ajustar los límites de cuentas individuales.
                </p>
                <p>
                    <span>1.9</span> - El ganador de un evento se determinara en la fecha del evento; <mark>CARIBEAPUESTA</mark> no reconocerá protestas, decisiones revocadas para fines de apuestas. El resultado de un evento suspendido después de haber comenzado será determinado acordemente con las reglas específicas para ese deporte.
                </p>
                <p>
                    <span>1.10</span> - Todos los pagos de las apuestas están basadas en los logros al momento de realizar la apuesta.
                </p>
                <p>
                    <span>1.11</span> - Los miembros son los únicos responsables de las transacciones de su cuenta. Por favor, asegúrese de revisar sus apuestas por cualquier error antes de enviarlas, una vez la transacción sea enviada no podrá ser modificada o eliminada. <mark>CARIBEAPUESTA</mark> no se responsabiliza por la falta o duplicidad de una apuesta realizada por el cliente. Los clientes pueden revisar sus transacciones en la opción de Reportes en el sistema, después de realizar una apuesta para verificar que las puestas fueron aceptadas correctamente. Verifique todas las transacciones con cuidado.
                </p>
                <p>
                    <span>1.12</span> - <mark>CARIBEAPUESTA</mark> se reserva el derecho de suspender cualquier usuario sin previa notificación y retornar todos sus fondos.
                </p>
                <p>
                    <span>1.13</span> - En el caso de que se le acrediten fondos a un cliente por error, le corresponderá al cliente notificar a <mark>CARIBEAPUESTA</mark> del error antes mencionado sin demoras. Para las cuentas con saldos negativos, <mark>CARIBEAPUESTA</mark> se reserva el derecho de eliminar cualquier apuesta pendiente realizada con los fondos correspondientes del error.
                </p>
                <p>
                    <span>1.14</span> - Cada cliente es totalmente responsable por mantener la confidencialidad de su cuenta de apuestas, y debe hacer el esfuerzo para prevenir el uso de su cuenta personal por terceros.
                </p>
                <p>
                    <span>1.15</span> - Se prohíben los parlays del mismo equipo donde se le apuesta a la línea de diferencia de puntos (pointspread) y a la línea de dinero. Las apuestas múltiples no se aceptan donde el resultado de una parte de la apuesta contribuye con el resultado de la otra (jugadas correlacionadas).
                </p>
                <p>
                    <span>1.16</span> - La calificación de las apuestas será realizada luego de que el evento haya finalizado. El ganador de un evento o juego se determinará en la fecha en que el evento se lleve a cabo.
                </p>
                <p>
                    <span>1.17</span> - La fecha y la hora de inicio del evento son dadas solo como guía. Las apuestas se aceptarán solo hasta el comienzo del partido.
                </p>
            </Collapsible>
            <Collapsible title={"2.- BEISBOL. "}>
                <p>
                    <span>2.1</span> - <mark>CARIBEAPUESTA</mark> no reconocerá juegos pospuestos, protestas, decisiones volcadas para fines de apuestas. Si un juego es cambiado de hora el mismo día, todas las apuestas tendrán acción, adicionalmente si hay retrasos por clima o retrasos por situaciones similares, que obliguen al partido a comenzar después de la media noche (hora local) y el partido todavía se juegue, entonces las apuestas tendrán acción. Si el partido es reprogramado entonces las apuestas se eliminaran.
                </p>
                <p>
                    <span>2.2 - Regla de empate (Push)</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>2.2.1</span> - En el caso de un empate, las apuestas directas serán reembolsadas, mientras que los parleys o combinadas se eliminara esta selección del ticket y se hará un recalculo con el resto de las selecciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.2.2</span> - Ejemplo: Si realiza una apuesta a la Alta en 9 Carreras de un partido y el partido culmina con 9 carreras exactas la apuesta se considera empate.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>2.3 - Regla de las cuatro entradas y media (4½ innings)</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>2.3.1</span> - Para apuestas a ganar: Ganadores y perdedores son oficiales después de 5 innings de juego o 4½ innings en caso de que el equipo casa este ganando. Si un juego es suspendido, el ganador se determinara por el resultado hasta el último inning completo al menos que el equipo casa anote para empatar o tome la delantera en la parte baja del inning, en este caso se tomara el resultado para el momento que el juego fue suspendido.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.3.2</span> - En caso de que el juego sea suspendido y este empatado al finalizar la 5ta entrada las apuestas a ganador serán anuladas. Tenga en cuenta que los juegos suspendidos no se reanudaran a menos que se establezca lo contrario.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.3.3</span> - En juegos donde se aplique la “Mercy Rule” (nocaut) las apuestas tendrán validez y se determinaran basándose en la puntuación del momento.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>2.4 - Regla de las seis entradas y media (6½ innings) (Para juegos de 7 entradas)</span>
                </p>
                <p>
                    Apuestas a ganador y totales en juegos de 7 entradas, el partido deberá tener al menos 7 entradas completas o 6½ en caso de que el equipo casa este ganando para que las apuestas tengan validez. Tenga en cuenta que los juegos suspendidos no se reanudaran a menos que se establezca lo contrario. En el caso de que un juego sea suspendido antes de las 7 entradas se aplicara la regla de las cuatro entradas y media (4½ innings) para las apuestas a ganador, las apuestas a totales (altas / bajas) serán anuladas.
                </p>
                <p>
                    <span>2.5 - Regla de ocho entradas y media (8½ innings)</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>2.5.1</span> - Para apuestas de TOTALES (altas / bajas) y RUNLINES a final de partido: el partido deberá tener al menos 9 entradas completas o 8½ en caso de que el equipo casa este ganando, para que las apuestas tengan validez. Tenga en cuenta que los juegos suspendidos no se reanudaran a menos que se establezca lo contrario.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.5.2</span> - En el caso de que el juego sea suspendido en extra innings el resultado será determinado hasta el último inning completo, a menos que el equipo casa anote para empatar o tome la delantera en la parte baja del inning, en ese caso el resultado será determinado al momento que el juego fue suspendido y las apuestas de RUNLINE y TOTALES (altas / bajas) tendrán acción.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.5.3</span> - En juegos donde se aplique la “Mercy Rule” (nocaut) las apuestas de POINTSPREAD (Runline o Handicap) y TOTALES (Altas y Bajas) tendrán acción y se determinaran basándose en la puntuación del momento.
                        </p>
                    </li>
                </ul>
                <p>
                    <span> 2.6 - Partidos suspendidos en extra inning</span>
                </p>
                <p>
                    Para apuestas a ganar: En el caso de que el juego sea suspendido en extra innings el resultado será determinado hasta el último inning completo, a menos que el equipo casa anote para empatar o tome la delantera en la parte baja del inning, en ese caso el resultado será determinado al momento que el juego fue suspendido.
                </p>
                <p>
                    <span>2.7 - Selección de lanzadores:</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>2.7.1</span> - Es responsabilidad del cliente estar al corriente de cualquier cambio de lanzador. Tiene 3 tipos de opciones para seleccionar lanzadores (puede variar dependiendo del tipo de apuesta):
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.7.2</span> - Accion: va jugando con el equipo sin importar el lanzador.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.7.3</span> - Selección de un lanzador: la apuesta va jugando solo con el lanzador seleccionado el cual debe comenzar el partido para que la apuesta tenga validez de lo contrario la apuesta será nula.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.7.4</span> - Selección de ambos lanzadores: la apuesta va jugando solo si ambos lanzadores seleccionados en la apuesta comienzan el partido, en el caso de que alguno de los dos lanzadores no comience el partido la apuesta será nula.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.7.5</span> - En el caso de que tenga en su ticket un lanzador que no comenzó el juego las jugadas directas serán anuladas y el dinero apostado será devuelto. Los parlays serán recalculados sin esta selección.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.7.6</span> - Nota: Errores tipográficos en los nombres de los pitchers no harán que su apuesta sea cancelada.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        2.8 - Primera mitad
                    </span>
                </p>
                <p>
                    Para apuestas a ganar o totales de primera mitad: Las apuestas se basan en las anotaciones de las primeras 5 entradas completas o 4½ si el equipo de casa está ganando. En el caso de que el juego este empatado al finalizar el 5to inning se devolverá el dinero y los parleys serán recalculados solo para apuestas a ganador de primera mitad, las apuestas de totales de primera mitad seguirán válidas.
                </p>
                <p>
                    <span>2.9 - Segunda mitad</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>2.9.1</span> - Las apuestas se basan en las anotaciones realizadas a partir de la sexta (6) entrada hasta el final del partido. El partido deberá tener al menos 9 entradas completas (8 ½ si el equipo de casa va ganando). Las apuestas incluyen entradas extras.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.9.2</span> - En caso de que se aplique el “Mercy Rule” (nocaut) antes de comenzar la 6ta entrada las apuestas de la segunda mitad no tendrán validez. En caso de que se aplique el “Mercy Rule” después de culminado el 6to inning o 5½ innings las apuestas de segunda mitad tendrán validez.
                        </p>
                    </li>
                </ul>
                <p>
                    <span> 2.10 - Apuestas a totales 8 (altas / bajas) de final de partido</span>
                </p>
                <ul>
                    <li>
                        <p>
                            2.10.1 - El partido deberá tener al menos 9 entradas completas (8½ si el equipo de casa está ganando) para que las apuestas tengan validez. Aplica regla de ocho entradas y media (8½ innings).
                        </p>
                    </li>
                    <li>
                        <p>
                            2.10.2 - En juegos donde se aplique la “Mercy Rule” (nocaut) las apuestas de TOTALES (Altas y Bajas) tendrán acción y se determinaran basándose en la puntuación del momento.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>2.11 - Total de carreras, hits y errores</span>
                </p>
                <p>
                    Las apuestas de carreras, hits y errores serán calificadas con la sumatoria de las Carreras, Hits y Errores realizados por los dos equipos en el juego. Las reglas para Totales de carreras + hits + errores es la misma que para aquellas de totales de final de partido. Regla regla de las ocho entradas y media (8½ innings).
                </p>
                <p>
                    <span>2.12 - Carreras en la 1era entrada (1er inning)</span>
                </p>
                <p>
                    Se apuesta a “Si hay carreras en la primera entrada” o “No hay carreras en la primera entrada”, Al momento de que se realice una carrera en el primer inning se tomara como ganador el SI, sin importan si culmino el primer inning. En el caso de que se suspenda un partido antes de culminar el primer inning y no se haya realizado ninguna anotación la apuesta será anulada.
                </p>
                <p>
                    <span>2.13 - Equipo que Anota Primero</span>
                </p>
                <p>
                    El primer equipo en anotar en el partido. En el caso de que se realice una anotación en el partido las apuestas tendrán validez sin importar cuantas entradas se hayan jugado. Si un partido es suspendido sin haberse realizado una anotación las apuestas se anularan.
                </p>
                <p>
                    <span>2.14 - Runline de primera mitad (5to Inning)</span>
                </p>
                <p>
                    Las apuestas se basan en las anotaciones de las primeras 5 entradas completas o 4½ si el equipo de casa está ganando.
                </p>
                <p>
                    <span>2.15 - Runline de final 1½ carreras, Super Runline de final 2½ carreras y Runline Alternativo de final 1½ carreras</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>2.15.1</span> - El partido deberá tener al menos 9 entradas completas o 8½ en caso de que el equipo casa este ganando, para que las apuestas tengan validez. Tenga en cuenta que los juegos suspendidos no se reanudaran a menos que se establezca lo contrario. Ver regla de las ocho entradas y media (8½ innings).
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.15.2</span> - En juegos donde se aplique la “Mercy Rule” (nocaut) las apuestas de POINTSPREAD (Runline o Handicap) tendrán acción y se determinaran basándose en la puntuación del momento.
                        </p>
                    </li>
                </ul>
                <p>
                    <span> 2.16 - SERIE (torneo de múltiples partidos)</span>
                </p>
                <p>
                    Todas las apuestas serán anuladas si no se completa o se cambia el número establecido de partidos (de acuerdo a lo estipulado con las respectivas organizaciones oficiales) Ninguno de los 2 equipos puede jugar con otro contrincante entre partidos ya programados. Si uno de los partidos es aplazado, todas las apuestas siguen válidas. Todas las apuestas están basadas en acción (sin lanzadores listados).
                </p>
                <p>
                    <span> 2.17 - Grand Salami (Carreras de los equipos visitantes vs Carreras de los equipos casa)</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>2.17.1</span> - El Grand Salami de beisbol será decidido por todas las carreras realizadas en los juegos de ligas mayores programados para ese día.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.17.2</span> - Todos los juegos programados para ese día deberán tener al menos 9 entradas completas (8½ si el equipo casa está ganando) para que las apuestas tengan validez, si uno de los juegos es pospuesto o cancelado antes de los 8½ entradas, todas las apuestas al Grand Salami serán anuladas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.17.3</span> - No hay selección de pitcher para las apuestas de Grand Salami; todas las apuestas serán acción sin importar el lanzador abridor.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>2.17.4</span> - Para la proposición {'"carreras del equipo visitante vs carreras del equipo casa"'}: las carreras del equipo casa serán las realizadas por los equipos que bateen de 2do. En rara ocasión, el equipo que batea de 2do no estará en su estadio casa, en esos casos el equipo que batee de 2do se considera como equipo local.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>2.18 - Par o Impar (2 opciones o 2 way)</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>2.18.1</span> - Apuesta al Par o Impar sobre la sumatoria de puntos entre ambos equipos durante el partido. Incluye tiempo extra (overtime).
                        </p>
                    </li>
                </ul>
                <p>
                    2 opciones: Par, Impar.
                </p>
            </Collapsible>
            <Collapsible title={"3.- FUTBOL AMERICANO. "}>
                <p>
                    <span>3.1</span> - Para efectos de apuestas los ganadores y perdedores se determinaran por la puntuación final (incluyendo tiempos extras) a condición de que se hayan jugado al menos 55 minutos de partido (4to cuarto con 10 minutos).
                </p>
                <p>
                    <span>3.2</span> - Si un juego es suspendido después de 55 minutos (4to cuarto con 10 minutos) y no es reanudado el mismo día, independientemente de que el partido se complete en una fecha posterior. Se tomara la puntuación al momento que se detuvo el partido para determinará el resultado de las apuestas.
                </p>

                <p>
                    <span>3.3</span> - Si el partido es suspendido antes de los 55 minutos (4to cuarto con 10 minutos) y no es reanudado el mismo día, todas las apuestas a juego completo se calificaran como “no acción” y el dinero apostado en las apuestas directas será reembolsado, mientras que los parleys o combinadas se eliminara esta selección del ticket y se hará un recalculo del mismo. Si alguna parte del partido ya ha terminado es decir 1ero, 2do y 3er cuarto o primera mitad, las apuestas realizadas en los mismos tendrán acción.
                </p>

                <ul>
                    <li>
                        <p>
                            <span>3.3.1</span> - Ejemplo 1: Si un juego es suspendido a los 10 minutos del 2do cuarto solo las apuestas realizadas al 1er cuarto tendrán acción.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.3.2</span> - Ejemplo 2: Si un juego es suspendido a los 2 minutos del 4to cuarto, todas las apuestas en el 1ero, 2do, 3ro cuarto y primera mitad tendrán acción. Las apuestas a juego completo se eliminaran.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>3.4</span> - Solo para antes de comenzar el partido, si un juego es cambiado de hora el mismo día, todas las apuestas tendrán acción, adicionalmente si hay retrasos por clima o retrasos por situaciones similares, que obliguen al partido a comenzar después de la media noche (hora local) y el partido todavía se juegue, entonces las apuestas tendrán acción. Si el partido es reprogramado entonces las apuestas se eliminaran.
                </p>
                <p>
                    <span>3.5 - Regla de empate (Push).</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>3.5.1</span> - En el caso de un empate, las apuestas directas serán reembolsadas, mientras que los parleys o combinadas se eliminara esta selección del ticket y se hará un recalculo con el resto de las selecciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.5.2</span> - Ejemplo 1: Si realiza una apuesta a la Alta en 49 puntos de un partido y el partido culmina con 49 puntos exactamente la apuesta se considera empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.5.3</span> - Ejemplo 2: Si realiza una apuesta al Handicap de un equipo en -5 puntos y ese equipo gana exactamente por una diferencia de 5 puntos entonces la apuesta se considera empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.5.4</span> - Ejemplo 3: Si realiza una apuesta a ganar el partido y el partido culmina en empate la apuesta se considera empate. Solo para apuestas de 2 opciones (2way).
                        </p>
                    </li>
                </ul>
                <p>
                    <span>3.6 Apuestas a Juego Completo</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>3.6.1</span> - A ganar juego completo (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta al equipo que gana el partido. En caso de empate el monto apostado será devuelto.
                        </p>
                        <p>
                            Opciones: Visitante y Casa. Incluye tiempo extra (overtime).
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.6.2</span> - A ganar juego completo (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta al equipo que ganara el partido. No incluye tiempo extra (overtime).
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.6.3</span> - Hándicap (Point spread) (2 opciones 2 way)
                        </p>
                        <p>
                            Diferencia de puntos entre 2 equipos. Incluye tiempo extra (overtime).
                        </p>
                        <p>
                            Ejemplo:
                        </p>
                        <p>
                            New England -7,5 -110: Si New England gana por 8 puntos o más la apuesta es ganadora.
                        </p>
                        <p>
                            Atlanta +7,5 -110: Si Atlanta gana o pierde solo por 7 puntos o menos la apuesta es ganadora.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.6.4</span> - Totales (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos. Incluye tiempo extra (overtime).
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.6.5</span> - Totales por equipos, Casa y Visitante (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de puntos del equipo casa o visitante. Incluye tiempo extra (overtime).
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.6.6</span> - Par o Impar (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta al Par o Impar sobre la sumatoria de puntos entre ambos equipos durante el partido. Incluye tiempo extra (overtime).

                        </p>
                        <p>
                            2 opciones: Par, Impar.

                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.6.7</span> - Tiempo Extra (2 opciones o 2 way)

                        </p>
                        <p>
                            Apuesta a que el partido va a tiempo extra o no.

                        </p>
                        <p>
                            Opciones: SI o NO.

                        </p>
                    </li>
                </ul>
                <p>
                    <span>3.7 - Apuestas a Primera Mitad</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>3.7.1</span> - Apuestas a Handicap y Totales: Las apuestas se basan en las anotaciones realizadas de los 2 primeros cuartos.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.7.2 </span> - Handicap primera mitad (point spread) (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la diferencia de puntos entre 2 equipos en la primera mitad.
                        </p>
                        <p>
                            Opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.7.3</span> - Totales primera mitad (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos en la primera mitad
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>3.8 - Apuestas a Segunda Mitad</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>3.8.1</span> - Las apuestas se basan en los puntos realizados en el 3er cuarto en adelante. Las apuestas a la 2da mitad incluirán los puntos que se anoten en la prórroga si se juega.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.8.2</span> - Handicap segunda mitad (point spread) (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la diferencia de puntos entre 2 equipos en la segunda mitad. Incluye tiempo extra (overtime).
                        </p>
                        <p>
                            2 opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.8.3</span> - Totales segunda mitad (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos en la segunda mitad. Incluye tiempo extra (overtime).
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>3.9 - Primer Tiempo / Juego completo - Doble resultado (HT/FT)</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>3.9.1</span> - Las apuestas se anularán si no se completa el partido. No contarán la prórroga y la tanda de penaltis.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.9.2:</span>
                        </p>
                        <p>
                            HT/FT
                        </p>
                        <p>
                            HT: Quien gana primer tiempo. (Medio tiempo)
                        </p>
                        <p>
                            FT: Quien gana juego completo. (Juego completo)
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.9.3 </span> - Cual resultado debe darse para que gane su selección:
                        </p>
                        <p>
                            X/2: Empate primer tiempo, gana visitante juego completo.
                        </p>
                        <p>
                            2/1: Gana visitante primer tiempo, gana home juego completo.
                        </p>
                        <p>
                            2/X: Gana visitante primer tiempo, empatan en juego completo.
                        </p>
                        <p>
                            2/2: Gana visitante primer tiempo y juego completo.
                        </p>
                        <p>
                            1/1: Gana casa primer tiempo y juego completo.
                        </p>
                        <p>
                            1/X: Gana casa primer tiempo, empate en juego completo.
                        </p>
                        <p>
                            1/2: Gana casa primer tiempo, gana visitante juego completo.
                        </p>
                        <p>
                            X/1: Empate en el primer tiempo, gana casa juego completo.
                        </p>
                        <p>
                            X/X: Empate en el primer tiempo y juego completo.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.9.4</span> - Ejemplo 1: Equipo casa gana primer tiempo 1-0 y en el segundo tiempo solo el visitante anota 1 gol.
                        </p>
                        <p>
                            La apuesta ganadora seria 1/X ya que gana el primer tiempo el equipo casa y culminaron en empate en juego completo.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.9.5</span> - Ejemplo 2: Empate en primera mitad 1-1 y el equipo casa anota en la segunda mitad 1 gol. La apuesta ganadora seria X/1.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.9.6</span> - Ejemplo 3: Gana la primera mitad el equipo visitante 1-0 y en la segunda mitad gana el equipo casa 2-0. La apuesta ganadora seria 2/1.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>3.10 - Apuestas a los Cuartos</span>
                </p>
                <p>
                    Los cuartos deben ser completos para que las apuestas en los mismos tengan validez. Las apuestas al 4to cuarto NO incluirán los puntos que se anoten en el tiempo extra (overtime), a menos que se haya especificado lo contrario en la apuesta.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>3.10.1</span> - A ganar 1ero, 2do, 3ro o 4to cuarto (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta a ganador de 1ero, 2do, 3ro o 4to cuarto.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Empate.
                        </p>

                    </li>
                    <li>
                        <p>
                            <span>3.10.2</span> - Totales 1ero, 2do, 3ro o 4to cuarto (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos en el 1ero, 2do, 3ro o 4to cuarto.
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>3.10.3</span> - Cuarto con la puntuación más elevada (Highest Scoring Quarter).
                        </p>
                        <p>
                            Apuesta al cuarto que tendrá la mayor cantidad de puntos entre ambos equipos o al empate entre los cuartos que tengan la mayor puntuación.
                        </p>
                        <p>
                            5 Opciones: 1ero, 2do, 3ero, 4to cuarto e Iguales (equals).
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>3.10.3.1</span> Ejemplo 1:
                                </p>
                                <p>
                                    Equipos 1er Cuarto 2do Cuarto 3er Cuarto 4to Cuarto
                                </p>
                                <p>
                                    Rams 0 7 14 10
                                </p>
                                <p>
                                    Jets 0 10 7 7
                                </p>
                                <p>
                                    La apuesta ganadora seria el 3er cuarto ya que fue donde se realizaron la mayor cantidad de puntos entre los 2 equipos.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>3.10.3.2</span> Ejemplo 1:
                                </p>
                                <p>
                                    Equipos 1er Cuarto 2do Cuarto 3er Cuarto 4to Cuarto
                                </p>
                                <p>
                                    Rams 0 7 7 10
                                </p>
                                <p>
                                    Jets 0 10 0 7
                                </p>
                                <p>
                                    La apuesta ganadora seria Iguales (equals) ya que en el 2do y 4to cuarto hay un empate con la mayor cantidad de puntos (Las apuestas realizadas al 1ero, 2do, 3ero y 4to cuarto serian perdedoras).
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"4.- ICE HOCKEY. "}>
                <p>
                    <span >4.1</span> - Para efectos de apuestas los ganadores y perdedores se determinaran por la puntuación final (incluyendo tiempos extras y tanda de penales) a condición de que se hayan jugado al menos 55 minutos de partido (3er periodo con 15 minutos). Si el juego es suspendido antes de los 55 minutos de partido todas las apuestas a final de partido serán anuladas.
                </p>
                <p>
                    <span >4.2</span> - Todas las apuestas incluyen tiempos extras y tandas de penales a menos que se haya establecido lo contrario en la apuesta. En el caso de que el partido se decida por tanda de penales, se añadirá un gol al resultado del equipo ganador y al resultado total para la determinación de las apuestas. Esta regla no aplica para las apuestas que no incluyen tiempos extras o tanda de penales, ejemplo, NHL 3 WAY.
                </p>
                <p>
                    <span >4.3</span> - Solo para antes de comenzar el partido, si un juego es cambiado de hora el mismo día, todas las apuestas tendrán acción, adicionalmente si hay retrasos por clima o retrasos por situaciones similares, que obliguen al partido a comenzar después de la media noche (hora local) y el partido todavía se juegue, entonces las apuestas tendrán acción. Si el partido es reprogramado entonces las apuestas se eliminaran.
                </p>
                <p>
                    <span >4.4 - Regla de empate (Push)</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>4.4.1</span> - En el caso de un empate, las apuestas directas serán reembolsadas, mientras que los parleys o combinadas se eliminara esta selección del ticket y se hará un recalculo con el resto de las selecciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.4.2</span> - Ejemplo 1: Si realiza una apuesta a la Alta en 5 goles de un partido y el partido culmina con 5 goles exactamente la apuesta se considera empate.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>4.5 Apuestas a Juego Completo</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>4.5.1</span> - PUCKLINE (Point Spread o Handicap)
                        </p>
                        <p>
                            Las apuestas a Puck Line incluirán tiempos extras y tandas de penales a menos que se establezca lo contrario. En el caso de que el partido se decida por tanda de penales, se añadirá un gol al resultado del equipo ganador y al resultado total para la determinación de las apuestas.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>4.6 - 2 WAY (2 Opciones)</span>
                </p>
                <p>
                    En las apuestas de 2 WAY (2 Opciones) encontraremos solo la línea de Money Line. Apuesta al equipo que gana el partido. Incluye tiempos extras (overtime) y tandas de penales.
                </p>
                <p>
                    2 opciones: Visitante y Casa.
                </p>
                <p>
                    <span>4.7 - 3 WAY (3 Opciones)</span>
                </p>
                <p>
                    En las apuestas de 3 WAY (3 Opciones) encontraremos una línea de Money line y Empate. En caso de que algún juego quede 0-0 al finalizar el tiempo reglamentario todas las apuestas realizadas a ganar los equipos serán perdedoras y las apuestas realizadas a la línea de Empate serán ganadoras. Para las apuestas de 3 WAY de NHL no se tomaran en cuenta los tiempos extras y tandas de penales.
                </p>
                <p>
                    3 opciones: Visitante, Casa, Empate.
                </p>
                <p>
                    <span>4.8 - Apuestas a los periodos</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>4.8.1</span>- Los periodos deben ser completos para que las apuestas en los mismos tengan validez. Las apuestas al 3er periodo NO incluirán los puntos que se anoten en la prórroga.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.2</span> - A ganar del 1ro, 2do o 3er periodo (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta a ganador de 1ero, 2do o 3ro.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.3</span> - A ganar del 1ro, 2do o 3er periodo (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta a ganador de 1ero, 2do o 3ro.
                        </p>
                        <p>
                            2 opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.4</span> - Doble chance del 1ro, 2do o 3er periodo, Apuesta a 2 opciones de 3.
                        </p>
                        <p>
                            1X: Si el resultado es una victoria para el equipo casa o un empate, la apuesta es ganadora.
                        </p>
                        <p>
                            X2: Si el resultado es una victoria del equipo visitante o un empate, la apuesta es ganadora.
                        </p>
                        <p>
                            12: Si el resultado es una victoria para el equipo casa o el visitante, la apuesta es ganadora.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.5</span> - Spread o Handicap del 1ro, 2do o 3er periodo (2 opciones o 2 way)
                        </p>
                        <p>
                        </p>
                        <p>
                            Apuesta a la diferencia de puntos entre 2 equipos en el 1ro, 2do o 3er periodo.
                        </p>
                        <p>
                            2 opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.6</span> - Anota Primero del 1ro, 2do o 3er periodo (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta al equipo que anota primero o que ninguno anota durante un periodo determinado.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Ninguno.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.7</span> - Ultimo en anotar en el 1ro, 2do o 3er periodo (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta al equipo que anota de ultimo o que ninguno anota durante un periodo determinado.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Ninguno.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.8</span> - Totales en el 1ro, 2do o 3er periodo (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos un periodo determinado.
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.9</span> - Ambos equipos anotan en el 1ro, 2do o 3er periodo (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta si ambos equipos anotaran o en un periodo determinado.
                        </p>
                        <p>
                            2 opciones: SI y NO.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>4.8.10</span> - Par o Impar (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta al Par o Impar sobre la sumatoria de puntos entre ambos equipos durante un periodo determinado. En caso de 0-0, se contara como par.
                        </p>
                        <p>
                            2 opciones: Par, Impar.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>4.9 - Totales sin tiempo extra (Total sin OT) (2 opciones 2 way)</span>
                </p>
                <p>
                    Apuesta a la Alta o Baja de la suma de goles anotados por ambos equipos durante el partido. Sin incluir tiempo extra o tanda de penales.
                </p>
                <p>
                    <span>4.10 - Totales con tiempo extra (Total con OT) (2 opciones 2 way)</span>
                </p>
                <p>
                    Apuesta a la Alta o Baja de la suma de goles anotados por ambos equipos durante el partido. Incluyendo tiempo extra y tanda de penales, en el caso de ir a tanda de penales se le agregara un gol al resultado del equipo ganador.
                </p>
                <p>
                    <span>4.11 - Par o Impar (2 opciones o 2 way)</span>
                </p>
                <p>
                    Apuesta al Par o Impar sobre la sumatoria de puntos entre ambos equipos durante el partido. Incluye tiempo extra (overtime).
                </p>
                <p>
                    2 opciones: Par, Impar
                </p>
            </Collapsible>
            <Collapsible title={"5.- BALONCESTO. "}>
                <p>
                    <span>5.1</span> - Para efectos de apuestas los ganadores y perdedores se determinaran por la puntuación final (incluyendo tiempos extras) a condición de que se hayan jugado al menos 43 minutos de partido (4to cuarto con 7 minutos) Para partidos de NBA. Para otras ligas de baloncesto se deben haber jugado al menos 35 minutos de partido para que las apuestas tengan validez.
                </p>
                <p>
                    <span>5.2</span> - Si un juego es suspendido después de 43 minutos (4to cuarto con 7 minutos) para partidos de NBA o a después de los 35 minutos de partido en cualquier otra liga de baloncesto y no es reanudado el mismo día, independientemente de que el partido se complete en una fecha posterior, se tomara la puntuación al momento que se detuvo el partido para determinará el resultado de las apuestas.
                </p>
                <p>
                    <span>5.3</span> - Si el partido es suspendido antes de los 43 minutos (4to cuarto con 7 minutos) en un partido de NBA o antes de los 35 minutos de partido en cualquier otra liga de baloncesto y no es reanudado el mismo día, todas las apuestas a juego completo se calificaran como “no acción” y el dinero apostado en las apuestas directas será reembolsado, mientras que los parleys o combinadas se eliminara esta selección del ticket y se hará un recalculo del mismo. Si alguna parte del partido ya ha terminado es decir 1ero, 2do y 3er cuarto o primera mitad, las apuestas realizadas en los mismos tendrán acción.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>5.3.1s</span> - Ejemplo 1: Si un juego es suspendido a los 10 minutos del 2do cuarto en un partido de NBA solo las apuestas realizadas al 1er cuarto tendrán acción.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.3.2</span> - Ejemplo 2: Si un juego es suspendido a los 2 minutos del 4to cuarto en un partido de NBA todas las apuestas en el 1ero, 2do, 3ro cuarto y primera mitad tendrán acción. Las apuestas a juego completo se eliminaran.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>5.4</span> - Solo para antes de comenzar el partido, si un juego es cambiado de hora el mismo día, todas las apuestas tendrán acción, adicionalmente si hay retrasos por clima o retrasos por situaciones similares, que obliguen al partido a comenzar después de la media noche (hora local) y el partido todavía se juegue, entonces las apuestas tendrán acción. Si el partido es reprogramado entonces las apuestas se eliminaran.
                </p>
                <p>
                    <span>5.5 - Regla de empate (Push) para apuestas de 2 opciones (2 way)</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>5.5.1</span> - En el caso de un empate, las apuestas directas serán reembolsadas, mientras que los parleys o combinadas se eliminara esta selección del ticket y se hará un recalculo con el resto de las selecciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.5.2</span> - Ejemplo 1: Si realiza una apuesta a la Alta en 210 puntos de un partido y el partido culmina con 210 puntos exactamente la apuesta se considera empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.5.3</span> - Ejemplo 2: Si realiza una apuesta al Handicap de un equipo en -5 puntos y su equipo gana exactamente por una diferencia de 5 puntos entonces la apuesta se considera empate.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        5.6 - Apuestas a Juego Completo
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>5.6.1</span> - A ganar juego completo (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta al equipo que ganara el partido
                        </p>
                        <p>
                            Opciones: Visitante y Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.6.2</span> – Hándicap (Point spread) (2 opciones 2 way)
                        </p>
                        <p>
                            Diferencia de puntos entre 2 equipos. Incluye tiempo extra (overtime).
                        </p>
                        <p>
                            Ejemplo:
                        </p>
                        <p>
                            Cleveland -5,5 -120: Si Cleveland gana por 6 puntos o más la apuesta es ganadora.
                        </p>
                        <p>
                            Golden State +5,5 -110: Si Golden State pierde por menos de 5 puntos o gana el partido la apuesta es ganadora.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.6.3</span> - Totales (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos. Incluye tiempo extra (overtime).
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.6.4</span> - Totales por equipos, Casa y Visitante (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de puntos del equipo casa o visitante.
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>

                    </li>
                    <li>
                        <p>
                            <span>5.6.5</span> – Tiempo Extra (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta a que el partido va a tiempo extra o no.
                        </p>
                        <p>
                            Opciones: SI o NO.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.6.6</span> - Par o Impar (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta al Par o Impar sobre la sumatoria de puntos entre ambos equipos durante el partido.
                        </p>
                        <p>
                            2 opciones: Par, Impar.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>5.7 – PRIMERA MITAD</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>5.7.1</span> - A ganar primera mitad (3opciones o 3way)
                        </p>
                        <p>
                            Apuesta a ganador de la primera mitad.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.7.2</span> A ganar primera mitad sin empate (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta al equipo que gana la primera mitad. En caso de empate el monto apostado será devuelto.
                        </p>
                        <p>
                            2 opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.7.3</span> - Handicap primera mitad (point spread) (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la diferencia de puntos entre 2 equipos en la primera mitad.
                        </p>
                        <p>
                            Opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.7.4</span> - Totales primera mitad (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos en la primera mitad
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>5.8 - SEGUNDA MITAD</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>5.8.1</span> -A ganar segundo mitad (3opciones o 3way)
                        </p>
                        <p>
                            Apuesta a ganador de la segunda mitad.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa y Empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.8.2</span> A ganar segunda mitad sin empate (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta al equipo que gana la segunda mitad. En caso de empate el monto apostado será devuelto. Incluye tiempo extra.
                        </p>
                        <p>
                            2 opciones: Visitante o Casa.
                        </p>

                    </li>
                    <li>
                        <p>
                            <span>5.8.3</span> - Handicap segunda mitad (point spread) (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la diferencia de puntos entre 2 equipos en la segunda mitad. Incluye tiempo extra.
                        </p>
                        <p>
                            Opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.8.4</span> - Totales segunda mitad (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos en la segunda mitad. Incluye tiempo extra.
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>5.9 - CUARTOS</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>5.9.1</span> - Los cuartos deben ser completos para que las apuestas en los mismos tengan validez. Las apuestas al 4to cuarto NO incluirán los puntos que se anoten en el tiempo extra.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.9.2</span> - A ganar 1ero, 2do, 3ro o 4to cuarto (3opciones o 3way)
                        </p>
                        <p>
                            Apuesta a ganador de 1ero, 2do, 3ro o 4to cuarto.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.9.3</span> - Handicap 1ero, 2do, 3ro o 4to cuarto (point spread) (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la diferencia de puntos entre 2 equipos en el 1ero, 2do, 3ro o 4to cuarto.
                        </p>
                        <p>
                            Opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>5.9.4</span> - Totales 1ero, 2do, 3ro o 4to cuarto (2 opciones 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos en el 1ero, 2do, 3ro o 4to cuarto
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"6.- SOCCER (FUTBOL). "}>
                <p>
                    <span>6.1</span> - El resultado del juego es decidido al terminar los 90 Minutos más tiempo de reposición (Tiempo por lesiones). Tiempos Extra, Overtime o Tanda de penales no se toman en consideración para las apuestas de Futbol a menos que se haya especificado lo contrario en la apuesta.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>6.1.1</span> - Las apuestas de Futbol donde se incluya el Empate como tercera opción (3 opciones o 3way) y el partido culmine en empate todas las apuestas realizadas en el empate serán ganadoras y las apuestas realizadas a ganar los equipos serán perdedoras.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.1.2</span> - Si algún juego es abandonado, pospuesto o suspendido todas las apuestas serán anuladas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.1.3</span> - En relación con los partidos amistosos; Se aplicará una excepción a esta regla, si las cuotas ofertadas fueran incorrectas y basadas en un período de tiempo diferente (por ejemplo, si las cuotas ofertadas fueran para 2 mitades de 45 minutos y solo se jugaran 2 mitades de 30 minutos). En estos casos, nos reservamos el derecho de anular cualquier mercado. Si un partido amistoso se juega en 3 o 4 tiempos, nos reservamos el derecho de anular el partido; todas las apuestas por la 1ª y 2ª mitad se anularán. Como hemos indicado anteriormente, nos reservamos el derecho de anular cualquier mercado si las cuotas ofertadas se basan en el pago de un tiempo de juego de partido diferente.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        6.2 - FUTBOL TOTALES
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>6.2.1</span> - Totales juego completo (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de la suma de goles anotados por ambos equipos.
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.2.2</span> - Totales por equipos, Casa y Visitante (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de goles del equipo casa o visitante.
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>6.3 - FUTBOL - APUETAS AL MEDIO TIEMPO</span>
                </p>
                <p>
                    Las apuestas en la primera mitad del partido incluyen 45 minutos más tiempo por reposición (Tiempo por lesiones) colocado por el árbitro al final de la primera mitad. Si la primera mitad no es completada todas las apuestas serán anuladas y el dinero será devuelto, a menos que se haya estipulado lo contrario en las reglas para una apuesta en específico.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>6.3.1</span> - A ganar medio tiempo (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta a ganador de la primera mitad.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.3.2</span> - Totales primer tiempo entre 2 los equipos (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de goles entre los 2 equipos en el primer tiempo.
                        </p>
                        <p>
                            2 Opciones: Alta, Baja.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.3.3</span> - 1er Tiempo Doble Chance: apuesta a 2 opciones de 3. (3 opciones o 3 way)
                        </p>
                        <p>
                            1X: Si el resultado del primer tiempo es una victoria para el equipo casa o un empate, la apuesta es ganadora.
                        </p>
                        <p>
                            X2: Si el resultado del primer tiempo es una victoria del equipo visitante o un empate, la apuesta es ganadora.
                        </p>
                        <p>
                            12: Si el resultado del primer tiempo es una victoria para el equipo casa o el visitante, la apuesta es ganadora.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.3.4</span> - 1er Tiempo Sin Empate (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta al equipo que gana la primera mitad, en caso de empate el monto apostado será devuelto.
                        </p>
                        <p>
                            2 opciones: Visitante o Casa.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.3.5</span> - 1er Tiempo Anota Primero (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta al equipo que anota primero o que ninguno anota durante el medio tiempo.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Ninguno.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>6.3.5.1</span> - En el caso de que un partido se aplace, abandone o suspenda antes de culminar
                                    la primera mitad y cualquiera de los equipos haya anotado la apuesta del equipo que anoto primero se considerara
                                    como ganadora. Por el contrario, las apuestas se anularán si el partido se aplaza, abandona o suspenda antes de
                                    terminar el primer tiempo, sin que ninguno de los dos equipos haya anotado.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>6.3.6</span> - 1er Tiempo Par o Impar (2 opciones o 2 way)
                        </p>
                        <p>
                            Apuesta al Par o Impar sobre la sumatoria de goles entre ambos equipos durante el primer tiempo.
                        </p>
                        <p>
                            2 opciones: Par, Impar.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.3.7</span> - Goles Exactos en 1er Tiempo Totales (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta a la cantidad exacta de goles que se realizaran en la primera mitad entre ambos equipos.
                        </p>
                        <p>
                            3 Opciones: 0, 1, 2.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        6.4 - FUTBOL HANDICAP:
                    </span>
                </p>
                <p>
                    Diferencia de goles entre 2 equipos
                </p>
                <p>
                    Ejemplo:
                </p>
                <p>
                    Lorient -1 -120: Si Lorient gana por 2 goles o más la apuesta es ganadora.
                </p>
                <p>
                    Bordeaux +1 -110: Si Bordeaux empata el partido o gana, la apuesta es ganadora.
                </p>
                <p>
                    Empate -1 Lorient +1 Bordeaux: Si Lorient gana por 1 gol exactamente la apuesta es ganadora.
                </p>
                <p>
                    <span>
                        6.5 - FUTBOL - APUESTAS AL SEGUNDO TIEMPO
                    </span>
                </p>
                <p>
                    Las apuestas en la segunda mitad del partido incluyen 45 minutos más tiempo por reposición (Tiempo por lesiones) colocado por el árbitro al final de la segunda mitad. Si la segunda mitad no es completada todas las apuestas serán anuladas y el dinero será devuelto, a menos que se haya estipulado lo contrario en las reglas para una apuesta en específico.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>6.5.1</span> - A ganar segundo tiempo (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta a ganador de la segunda mitad.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Empate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.5.2</span> - Totales segundo tiempo entre 2 los equipos (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de goles entre los 2 equipos en el segundo tiempo.
                        </p>
                        <p>
                            2 Opciones: Alta, Baja.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.5.3</span> - Goles Exactos en 2do Tiempo Totales (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta a la cantidad exacta de goles que se realizaran en la segunda mitad entre ambos equipos.
                        </p>
                        <p>
                            3 Opciones: 0, 1, 2.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.5.4</span> - 2do Tiempo Anota Primero (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta al equipo que anota primero o que ninguno anota durante el segundo tiempo.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Ninguno.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>6.5.4.1</span> - En el caso de que un partido se aplace, abandone o suspenda antes de culminar la primera mitad y cualquiera de los equipos haya anotado la apuesta del equipo que anoto primero se considerara como ganadora. Por el contrario, las apuestas se anularán si el partido se aplaza, abandona o suspenda antes de terminar segundo tiempo, sin que ninguno de los dos equipos haya anotado.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>
                    <span>
                        6.6 - SOCCER PROPOSICIONES
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>6.6.1</span> - Proposición a Jugador:
                        </p>
                        <p>
                            Una proposición de apuesta sobre si un jugador marcará, o no, en un partido específico incluye solo el tiempo reglamentario (más el descuento). Los goles en propia portería no cuentan. El jugador debe empezar el partido como titular para que las apuestas sean válidas. Las apuestas a un jugador que no comience el partido como titular serán canceladas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.6.2</span> - Proposiciones a Hat Trick y Doblete:
                        </p>
                        <p>
                            A efectos de las valoraciones, solo se incluyen los goles marcados durante el tiempo reglamentario, o el tiempo añadido por el árbitro para compensar por lesiones u otras interrupciones. Los goles en propia portería no cuentan.
                        </p>
                    </li>
                    <li>

                        <p>
                            <span>6.6.3</span> - Proposiciones a Tarjetas:
                        </p>
                        <p>
                            Para la evaluación de las apuestas, en las Proposiciones a Tarjetas se incluyen tanto las tarjetas amarillas como las rojas. Las tarjetas amarillas cuentan como 1 punto y las tarjetas rojas como 2 puntos.
                        </p>
                        <p>
                            Dos tarjetas amarillas mostradas al mismo jugador que automáticamente suponen una tarjeta roja cuentan como 3 puntos: 1 punto por la primera tarjeta amarilla y 2 puntos por la tarjeta roja. No se contará la segunda tarjeta amarilla.
                        </p>
                        <p>
                            Para la evaluación de las apuestas, las tarjetas amarillas o rojas mostradas a alguien que “no esté jugando” (jugador en el banquillo, entrenador u otro miembro del equipo) no cuentan para las Proposiciones a Tarjetas.
                        </p>
                        <p>
                            No se incluyen las tarjetas amarillas o rojas mostradas durante la prórroga. Solo se incluyen las tarjetas amarillas y rojas mostradas durante el tiempo reglamentario o durante el tiempo que el árbitro añada para compensar por lesiones u otras interrupciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.6.4</span> - Proposición a Saque de Esquina:
                        </p>
                        <p>
                            Para la evaluación de las apuestas, no se incluirán los saques de esquina que tengan lugar durante los periodos de prórroga. Sólo se incluirán los saques de esquina que tengan lugar durante el tiempo reglamentario o durante el tiempo que el árbitro añada para compensar lesiones y otras interrupciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.6.5</span> - Proposición a los fuera de juego:
                        </p>
                        <p>
                            Para la evaluación de las apuestas, no se incluirán los fuera de juego que tengan lugar durante los periodos de prórroga. Sólo se incluirán los fuera de juego que tengan lugar durante el tiempo reglamentario o durante el tiempo que el árbitro añada para compensar lesiones y otras interrupciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.6.6</span> - Proposiciones a Resultado Exacto, Número Total de Goles, Número de Goles de un Equipo, Ambos Equipos Marcarán, Apuesta con Dobles y cualquier Hándicap:
                        </p>
                        <p>
                            Para la evaluación de las apuestas, sólo se tendrán en cuenta los goles marcados en el tiempo reglamentario o durante el tiempo que el árbitro añada para compensar lesiones y otras interrupciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>6.6.7</span> - Proposiciones para Todo el Torneo
                        </p>
                        <p>
                            Proposiciones para Todo el Torneo (por ejemplo un Mundial o una Eurocopa): A efectos de las valoraciones, las proposiciones siguientes relacionadas con la actividad en todo el torneo (y no con partidos individuales) incluirán la prórroga, pero no la tanda de penaltis:
                        </p>
                        <ul>
                            <li>
                                - Total de goles en todo el torneo marcados por un jugador-
                            </li>
                            <li>
                                - Quién marcará más goles en los emparejamientos entre jugadores
                            </li>
                            <li>
                                - Total de goles marcado por cada país en todo el torneo,
                            </li>
                            <li>
                                - Quién marcará más goles en los emparejamientos entre países,
                            </li>
                            <li>
                                - ¿Se marcará un hat-trick en un partido del torneo?
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>6.6.8</span> - Doble chance, Apuesta a 2 opciones de 3.
                        </p>
                        <p>
                            1X: Si el resultado es una victoria para el equipo casa o un empate, la apuesta es ganadora.
                        </p>
                        <p>
                            X2: Si el resultado es una victoria del equipo visitante o un empate, la apuesta es ganadora.
                        </p>
                        <p>
                            12: Si el resultado es una victoria para el equipo casa o el visitante, la apuesta es ganadora.
                        </p>
                        <ul>
                            <li>
                                <span>6.6.8.1</span> - Si un partido se juega en un terreno neutral, a efectos de apuesta se considerará como equipo visitante al equipo que sea nombrado en primer lugar (arriba/izquierda).
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>6.6.9</span> - Ambos equipos anotan (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta si ambos equipos anotaran o no en el partido
                        </p>
                        <p>
                            El resultado oficial será el especificado en la regla 6.1.
                        </p>
                        <p>
                            Opciones: SI y NO.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>6.6.9.1</span> - En el caso de que un partido se aplace, abandone o suspenda después de que ambos equipos hayan anotado, las apuestas a ‘SI’ se determinarán como ganadoras y las apuestas a ‘NO’ como perdedoras. Por el contrario, las apuestas se anularán si el partido se aplaza, abandona o suspenda antes del tiempo reglamentario sin que ninguno de los dos equipos haya anotado o solo uno haya anotado.
                                </p>
                                <p>
                                    Ejemplo:
                                </p>
                                <p>
                                    SI: si ambos equipos anotan la apuesta SI es ganadora.
                                </p>
                                <p>
                                    NO: si solo un equipo o ninguno de los dos anotan entonces la apuesta NO es ganadora.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>6.6.10</span> - Primer Tiempo / Juego completo - Doble resultado (HT/FT)
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>6.6.10.1</span> - Las apuestas se anularán si no se completa el partido. No contarán la prórroga y la tanda de penaltis.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>
                                        6.6.10.2:
                                    </span>
                                </p>
                                <p>HT/FT</p>
                                <p> HT: Quien gana primer tiempo. (Medio tiempo)</p>
                                <p>FT: Quien gana juego completo. (Juego completo)</p>
                            </li>
                            <li>
                                <p>
                                    <span>6.6.10.3</span> - Cual resultado debe darse para que gane su selección:
                                </p>
                                <p>
                                    X/2: Empate primer tiempo, gana visitante juego completo.
                                </p>
                                <p>
                                    2/1: Gana visitante primer tiempo, gana home juego completo.
                                </p>
                                <p>
                                    2/X: Gana visitante primer tiempo, empatan en juego completo.
                                </p>
                                <p>
                                    2/2: Gana visitante primer tiempo y juego completo.
                                </p>
                                <p>
                                    1/1: Gana casa primer tiempo y juego completo.
                                </p>
                                <p>
                                    1/X: Gana casa primer tiempo, empate en juego completo.
                                </p>
                                <p>
                                    1/2: Gana casa primer tiempo, gana visitante juego completo.
                                </p>
                                <p>
                                    X/1: Empate en el primer tiempo, gana casa juego completo.
                                </p>
                                <p>
                                    X/X: Empate en el primer tiempo y juego completo.
                                </p>
                                <p>
                                    Ejemplo: Equipo casa gana primer tiempo 1-0 y en el segundo tiempo solo el visitante anota 1 gol.
                                </p>
                                <p>
                                    La apuesta ganadora seria 1/X ya que gana el primer tiempo el equipo casa y culminaron en empate en juego completo.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>6.6.11</span> - Anota Primero (3opciones o 3way)
                        </p>
                        <p>
                            Apuesta al equipo que anota primero o que ninguno anota durante el partido.
                        </p>
                        <p>
                            3 opciones: Visitante, Casa, Ninguno.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>6.6.11.1</span> - En el caso de que un partido se aplace, abandone o suspenda antes de culminar la primera mitad y cualquiera de los equipos haya anotado la apuesta del equipo que anoto primero se considerara como ganadora. Por el contrario, las apuestas se anularán si el partido se aplaza, abandona o suspenda antes de terminar el partido, sin que ninguno de los dos equipos haya anotado.
                                </p>
                            </li>
                        </ul>
                        <li>
                            <p>
                                <span>6.6.12</span> - Par o Impar (2 opciones o 2 way)
                            </p>
                            <p>
                                Apuesta al Par o Impar sobre la sumatoria de goles entre ambos equipos durante el partido.
                            </p>
                            <p>
                                2 opciones: Par, Impar.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>6.6.13</span> - Gana ambas mitades, Visitante o Casa (2 opciones o 2 way)
                            </p>
                            <p>
                                Apuesta al equipo SI ganara tanto la primera como la segunda mitad.
                            </p>
                            <p>
                                Opciones: SI, NO.
                            </p>
                            <p>
                                Ejemplo:
                            </p>
                            <p>
                                Jugando el SI, el equipo seleccionado deberá ganar ambas mitades para que la apuesta sea ganadora.
                            </p>
                            <p>
                                Jugando el NO, el equipo seleccionado deberá perder ambas mitades o perder al menos una mitad.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>6.6.14</span> - Gana cualquiera de las 2 mitades, Visitante o Casa (2 opciones o 2 way)
                            </p>
                            <p>
                                Apuesta al equipo que ganara cualquiera de las 2 mitades.
                            </p>
                            <p>
                                Opciones: SI, NO.
                            </p>
                            <p>
                                Ejemplo:
                            </p>
                            <p>
                                Jugando el SI, el equipo seleccionado deberá ganar las 2 o al menos una de las 2 mitades para que la apuesta sea ganadora.
                            </p>
                            <p>
                                Jugando el NO, el equipo seleccionado deberá perder ambas mitades para que la apuesta sea ganadora.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>6.6.15</span> - Anota ambas mitades, Casa o Visitante (2 opciones o 2 way)
                            </p>
                            <p>
                                Apuesta a si un equipo anotara en ambas mitades o no.
                            </p>
                            <p>
                                Opciones: SI, NO.
                            </p>
                            <p>
                                Ejemplo:
                            </p>
                            <p>
                                Jugando el SI, el equipo seleccionado deberá anotar en ambas mitades para que la apuesta sea ganadora.
                            </p>
                            <p>
                                Jugando el NO, el equipo seleccionado no debe anotar en ambas mitades o al menos no anotar en una mitad.
                            </p>
                        </li>
                    </li>
                    <li>
                        <p>
                            <span>6.6.16</span> - Ultimo equipo en anotar (3 opciones o 3 way)
                        </p>
                        <p>
                            Apuesta al equipo que realizara la última anotación del partido o que ninguno de los 2 anotara en el partido.
                        </p>
                        <p>
                            Opciones: Visitante, Casa, Ninguno.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"7.- TENNIS. "}>
                <p>
                    <span>7.1</span> - Para efectos de apuesta el partido debe ser completo sin que ningún jugador se retire por incapacidad o descalificación para que las apuestas sean válidas. Si un partido es reprogramado debido a problemas de clima, de luces, etc. Todas las apuestas se mantendrán durante 72 horas para el momento en el que el partido fue reprogramado, en caso de que el partido no se complete antes de estas 72 horas las apuestas se anularán.
                </p>
                <p>
                    <span>7.2</span> - Para las apuestas a futuro, ejemplo “Ganador del torneo” las apuestas al jugador que decida no participar en el torneo serán perdedoras.
                </p>
                <p>
                    <span>
                        7.3 - A ganar (2 opciones 2 way)
                    </span>
                </p>
                <p>
                    Apuesta al equipo que gana el partido. En caso de empate el monto apostado será devuelto.
                </p>
                <p>
                    Opciones: Visitante y Casa.
                </p>
                <p>
                    <span>
                        7.4 - Apuestas de hándicap (Spread) y totales:
                    </span>
                </p>
                <p>
                    Si un partido de tenis no se termina a causa de la descalificación o la retirada de un jugador, todas las apuestas de hándicap y de juegos totales se considerarán anuladas sin importar la puntuación del partido. Se cancelarán dichas apuestas y se devolverá su importe. Si un partido es reprogramado debido a problemas de clima, de luces, etc. Todas las apuestas se mantendrán durante 72 horas para el momento en el que el partido fue reprogramado, en caso de que el partido no se complete antes de estas 72 horas las apuestas se anularán.
                </p>
                <p>
                    <span>
                        7.5 - Totales en juegos (games) de juego completo (2opciones o 2way)
                    </span>
                </p>
                <p>
                    Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos o jugadores.
                </p>
                <p>
                    2 opciones: Alta y Baja.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>7.5.1</span> - Totales en juegos (games) por equipos o jugadores (2opciones o 2way)
                        </p>
                        <p>
                            Apuesta a la Alta o Baja de puntos (games) del equipo o jugador casa o visitante.
                        </p>
                        <p>
                            2 opciones: Alta y Baja.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        7.6 - Handicap (point spread) de juegos (games) (2 opciones 2 way)
                    </span>
                </p>
                <p>
                    Diferencia de juegos (games) entre 2 equipos o jugadores.
                </p>
                <p>
                    Ejemplo:
                </p>
                <p>
                    Nadal -3,5 -120: Si Nadal gana por 4 juegos o más la apuesta es ganadora.
                </p>
                <p>
                    Murray +3,5 -110: Si Murray pierde por menos de 3 juegos o gana el partido la apuesta es ganadora.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>7.6.1</span> - Handicap Set (point spread) (2 opciones 2 way)
                        </p>
                        <p>
                            Diferencia de sets entre 2 equipos o contrincantes.
                        </p>
                        <p>
                            Ejemplo:
                        </p>
                        <p>
                            Nadal -1,5 -120: Si Nadal gana por una diferencia de 2 sets o más la apuesta es ganadora.
                        </p>
                        <p>
                            Murray +1,5 -110: Si Murray pierde por 1 set o gana el partido la apuesta es ganadora.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"8.- BOXEO & MMA. "}>
                <p>
                    <span>8.1</span> - Las apuestas a combates que se hayan pospuesto, prevalecerán durante 30 días. Si cualquiera de los boxeadores es sustituido por otro, se anularán las apuestas y se devolverá el dinero apostado.
                </p>
                <p>
                    <span>8.2</span> - Para efectos de apuesta se considera que el combate comenzó al sonar la campana del primer asalto.
                </p>
                <p>
                    <span>8.3</span> - En caso de que un encuentro acabe en {"'Combate sin decisión'"} (no participe), se anularán las apuestas y se devolverán las cantidades apostadas, exceptuando las apuestas cuyo resultado ya se haya determinado.
                </p>
                <p>
                    <span>8.4 - Boxeo/MMA - Apuestas a ganador</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>8.4.2</span> - En el caso de empate se anularán las apuestas y se devolverá el dinero apostado. Las apuestas se determinarán según el resultado anunciado en el cuadrilátero (ring). Cualquier posible apelación o rectificación posterior no afectará la determinación de las apuestas (A no ser que dicha rectificación se deba a un error humano a la hora de anunciar el resultado).
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>8.4.3</span> - Las apuestas prevalecerán sin tener en cuenta los cambios en los números de asaltos disputados en el combate.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        <span>8.5</span> - Boxeo/MMA - Apuesta al resultado del combate
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>8.5.1</span> - Para propósitos de apuesta, si realiza una apuesta a un peleador a que gana por “KO” si el peleador seleccionado gana por KO, TKO o DQ la apuesta será ganadora.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>8.5.2</span> - Si la apuesta ofrece empate como tercera opción y el combate termina en empate, todas las apuestas realizadas en el empate serán ganadoras, mientras que las realizadas en los peleadores serán perdedoras. Si es una apuesta de 2 opciones donde no se ofrece el empate entonces las apuestas en los peleadores serán devueltas.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        <span>8.6</span> - Boxeo/MMA - Número de asaltos
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>8.6.1</span> - Para rounds de 3 minutos. Para efectos de apuesta cuando se indica medio asalto, la mitad que determina la alta o baja se establecerá en 1 minuto y 30 segundos del asalto. Exactamente la mitad del round.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                8.6.2
                            </span> - Si se modifica el número de asaltos de un combate tras haber establecido esta proposición, todas las apuestas prevalecerán, a menos que el número de asaltos establecido sea mayor que el total final de asaltos en el combate.
                        </p>
                        <p>
                            En el caso de UFC (Rounds de 5 minutos) cuando se indica medio asalto, la mitad que determina la alta o baja se establecerá en 2 minutos y 30 segundos del asalto.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"9.- ATLETISMO. "}>
                <p>
                    <span>9.1.</span> - Los resultados serán oficiales en el momento de la ceremonia de podio. Cualquier cambio posterior no cuenta a efectos de apuestas. En caso de que no hubiese ceremonia de podio los resultados se asentarán de acuerdo al anuncio oficial de la IAAF el día del evento.
                </p>
                <p>
                    Medallas totales - Las medallas conseguidas en eventos de equipo cuentan como una.
                </p>
                <p>
                    Apuestas a priori - Todas las apuestas cuentan, tanto si participa como si no. Evento/Cara a cara – Ambos competidores deben empezar y al menos uno terminar para que no se anulen las apuestas. En caso de que un competidor se retire o sea retirado una vez comenzado el evento las apuestas realizadas después del término de la ronda anterior serán canceladas.
                </p>
                <p>
                    Las apuestas se mantienen incluso si un evento se pospone más de 36 horas, a no ser que se posponga indefinidamente.
                </p>
            </Collapsible>
            <Collapsible title={"10.- AUTOMOVILISMO. "}>
                <p>
                    <span>10.1</span> - Aplazamientos: Si una carrera o clasificatoria es por cualquier motivo aplazada, todas las apuestas se mantendrán como válidas durante 48 horas. Si el aplazamiento tarda más de 48 horas, todas las apuestas serán canceladas y las apuestas serán reembolsadas.
                </p>
                <p>
                    <span>
                        10.2 - FÓRMULA 1:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>10.2.1</span>.- Todas las apuestas se valorarán de acuerdo con Formula1.com.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>10.2.2</span>.- Se considera que el inicio de la carrera es la señal que indica el comienzo de la vuelta de calentamiento. Los pilotos deben comenzar la carrera para que las apuestas sean válidas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>10.2.3</span>.- Los resultados de las apuestas se colocarán al momento de la ceremonia en el pódium. Las penalizaciones o pérdidas de puestos posteriores no afectarán a la valoración de las apuestas.
                        </p>                    </li>
                    <li>
                        <p>
                            <span>10.2.4</span>.- Todas las apuestas de la sesión de clasificación serán válidas cuando el piloto comience su sesión de clasificación. Los pilotos deben comenzar la sesión de clasificación para que las apuestas de la sesión de clasificación sean válidas. Las penalizaciones o pérdidas de puestos posteriores no afectarán a la valoración de las apuestas.
                        </p>                    </li>
                    <li>
                        <p>
                            <span>10.2.5</span>.- Enfrentamientos directos entre pilotos, ambos pilotos deben comenzar la carrera para que la apuesta se considere válida.
                        </p>                    </li>
                    <li>
                        <p>
                            <span>10.2.6</span>.- Enfrentamientos directos entre pilotos, si ninguno de los pilotos termina la carrera ganará el piloto que complete más vueltas. Si ambos pilotos completan el mismo número de vueltas, las apuestas se considerarán no válidas. Las penalizaciones o pérdidas de puestos posteriores no afectarán a la valoración de las apuestas.
                        </p>                    </li>
                    <li>
                        <p>
                            <span>10.2.7</span>.- Las apuestas al Campeonato se valorarán inmediatamente después de la última carrera de la temporada y no se verán afectadas por ninguna penalización o pérdida de puestos posteriores.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        10.3.- INDYCAR:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>10.3.1</span> - Los resultados para las apuestas se tomarán de la página oficial IndyCar www.indycar.com.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>10.3.2</span> - Si posteriormente se producen cambios en la clasificación como resultado de apelaciones o decisiones del organismo regulador, que no estén relacionadas con el orden de llegada a la meta original (Ej: penalizaciones debido a la infracción de alguna regla, conducción peligrosa, etc...), las apuestas serán valoradas de acuerdo con el resultado oficial inicial sin tomar en cuenta los cambios posteriores.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>10.3.3</span> - El piloto deberá comenzar la carrera para que las apuestas sean válidas. Enfrentamientos directos entre pilotos, ambos pilotos deben iniciar la carrera para que la apuesta tenga {'"acción"'}.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>10.3.4</span> - Enfrentamientos directos entre pilotos, si ninguno de los pilotos finaliza la carrera, el piloto que complete más vueltas será declarado ganador. Si ambos pilotos completan el mismo número de vueltas completas, las apuestas serán consideradas no válidas. Los resultados de las apuestas no se verán afectados por penalizaciones o pérdida de puestos posteriores.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        10.4.- CARRERAS DE RALLY
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>10.4.1</span> Las apuestas se valorarán de acuerdo con la clasificación oficial que determinen los organizadores oficiales de la carrera y no se verán afectadas por posteriores descalificaciones y/o apelaciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>10.4.2</span> - Apuestas al Emparejamiento de Pilotos (enfrentamientos entre corredores) (H2H): Si uno de los pilotos no empieza la carrera, todas las apuestas serán consideradas como no válidas. Ambos corredores deben clasificar a la carrera final, para que las apuestas se consideren válidas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>10.4.3</span> - Apuestas al Emparejamiento de Equipos (enfrentamientos entre equipos) (H2H): Las apuestas serán valoradas en base al coche mejor clasificado en los resultados oficiales registrados por la FIA. Ambos equipos deberán tener al menos un coche clasificado para que las apuestas tengan validez.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        10.5.- NASCAR / BUSCH
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>10.5.1</span> - Apuestas al ganador final
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>10.5.1.1</span> - La apuesta {"'Field'"} o {"'El resto'"} incluye a cualquier otro piloto que no aparezca en la lista.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.1.2</span> - Las apuestas a pilotos que al final no clasifiquen para la carrera final serán anuladas.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.1.3</span> -Para que las apuestas prevalezcan, la carrera deberá disputarse dentro de los 7 días siguientes al día y hora inicialmente previstos.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.1.4</span> - A efectos de apuesta, se considerará ganador de la carrera al ganador oficial de la carrera según la NASCAR (National Association for Stock Car Auto Racing). Esto incluirá todas las carreras que se suspendan prematuramente por cualquier motivo.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>10.5.2</span>.- Enfrentamientos directos entre pilotos.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>10.5.2.1</span> -Todos los enfrentamientos directos se determinarán según el resultado oficial de la NASCAR. Si un piloto no logra completar la carrera, el otro piloto que forme parte de la apuesta será considerado ganador de la misma. Si ninguno de los pilotos logra completar la carrera, el resultado se determinará por el número de vueltas completadas en su totalidad. Si ambos pilotos completan el mismo número de vueltas, las apuestas se considerarán no válidas.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.2.2</span> - Ambos pilotos deberán empezar la carrera (Ej: cruzar la línea de salida) para que las apuestas prevalezcan. Si algún piloto es sustituido antes de que la carrera empiece, se anularán todos los enfrentamientos directos de este piloto. Por ejemplo, el piloto Gordon clasifica a la carrera final, pero debido a una lesión es sustituido por el piloto Brack, en éste caso se anularán todas las apuestas al piloto sustituido.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.2.3</span> - Si un piloto es sustituido durante la carrera, las apuestas prevalecerán sobre su sustituto. Por ejemplo, si el piloto Gordon empieza la carrera, pero debido a una lesión es sustituido después de 10 vueltas por el piloto Brack, que finaliza la carrera en cuarto lugar. A efectos de apuesta y de posición en la carrera, se considerará que el piloto Gordon ha finalizado la carrera en 4ª posición.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>10.5.3</span>.- Proposiciones para la carrera.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>10.5.3.1</span> - Las proposiciones a la carrera se determinarán por el resultado oficial de NASCAR. (Ej: Advertencias, vueltas de castigo, cambios de líder, número de líderes, coche ganador, etc…).
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.3.2</span> -Se anularán las apuestas si la carrera se acorta y no se publican resultados oficiales.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>10.5.4</span>.- Apuestas para la Clasificación
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>10.5.4.1</span> -Enfrentamientos directos de pilotos en clasificación: A efectos de apuesta, los enfrentamientos directos entre pilotos se basarán en los tiempos de clasificación (tiempos más rápidos), y no en la parrilla de salida. Por ejemplo, las posiciones que van del 37 al 43 se decidirán por los tiempos y no por cualquier otro criterio. Si dos o más pilotos obtienen exactamente el mismo tiempo en la clasificación, se considerará ganador al piloto con la posición más alta en la parrilla de salida.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.4.2</span> - Se anularán las apuestas si el piloto no empieza la vuelta de clasificación. Si un piloto no inicia la vuelta de clasificación, las apuestas no tendrán acción.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.4.3</span> - En el caso de que no se completara la clasificación, se anularán todas las apuestas a la clasificación. Todas las proposiciones se determinarán por los resultados oficiales de la NASCAR, a no ser que se haya especificado lo contrario al momento de realizar su apuesta.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <span>10.5.5</span>.-Apuestas futuras / de temporada
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>10.5.5.1</span> - Para que las proposiciones futuras prevalezcan, los pilotos deberán lograr clasificar en un mínimo de 27 carreras.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>10.5.5.2</span> - La apuesta {"'Field'"} o {"'El resto'"} incluye a cualquier otro piloto que no aparezca en la lista.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"11.- GOLF. "}>
                <ul>
                    <li>
                        <p>
                            <span>11.1.1</span>. - Si el comienzo de una vuelta se retrasa, o si el juego se suspende durante una vuelta, todas las apuestas pendientes se mantendrán como válidas durante 48 horas. Si el retraso o suspensión dura más de 48 horas respecto a su hora de inicio original, se cancelarán todas las apuestas pendientes y se reembolsará el importe de las mismas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.1.2</span>. - Las apuestas a un golfista que no juegue en el torneo serán consideradas nulas y la cantidad apostada será reembolsada.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.1.3</span>. - Se considera que un golfista ha jugado en cuanto ha dado el primer golpe. Si un jugador se retire después de su primer golpe, las apuestas a este jugador serán consideradas como perdedoras.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.1.4</span>. - Las apuestas se decidirán utilizando los resultados oficiales del torneo (incluyendo resultado final correcto y apuestas a encuentros individuales). Esto incluye un encuentro que finalice antes, ya sea por acuerdo entre los jugadores o debido a lesiones.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.2. - Apuestas directas (Ganador del torneo):
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.2.1</span>. - El campo {'"Field"'} o {'"El resto"'} incluye todos los jugadores cuyo nombre no aparezca en la lista.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.2.2</span>. -Todas las apuestas directas se decidirán según el jugador que gane el trofeo. Se tendrá en cuenta el resultado de los encuentros de desempate (play-offs).
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.2.3</span>. - Si en un torneo no se juegan por completo el número especificado de hoyos (normalmente 72) y es acortado por los responsables del torneo, el líder al final del número de hoyos especificados por los responsables del torneo será el ganador, a no ser que haya encuentros adicionales o que después de que se haya hecho la apuesta sólo se haya completado una parte de la vuelta, en cuyo caso esa apuesta sería cancelada.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.2.4</span>. -Si dos o más golfistas están empatados en la primera posición al final del tiempo reglamentario, normalmente se juega un encuentro de desempate a muerte súbita para determinar el ganador del torneo. En este caso, el ganador del encuentro del desempate será el ganador para efectos de apuestas. Todos los demás golfistas en el encuentro de desempate se serán calificados como segundo lugar.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.2.5</span>. - En el caso de un empate para una posición finalista, la posición de empate contará; por ejemplo, si cinco jugadores empatan para la octava posición, los cinco serán considerados como finalistas en la octava posición.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.2.6</span>. - En algunos torneos, los responsables del torneo pueden pedir a los jugadores jugar un número concreto de hoyos de desempate para determinar el ganador del torneo. En este caso, el golfista con la menor puntuación después de completar el número especificado de hoyos será declarado el ganador, Todos los demás golfistas en el encuentro de desempate serán calificados como segundo lugar.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.3. - Enfrentamientos directos entre golfistas:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.3.1</span>. - Enfrentamientos directos entre golfistas, los dos golfistas deben dar el primer golpe para que las apuestas sean válidas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.3.2</span>. - Se realizan enfrentamientos directos entre golfistas únicamente para efectos de apuestas. El jugador con la mejor puntuación bajo par al final del torneo completo será el vencedor del emparejamiento.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.3.3</span>. - Se considerará ganador al jugador que consiga la mejor posición al final del torneo. Si se reduce el número de vueltas que deben completarse, como por ejemplo en caso de mal tiempo, las apuestas serán válidas siempre y cuando el torneo declare un ganador.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.3.4</span>. -Si un jugador no pasa el corte al final de la segunda vuelta, el otro jugador será considerado el ganador. Si ninguno de los dos jugadores pasa el corte, la puntuación inferior después de pasar el corte determinará el ganador.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.3.5</span>. - Si un jugador es descalificado o se retira después de empezar, sea antes de completarse las dos primeras vueltas o después de que los dos jugadores hayan conseguido pasar el corte, el otro jugador será considerado vencedor.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.3.6</span>. - Si un jugador es descalificado durante la tercera o cuarta vuelta, en caso de que el otro jugador en el enfrentamiento directo no haya pasado el corte, el jugador descalificado será considerado el ganador.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.4. - A ganar juego completo (3 opciones o 3 way)
                    </span>
                </p>
                <p>
                    Apuesta al jugador que ganará el partido.
                </p>
                <p>
                    3 opciones: Visitante, Casa, Empate.
                </p>
                <p>
                    <span>
                        11.5. - Pasar/No pasar el corte:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.5.1</span>. - En algunos torneos podemos ofrecer líneas sobre si los jugadores pasarán el corte (participar en las vueltas finales), o no pasarán el corte (no logró clasificarse para las últimas vueltas).
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.6. - Apuestas a 18 hoyos:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.6.1</span>. - El ganador será el jugador con la puntuación inferior al final de los 18 hoyos. Si la puntuación es la misma al final de los 18 hoyos, todas las apuestas serán canceladas. No se tendrán en cuenta los encuentros de desempate.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.7. - Posición final de un jugador:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.7.1</span>. - En el caso de que se produzca un empate en la clasificación final, este empate no se deshará. Es decir, si para la octava posición hay cinco jugadores empatados, los cinco contarán como clasificados en octava posición.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.8. - Puntuaciones individuales por vuelta:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.8.1</span>. - Todas las apuestas serán canceladas si el jugador no finaliza la vuelta.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.9. - Puntuación de un jugador concreto en el próximo hoyo:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.9.1</span>. - Todas las apuestas serán canceladas si un jugador no termina el hoyo designado. Las apuestas serán calificadas cuanto el jugador salga el green.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.10. - Apuestas de grupo:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.10.1</span>. - El ganador será el jugador con la puntuación más baja al finalizar el torneo, incluyendo el playoff (o al finalizar el corte, en el caso de que ningún jugador haya pasado el corte).
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.10.2</span>. - En el caso de que se produzca un empate, el ganador será el jugador con la puntuación más baja en la ronda final. Si el empate persiste, las apuestas a la línea de dinero serán reembolsadas y los parlays serán recalculados.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.10.3</span>. - Si un jugador no empieza la competición, todas las apuestas a este se cancelarán y el dinero se reembolsará.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        11.11. - Enfrentamientos a tres en golf (3 pelotas):
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>11.11.1</span>. - Las apuestas de enfrentamientos a tres, también conocidas como {'"3 pelotas"'}, se decidirán teniendo en cuenta la puntuación inferior al final de una vuelta completa. Una vuelta se considera completa cuando se han completado 18 hoyos.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.11.2</span>. - Si un jugador que ha empezado se retira antes de completar los 18 hoyos se considerará perdedor a pesar de la puntuación. Un jugador ha empezado a jugar en cuanto ha efectuado el primer golpe en el primer hoyo. Si cualquier jugador se retira antes de empezar, todas las apuestas a todos los jugadores de su grupo serán canceladas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.11.3</span>. - En caso de que se produzcan cambios en los grupos iniciales, las apuestas se decidirán según los grupos originales.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>11.11.4</span>. - Desempates:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>11.11.4.1</span>. - En las apuestas a tres pelotas si hay un empate en la puntuación inferior se usará la regla europea del empate:
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>11.11.4.1.1</span>. - En las apuestas a tres pelotas si dos golfistas empatan con el mejor resultado, las apuestas realizadas a los dos golfistas serán canceladas. Las apuestas al golfista que termina en último lugar serán consideradas perdedoras.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>11.11.4.1.2</span>. - Si los tres golfistas empatan con el mejor resultado, las apuestas realizadas a los tres golfistas serán canceladas.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"12.-E-SPORTS. "}>
                <p>
                    <span>12.1</span>. - Las fechas y horas de inicio mostradas en nuestro sitio web para las partidas de E-Sport son tan solo indicativas. No garantizamos que sean correctas. Si una partida se cancela o pospone y no comienza o se reanuda en el plazo de 48 horas desde el momento de inicio programado en un principio, las apuestas en esa partida quedarán invalidadas y se devolverá su importe. La excepción a esta regla son las apuestas a que un equipo/jugador sigue adelante en un torneo o gana el torneo. Este tipo de apuestas serán válidas independientemente de si la partida se suspende o pospone.
                </p>
                <p>
                    <span>12.2</span>. - Si el nombre de un jugador/equipo está escrito incorrectamente, todas las apuestas serán válidas a menos que resulte obvio que se trata del jugador o equipo incorrecto.
                </p>
                <p>
                    <span>12.3</span>. - Si en una partida oficial un jugador juega con un alias incorrecto o con una cuenta que no sea su cuenta principal (smurf), el resultado seguirá siendo válido a menos que resulte evidente que no se trata del jugador que debería haber jugado esa partida.
                </p>
                <p>
                    <span>12.4</span>. - Todas las apuestas se valorarán usando el resultado oficial que anuncie el correspondiente órgano rector de la competición en cuestión.
                </p>
                <p>
                    <span>12.5</span>. - Si la opción del empate no está disponible, contará la prórroga (en caso de jugarse).
                </p>
                <p>
                    <span>12.6</span>. - Apuestas con hándicap (Spread): el margen de las apuestas E-Sports puede establecerse en función de las Rondas, los Mapas o cualquier otra medida que pueda ser contada, dependiendo del juego. Para referirnos al margen únicamente utilizaremos el término margen. (Por ejemplo, el margen en Counter Strike son las rondas ganadas pero en Starcraft 2 son los mapas).
                </p>
                <p>
                    <span>12.7</span>. - La creación de hándicaps es una forma de hacer que las competiciones deportivas sean más igualadas y por lo tanto más interesantes a la hora de apostar. En las apuestas E-Sports, esto se hace concediendo algunos mapas/rondas de antemano a uno de los equipos/jugadores que no sean favoritos
                </p>
                <ul>
                    <li>
                        <p>
                            <span>12.7.1</span>. - Si el Jugador A gana la partida por dos o más mapas, ganarán los que hayan apostado a favor del Jugador A y perderán los que hayan apostado a favor del Jugador B. Si el Jugador A gana por un mapa o si gana el Jugador B, quienes hayan apostado por el Jugador B ganarán sus apuestas y quienes hayan apostado por el Jugador A perderán.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>12.8</span>. - Apuestas al total: el total en las apuestas E-Sports puede establecerse en función de las Rondas, los Mapas o cualquier otra medida que pueda ser contada, dependiendo del juego. Para referirnos al total utilizaremos únicamente el término total.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>12.8.1</span> - Si un jugador gana 2-0, ganarán todas las apuestas de la opción Baja en 2,5, y perderán las apuestas de la opción Alta en 2,5. Si un jugador gana 2-1, ganarán todas las apuestas de la opción Alta en 2,5, y perderán las apuestas de la opción Baja en 2,5.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>12.9</span>. - Si no se termina un mapa porque un jugador se retira o es descalificado, serán válidas todas las apuestas y se validarán en función del ganador declarado oficialmente. La excepción a esta regla son los mapas de Counter-Strike, en los que se cancelarán todas las apuestas a la línea de dinero, con margen y totales si un equipo se retira o es descalificado antes de que se jueguen todas las rondas de mapas programadas.
                </p>
                <p>
                    <span>12.10</span>. - Si un jugador/equipo se retira antes del inicio de un torneo, o lo hace durante el torneo, se cancelarán las apuestas a que ese jugador/equipo gana el torneo o sigue adelante en el torneo y se devolverá su importe.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>12.10.1</span>. - Si un jugador/equipo aparece como {'"debe comenzar"'} pero se retira antes de que comience el torneo, se invalidarán las apuestas a que ese jugador/equipo sigue adelante en el torneo o gana el torneo y se devolverá su importe. Esto se aplica a todos los jugadores/equipos participantes en el torneo.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>12.11</span> - Si se cambia el número anunciado de mapas/rondas, se cancelarán todas las apuestas con hándicap o al total. Las apuestas a la línea de dinero (resultado de la partida) serán válidas.
                </p>
                <p>
                    <span>12.12</span> - Si un jugador/equipo obtiene una victoria por defecto en al menos un mapa, todas las apuestas a la línea de dinero, con margen y totales quedarán canceladas y se devolverá el dinero correspondiente.
                </p>
                <p>
                    <span>12.13</span> - Apuestas en directo: en las apuestas en directo, si se vuelve a jugar un mapa debido a un empate, una desconexión o algún motivo parecido, se cancelarán todas las apuestas en directo del mapa respectivo. La repetición del mapa se considerará una partida diferente.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>12.13.1</span> - Las apuestas no se cancelarán porque un equipo juegue con un jugador stand-in o reserva. Si el organizador del evento permite la participación de los stand-in y se produce un resultado oficial, todas las apuestas se evaluarán con normalidad.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>12.13.2</span> - Se permiten las apuestas en la fase de Selección de héroes/campeones de los juegos que tengan dicha fase (dota 2, LoL, etc...).
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        12.16. - Proposiciones:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>12.16.1</span> - Primera torre: el perdedor de esta apuesta es el primer equipo al que le destruyan una de sus torres.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>12.16.2</span> - Primera sangre (First Blood): el ganador de esta apuesta es el equipo que sea anunciado durante la partida por haber obtenido la “Primera sangre”.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>12.16.3</span> - Primero en llegar a 10 muertes: el ganador de esta apuesta es el primer equipo que llegue a 10 muertes en el marcador de la partida.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>12.16.4</span> - Primera ronda: el ganador de esta apuesta es el equipo que gane la primera ronda.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>12.16.5</span> - Primero en ganar 5 rondas: el ganador de esta apuesta es el equipo que gane primero 5 rondas.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"13.- E-RUGBY. "}>
                <p>
                    <span>13.1</span>. - Rugby League, Super League y Rugby Union
                </p>
                <p>
                    <span>13.2</span>. - En relación con las apuestas, los ganadores y los perdedores se decidirán según el resultado final (incluida la prórroga, en caso de ser aplicable).
                </p>
                <p>
                    <span>13.3</span>. - Todos los partidos de rugby deben durar al menos 80 minutos para que sean válidos, excepto los partidos de pretemporada, que están programados para durar menos.
                </p>
                <p>
                    <span>13.4</span>. - Si un partido de rugby se aplaza durante más de 48 horas respecto a su hora de inicio original, todas las apuestas de ese partido se considerarán anuladas/no válidas y se devolverá a su cuenta la cantidad apostada y los parlays serán recalculados.
                </p>
                <p>
                    <span>13.5</span>. - Las apuestas se evaluarán según el resultado final de un evento (tiempo regular o tiempo extra dependiendo del caso
                </p>
                <p>
                    <span>13.6. - A ganar juego completo (3 opciones o 3 way)</span>
                </p>
                <p>
                    Apuesta al equipo que ganará el partido. En caso de empate las apuestas realizadas al empate serán ganadoras.
                </p>
                <p>
                    3 opciones: Visitante, Casa, Empate.
                </p>
                <p>
                    <span>
                        13.7 - Totales (2 opciones 2 way)
                    </span>
                </p>
                <p>
                    Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos. Incluye tiempo extra (overtime).
                </p>
                <p>
                    2 opciones: Alta y Baja.
                </p>

                <p>
                    <span>
                        13.8 - Par - Impar (Odd - Even)
                    </span>
                </p>
                <p>
                    Puntos Totales (Par / Impar) - Apueste a que el resultado final será Par o Impar. El {'‘0’'} cuenta como Par.
                </p>
                <p>
                    <span>
                        13.9 - Hándicap (Point spread)
                    </span>
                </p>
                <p>
                    Diferencia de goles entre 2 equipos
                </p>
                <p>
                    Ejemplo:
                </p>
                <p>
                    Leigh Centurions -12.5 -150: Si Leigh Centurions gana por 13 anotaciones o más la apuesta es ganadora.
                </p>
                <p>
                    Wigan Warrios +12.5 -115: Si Wigan Warrios gana o pierde por 12 anotaciones, la apuesta es ganadora.
                </p>
                <p>
                    <span>
                        13.10. - Proposiciones para el margen de resultado:
                    </span>
                </p>
                <p>
                    <span>13.10.1</span> - Las apuestas de las proposiciones para el margen de resultado son válidas solo para el tiempo reglamentario y no incluirán la prórroga ni los puntos de oro.
                </p>
            </Collapsible>
            <Collapsible title={"14.- CRÍQUET incluyendo Twenty/20. "}>

                <p>
                    <span>14.1</span>.- General: Las apuestas serán valoradas según el resultado oficial facilitado por el organismo regulador competente para el partido o competición en cuestión.
                </p>
                <p>
                    <span>14.2</span>.- Cambio de Campo: Si se cambia el lugar en el que se juega el partido, las apuestas que ya hayan sido tomadas serán válidas, siempre y cuando el equipo de casa siga siendo designado como tal. Si se invierten el equipo de casa y el visitante, las apuestas realizadas al orden original serán consideradas como no válidas.
                </p>
                <p>
                    <span>14.3</span>.- Si debido a una interferencia externa, se suspende un partido, las apuestas del partido serán anuladas. Si ningún equipo es declarado ganador por la sitio oficial, todas las apuestas al ganador del partido serán anuladas.
                </p>
                <p>
                    <span>14.4</span>.- Si un partido se ve afectado por factores externos (tales como el mal tiempo), las apuestas serán valoradas en base a las reglas oficiales de la competición (esto incluye partidos que se vean afectados por cálculos matemáticos como el método Duckworth-Lewis method (DL) o el sistema Jayadevan (VJD)*).
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.4.1</span>- *Método Duckworth Lewis / Sistema Jayadevan Se trata de sistemas que se utilizan para ajustar las puntuaciones en el caso de un retraso por lluvia en los partidos de un día, y mantener el equilibrio del partido inalterado. Estos sistemas usan el número de overs que cada equipo tiene aún por recibir y el número de wickets que tienen aún a su disposición con el fin de llegar a un resultado oficial.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>14.5</span>.- Si no se ha ofrecido una línea para el empate, y las reglas oficiales de la competición no determinan un ganador, todas las apuestas serán valoradas como no válidas. En las competiciones en las que un bowl out o un super over determinan quién es el ganador, las apuestas serán valoradas según el resultado oficial.
                </p>
                <p>
                    <span>14.6</span>.- Apuestas a las Series: En el caso de que las series acabasen en empate y no hubiéramos ofrecido una línea para el mismo, todas las apuestas se considerarían como no válidas y serían reembolsadas.
                </p>
                <p>
                    <span>14.7.- Partidos Test (Partidos internacionales):</span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.7.1</span>- En el caso de que no se completen al menos 4 entradas, las apuestas al número total de puntos (alta/baja) se considerarán no válidas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.7.2</span>- En el caso de que no se completen al menos 4 entradas, las apuestas al ganador del partido se valorarán en función del anuncio oficial.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        14.8.-Empate en partidos Test (Partidos internacionales):
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.8.1</span>- En caso de empate en un partido de test (cuando todas las entradas han sido completadas y aun así ambos equipos tienen el mismo número de puntos) todas las apuestas al partido serán reembolsadas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.8.2</span>- En caso de que se ofrezca una línea de dinero con el empate como tercera opción y el partido termine en iguales, ganarán sólo aquellos jugadores que hayan apostado al empate; aquellos que apuesten a cualquiera de los equipos o contendientes, perderán.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.8.3</span>- Si  partido Test es abandonado o interrumpido por interferencias externas (disturbios, etc) todas las apuestas a ese partido serán consideradas como no válidas.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        14.9.- Partidos Internacionales de Un Día (One Day Internationals):
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.9.1</span>- En caso de que el partido no dure al menos la cantidad oficial de overs, todas las apuestas al número total de puntos (over/under) serán consideradas como no válidas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.9.2</span>- En caso de que el partido no dure al menos la cantidad oficial de overs, todas las apuestas al ganador del partido serán valoradas de acuerdo con el pronunciamiento oficial.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.9.3</span>- En caso de que se haga uso de un día de reserva para un partido, todas las apuestas serán válidas y traspasadas al día de reserva.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        14.10.- TWENTY/20:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.10.1</span>- En caso de que el partido no dure como mínimo la cantidad oficial de overs, todas las apuestas al número total de puntos (over/under) serán consideradas como no válidas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.10.2</span>- En caso de que el partido no dure como mínimo la cantidad oficial de overs todas las apuestas al ganador del partido serán valoradas de acuerdo con el pronunciamiento oficial.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        14.11.- Proposiciones:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.11.1</span>- Las apuestas de las proposiciones para el margen de resultado son válidas solo para el tiempo reglamentario y no incluirán la prórroga ni los puntos de oro.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <span>14.11.1.1</span>- Apuestas al Mejor Bateador/Lanzador:
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>14.11.1.2</span>- Se considerará que los jugadores que formen parte del Once Inicial han jugado, incluso si no han bateado o lanzado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>14.11.1.3</span>- Para los mercados de las series se considerará que cualquier jugador que haya formado parte del Once Inicial al menos en un partido, ha jugado, y las apuestas tendrán por tanto validez.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>14.11.1.4</span>- En caso de empate se aplicarán las reglas del Dead-Heat.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>
                    <span>
                        14.12.- Proposiciones para Jugadores Individuales:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.12.1</span>.- A efectos de apuestas, si un jugador es seleccionado para el Once Inicial, pero no batea, se considerará que ha marcado cero carreras, y si no lanza, se considerará que ha conseguido cero wickets.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        14.13.- Mayor Número de Boundaries/ Fours/ Sixes Marcados en el Partido:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.13.1</span>.- Solamente tendrán validez aquellos que sean logrados a golpe de bate.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.13.2</span>.- Las apuestas serán válidas siempre que la primera bola haya sido lanzada en la primera entrada de cada equipo.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        14.14.- Apuestas de Partido al Bateador/Lanzador:
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.14.1</span>.- Para que las apuestas tengan validez, tanto el bateador debe enfrentarse al menos a una bola, como el lanzador debe lanzar al menos una bola
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.14.2</span>.- A menos que se haya especificado lo contrario al momento de apostar, las apuestas al Bateador se basarán en las primeras entradas mientras que las apuestas al Lanzador se basarán en el partido completo.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>14.15</span>.- Equipo con el Mayor Número de Sixes (6s): Para que las apuestas tengan validez, el partido debe llegar a una conclusión natural. En caso de empate se aplicarán las reglas del Dead-Heat
                </p>
                <p>
                    <span>14.16</span>.- Número de 4s del Bateador: A efectos de apuesta contará cuando el bateador consiga hacer exactamente cuatro carreras (incluido All-run/ Overthrows)
                </p>
                <p>
                    <span>
                        14.17.- Conseguir un “Century” (Sí/No):
                    </span>
                </p>
                <ul>
                    <li>
                        <p>
                            <span>14.17.1</span>.- Apuestas a conseguir un century (cuando un bateador anota 100 o más carreras en un solo turno) son para el partido completo.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.17.2</span>.- Las apuestas para cualquier jugador que no esté en el once inicial serán consideradas como no válidas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>14.17.3</span>.- Las apuestas a jugadores que sean seleccionados pero no bateen, serán valoradas como perdedoras.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"15.-FÚTBOL AUSTRALIANO (AUSSIE RULES). "}>
                <p>
                    <span> 15.1</span> - Si un partido cambia de sede, las apuestas se mantienen, siempre que el local se mantenga como tal y no se juegue en casa del visitante. EL tiempo reglamentario es de 80 minutos. Las apuestas se deciden de acuerdo a los resultados oficiales de AFL.
                </p>
                <p>
                    <span>15.2</span> - Ganador del partido: Cualquier partido que termine en empate significara la anulación de las apuestas a menos que se ofreciese precio para el empate (3 opciones 3 way).
                </p>
                <ul>
                    <li>
                        <p>
                            <span>15.2.1</span> - Apuestas con 2 opciones (2-way) y Totales:
                        </p>
                        <p>
                            Todas las apuestas se valorarán incluyendo la prórroga (si se juega), excepto que se especifique lo contrario. Para que las apuestas tengan validez, se deberá jugar todo el tiempo reglamentario, excepto que se especifique lo contrario. Si la duración de un partido se modifica antes del inicio del mismo, el tiempo de duración del partido modificado se considerará como tiempo reglamentario del partido y todas las apuestas tendrán validez siempre que dicho tiempo se complete en su integridad.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"16.- BADMINTON. "}>
                <p>
                    <span>16.1</span> - Un partido debe ser completado en su totalidad o las apuestas serán anuladas, a excepción de las apuestas en relación a las que el resultado ya sea conocido, por ejemplo, Ganador del Primer Set.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>16.1.1</span> - Cualquier partido cancelado, pospuesto o abandonado debe reanudarse dentro de 24 horas de la hora de inicio original o las apuestas serán anuladas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>16.1.2</span>. - Las apuestas se validarán en función del resultado oficial al final del partido, independientemente de cualquier cambio futuro posterior o cualquier otra decisión tomada tras su finalización por una fuente oficial.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>16.1.3</span>. - En el caso de que se cambie el recinto donde se disputa el evento, las apuestas permanecerán.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>16.2</span>. - Ganador del partido: un partido se considera que ha comenzado después del primer punto. En el caso de que un partido no arranque, todas las apuestas serán anuladas. Un partido deberá estar totalmente finalizado para que la apuesta permanezca.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>16.2.1</span>. -Apuestas con 2 opciones (2-way):
                        </p>
                        <p>
                            Todas las apuestas seguirán siendo válidas aunque cambie la programación (o el día del partido) o el recinto. Todas las apuestas serán nulas en el caso de que un partido comience, pero no se complete.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"17.- BANDY. "}>
                <p>
                    <span>17.1.</span> - Los partidos de bandy deben jugarse durante al menos 80 minutos para considerar válidas las apuestas, de no ser así se anularán salvo que estén determinadas incondicionalmente.
                </p>
                <p>
                    Si un partido no se juega en dos mitades de 45 minutos las apuestas a totales y handicap se anulan.
                </p>
                <p>
                    Si un partido se pospone o cambia su fecha a menos de 36 horas del original, las apuestas se mantienen.
                </p>
                <p>
                    <span>17.2. - A ganar juego completo (3 opciones o 3 way)</span>
                </p>
                <p>
                    Apuesta al equipo o jugador que ganará el partido.
                </p>
                <p>
                    3 opciones: Visitante, Casa, Empate.
                </p>
                <p>
                    <span>17.3. - Totales (2 opciones 2 way)</span>
                </p>
                <p>
                    Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos o contrincantes.
                </p>
                <p>
                    2 opciones: Alta y Baja.
                </p>
            </Collapsible>
            <Collapsible title={"18.- DARDOS. "}>
                <ul>
                    <li>
                        <p>
                            <span>18.1.1</span>. - Si cualquier jugador no se presenta a la partida, las apuestas serán anuladas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>18.1.2</span>. - Si cambia la sede, las apuestas se mantienen.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>18.1.3</span>. - El resultado de las apuestas se basa en los resultados oficiales del torneo u órgano de gobierno cuando sea posible.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>18.1.4</span>. - Especiales de Torneo (180´s, Checkouts, Averages, Totals): más del 90% de las partidas deben ser completadas para que las apuestas tengan validez. Rule 4´s puede ser aplicada.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>18.1.5</span>. - Especiales Semanales/Diarios/Rondas: Todas las partidas programadas para el periodo especificado deben ser completadas o las apuestas se anularán, a no ser que el resultado esté incondicionalmente decidido. Rule 4´s puede aplicar.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>18.2</span>. - Ganador de la partida (2 resultados)/Resultado (3 resultados): La partida debe estar finalizada, con la excepción de las apuestas previas (no apuesta en vivo) donde la partida debe comenzar y si no termina, el jugador que progresa a la siguiente ronda o gana será definido como vencedor. En el caso de la Premier League, las apuestas quedarán decididas por el resultado oficial una vez que el partido esté decidido de manera incondicional.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>18.2.1</span>. - Ganador del torneo: todas las apuestas cuentan. Si una partida comenzada no puede ser completada, el jugador que está progresando a la siguiente ronda o hacia la victoria será considerado el ganador por motivos de resultado.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>18.2.2</span>. Apuestas con 2 opciones (2-way):
                        </p>
                        <p>
                            En caso de que el partido haya comenzado, pero no finalizado, el jugador que pase a la siguiente ronda o aquel al que se conceda la victoria se declarará ganador a efectos de valoración de apuestas. Las apuestas de los mercados de 2 opciones se anularán si el resultado final es un empate.
                        </p>
                        <p>
                            Opciones: Visitante y Casa.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>18.3</span>. - Hándicap/ Sets y Juegos/Marcador/180`s, Checkouts, Averages, Totales): el número reglamentario de sets/juegos predeterminados debe ser completado o las apuestas se anularán, a no ser que el resultado esté decidido sin condiciones, igualmente para los hándicaps, totales, etc.

                </p>
                <p>
                    <span>18.4</span>. - Apuestas a los Sets/Juegos: Los Sets/Juegos deben estar completados para que tengan validez todas las apuestas.
                </p>
            </Collapsible>
            <Collapsible title={"19.- SNOOKER Y BILLAR. "}>
                <p>
                    <span>19.1</span>. - Una partida de Snooker se considerará comenzada al {"'romper'"} la bola en el primer frame. En caso de que la partida de comienzo pero no se complete, el jugador que pase a la siguiente ronda o al que se le adjudique la victoria será considerado el ganador para las apuestas. En caso de que la partida no comience se anularán todas las apuestas.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>19.1.1</span>. - Apuestas con 2 opciones (2-way):
                        </p>
                        <p>
                            En caso de que el encuentro haya comenzado, pero no finalizado, el jugador que pase a la siguiente ronda o aquel al que se le conceda la victoria se declarará ganador a efectos de valoración de apuestas.
                        </p>
                        <p>
                            Opciones: Visitante y Casa.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"20.- VOLLEYBALL & BEACH VOLLEY. "}>
                <p>
                    <span>20.1</span>. - Cualquier apuesta en partidos cancelados, suspendidos o retrasados y que no se celebren en las siguientes 48 horas del horario de comienzo inicial serán anuladas, a excepción de las apuestas que hayan sido resueltas. Por ejemplo, Ganador del Primer Set.
                </p>
                <ul>
                    <li>
                        <p>
                            <span>20.1.1</span>. - El tiempo reglamentario debe completarse para que las apuestas sean válidas. Las apuestas en partidos en los que el tiempo de juego no se ha completado serán nulas, con la excepción de las apuestas en relación a las que el resultado ya sea conocido.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>20.1.2</span>. - Se deberán de completar el número oficial de puntos y sets o las apuestas se anularán, a excepción de las apuestas que ya hayan sido cerradas, por ejemplo: Ganador del Primer Set. A efectos de las apuestas, todos los partidos se resolverán después de un máximo de 5 sets. Los {"'Golden Sets'"} NO cuentan.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>20.1.3</span>. - Las apuestas se cerrarán de acuerdo a los resultados oficiales al final de los partidos, independientemente de cualquier cambio que pudiese acaecer en el futuro debido a un pronunciamiento de algún organismo oficial o agencia gubernamental.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>20.1.4</span>. - El número oficial de puntos por set y de sets por partido deberán de ser completados para que las apuestas sean válidas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>20.1.5</span>. - Las apuestas en partidos cuyas sedes sean cambiadas serán canceladas.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>20.1.6</span>. - Cualquier partido cancelado, pospuesto o abandonado deben reanudarse dentro de 48 horas de la hora de inicio original o las apuestas serán anuladas.
                        </p>
                    </li>
                </ul>
                <p>
                    <span>
                        20.2 - A ganar juego completo (2 opciones o 2 way)
                    </span>
                </p>
                <p>
                    Apuesta al equipo ganará el partido.
                </p>
                <p>
                    2 opciones: Visitante, Casa.
                </p>
                <p>
                    <span>
                        20.3. - Totales (2 opciones 2 way)
                    </span>
                </p>
                <p>
                    Apuesta a la Alta o Baja de la suma de puntos anotados por ambos equipos o contrincantes.
                </p>
                <p>
                    2 opciones: Alta y Baja.
                </p>
                <p>
                    <span>
                        20.4. - Handicap (Point spread) (2 opciones 2 way)
                    </span>
                </p>
                <p>
                    Diferencia de puntos entre 2 equipos.
                </p>
            </Collapsible>
            <Collapsible title={"21.- WATERPOLO. "}>
                <p>
                    <span>
                        Apuestas con 3 opciones (3-way) y Totales:
                    </span>
                </p>
                <p>
                    Todas las apuestas se valorarán en función del resultado al término del tiempo reglamentario, a menos que se especifique lo contrario. Si un encuentro comienza, pero no se completa, todas las apuestas serán nulas, a menos que el resultado de algún mercado en particular ya se haya establecido.
                </p>
            </Collapsible>
            <Collapsible title={"22.- BALONMANO. "}>
                <p>
                    <span>
                        Apuestas con 3 opciones (3-way) y Totales:
                    </span>
                </p>
                <p>
                    En caso de que los 60 minutos de tiempo reglamentario no terminen por cualquier motivo, se anularán todas las apuestas. La prórroga no cuenta.
                </p>
            </Collapsible>
            <Collapsible title={"23.- CICLISMO. "}>
                <p>
                    <span>
                        Apuestas con 2 opciones (2-way):
                    </span>
                </p>
                <p>
                    Estas apuestas se valorarán en función del ciclista que llegue antes al final de la etapa. Ambos ciclistas deben comenzar la etapa para que las apuestas sean válidas. Si solo la finaliza uno de los dos, este será considerado el ganador. Si ninguno de los ciclistas finaliza la etapa, las apuestas a ambos se considerarán nulas.
                </p>
            </Collapsible>
            <Collapsible title={"24.- TENIS DE MESA. "}>
                <p>
                    <span>
                        Apuestas con 2 opciones (2-way):
                    </span>
                </p>
                <p>
                    Si un partido se abandona antes de que se juegue el tiempo reglamentario, todas las apuestas a dicho partido se considerarán nulas.
                </p>
                <p>
                    Si un juego es cambiado de hora el mismo día, todas las apuestas tendrán acción, adicionalmente si hay retrasos, que obliguen al partido a comenzar después de la media noche (hora local) y el partido todavía se juegue, entonces las apuestas tendrán acción. Si un partido pospuesto/reprogramado para otro dia las apuestas se eliminaran, a excepcion de los partidos de Juegos Olímpicos o Campeonato del Mundo, las apuestas seguirán siendo válidas siempre que se vuelva a programar su celebración antes de la ceremonia de clausura.
                </p>
                <p>
                    Si el enfrentamiento no se va a jugar en la sede anunciada, las apuestas seguirán siendo válidas. Esto es aplicable siempre que la nueva sede no sea la del rival (o que no se encuentre en otro país en el caso de partidos internacionales).
                </p>
                <p>
                    Las apuestas al partido se anularán en caso de que este no tenga lugar o si un jugador o equipo gana por incomparecencia del rival.
                </p>
            </Collapsible>
            <Collapsible title={"25.- VOLEIBOL. "}>
                <p>
                    <span>
                        Apuestas con 2 opciones (2-way):
                    </span>
                </p>
                <p>
                    A la hora de valorar las apuestas, si un partido comienza, pero no finaliza, se anularán todas las apuestas.
                </p>
                <p>
                    Si la sede de un partido se cambia, las apuestas ya realizadas seguirán siendo válidas, siempre que el equipo local siga jugando como local y el partido no se celebre en la sede del equipo visitante; de lo contrario, las apuestas se anularán.
                </p>
            </Collapsible>
            <Collapsible title={"26.- FÚTBOL SALA. "}>
                <p>
                    <span>
                        Apuestas con 3 opciones (3-way) y Totales:
                    </span>
                </p>
                <p>
                    Los partidos de fútbol sala deben finalizar; de lo contrario, todas las apuestas se considerarán nulas.
                </p>
                <p>
                    Todos los mercados del partido se valorarán según el tiempo reglamentario especificado por el ente que rige la competencia específica. Todos los mercados ofrecidos se valorarán por el resultado al final del tiempo reglamentario (no se incluye la tanda de penales en la valoración de los mercados).
                </p>
            </Collapsible>
            <Collapsible title={"27.- BOLOS (BOWLS). "}>
                <p>
                    <span>
                        Apuestas con 2 opciones (2-way):
                    </span>
                </p>
                <p>
                    En el caso de que un encuentro comience, pero no pueda finalizar, entonces todas las apuestas al encuentro serán nulas. Si un partido no se lleva a cabo por cualquier motivo (p. ej., retirada por lesión), todas las apuestas anticipadas serán nulas y los montos de las apuestas se devolverán. En el evento de que un partido comience, pero no pueda completarse, entonces el jugador que pase a la siguiente ronda se considerará el ganador.
                </p>
            </Collapsible>
            <Collapsible title={"28.- FÚTBOL PLAYA. "}>
                <p>
                    <span>
                        Apuestas con 3 opciones (3-way) y Totales:
                    </span>
                </p>
                <p>
                    Los partidos de fútbol playa deben haber finalizado; de lo contrario, todas las apuestas se considerarán nulas.
                </p>
                <p>
                    Cualquier partido pospuesto o cancelado se considerará no participante a efectos de valoración de apuestas.
                </p>
            </Collapsible>
            <Collapsible title={"29.- BÉISBOL FINLANDÉS (PESAPALLO). "}>
                <p>
                    <span>
                        Apuestas con 3 opciones (3-way) y Totales:
                    </span>
                </p>
                <p>
                    Se tendrán en cuenta las entradas extras para fines de valoración de apuestas. Si el partido se pospone o cancela antes de su hora de inicio programada, entonces todas las apuestas al partido se considerarán nulas.
                </p>
            </Collapsible>
            <Collapsible title={"30.- POLÍTICA. "}>
                <p>
                    <span>30.1</span>.- Todas las apuestas serán calificadas según los resultados oficiales declarados por la Comisión Electoral o por otro tipo de comisión oficial similar.
                </p>
                <p>
                    <span>30.2</span>.- La comisión oficial que determine los resultados será especificado en el caso de apuestas individuales sobre política.
                </p>
                <p>
                    <span>30.3</span>.- Cuando no haya disponible un resultado oficial publicado por la Comisión Electoral o por otro tipo de comisión oficial similar, las apuestas serán canceladas y el monto apostado será reembolsado.
                </p>
                <p>
                    <span>30.4</span>.- Si indicamos que un candidato {'"debe anunciar su candidatura"'}, significa que las apuestas solo serán válidas si dicho candidato anuncia oficialmente su candidatura para el puesto en concreto.
                </p>
            </Collapsible>

            {/*
               <Collapsible title={"31.- APUESTAS FINANCIERA.  "}>
                <p><span>31.1. Introducción</span></p>
                <p>
                    Las opciones binarias (también conocidas como {'"opciones digitales"'}) son un tipo de opciones de negociación con
                    las cuales el operador debe predecir sólo la dirección de un precio de mercado de un activo dado durante un período
                    de tiempo seleccionado. El flujo comercial básico es el siguiente:
                </p>
                <p>
                    1. Seleccione un activo. =&gt; 2. Determinar una dirección para el comercio. =&gt; 3. Seleccione una cantidad para invertir. =&gt; 4. Comercio Si tu predicción para el precio es correcta, generas ganancias, de lo contrario generas pérdidas.
                </p>
                <p><span>Ganancias</span></p>
                <p>
                    Cuando el pronóstico del comerciante es correcto, las opciones expiran {'"en el dinero"'} y reciben un porcentaje fijo de la cantidad invertida (usualmente 75-81% del monto invertido).
                </p>
                <p><span>Pérdidas</span></p>
                <p>
                    Cuando el pronóstico del comerciante no es correcto, las opciones caducan {'"fuera del dinero"'} y pierden algo o la cantidad invertida entera.
                </p>
                <p>
                    Cada operación de opciones binarias se basa en tres elementos esenciales: el activo subyacente, el contrato de opción binaria y el pronóstico.
                </p>
                <p><span>Tipos de activos</span></p>
                <p>
                    Los activos en la plataforma de negociación de Tradologica se pueden clasificar como:
                </p>
                <ul>
                    <li>
                        <p>. Monedas</p>
                    </li>
                    <li>
                        <p>. Índices</p>
                    </li>
                    <li>
                        <p>. Existencias</p>
                    </li>
                    <li>
                        <p>. Productos básicos</p>
                    </li>
                </ul>
                <p>
                    Corresponde al comerciante elegir en qué opciones basadas en activos desean operar.
                </p>
                <p><span>Vida útil de la opción binaria</span></p>
                <p>
                    Las opciones binarias están disponibles para un período específico. Basado en su vida útil pre configurada, las opciones binarias pueden estar disponibles para tan corto como 60 segundos hasta un mes.
                </p>
                <p>
                    Sin embargo, los comerciantes no están obligados a comprar contratos en sus comienzos. Pueden invertir en una opción después de su iniciación. De hecho, incluso pueden hacer que su predicción a un pequeño intervalo de tiempo antes de expiración de la opción.
                </p>
                <p>
                    Nota: Las opciones de Toque y Un Toque pueden estar expiradas antes de que se alcance el tiempo de caducidad de la opción. &gt;&gt; Más
                </p>
                <p><span>Contrato de opción binaria</span></p>
                <p>
                    Un comerciante entra en un contrato de opción binaria cuando compran una opción para el período de tiempo predefinido. Por ejemplo, cuando usted compra una opción, usted entra en un contrato, cuando usted compra dos opciones usted
                </p>
                <p>
                    Entra en dos contratos, etc. Cuando el comercio de automóviles, que realmente comprar una serie de contratos. &gt;&gt; Más
                </p>
                <p><span>Pronóstico</span></p>
                <p>
                    El comerciante debe determinar la dirección a la que se moverá el precio del activo subyacente. Al expirar la opción es el momento de la verdad cuando todo se vuelve claro. Las suposiciones correctas traen beneficio y las suposiciones incorrectas dan lugar a la pérdida de la cantidad invertida.
                </p>
                <p>Opciones binarias</p>
                <p>
                    Las opciones binarias ofrecidas por la plataforma Tradologica son:
                </p>
                <ul>
                    <li>
                        <p>Digital</p>
                    </li>
                    <li>
                        <p>60 segundos</p>
                    </li>
                    <li>
                        <p>Tocar</p>
                    </li>
                    <li>
                        <p>Un toque</p>
                    </li>
                    <li>
                        <p>Rango</p>
                    </li>
                </ul>
                <p>
                    La idea básica es la misma con todos: hacer una predicción correcta y ganar. Las diferencias se aclaran en las espectivas descripciones.
                </p>
                <ul>
                    <li>
                        <p><span>31.1.1 - Digital</span></p>
                        <p>
                            Las opciones digitales (también conocidas como opciones binarias) son el tipo de opciones más popular. Usted tiene que determinar si el precio de un activo se moverá más alto o más bajo que el precio actual de mercado en el momento de la espiración.
                        </p>
                        <p>
                            Cuando espera que suba el precio del activo seleccionado, compra una Llamada. Cuando usted espera que el precio de activo seleccionado caiga, usted compra un Put.
                        </p>
                        <p>
                            Dependiendo de los activos subyacentes los rendimientos varían entre 75-81%.
                        </p>
                        <p>
                            Nota: En casos excepcionales cuando al vencimiento de la opción el precio de mercado del activo es el mismo que el de su inversión, usted está en el dinero, lo que significa que no pierde ni gana nada. Su inversión se devuelve a su saldo.
                        </p>
                        <p>Obtenga más información sobre el comercio digital.</p>
                    </li>
                    <li>
                        <p><span>31.1.2 - 60 Segundos</span></p>
                        <p>
                            Las opciones de 60 Segundos son opciones digitales, hechas para inversiones a muy corto plazo - hasta un minuto. Este tipo es muy similar a las opciones digitales estándar; Sin embargo cambie en intervalos exactos de un minuto. Una vez más, es necesario determinar si el precio del activo subyacente subirá o bajará.
                        </p>
                        <p>Los pagos en 60 segundos se establecen en 75-81%.</p>
                        <p>
                            Nota: Similar a las opciones de Digital, en los casos raros cuando al expirar la opción el precio de mercado del activo es el mismo que el de su inversión, usted está en el dinero, lo que significa que no pierde ni gana nada. Su inversión se devuelve a su saldo.
                        </p>
                        <p>Obtenga más información sobre el comercio de 60 segundos.</p>
                    </li>
                    <li>
                        <p><span>31.1.3 - Toque</span></p>
                        <p>
                            Con las opciones de comercio con Toque, debe predecir si un activo alcanzará ({'"tocar"'}) un precio de ejercicio superior o inferior predeterminado en cualquier momento antes de la expiración. Si la opción expira sin llegar a los valores de huelga superior o inferior, estará fuera del dinero. Tenga en cuenta que cuando la opción alcanza (toca) la huelga superior o inferior, es instantáneamente vencido.
                        </p>
                        <p>
                            Los pagos en las opciones de Tocar suelen estar entre 75% - 81%.
                        </p>
                        <p>Obtenga más información acerca del comercio con Toque.</p>
                    </li>
                    <li>
                        <p><span>31.1.4 - Un toque</span></p>
                        <p>
                            Las opciones de Un Toque son una variación de las opciones de Toque, con la diferencia de que sólo hay una huelga ajustada y predecir si el precio del activo alcanzará ({'"toca"'}) antes o antes del vencimiento ({'"no toque"'}).
                        </p>
                        <p>
                            Al igual que con Toque, cuando la opción alcanza (toca) el precio de ejercicio, es instantáneamente vencido.
                        </p>
                        <p>
                            El riesgo asociado con las opciones de un toque podría considerarse relativamente bajo, lo que refleja los pagos, por lo que varían entre 73-75%.
                        </p>
                        <p>Obtenga más información acerca del comercio de Un Toque.</p>
                    </li>
                    <li>
                        <p><span>31.1.5 - Rango</span></p>
                        <p>
                            Con la opción de Rango, debe determinar si el valor de una opción expirará dentro de un rango predefinido o no.
                        </p>
                        <p>Los pagos suelen ser entre 75 y 81%.</p>
                        <p>
                            Nota: En casos excepcionales cuando al vencimiento de la opción el precio de mercado del activo es el mismo que
                        </p>
                        <p>
                            cualquiera de los valores de la gama, está en el dinero, lo que significa que no pierde ni gana nada. Su inversión se devuelve a su saldo.
                        </p>
                        <p>Obtenga más información sobre el rango de negociación.</p>
                    </li>
                </ul>
                <p><span>31.2 - Operaciones Básicas</span></p>
                <p>
                    El comercio es fácil y divertido. Cuanto más comercio, más aprende a hacer predicciones precisas.
                    Hay pocas cosas que usted desearía saber antes de comenzar:
                </p>
                <ul>
                    <li>
                        <p>
                            Puede operar simultáneamente en varios tipos de opciones. Por ejemplo, puede reproducir en las opciones Digital, Toque y Rango al mismo tiempo.
                        </p>
                    </li>
                    <li>
                        <p>
                            Al igual que en este último caso, puede operar en múltiples activos. Por ejemplo, puede jugar en dos opciones de Digital, tres Toque y cuatro Rango al mismo tiempo (si está disponible).
                        </p>
                    </li>
                    <li>
                        <p>
                            Puede ver en tiempo real lo que está sucediendo con sus operaciones.
                        </p>
                    </li>
                    <li>
                        <p>
                            Dependiendo de la esperanza de vida, las opciones pueden ser horarias, diarias y mensuales. Las opciones de 60 segundos tienen una vida útil de sólo un minuto. También, a veces hay opciones especiales de fin de semana.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usted decide qué es lo que invierte. Ciertas opciones pueden tener restricciones para el precio, pero siempre es para que usted elija.
                        </p>
                    </li>
                </ul>
                <p>
                    Las subsecciones siguientes se organizan de acuerdo con los pasos que debe tomar para comenzar a operar con eficacia.
                </p>
                <p>31.2.1 Registrarse</p>
                <p>
                    Es necesario tener una cuenta activa válida para poder negociar. Esto significa que tienes que iniciar sesión. Si todavía no tienes una cuenta, debes registrarte.
                </p>
                <p>IMAGEN:</p>
                <p>
                    El proceso de registro es muy simple y se asemeja mucho al proceso de registro para correo electrónico, Facebook o cualquier otro software que requiera registrarse. Haga clic en el enlace correspondiente en la parte superior de la página.
                </p>
                <p>31.2.2 Iniciar sesión</p>
                <p>
                    Una vez que haya creado una cuenta, debe iniciar sesión con sus credenciales.
                </p>
                <p>IMAGEN:</p>
                <p>
                    Haga clic en el botón de inicio de sesión en la parte superior de la página y rellene las credenciales de su cuenta.
                </p>
                <p></p>
                <p>31.2.3 Depósito</p>
                <p>
                    Ahora tienes una cuenta y has iniciado sesión; Todo lo que queda por hacer es depositar fondos en su saldo para que pueda negociar. Haga clic en el botón Depósito en la esquina superior derecha para abrir la pantalla para depositar.
                </p>
                <p>IMAGEN:</p>
                <p>
                    1. Elija un método de pago para usar. Para los primeros temporizadores puede que tenga que ingresar sus datos bancarios / tarjeta de crédito. Su información puede almacenarse para depósitos consecuenciales más fáciles.
                </p>
                <p>2. Ingrese la cantidad a depositar y haga clic en Depósito.</p>
                <p>
                    3. Aparecerá una nueva pantalla con los detalles de la Tarjeta de Crédito (banca o método de pago) para completar.
                </p>
                <p>
                    Continúe con la transacción completa y haga clic en Depósito.
                </p>
                <p>IMAGEN:</p>
                <p>
                    Ahora que tiene fondos en su saldo, prepárese para comenzar a operar.
                </p>
                <p>
                    Sugerencia: la página {'"Cajero"'} le permite ver y administrar sus transacciones. &gt;&gt; Más
                </p>
                <p>31.2.4 Iniciar la operación</p>
                <p>
                    Ahora usted tiene fondos en su equilibrio y está listo para el comercio. No hay nada más que usted necesita para comenzar, pero sus habilidades de negociación.
                </p>
                <p>
                    Las subsecciones siguientes cubren operaciones con cada tipo de opción:
                </p>
                <p>. Digital</p>
                <p>. 60 segundos</p>
                <p>. Tocar</p>
                <p>. Un toque</p>
                <p>. Rango</p>
                <p>31.2.5 Comercio digital</p>
                <p>
                    Con el comercio digital debe predecir si el precio de un activo seleccionado subirá o bajará hasta que expire la opción.
                </p>
                <p>1. Seleccione un activo.</p>
                <p>
                    2. Seleccione el tiempo de caducidad de la opción utilizando la lista desplegable respectiva.
                </p>
                <p>
                    3. Elija una dirección de negociación y haga clic en Arriba o Abajo.
                </p>
                <p>4. Cantidad de entrada para invertir.</p>
                <p>5. Haga clic en Comercio.</p>
                <p>IMAGEN:</p>
                <p>
                    Nota: El comercio digital está disponible para Auto Trading. &gt;&gt; Más
                </p>
                <p>31.2.6 Comercio 60 Segundos</p>
                <p>
                    Con el comercio digital de 60 segundos, debe predecir si el precio de un activo seleccionado subirá o bajará en los próximos 60 segundos. Cuando haces el comercio, comienza una cuenta atrás de 60 segundos y cuando termina, la opción caduca.
                </p>
                <p>1. Seleccione un activo.</p>
                <p>
                    2. Elija una dirección comercial y haga clic en Arriba o Abajo.
                </p>
                <p>3. Seleccione una cantidad para invertir.</p>
                <p>4. Haga clic en Comprar.</p>
                <p>IMAGEN:</p>
                <p>
                    Si el precio del activo al vencimiento coincide con el precio del activo en el que ha invertido (los precios son iguales), su inversión se le devolverá.
                </p>
                <p>31.2.7 Toque comercial</p>
                <p>
                    Con Toque comercial, debe predecir si el precio de un activo seleccionado alcanzará valores de umbral superior e inferior predefinidos dentro de la fecha de caducidad de la opción.
                </p>
                <p>1. Seleccione un activo.</p>
                <p>
                    2. Seleccione el tiempo de caducidad de la opción utilizando la lista desplegable respectiva.
                </p>
                <p>
                    3. Elija una dirección de negociación y haga clic en Arriba o Abajo.
                </p>
                <p>4. Cantidad de entrada para invertir.</p>
                <p>5. Haga clic en Comercio.</p>
                <p>IMAGEN:</p>
                <p>
                    Cuando el precio de mercado alcanza cualquiera de los valores de huelga, la opción expira instantáneamente. Si no se ha producido ningún evento táctil después de la expiración de la opción, pierde su inversión.
                </p>
                <p>31.2.8 Un Toque Comercial</p>
                <p>
                    Con Un Toque Comercial, debe predecir si el precio de un activo seleccionado {"'alcanzará'"} o {"'no alcanzará'"} un valor umbral predefinido dentro de la fecha de expiración de la opción.
                </p>
                <p>1. Seleccione un activo.</p>
                <p>
                    2. Seleccione el tiempo de caducidad de la opción utilizando la lista desplegable respectiva.
                </p>
                <p>
                    3. Elija una dirección de negociación y haga clic en Toque o Sin toque.
                </p>
                <p>4. Cantidad de entrada para invertir.</p>
                <p>5. Haga clic en Comercio.</p>
                <p>IMAGEN:</p>
                <p>31.2.9 Rango de negociación</p>
                <p>
                    Con Intercambio de rango debe predecir si el precio de un activo seleccionado será Dentro o Abierto un rango predefinido hasta que expire la opción.
                </p>
                <p>1. Seleccione un activo.</p>
                <p>
                    2. Seleccione el tiempo de caducidad de la opción utilizando la lista desplegable respectiva.
                </p>
                <p>
                    3. Elija una dirección de negociación y haga clic en dentro o fuera.
                </p>
                <p>4. Cantidad de entrada para invertir.</p>
                <p>5. Haga clic en Comercio.</p>
                <p>IMAGEN:</p>
                <p>
                    Observe los tres valores mostrados arriba. Muestran los valores de rango superior e inferior y el valor de mercado actual.
                </p>
                <p>31.2.10 Ver Operaciones Abiertas</p>
                <p>
                    Supervisión de oficios abiertos es especialmente útil cuando usted hace más de un comercio a la vez. Haga una operación o más y desplácese hacia abajo para ver todos sus Operaciones Abiertas hasta que expire la opción. Cuando las opciones caducan, se trasladan a operaciones (comercios) cerrados.
                </p>
                <p>IMAGEN:</p>
                <p>La pestaña Operaciones abiertas permite ver su:</p>
                <p>. Activo (s) de su elección</p>
                <p>. Tiempo de vencimiento</p>
                <p>. Valor de huelga</p>
                <p>. Importe comercial</p>
                <p>
                    . Devoluciones a partir de la hora actual: este valor fluctúa hasta la expiración de la opción.
                </p>
                <p>
                    Desde aquí puede aprovechar las herramientas de comercio disponibles.
                </p>
                <p>31.2.11 Ver Operaciones Cerrados</p>
                <p>
                    Una vez que sus opciones comerciales expiren, puede verlas listadas en la pestaña {'"Operaciones cerradas"'} (en la misma casilla que las operaciones abiertas).
                </p>
                <p>IMAGEN:</p>
                <p>Aquí puede ver más datos sobre sus operaciones:</p>
                <p>. Número de identificación del pedido</p>
                <p>. Fecha del pedido</p>
                <p>. Tipo de opción y activo de la selección</p>
                <p>. Tasa de Comercio en el momento del intercambio</p>
                <p>. cantidad de comercio</p>
                <p>. Opción Tiempo de expiración</p>
                <p>. tasa de vencimiento de la opción</p>
                <p>. opción Tasa de pago</p>
                <p>. Ganancias / Pérdidas</p>
                <p>
                    Nota: El cuadro Cerrado de operaciones mantiene el registro sólo para la sesión de negociación actual. En el próximo inicio de sesión, esta casilla permanecerá en blanco hasta que realice más operaciones.
                </p>
                <p>31.2.11.1 Ver historial comercial</p>
                <p>
                    Haga clic en el enlace Ver historial comercial (en la esquina inferior derecha del cuadro) para abrir un historial detallado
                </p>
                <p>sobre sus operaciones. &gt;&gt; Más</p>
                <p>31.2.12 Mis Oficios (Intercambios)</p>
                <p>
                    La página {"'Mis Oficios'"} ofrece una vista a mayor escala de la pestaña de operaciones cerradas. También le permite hacer una búsqueda de fechas pasadas de comercio.
                </p>
                <p>Hacer una búsqueda de operaciones pasadas</p>
                <p>
                    1. Seleccione un activo de comercio (todo es predeterminado).
                </p>
                <p>2. Seleccione un período de búsqueda (De: fecha A: fecha).</p>
                <p>
                    3. Haga clic en Buscar para abrir una tabla con todas las operaciones dentro del período de búsqueda (por cada
                </p>
                <p>opción seleccionada o Todos los activos).</p>
                <p>IMAGEN:</p>
                <p>31.3. Operaciones Avanzadas</p>
                <p>31.3.1 Pantallas de comercio</p>
                <p>
                    Puede elegir entre algunos tipos diferentes de gráficos para la pantalla de comercio. Depende de la decisión que usted prefiera. No hay una pantalla {'"universalmente mejor"'}. Diferentes gráficos son adecuados para diferentes comerciantes y sus hábitos.
                </p>
                <p>IMAGEN:</p>
                <p>31.3.1.1 Clásico</p>
                <p>
                    El gráfico clásico es un gráfico general que proporciona todas las funcionalidades comerciales básicas. Puede seleccionar los elementos disponibles de la tabla de la izquierda para ver sus respectivos gráficos.
                </p>
                <p>IMAGEN:</p>
                <p>31.3.1.2 Gráfico +</p>
                <p>
                    El Gráfico + es un gráfico a mayor escala que ofrece una mejor vista gráfica del movimiento de los precios de los activos.
                </p>
                <p>
                    También ofrece botones para el comercio haciendo clic derecho en ella.
                </p>
                <p>IMAGEN:</p>
                <p>31.3.1.3 Multi-vista</p>
                <p>
                    La vista de múltiples gráficos es adecuada para realizar más de una transacción concurrente. Con multi-vista usted puede monitorear en tiempo real cuatro diferentes opciones de un vistazo, y ver cómo los precios de los diferentes activos financieros afectan entre sí. Tenga en cuenta que cuando hay más de cuatro opciones disponibles, puede elegir cuáles aparecen en la pantalla utilizando la lista desplegable de activos en el cuadro de gráfico correspondiente.
                </p>
                <p>IMAGEN:</p>
                <p>31.3.2 Herramientas comerciales</p>
                <p>
                    Las herramientas de negociación ofrecen posibilidades de aumentar sus beneficios o reducir sus pérdidas. Las herramientas comerciales están disponibles para las opciones digitales en las que ya ha invertido.
                </p>
                <p>
                    Aquí está una lista rápida de las herramientas de comercio que usted puede utilizar:
                </p>
                <p>
                    . Auto Trade - una manera de hacer transacciones consecutivas por activo seleccionado en opciones
                </p>
                <p>digitales; &gt;&gt; Más</p>
                <p>
                    . Extender - una forma para el operador de extender la sesión de caducidad de Opción Digital. &gt;&gt; Más
                </p>
                <p>
                    . Cerrar - una forma de cerrar su (s) comercio (s) digital (es) actual (es) a un ritmo actual. &gt;&gt; Más
                </p>
                <p>
                    . cuando se cierra en el dinero, usted recibe su cantidad invertida de vuelta más algunos beneficios.
                </p>
                <p>
                    . cuando cierra el dinero que recibe parte de su cantidad invertida.
                </p>
                <p>
                    . Doble - una forma de duplicar su cantidad invertida. &gt;&gt; Más
                </p>
                <p>31.3.2.1 Auto Comercio</p>
                <p>
                    Este tipo de comercio permite a los comerciantes capitalizar exponencialmente en las tendencias del mercado -a 2.000%! A la fecha del manual actual, Auto Comercio está disponible sólo para las opciones de Digital.
                </p>
                <p>Acceda a Auto Comercio</p>
                <p>1. Seleccione un activo para el comercio digital.</p>
                <p>
                    2. Elija una dirección comercial y haga clic en Arriba o Abajo.
                </p>
                <p>3. Haga clic en la pestaña {'"Auto comercio"'}.</p>
                <p>IMAGEN:</p>
                <p>Crear una sesión de negociación automática</p>
                <p>1. Seleccione una cantidad para invertir.</p>
                <p>
                    2. Seleccione una serie de contratos disponibles para invertir en.
                </p>
                <p>
                    3. Asegúrese de ver la hora de última caducidad y posibles devoluciones.
                </p>
                <p>4. Una vez que esté listo, haga clic en Comercio.</p>
                <p>Caso 1: Ganancias</p>
                <p>
                    Cuando invierte en opciones consecutivas utilizando Auto comerció...
                </p>
                <p>Y</p>
                <p>Tienes algún beneficio...</p>
                <p>ENTONCES</p>
                <p>
                    El monto de la inversión para su próximo comercio se incrementa con su cantidad de beneficio.
                </p>
                <p>
                    Esto continúa hasta el final de la sesión de Auto comerciando o hasta que hagas una pérdida.
                </p>
                <p>Caso 2: Pérdidas</p>
                <p>
                    Cuando invierte en opciones consecutivas utilizando Auto comercio...
                </p>
                <p>Y</p>
                <p>Pierdes tu inversión...</p>
                <p>ENTONCES</p>
                <p>Se termina la sesión de Auto comerciando.</p>
                <p>31.3.2.2 Ampliar</p>
                <p>
                    La herramienta Ampliar le permite extender la sesión de caducidad de una opción que ya ha negociado. Puede extender una opción a un tiempo de vencimiento futuro, dependiendo de las opciones abiertas actuales para el activo seleccionado y sus tiempos de vencimiento.
                </p>
                <p>
                    Tenga en cuenta que con cada prórroga, usted paga una prima de 5% a 50% (del monto comercial) dependiendo de cuánto tiempo en o fuera del dinero que es.
                </p>
                <p>Para ampliar una opción:</p>
                <p>1. Haga clic en Herramientas de negociación.</p>
                <p>2. Haga clic en Extender (Ampliar).</p>
                <p>3. Elija hasta cuando desee extender su opción a.</p>
                <p>4. Haga clic en Ejecutar.</p>
                <p>IMAGEN:</p>
                <p>Importante saber sobre Ampliar (Extender):</p>
                <p>
                    . Puede extenderse tantas veces como desee (dependiendo de la disponibilidad).
                </p>
                <p>
                    . Usted puede extender dentro de un período que comienza 5 minutos después de que usted haya
                </p>
                <p>
                    abierto un comercio y termine hasta 10 minutos antes de que su opción expire.
                </p>
                <p>
                    . Durante este mismo período, se le permite cerrar una opción extendida.
                </p>
                <p>
                    . La ampliación está disponible sólo para las opciones de Digital con activos en moneda.
                </p>
                <p>31.3.2.3 Cerrar</p>
                <p>
                    La herramienta Cerrar le permite cerrar un comercio antes de la expiración de la opción. De esta manera puede disminuir significativamente las pérdidas. Cerrar una opción antes de la expiración es muy útil cuando las tendencias del mercado difieren de sus predicciones. Otro caso que es útil es cuando su comercio está en el dinero, pero las tendencias muestran una alta probabilidad de que la opción expirará fuera de la-dinero para usted. El cierre oportuno puede ahorrar a los comerciantes mucha inversión así que utilice esta herramienta cuidadosamente.
                </p>
                <p>Para cerrar una opción:</p>
                <p>1. Haga clic en Herramientas de negociación.</p>
                <p>2. Haga clic en Cerrar.</p>
                <p>3. Haga clic en Ejecutar.</p>
                <p>IMAGEN:</p>
                <p>Importante saber sobre el cierre:</p>
                <p>
                    . Cuando cierra fuera del dinero puede recuperar parte de su inversión. Esto puede estar en cualquier
                </p>
                <p>lugar del 0-80% de su inversión inicial.</p>
                <p>
                    . Cuando cierra el dinero, puede obtener hasta el 30% de su inversión. La ganancia se calcula en base
                </p>
                <p>
                    a la cantidad de dinero que usted es; Así como la cantidad de tiempo que le queda hasta la
                </p>
                <p>
                    expiración de la opción; La volatilidad del activo y el volumen de la operación.
                </p>
                <p>
                    . Puede cerrar dentro de un período que comienza 5 minutos después de haber abierto una operación
                </p>
                <p>y terminar hasta 10 minutos antes de que su opción expire.</p>
                <p>
                    . Durante este período se le permite cerrar una opción extendida.
                </p>
                <p>
                    . Antes de cerrar la opción, el precio de devolución se muestra para que conozca sus ganancias /
                </p>
                <p>pérdidas al cierre.</p>
                <p>
                    . El cierre sólo está disponible para las opciones Digitales con activos en moneda.
                </p>
                <p>31.3.2.4 Doble</p>
                <p>
                    La herramienta Doble le permite realizar la misma inversión en una opción en un momento determinado.
                </p>
                <p>1. Haga clic en Herramientas de negociación.</p>
                <p>2. Haga clic en Doble.</p>
                <p>3. Haga clic en Ejecutar.</p>
                <p>IMAGEN:</p>
                <p>Importante saber sobre Doblar:</p>
                <p>. No hay limitación de cuántas veces puede duplicar.</p>
                <p>
                    . Puede doblar dentro de un período que comienza 5 minutos después de haber abierto una
                </p>
                <p>
                    operación y terminar hasta 10 minutos antes de que su opción expire.
                </p>
                <p>
                    . Cuando doble, en realidad realiza una segunda inversión a una tasa según el tiempo de duplicación.
                </p>
                <p>
                    Debido a esto las ganancias totales de ambos oficios no son necesariamente igual a la cantidad doble
                </p>
                <p>de las ganancias iniciales.</p>
                <p>
                    . La duplicación sólo está disponible para las opciones de Digital con activos en moneda.
                </p>
                <p>31.4. Cajero</p>
                <p>El cajero es la página en la que puede:</p>
                <p>
                    . Depósito mediante tarjeta de crédito o cualquier otro método de pago disponible.
                </p>
                <p>. Retirar sus beneficios / fondos.</p>
                <p>. Ver un historial de sus solicitudes de retiro.</p>
                <p>. Ver su historial de bonos.</p>
                <p>. Ver su historial de transacciones (depósitos y retiros).</p>
                <p>IMAGEN:</p>
                <p>31.4.1 Retirar</p>
                <p>Para hacer una retirada:</p>
                <p>1. Haga clic en Retirar para abrir la pantalla Retirar.</p>
                <p>
                    2. Introduzca una cantidad para retirar. Esto no puede ser más que especificado (subrayado en rojo en la siguiente
                </p>
                <p>pantalla).</p>
                <p>3. Seleccione su método de pago preferido.</p>
                <p>
                    4. Deja un comentario (no obligatorio). Más adelante podrá ver estos comentarios en su historial de transacciones.
                </p>
                <p>IMAGEN:</p>
                <p>
                    5. Dependiendo de los métodos de pagos preferidos disponibles, es posible que el sistema no tenga sus datos
                </p>
                <p>almacenados, por lo que debe rellenarlos para continuar.</p>
                <p>
                    6. Cuando se permite la transacción, debe confirmar para continuar o Cancelar:
                </p>
                <p>IMAGEN:</p>
                <p>
                    Tras el retiro exitoso, aparece la pantalla Solicitudes de retiro de la fecha actual.
                </p>
                <p>IMAGEN:</p>
                <p>31.4.2 Ver solicitudes de retirada</p>
                <p>Para ver sus solicitudes de retiro:</p>
                <p>
                    1. Haga clic en Solicitudes de retiro para abrir la pantalla {'"Retirar"'}.
                </p>
                <p>2. Seleccione un período de búsqueda (De: fecha A: fecha).</p>
                <p>3. Haga clic en Buscar.</p>
                <p>IMAGEN:</p>
                <p>31.4.2.1 Cancelar Solicitudes de Retiro Pendientes</p>
                <p>Para cancelar las solicitudes de retiro pendientes:</p>
                <p>
                    1. Haga clic en Solicitudes de retiro para abrir la pantalla Retirar.
                </p>
                <p>
                    2. Haga clic en el enlace Cancelar (si está disponible) para los bonos respectivos
                </p>
                <p>IMAGEN:</p>
                <p>31.4.3 Ver historial de bonificación</p>
                <p>
                    Para ver su historial de bonificaciones, haga clic en la pestaña {'"Historial de bonos"'}. Una tabla detallada con todos sus
                </p>
                <p>bonos aparece en la exhibición.</p>
                <p>IMAGEN:</p>
                <p>31.4.3.1 Activar bonos pendientes</p>
                <p>
                    Para activar las bonificaciones pendientes, haga clic en el enlace Activar donde esté disponible.
                </p>
                <p>31.4.4 Historial de transacciones</p>
                <p>
                    Para ver su historial de transacciones, haga clic en la pestaña Historial de transacciones. Aparece una tabla detallada
                </p>
                <p>
                    con todas sus transacciones (depósitos, retiros, bonificaciones rescatadas, etc.).
                </p>
                <p>IMAGEN:</p>
                <p>31.5. Ver / Editar mi perfil</p>
                <p>
                    Ver y editar los detalles del perfil es simple y se asemeja a varias interfaces como las de correo electrónico,
                </p>
                <p>Facebook o cualquier otro software que requiere registro.</p>
                <p>IMAGEN:</p>
                <p>
                    Algunas informaciones no son editables (por ejemplo, correo electrónico, nombre, etc.). Es posible que tenga que
                </p>
                <p>
                    ponerse en contacto con el sitio web para cambiar esta información.
                </p>
                <p>31.5.1 Cambiar contraseña</p>
                <p>En la pantalla {'"Mi perfil"'}, haga clic en Cambiar contraseña.</p>
                <p>
                    Aparecerá una nueva pantalla que le pedirá que introduzca la contraseña actual (antigua) y que proporcione una
                </p>
                <p>nueva.</p>
                <p>IMAGEN:</p>
            </Collapsible>
            */}
        </div>
    )
}