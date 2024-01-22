import { useState } from "react";

const ItemCount = () => {
    const [quantity, setQuantity] = useState(0);
    const stock = 10;

    const handleIncrement = () => quantity < stock && setQuantity(quantity + 1);
    const handleDecrement = () => quantity > 0 && setQuantity(quantity - 1);
    
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = parseInt(inputValue);
        

        if (numericValue > stock) {
            setQuantity(stock)
            alert(`El stock del producto es ${stock}`)
        } else {
            setQuantity(numericValue)
        }        
    };

    return (
        <div className="flex flex-col justify-center items-center gap-1">
            <div className="flex items-center justify-center gap-2">
                <button
                    className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
                    onClick={handleIncrement}
                >
                    +
                </button>

                <input
                    value={quantity}
                    onChange={handleInputChange}
                    type="number"
                    className="appearance-none m-0 w-16 text-center border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring focus:border-cyan-400"
                    placeholder="Ingrese un valor"
                />

                <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700"
                    onClick={handleDecrement}
                >
                    -
                </button>
                
            </div>
            
            <button
                type="button"
                className="w-full max-w-52 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
                Agregar
            </button>

        </div>
    );
};

export default ItemCount;
