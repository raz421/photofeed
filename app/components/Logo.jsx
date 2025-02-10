import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width={125}
        height={125}
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws_logo.png"
        alt="Lws"
      />
    </Link>
  );
}
