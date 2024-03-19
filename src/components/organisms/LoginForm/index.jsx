
import Logo from "../../molecules/Logo";
import Input from "../../molecules/Input";
import Button from "../../molecules/Button";
import { Link } from "react-router-dom";

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
        <Link to="/signup">Não tem conta? Registre-se</Link> 
       </form>
    </>
  );
}

export default LoginForm;
