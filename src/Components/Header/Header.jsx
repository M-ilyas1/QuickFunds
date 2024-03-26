import { useState } from "react";
import Button from "../Button/Button"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [toggle, setToggle] = useState(false);
  function toggler() {
    setToggle(!toggle);
  }

  const navLinks = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Services",
    },
    {
      id: 3,
      text: "How we work?",
    },
    {
      id: 4,
      text: "About Us",
    }
  ]
  return (
    <>
      <nav className="w-full h-auto flex justify-around items-center py-5 md:flex-row flex-col">
        <h1 className="text-[1.8rem] text-[#494E4F] font-semibold text-center">Quick<span className="text-[#92E3A9]">Funds</span></h1>
        <ul className={`${
          toggle ? "flex items-center gap-y-5 gap-x-5 md:flex-row flex-col text-center" : "hidden"
        }`}>

          {
            navLinks.map(({text}, index) => {
              return <li className="text-lg text-[#494E4F]" key={index}>{text}</li>
            })
          }
        <Button value="Contact Us" variant="Primary"/>

        </ul>
        <div className="md:hidden absolute top-9 right-10" onClick={toggler}>
            {toggle ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </div>
      </nav>
    </>
  )
}

export default Header