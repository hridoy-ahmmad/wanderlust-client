"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { SignOutModal } from "./SignOutModal";


const Navbar = () => {
  const { data: session, } = authClient.useSession()
  const user = session?.user



  return (
  <div className="bg-white border-b border-gray-200">
  <nav className="max-w-7xl mx-auto h-[90px] flex items-center justify-between px-6">

    {/* Left Menu */}
    <ul className="flex items-center gap-6 text-[14px] font-medium text-gray-700 w-[40%]">

      <li>
        <Link
          href="/"
          className="hover:text-black transition"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/destinations"
          className="hover:text-black transition"
        >
          Destinations
        </Link>
      </li>

      <li>
        <Link
          href="/mybookings"
          className="hover:text-black transition"
        >
          My Bookings
        </Link>
      </li>

      <li>
        <Link
          href="/destinationForm"
          className="hover:text-black transition"
        >
          Add Destination
        </Link>
      </li>

      <li>
        <Link
          href="/profile"
          className="hover:text-black transition"
        >
          Profile
        </Link>
      </li>

    </ul>

    {/* Logo */}
    <div className="w-[20%] flex justify-center">
      <Link href="/">
        <Image
          src="/assets/Wanderlast.png"
          width={140}
          height={140}
          alt="logo"
          className="object-contain"
        />
      </Link>
    </div>

    {/* Right Side */}
    <div className="w-[40%] flex justify-end">

      {user ? (
        <div className="flex items-center gap-3">

          <div className="flex items-center gap-2 border border-gray-300 px-3 py-2">

            <Avatar className="h-9 w-9">
              <Avatar.Image src={user?.image} alt={user?.name} />
              <Avatar.Fallback>
                {user?.name?.charAt(0)}
              </Avatar.Fallback>
            </Avatar>

            <span className="text-sm font-medium">
              {user?.name}
            </span>

          </div>

          <SignOutModal />

        </div>
      ) : (
        <div className="flex items-center gap-3">

          <Button
            variant="outline"
            className="rounded-none border-black px-5"
          >
            <Link href="/signIn">Sign In</Link>
          </Button>

          <Button
            className="rounded-none bg-black text-white px-5 hover:bg-gray-800"
          >
            <Link href="/signUp">Sign Up</Link>
          </Button>

        </div>
      )}

    </div>

  </nav>
</div>
  );
};

export default Navbar;