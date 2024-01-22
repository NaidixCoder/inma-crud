import Product from "./Product"

const ProductContainer = () => {
    return (
        <>
            <div className="flex items-center flex-col py-16 w-full h-dvh overflow-hidden">
                <h1 className="text-black font-semibold text-3xl text-center uppercase">Catalogo de productos</h1>
                <div className="flex gap-3 w-full px-3 lg:px-20 py-5">

                </div>
                <section className="ml-20 mr-20 overflow-x-auto scroll-px-16"> 
                    <main className="">
                        <div className="flex flex-col gap-1">
                        <form action="" className="rounded-sm focus:outline-none focus:border-cyan-600 flex">
                            <input
                                type="text"
                                className="w-40 px-2"
                                placeholder="Buscar..."
                            />
                            <button className="rounded-sm bg-cyan-600 text-white px-4 py-2 hover:bg-cyan-400 focus:outline-none">
                            Buscar
                            </button>
                        </form>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </main>
                </section>
            </div>
        </>
    )
}

export default ProductContainer