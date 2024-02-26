import Image from 'next/image'
export default function Logo() {
    return (
        <div>
            <link rel="stylesheet" href="logo.css"></link>
            <p>
                <Image
                src="/Film_Finder.png"
                width={50}
                height={50}
                alt="Brand Logo"
                />
                <span>Film Finder</span>
            </p>
        </div>
    )
}