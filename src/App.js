import img from "./assets/montanha-fuji-com-via-lactea-a-noite_335224-104.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'
import "./App.css";

function App() {

  const [inputSenha, setInputSenha] = useState(false)

  function showPass(e) {
    e.preventDefault()

    setInputSenha(!inputSenha)
  }

  return (
    <div
      className=" w-full h-[100vh] text-black flex bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="justify-center m-auto border w-[350px] h-[400px] rounded-[10px] bg-black/70 text-white p-4">
        <h1 className="text-center font-bold text-3xl mb-[20px] mt-[10px]">
          Cadastre-se
        </h1>
        <form className="flex flex-col ">
          <label className="font-bold">Nome:</label>
          <input
            className="border-b bg-transparent outline-none p-1 m-2 "
            type="text"
            placeholder=" Digite seu nome"
          />

          <label className="font-bold">Email:</label>
          <input
            className="border-b bg-transparent outline-none p-1 m-2"
            type="text"
            placeholder=" Digite seu nome"
          />

       
            <label className="font-bold"> Senha:</label>
            <div className="flex-row flex justify-around items-center" id="sessao-senha">
            <input
              className="border-b w-full bg-transparent outline-none p-1 m-2 flex-row"
              type={inputSenha ? 'password' : 'text'}
              placeholder=" Digite sua senha"
            />

            <div id="button">
              <button onClick={showPass}>
               {inputSenha ?  <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} />}
              </button>
            </div>
          </div>

          <button
            className=" font-bold w-[200px] bg-purple-500 m-auto mt-[10px] p-[10px] rounded-[8px] transition ease-in-out duration-300
          delay-150 hover:bg-purple-900"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
