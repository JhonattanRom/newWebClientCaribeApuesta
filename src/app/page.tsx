import PrivateHome from "./(routes)/Home/PrivateHome";
import PublicHome from "./(routes)/Home/PublicHome";

export default function Page() {
  return (
    <>
      {false ? <PrivateHome /> : <PublicHome />}
    </>
  )
}