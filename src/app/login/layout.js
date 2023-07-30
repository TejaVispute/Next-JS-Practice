"use client";
import Link from "next/link";
import React from "react";
import "./login.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <div>
      {currentPath !== "/login/loginforcollage" ? (
        <ul>
          <li>
            <h1>Login</h1>
          </li>
          <li>
            <Link href="/login">MainLogin</Link>
          </li>
          <li>
            <Link href="/login/loginforstudent">Login For Student</Link>
          </li>
          <li>
            <Link href="/login/loginforcollage">Login For Collage</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
};

export default Layout;
