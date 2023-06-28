"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, getProviders, useSession, signIn } from "next-auth/react";

// import

function Nav() {
  const [providers, setProviders] = useState();
  const [openDropDown, setOpenDropDown] = useState();
  const { data: session } = useSession();
  //   console.log(session);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <div className="w-full flex-between mb-12">
      <Link href="/" className="flex gap-2 p-5 items-center">
        {" "}
        <Image
          src="/assets/images/logo.svg"
          width="40"
          height="40"
          alt="Promptopia"
        />
        <div className="logo_text">Promptopia</div>
      </Link>

      {/* Desktop Navigation */}
      <div className="max-sm:hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <div>
              <Image
                src={session?.user?.image}
                width="30"
                height="30"
                alt="Promptopia"
                className="rounded-full"
              />
            </div>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile Appplication */}
      <div className="sm:hidden">
        {session?.user ? (
          <div className="relative">
            <Image
              src={session?.user?.image}
              width="40"
              height="40"
              alt="Promptopia"
              className="rounded-full"
              onClick={() => setOpenDropDown((prev) => !prev)}
            />
            {openDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link capitalize"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/profile"
                  className="dropdown_link capitalize"
                  onClick={() => setToggleDropdown(false)}
                >
                  create post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
            {/*  */}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
