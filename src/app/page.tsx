import PrivateHome from "./Home/PrivateHome";
import PublicHome from "./Home/PublicHome";

export default function Page() {
  return (
    <>
      {false ? <PrivateHome /> : <PublicHome />}
    </>
  )
}