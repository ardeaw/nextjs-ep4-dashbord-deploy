"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/nextjs.svg";
import { signOut } from "next-auth/react";

function Navbar({ session }) {
  return (
    <nav className="shadow-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
          <div>
            <Link href="/">
              <Image src={Logo} width={100} height={100} alt="NextJS Logo" />
            </Link>
          </div>
          <ul className="flex">
            {!session ? (
              <>
                <li className="mx-3">
                  <Link href="/login">Login</Link>
                </li>
                <li className="mx-3">
                  <Link href="/register">Register</Link>
                </li>
              </>
            ) : (
              //ถ้ามี session ก็คือ login อยู่ ก็ทำบรรทัดด้านล่าง
              <li className="mx-3">
                <Link
                  href="/welcome"
                  className="bg-gray-500 tex-white border py-2 px-3 rounded-md text-lg my-2"
                >
                  Profile
                </Link>
                <a
                  onClick={() => signOut()}
                  className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
