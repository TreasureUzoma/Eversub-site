const HeroTwo = ({ pageName="", bgColor="" }) => {
  return (
    <header
      className={`flex ${bgColor} items-center justify-center h-[21rem] md:h-screen md:max-h-[750px] lg:min-h-screen`}
    >
      <h1 className="text-[1.5rem] font-semibold max-w-[65%] text-center">
        {pageName}
      </h1>
    </header>
  );
}

export default HeroTwo;