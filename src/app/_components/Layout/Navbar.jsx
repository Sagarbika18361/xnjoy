import "./Navbar.css";
import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar grid grid-cols-6 gap-4 sm:gap-12 fixed top-0 w-[100%] shadow-lg px-6 py-2 ">
      <div className="col-span-6 sm:col-span-2">
        <div className="w-full flex justify-center sm:justify-start">
          <Link href={"/"}>
            <img
              src={"/logo.png"}
              alt=""
              className="w-32 h-10 object-cover cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="col-span-6 sm:col-span-2">
        <div className="flex items-center ">
          <ul className="flex w-full justify-between gap-4">
            <li className="font-semibold border-b-2 border-[#ffc900]">
              <Link href="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="font-semibold">
              <Link href="/other-apps">Other Apps</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
