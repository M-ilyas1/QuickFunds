import Button from "../Button/Button"

function Header() {
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
      <nav className="flex justify-around items-center py-5">
        <h1 className="text-[1.8rem] text-[#494E4F] font-semibold">Quick<span className="text-[#92E3A9]">Funds</span></h1>
        <ul className="flex gap-10 ">
          {
            navLinks.map(({text}, index) => {
              return <li className="text-lg text-[#494E4F]" key={index}>{text}</li>
            })
          }
        </ul>
        <Button value="Contact Us" variant="Primary"/>
      </nav>
    </>
  )
}

export default Header