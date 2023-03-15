const Header = () => {
  return (
    <header className="container mx-auto mt-20 grid grid-cols-2 gap-10">
      {/* left side */}
      <dl className="">
        <h1 className="text-6xl font-light w-[90%] leading-snug">
          Cryptocurrency is a digital asset designed to work.
        </h1>
        <p className="mr-60 mt-20 w-[60%]">
          A cryptocurrency (or crypto currency) is a digital asset designed to
          work as a medium of exchange that uses cryptography to secure.
        </p>
        <button className="btn btn-accent text-white mt-10 rounded-md">
          BUY TOKENS NOW
        </button>
      </dl>

      {/* right side */}
      <dl>
        <h1>ICO PRE- SALE IS LIVE</h1>
        <h1 className="mt-5">Round one sales ends in:</h1>

        {/* timer */}
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-10">
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span className="text-red-500" style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span className="text-red-500" style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span className="text-red-500" style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span className="text-red-500" style={{ "--value": 23 }}></span>
            </span>
            sec
          </div>
        </div>

        {/* progress */}
        <div className="relative bg-white rounded-full w-[40%] h-9 mt-10">
          <div className="absolute bg-red-400 rounded-full w-[70%] h-6 top-1/2 mx-3 transform -translate-y-1/2">
            <h1 className="absolute text-base right-3 text-white">70%</h1>
          </div>

          <div className="absolute bg-white w-1 h-16 left-14"></div>

          <h1 className="absolute top-20 left-3 text-sm">MINIMUM GOAL</h1>
          <h1 className="absolute top-[5.8em] left-2 text-lg">$564.5 k USD</h1>
          <h1 className="absolute top-20 right-3 text-sm">HARD CAP</h1>
          <h1 className="absolute top-[5.8em] right-1 text-lg">$800.5 k USD</h1>
        </div>
      </dl>
    </header>
  );
};

export default Header;
