import Image from 'next/image'
export default function Logo() {
    return (
        <Image
            src="/Film_Finder.png"
            width={50}
            height={50}
            alt="Brand Logo"
        />
    )
}