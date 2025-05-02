
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'
import { auth } from "./database/dbFire";
import "./App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [inputSenha, setInputSenha] = useState(false)

  function showPass(e) {
    e.preventDefault()

    setInputSenha(!inputSenha)
  }


  async function userRegister(e){
      e.preventDefault()

    if(!email && !pass){
      toast.warn('Insira o Email e a senha para continuar')
    }

    await createUserWithEmailAndPassword(auth ,email, pass)

    .then(()=> {
      console.log('Usuário cadastrado com sucesso!')
      toast.success('Usuário cadastrado com sucesso!')
      setName('')
      setEmail('')
      setPass('')
    
    })
    .catch((error) => {
      console.log(error)

      if(error.code === 'auth/email-already-in-use'){
        toast.warn('Já existe um usuário com este Email')
      } 
      else if(error.code === 'auth/invalid-email'){
        toast.error('Email inválido')
      }
      else if(error.code === 'auth/weak-password') {
        toast.warn('A senha deve ter pelo menos 6 caracteres!')
      }
    })
  }
  return (
    <div className=" w-full h-[100vh] text-black flex bg-cover">
      <div className="justify-center flex m-auto w-[750px] h-[400px] rounded-[10px] bg-white text-black italic shadow-md shadow-purple-700">
       
        <div className="flex flex-col items-center justify-center text-white bg-purple-600 w-full h-full rounded-l-[10px]">
          <div
          className="text-center">
           <h1 className="text-3xl font-bold">Entre no App</h1>
           <p className="max-w-[300px] text-center">Só no App você encontra tudo o que precisa!</p>
           </div>

            <div className="mt-10 justify-center flex flex-col items-center">
            <span>Já tem um cadastro?</span>
              <button className=" bg-white text-black p-2 w-[150px] rounded-md italic font-bold">
                entrar
              </button>
           </div>
        </div>

          

        <form className="flex flex-col w-full p-6 ">

        <h1 className="text-center font-bold text-3xl mb-[20px] mt-[10px] italic">
          Login<strong className="text-purple-700 italic">App</strong>
        </h1>

          <label className="font-bold">Nome:</label>
          <input
            className="border-b bg-transparent outline-none p-1 m-2 "
            type="text"
            placeholder=" Digite seu nome"
            value={ name }
            onChange={ (e) => setName( e.target.value )}
            
          />

          <label className="font-bold">Email:</label>
          <input
            className="border-b bg-transparent outline-none p-1 m-2"
            type="text"
            placeholder=" Digite seu email"
            value={ email }
            onChange={ (e) => setEmail( e.target.value )}
            
          />

       
            <label className="font-bold"> Senha:</label>
            <div className="flex-row flex justify-around items-center" id="sessao-senha">
            <input
              className="border-b w-full bg-transparent outline-none p-1 m-2 flex-row"
              type={inputSenha ? 'password' : 'text'}
              placeholder=" Digite sua senha"
              value={ pass }
              onChange={ (e) => setPass( e.target.value )}
              
            />

            <div id="button">
              <button onClick={showPass}>
               {inputSenha ?  <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} />}
              </button>
            </div>
          </div>

          <button
            className=" font-bold w-[200px] bg-purple-500 m-auto mt-[10px] p-[10px] rounded-[8px] transition ease-in-out duration-300
          delay-150 hover:bg-purple-900 text-white"
          onClick={userRegister}
          >
            Cadastrar
          </button>
        </form>
      </div>
      <ToastContainer 
       position="top-center" 
       autoClose={2500}
       theme="dark"
       />
    </div>
  );
}

export default App;
