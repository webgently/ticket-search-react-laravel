const Itemlist = (props) => {
    return (
        <>
            {props.result.map((item, index) => {
                const list = (
                    <div
                        className="flex justify-between rounded-md bg-gray px-7 py-4 my-4"
                        key={index}
                    >
                        <input
                            type="checkbox"
                            name={index}
                            className="default:ring-2"
                            onChange={props.handleChange}
                        />
                        <p className="flex items-center w-11/12 lg:text-lg md:text-lg_1 sm:text-lg text-base lg:mr-10 md:mr-2 sm:mr-2 ml-2">
                            {item}
                        </p>
                    </div>
                )
                return list
            })}
        </>
    )
}

export default Itemlist
