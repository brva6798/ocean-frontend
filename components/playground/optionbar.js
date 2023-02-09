const OptionBar = () => {
    return(
        <div className="rounded-lg">
            <div className="bg-white rounded-lg px-2 h-8 flex align-middle items-center justify-center my-2">
                My Investments
            </div>
            <div className="bg-gray-500 rounded-lg px-2 hover:bg-white h-8 flex align-middle items-center justify-center my-2">
                My Pools  
            </div>
            <div className="bg-gray-500 rounded-lg px-2 hover:bg-white h-8 flex align-middle items-center justify-center my-2">
                Search Pools
            </div>
        </div>
    )
}
export default OptionBar