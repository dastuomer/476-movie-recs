import Image from "next/image";
export default function Logo() {
  return (
    <div>
      <link rel="stylesheet" href="logo.css"></link>
      {/* <Link href="/">
        <a> */}
      <Image src="/Film_Finder.png" width={100} height={100} alt="Brand Logo" />
      {/* </a>
      </Link> */}
    </div>
  );
}
