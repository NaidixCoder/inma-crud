import { useForm } from "react-hook-form";
import { appFirebase } from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const { handleSubmit, register } = useForm();

    const auth = getAuth(appFirebase);
    


    return (
        <>
        <div className="flex justify-center items-center w-full px-10">
            <form className="w-[90%] max-w-lg" >          
                <div className="flex flex-wrap -mx-3 mb-6">
                    
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="e-mail">
                            E-mail
                        </label>
                        <input
                        required
                        id="e-mail"
                        type="email"
                        {...register("email")}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="ejemplo@ejemplo.com"
                        />
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                        required
                        id="password"
                        type="password"
                        {...register("password")}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                    
                </div>

                <div>
                    {}
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login