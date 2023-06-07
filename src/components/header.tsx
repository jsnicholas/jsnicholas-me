function Header() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">✌️ nick johnson</a>
      </div>
      <div className="">
        <ul className="max-md:invisible menu menu-horizontal px-1">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Code</a>
          </li>
          <li>
            <a href="#creative">Creative</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="md:invisible md:max-w-0">
          <li>
            <details className="dropdown dropdown-end">
              <summary className="m-1 btn">menu</summary>
              <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Code</a>
                </li>
                <li>
                  <a href="#creative">Creative</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
