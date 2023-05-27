import Image from "next/image";

import Logo from "@assets/images/whole.svg";
export default function Navbar() {
  return (
    <nav className="flex flex-row justify-around items-center align-center h-20 bg-white">
      <div>
        <Image src={Logo} alt="LOGO" />
      </div>
      <div>
        <input
          type="search"
          placeholder="Search for your favorite group in ATG"
          className="bg-slate-200 px-5 py-4 rounded-full w-48 lg:w-[400px] font-semibold"
        />
      </div>
      <div>
        Create Account.
        <span className="hidden lg:inline font-bold text-blue-700">
          It's free!
        </span>
        &#x25BC;
      </div>
    </nav>
  );
}
