import Options from "./Options"
import Top from "./Top"

const Navbar = () => {
  return (
    <nav
      className="
        w-full
        flex
        flex-col
      "
    >
      <Top />
      <Options />
    </nav>
  )
}

export default Navbar