import ItemCount from "./ItemCount"

const Product = () => {
    return (
        <div className="min-w-[300px] w-full flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-5 border">
            <picture className="flex flex-shrink-0">
                <img className="h-52 lg:h-28" src="https://http2.mlstatic.com/D_NQ_NP_835278-MLA73150208979_112023-O.webp" alt="Producto" />
            </picture>
            <div className="overflow-hidden flex flex-col md:flex-row justify-between gap-1">
                <div>
                    <h3 className="text-xl">Este es un producto</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae culpa ab repellat, nihil libero accusantium aperiam facilis voluptate et veritatis ratione, distinctio quis! Est voluptatum ex quo veniam. Reiciendis.</p>
                </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <div>
                    <p>Precio</p>
                    <span className="text-xl">$ 100.000</span>
                </div>
                <ItemCount />
            </div>
            </div>
        </div>
    )
}

export default Product