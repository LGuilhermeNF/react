import React from "react";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import articleimg1 from "./assets/images/article1.png";
import articleimg2 from "./assets/images/article2.png";
import articleimg3 from "./assets/images/article3.png";
import articleimg4 from "./assets/images/article4.png";
// import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        {/* <Counter /> */}

        <section id="articles">
          <Article
            title="Notícias do Culto de Celebração"
            provider="Ministério Autor da Vida."
            description="Todos os domingos iniciamos a nossa adoração ao poderoso Deus às 18:15hs, venha se juntar a nós..."
            thumbnail={articleimg1}
          />

          <Article
            title="Noite do Estudo"
            provider="Ministério Autor da Vida."
            description="Somos apaixonados pelas escrituras do Senhor, por isso, dedicamos as quartas à noite para esse momento de extrema importância na vida do cristão. Sempre às 19:15hs estaremos reunidos, você é bem vindo a juntar-se a nós."
            thumbnail={articleimg2}
          />

          <Article
            title="Ambiênte agradável e convidativo"
            provider="Ministério Autor da Vida."
            description="Em busca de um lugar em Deus onde possa aprender mais sonbre Ele e como conectar-se ao PAI? Estamos dispostos a proporcionar a você esse lugar, com a responsabilidade de declar o que as escrituras dizem sobre o Eterno."
            thumbnail={articleimg3}
          />

          <Article
            title="Entendendo o poder da Oração"
            provider="Ministério Autor da Vida."
            description="Entendemos que a oração é principal fonte de comunicação, pois, através dela, exercemos a nossa fé em Deus, nos aproximamos do seu reino e compreendemos melhor os seus planos para nós. Oração é um ferramenta poderosissima para realização de grandes feitos em Jesus."
            thumbnail={articleimg4}
          />
        </section>
      </>
    );
  }
}

export default App;
