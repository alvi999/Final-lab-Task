import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/Registration"> Register </Link>
        </li>
        <li>
          <Link href="/Login"> Login </Link>
        </li>
        <li>
          <Link href="/products"> Products </Link>
        </li>
      </ul>
    </nav>
  );
}