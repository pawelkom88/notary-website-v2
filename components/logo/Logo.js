import Link from "next/link";
import Image from "next/image";
import { logoPng } from "../../helpers/images";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <Image width={66} height={66} src={logoPng} alt="Sikorska notary logo" />
      </Link>
    </div>
  );
}
