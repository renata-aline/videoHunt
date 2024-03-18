
import Logo from "../../molecules/Logo";
import Input from "../../molecules/Input";
import Button from "../../molecules/Button";

import { motion } from "framer-motion"


function LoginForm() {
  return (
    <>
      <header className="header">
        <motion.div
         animate={{ y: 50 }}
         transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 }
        }}
         >
        
        <Logo />
        <h1>VideoHunt</h1>
        </motion.div>
      </header>
      
      <form className="form">
        <div className="inputContainer">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu E-mail"
          />
           <Input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />


        </div>
        <Button />
        <a href="#">Não tem conta? Registre-se</a> 
       </form>
    </>
  );
}

export default LoginForm;
