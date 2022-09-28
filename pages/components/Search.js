export default function Search(props) {
    if (props.searchTerm == ' ') {
        return (
            <div className="py-5">
                <h1 className="font-semibold text-lime-200 text-2xl text-center">
                    GIF yang sedang trending!
                </h1>
            </div>
        )
    } else {
        return (
            <div className="py-5">
                <h1 className="text-semibold text-lime-200 text-2xl text-center">
                    Hasil dari pencaharian <span className="text-lime-300">{props.searchTerm}</span>
                </h1>
            </div>
        )
    }
}