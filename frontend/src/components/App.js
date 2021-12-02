import React from "react";
import { Route, Switch, useHistory} from "react-router-dom";
import api from "../utils/api";
import Header from './Header';
import Form from './Form';
import CardsList from './CardsList';
import Footer from './Footer';
import Preloader from "./Preloader";
import BurgerMenu from './BurgerMenu';
function App() {
  const [loading, setloading] = React.useState(false);
  const [burger, setBurger] = React.useState(false);
  const history = useHistory();
  const cards = [
    {
      _id: 1,
      image: 'https://images.wbstatic.net/big/new/12260000/12263441-1.jpg',
      wbLink: 'https://www.wildberries.ru/catalog/26988420/detail.aspx?targetUrl=SP',
      cardTitle: 'Test',
    },
    {
      _id: 2,
      image: 'https://images.wbstatic.net/big/new/12260000/12263441-1.jpg',
      wbLink: 'https://www.wildberries.ru/catalog/3811446/detail.aspx?targetUrl=BP',
      cardTitle: 'Test',
    },
    {
      _id: 3,
      image: 'https://images.wbstatic.net/big/new/12260000/12263441-1.jpg',
      wbLink: 'https://www.wildberries.ru/catalog/3811446/detail.aspx?targetUrl=BP',
      cardTitle: 'Test',
    },
    {
      _id: 4,
      image: 'https://images.wbstatic.net/big/new/12260000/12263441-1.jpg',
      wbLink: 'https://www.wildberries.ru/catalog/3811446/detail.aspx?targetUrl=BP',
      cardTitle: 'Test',
    },
    {
      _id: 5,
      image: 'https://images.wbstatic.net/big/new/12260000/12263441-1.jpg',
      wbLink: 'https://www.wildberries.ru/catalog/3811446/detail.aspx?targetUrl=BP',
      cardTitle: 'Test',
    },
  ];
  React.useEffect(() => {
    document.title = "Golden Tree - Розыгрыш среди покупателей WB";
  }, []);


  function sendForm(form) {
    setloading(true);
    api.sendFotoTg(form)
      .then((data) => {
        setloading(false);
        history.push("/cards");
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }

  function handleBurger() {
    setBurger(!burger);
    console.log("bur");
  }

    return (
      <>
      <BurgerMenu burger={burger} curtainClose={handleBurger}/>
      <div className="page">
      <Preloader loading={loading}/>
      <Header burger={handleBurger}/>
      <main className="main">
      <Switch>
        <Route path="/promo">
        <Form form={sendForm}/>
        </Route>
        <Route path="/cards">
        <CardsList cards={cards}/>
        </Route>
      </Switch>
      </main>
      <Footer/>
      </div>
      </>
  );

}

export default App;
