import Image from 'next/image'
export default function Burger() {
    return (
        <div>
                <Image
                src="/burger.png"
                width={50}
                height={50}
                alt="Burger Button"
              ></Image>
    
        </div>
    )
}