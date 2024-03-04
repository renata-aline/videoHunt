import "./styles/components/app.sass";
import { motion } from "framer-motion"

function App() {
  return (
    <div className="container">
      <header className="header">
        <motion.div
         animate={{ y: 50 }}
         transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 }
        }}
         >
        <img src="assets/logo-videoHunt.png" alt="Logo do projeto videoHunt"  className="logo-img"/>
        <h1>VideoHunt</h1>
        </motion.div>
      </header>
      <form className="form">
        <div className="inputContainer">
         
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu E-mail"
          ></input>
           <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          ></input>


        </div>
        <button type="submmit" className="button">ENTRAR</button>
        <a href="#">Não tem conta? Registre-se</a>
      </form>
    </div>
  );
}

export default App;
