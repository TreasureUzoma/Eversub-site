const HeroTwo = ({ pageName="", bgColor="" }) => {
  return (
    <header className={`flex ${bgColor} items-center justify-center h-[15rem]`}>
        <h1 className="text-[1.5rem] font-semibold">{pageName}</h1>
    </header>
  )
}

export default HeroTwo