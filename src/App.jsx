import './styles/components/app.sass';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="assets/logo-videoHunt.png" alt="Logo do projeto videoHunt" />
        <h1>VideoHunt</h1>
      </header>

      <div className="inputContainer">
        <label form="name">Username:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome "
        ></input>
      </div>

      <div className="inputContainer">
        <label form="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="exemplo@email.com"
        ></input>
      </div>
      <button type="submmit">ENTRAR</button>
    </div>
  );
}

export default App;
