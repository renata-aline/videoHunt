import Logo from "../../molecules/Logo";
import Input from "../../molecules/Input";
import Button from "../../molecules/Button";


import { motion } from "framer-motion"


function RegisterForm() {
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
            type="name"
            name="email"
            id="email"
            placeholder="Digite seu nome"
          />
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
           <Input
            type="password"
            name="password"
            id="password"
            placeholder="Confirme sua senha"
          />


        </div>
        <Button /> 
       </form>
    </>
  );
}

export default RegisterForm;