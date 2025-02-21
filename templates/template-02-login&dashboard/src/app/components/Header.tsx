"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="main-header">
      <div className="main-header-logo">
        <div className="logo-header" data-background-color="white">
          <Link href="index.html" className="logo">
            <img src="/img/kaiadmin/logo_dark.svg" alt="navbar brand" className="navbar-brand" height="20" />
          </Link>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>
      <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-search pe-1">
                  <i className="fa fa-search search-icon"></i>
                </button>
              </div>
              <input type="text" placeholder="Search ..." className="form-control" />
            </div>
          </nav>

          <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
            <li className="nav-item topbar-user dropdown hidden-caret">
              <Link className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                <div className="avatar-sm">
                  <img src="/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                </div>
                <span className="profile-username">
                  <span className="op-7">Hi,</span>
                  <span className="fw-bold">{session?.user.name}</span>
                </span>
              </Link>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <li>
                  <Link className="dropdown-item" href="#">My Profile</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" href="#" onClick={() => signOut({ callbackUrl: "/login" })}>Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
