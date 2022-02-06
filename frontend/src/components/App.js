import React from "react";
import { Route, Switch, useHistory} from "react-router-dom";
import api from "../utils/api";
import Header from './Header';
import Form from './Form';
import CardsList from './CardsList';
import Footer from './Footer';
import Success from './Success';
import Preloader from "./Preloader";
import BurgerMenu from './BurgerMenu';
import elzAqua from '../images/23664397.jpg';
import elz0666 from '../images/26988420.jpg';
import elzTonic from '../images/26984839.jpg';

function App() {
  const [loading, setloading] = React.useState(false);
  const [burger, setBurger] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const history = useHistory();
  const cards = [
    {
      _id: 1,
      image: elzAqua,
      wbLink: 'https://www.wildberries.ru/catalog/23664397/detail.aspx',
      cardTitle: 'ELIZAVECCA Крем для лица AQUA HYALURONIC, 50мл',
    },
    {
      _id: 2,
      image: elz0666,
      wbLink: 'https://www.wildberries.ru/catalog/26988420/detail.aspx',
      cardTitle: 'ELIZAVECCA Сыворотка с гиалуроновой кислотой 97%, 50мл',
    },
    {
      _id: 3,
      image: elzTonic,
      wbLink: 'https://www.wildberries.ru/catalog/26984839/detail.aspx',
      cardTitle: 'ELIZAVECCA Тоник-пилинг на основе фруктовых кислот, 200мл',
    },
  ];
  React.useEffect(() => {
    document.title = "Golden Tree - Розыгрыш среди покупателей WB";
  }, []);


  function sendForm(form) {
    setErr(false);
    setloading(true);
    api.sendFotoTg(form)
      .then(() => {
        setloading(false);
        history.push("/cards");
        setSuccess(true);
        setErr(false);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
        setErr(true);
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
        <Form err={err} form={sendForm}/>
        </Route>
        <Route path="/cards">
          <Success success={success}/>
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
