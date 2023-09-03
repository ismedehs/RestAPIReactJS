import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <aside class="left-sidebar">
      {/* <!-- Sidebar scroll--> */}
      <div>
        <div class="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" class="text-nowrap logo-img">
            <img src="../assets/logospg.png" width="50" alt="" />
            {/* <h2>Perpus </h2> */}
          </a>
          <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i class="ti ti-x fs-8"></i>
          </div>
        </div>
        {/* <!-- Sidebar navigation--> */}
        <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Home</span>
            </li>
            <li class="sidebar-item">
             <Link to="/" className="sidebar-link">
              {/* <a class="" href="./index.html" aria-expanded="false"> */}
                <span>
                  <i class="ti ti-layout-dashboard"></i>
                </span>
                <span class="hide-menu">Dashboard</span>
              {/* </a> */}
              </Link>
            </li>
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Buku</span>
            </li>
            <li class="sidebar-item">
             
            <Link to="/list" className="sidebar-link">
              {/* <a class="sidebar-link" href="./ui-buttons.html" aria-expanded="false"> */}
                <span>
                  <i class="ti ti-article"></i>
                </span>
                <span class="hide-menu">List Buku</span>
              {/* </a> */}
              </Link>
            </li>
            <li class="sidebar-item">
             <Link to="/pinjam" className="sidebar-link">
              {/* <a class="sidebar-link" href="./ui-buttons.html" aria-expanded="false"> */}
                <span>
                  <i class="ti ti-article"></i>
                </span>
                <span class="hide-menu">Form Peminjaman</span>
              {/* </a> */}
              </Link>
            </li>
            <li class="sidebar-item">
             <Link to="/listpinjam" className="sidebar-link">
              {/* <a class="sidebar-link" href="./ui-buttons.html" aria-expanded="false"> */}
                <span>
                  <i class="ti ti-article"></i>
                </span>
                <span class="hide-menu">List Peminjam Buku</span>
              {/* </a> */}
              </Link>
            </li>
            
          </ul>
          
        </nav>
        {/* <!-- End Sidebar navigation --> */}
      </div>
      {/* <!-- End Sidebar scroll--> */}
      
    </aside>

      <Outlet />
    </>
  )
};

export default Navbar;