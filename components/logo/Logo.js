import Link from "next/link";
import Image from "next/image";
import  logoWebp  from "../../public/images/logo-webp.webp";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <Image width={66} height={66} src={logoWebp} alt="Sikorska notary logo" />
      </Link>
    </div>
  );
}
