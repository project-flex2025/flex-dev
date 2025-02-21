"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="sidebar" data-background-color="white">
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="white">
          <Link href="/" className="logo">
            <img src="/img/kaiadmin/logo_dark.svg" alt="navbar brand" className="navbar-brand" height="20" />
          </Link>
          <div className="mini-logo">
            <img src="/img/kaiadmin/icon.png" alt="navbar brand" className="navbar-brand" height="50" />
          </div>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            {/* Dashboard */}
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`} >
              <Link data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
                <span className="caret"></span>
              </Link>
              <div className="collapse" id="dashboard">
                <ul className="nav nav-collapse">
                  <li className={pathname === "/" ? "active" : ""}>
                    <Link href="/">
                      <span className="sub-item">Dashboard 1</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Menu Levels */}
            <li className={`nav-item ${pathname.startsWith("/submenu") ? "active" : ""}`}>
              <Link data-bs-toggle="collapse" href="#submenu">
                <i className="fas fa-bars"></i>
                <p>Menu Levels</p>
                <span className="caret"></span>
              </Link>
              <div className="collapse" id="submenu">
                <ul className="nav nav-collapse">
                  <li className={pathname.startsWith("/submenu/level1") ? "active" : ""}>
                    <Link data-bs-toggle="collapse" href="#subnav1">
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </Link>
                    <div className="collapse" id="subnav1">
                      <ul className="nav nav-collapse subnav">
                        <li className={pathname === "/submenu/level1/level2-1" ? "active" : ""}>
                          <Link href="/submenu/level1/level2-1"><span className="sub-item">Level 2</span></Link>
                        </li>
                        <li className={pathname === "/submenu/level1/level2-2" ? "active" : ""}>
                          <Link href="/submenu/level1/level2-2"><span className="sub-item">Level 2</span></Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={pathname === "/submenu/level1" ? "active" : ""}>
                    <Link href="/submenu/level1"><span className="sub-item">Level 1</span></Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Settings */}
            <li className={`nav-item ${pathname === "/settings" ? "active" : ""}`}>
              <Link href="/settings">
                <i className="fas fa-cog"></i>
                <p>Settings</p>
              </Link>
            </li>

            {/* Profile */}
            <li className={`nav-item ${pathname === "/profile" ? "active" : ""}`}>
              <Link href="/profile">
                <i className="fas fa-user"></i>
                <p>Profile</p>
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/profile" ? "active" : ""}`}>
              <Link href="/login">
                <i className="fas fa-user"></i>
                <p>Login</p>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
