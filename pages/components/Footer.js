import Image from "next/image"
import NextIcon from "../../public/nextjs-icon.svg"
import TailwindIcon from "../../public/tailwindcss-icon.svg"

export default function Footer() {
    return (
        <div className="flex md:flex-row flex-col gap-2 justify-between py-10">
            <div className="flex flex-col">
                <h3 className="text-lime-200 font-semibold text-center">Dibuat menggunakan</h3>
                <div className="flex flex-row md:justify-between justify-center gap-4">
                    <Image
                        src={NextIcon}
                        height={50}
                        width={50}
                    />
                    <Image
                        src={TailwindIcon}
                        height={50}
                        width={50}
                    />
                </div>
            </div>
            <h3 className="text-lime-200 font-semibold text-center">Dibuat oleh <spam className="text-lime-400">Belati Jagad Bintang Syuhada</spam></h3>
        </div>
    )
}