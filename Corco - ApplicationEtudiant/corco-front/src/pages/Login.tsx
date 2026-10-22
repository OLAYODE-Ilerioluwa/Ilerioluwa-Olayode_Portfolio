export default function Login({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
    return(
        <> 
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4"> 
                <div className="border bg-emerald-600 p-6 flex flex-col items-center rounded-lg shadow-lg">

                    <p className="text-white text-2xl font-bold mb-6">Bienvenue !</p>
                    
                    <form action="" className="border rounded bg-white p-4 flex flex-col gap-4 max-w-sm">

                        <div className="flex flex-col gap-1">
                            <label htmlFor="id"> Identifant : </label>
                            <input type="text" name="id" id="id" className="border rounded m-1" required />
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <label htmlFor="pswd"> Mot de passe :</label>
                            <input type="password" name="pswd" id="pswd" className="border rounded m-2" required />
                        </div>

                        <div>
                            <p className="text-sm text-blue-300 transform transition duration-100 cursor-pointer hover:text-blue-700"> Mot de passe ?</p>
                        </div>
                        
                        <div className="flex justify-end">
                            <input type="submit" value="Valider" className="border rounded p-1 bg-emerald-600 text-white cursor-pointer transform transition duration-300 hover:scale-105" />
                        </div>
                        
                    </form>
                </div>
            </div>

            <div className="bg-gray-50 flex justify-start gap-2">
                <p className="bg-gray-50"> Vous n'avez toujours pas de compte ? </p>
                <p className="text-blue-600 transform transition duration-100 hover:scale-110 cursor-pointer " onClick={() => setCurrentPage('inscription')}> Inscription </p>
            </div>
        </>
        
    )
}