
function Ring() {
  return (
    <div className="bg-white p-10 rounded-lg shadow flex justify-between">
        <button type="button" className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded text-white 
        inline-flex focus:outline-none focus:ring-2 ring-blue-600">
            Primary
        </button>

        <button type="button" className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white 
        inline-flex focus:outline-none focus:ring-2 ring-red-600">
            Danger
        </button>


        <button type="button" className="bg-lime-500 hover:bg-lime-600 px-5 py-2 rounded text-white 
        inline-flex focus:outline-none focus:ring-2 ring-lime-600">
            Success
        </button>


        <button type="button" className="bg-violet-500 hover:bg-violet-600 px-5 py-2 rounded text-white 
        inline-flex focus:outline-none focus:ring-2 ring-violet-600">
            Secondary
        </button>
    </div>
  )
}

export default Ring