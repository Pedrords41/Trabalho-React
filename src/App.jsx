import mysqlImg from './assets/mysql.png';
import "./App.css";

export default function App() {
  return (
    <div>

      <header>
        <h1>Apresentação - MySQL</h1>
        <p>Sistema de Banco de Dados </p>
      </header>

      <section>
        <h2>O que é o MySQL?</h2>
        <p>
          O MySQL é um sistema de gerenciamento de banco de dados relacional
          muito utilizado <br />no desenvolvimento de sistemas e aplicações web.
          Ele permite armazenar, <br />organizar e acessar dados de forma eficiente.
        </p>
      </section>

      <section>
        <h2>Características</h2>
        <p>
          Open Source (código aberto) <br />
          Alta performance <br />
          Utiliza linguagem SQL <br /> 
          Compatível com várias linguagens <br />
       </p>
      </section>

      <section>
        <h2>Onde é utilizado?</h2>
        <p>
          O MySQL é utilizado em sistemas web,<br /> aplicativos, lojas virtuais,
          sistemas empresariais e plataformas digitais em geral.
        </p>
      </section>


      <section >
        <h2>Logo MySQL</h2>
        <img className='logo' src={mysqlImg} alt="MySQL" />
      </section>

      <section>
        <h2> Links do MYSQL</h2>
        <a href="https://www.mysql.com/" target="_blank">
          Site Oficial do MySQL
        </a>

        <a href="https://www.mysql.com/downloads/" target="_blank">
          Download MySQL
        </a>

      
      </section>

      <footer>
        <p>Pedro Henrique, Caio Pereira, Enzo Fazio, Gabriel Lauer</p>
      </footer>

    </div>
  );
}

