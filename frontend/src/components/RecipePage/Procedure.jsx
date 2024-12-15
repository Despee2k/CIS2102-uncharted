const Procedure = ({ procedure }) => {
    const displayProcedure = () => {
        return procedure.map((step) => (
            <li key="index">{step}</li>
        ))
    }

  return (
    <div className="ml-20 w-[800px]">
      <h1 className="font-heading text-2xl font-bold mt-10 mb-4">Procedure:</h1>
      <ol className="list-decimal ml-5 text-lg mb-10">
        {displayProcedure()}
      </ol>
    </div>
  )
}

export default Procedure