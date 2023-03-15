import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* mobile */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <a>Why & How? </a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Tokens</a>
            </li>
            <li>
              <a>Roadmap</a>
            </li>
          </ul>
        </div>
        <Link href="#" className="btn btn-ghost normal-case text-xl">CRYPTO</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* desktop */}
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Why & How? </a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Tokens</a>
          </li>
          <li>
            <a>Roadmap</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end sm:inline-flex hidden">
        <a className="btn btn-accent text-white">BUY TOKENS</a>

        {/* dropdown */}
        <div className="dropdown dropdown-bottom dropdown-end ml-5">
          <label tabIndex={0} className="btn btn-ghost m-1">
            ENG
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box "
          >
            <li>
              <a>Bangla</a>
            </li>
            <li>
              <a>Japanese</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
