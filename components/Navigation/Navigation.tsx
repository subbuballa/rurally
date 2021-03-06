import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { EyeOffIcon } from "@heroicons/react/outline";
import React from "react";
import { Button, Button_Type } from "components/Button/Button";
import { useSensitive } from "components/ContextWrapper/ContextWrapper";
import Image from "next/image"

const PAGES = [
  {
    path: "/",
    title: "Rur-ally",
    description: "Home page",
  },
  {
    path: "/campaigns",
    title: "Campaigns",
    description: "Campaign page",
  },
  {
    path: "/about",
    title: "About",
    description: "About us",
  },
];

const Navigation = () => {
  const [session, loading] = useSession();

  const { sensitive, setSensitive } = useSensitive();

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between p-4 bg-blue-500 text-white z-50">
      {/* <Image src='/assets/rurally.png' alt="Mountain" width={50}
                    height={20}
                    layout="responsive"></Image> */}
        <div>
          {PAGES.map((page) => (
            <Link href={page.path} key={page.path}>
              <a className="font-bold text-md m-4">{page.title}</a>
            </Link>
          ))}
        </div>
        <div className="flex flex-row">
          <Button
            className="-m-2"
            variant={Button_Type.Primary}
            link={{ href: "/account" }}
          >
            {session ? "Account" : "Sign In"}
          </Button>
        </div>
      </nav>
      <div className="mt-10" />
    </>
  );
};

export default Navigation;
