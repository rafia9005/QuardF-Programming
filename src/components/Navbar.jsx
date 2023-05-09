const Navbar = () => {
  document.querySelector("#nav-btn").onclick = () => {
    document.querySelector("#nav-box").classList.toggle("active");
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>QuardF</h1>
        </div>
        <i className="fa-solid fa-bars" id="nav-btn"></i>
        <ul id="nav-box">
          <li>
            <a href="">Beranda</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Lokasi</a>
          </li>
          <li>
            <a href="">Layanan</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
