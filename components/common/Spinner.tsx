const Spinner = () => {
    return (
        <div className="flex flex-col justify-center items-center"
        style={{
            minHeight: 'calc(100vh - 30rem)'
        }}
        >
           <span className="loading loading-spinner text-accent loading-lg"></span>
            <span className="text-xs text-gray-500 mt-3 italic">Loading...</span>
        </div>
    );
}

export default Spinner;