export default function Navbar() {
    return (
        <div className="flex flex-row justify-between py-4">
            <a className="font-sans font-semibold text-lime-600 text-2xl" href="">BELATI</a>
            <div className="flex flex-row gap-4">
                <a className="text-lime-300 font-semibold hover:text-lime-100 hover:text-lg duration-500" href="https://github.com/belatijagad" target="_blank">Github</a>
                <a className="text-lime-300 font-semibold hover:text-lime-100 hover:text-lg duration-500" href="https://linkedin.com/in/belati-jagad" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}