import { lusitana } from "./ui/fonts";
import 'normalize.css/normalize.css';


export default function Page() {
  return <h1 className={`${lusitana.className} antialiased`}>Hello, Next.js!</h1>
}