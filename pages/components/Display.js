export default function Display(props) {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {props.element.map((each, index) => {
                return (
                    <div key={index} className="md:w-[30%] w-[40%]">
                        <img
                            src={each.images.original.url} alt={each.title}
                            className="w-full"
                        />
                    </div>
                )
            })}
        </div>
    );
}