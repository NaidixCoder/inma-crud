
const Caja = () => {
  return (
    <div className="flex items-center flex-col py-16 w-full h-dvh overflow-hidden bg-violet-600">
      <h1 className="text-black font-semibold text-3xl uppercase">Caja diaria</h1>
      <main className=" pt-10 overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr className="">
                <th className="text-center border-r border-gray-400 py-2 px-4">Movimiento</th>
                <th className="py-2 px-4 text-left">Factura</th>
                <th className="py-2 px-4 text-left">Presupuesto</th>
                <th className="py-2 px-4 text-left">Ingreso</th>
                <th className="py-2 px-4 text-left">Egreso</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4  border-r">Compra de materiales</td>
                <td className="py-2 px-4  border-r">F2022001</td>
                <td className="py-2 px-4  border-r">$5,000</td>
                <td className="py-2 px-4  border-r">$0</td>
                <td className="py-2 px-4  border-r">$5,000</td>
              </tr>
            </tbody>
          </table>

      </main>
    </div>
  )
}

export default Caja