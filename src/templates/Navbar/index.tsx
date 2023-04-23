import { User } from "@prisma/client"
import Options from "./Options"
import Top from "./Top"

interface NavbarProps{
  currentUser: User | null
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {
  return (
    <nav
      className="
        w-full
        flex
        flex-col
      "
    >
      <Top />
      <Options currentUser={!!currentUser} />
    </nav>
  )
}

export default Navbar