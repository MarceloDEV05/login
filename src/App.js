import img from './public/assets/montanha-fuji-com-via-lactea-a-noite_335224-104.avif'
import './App.css';

function App() {
  return (
    <div className=" w-full h-[100vh] text-black flex">
      <img src={ img } alt="imagem de fundo" />
      <div className='justify-center m-auto border w-[350px] h-[400px] rounded-[10px]'>
        <h1 className="text-center font-bold text-3xl mb-[30px] mt-[30px]">Cadastre-se</h1>
        <form className="flex flex-col ">
          <label className="font-bold">Insira seu nome:</label>
          <input className="border p-1 m-2 " type='text' placeholder=' Digite seu nome'/>

          <label className="font-bold">Insira seu Email:</label>
          <input className="border p-1 m-2" type='text' placeholder=' Digite seu nome'/>

          <label className="font-bold">Insira sua senha:</label>
          <input className="border p-1 m-2" type='password' placeholder=' Digite sua senha'/>

          <button className="border w-[200px] m-auto mt-[8px] p-[10px] rounded-[8px] ">Cadastrar</button>
        </form>

      </div>
    </div>
  );
}

export default App;
