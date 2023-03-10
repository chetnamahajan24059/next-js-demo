import Image from "next/image";
export default function Header() {
  return (
    <header>
      <Image src="/logo.png" alt="logo" width={500} height={180}/>
    </header>
  );
}
