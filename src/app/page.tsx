import ClientOnly from "@/components/ClientOnly";
import getCurrentUser from "@/functions/getCurrentUser";
import Navbar from "@/templates/Navbar";

export default async function Home() {

  const currentUser = await getCurrentUser()

  return (
    <>
      <Navbar
        currentUser={currentUser}
      />
    </>
  )
}
