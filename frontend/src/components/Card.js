import image from "../images/catalog-img3.png";
function Card(props) {
  return (
      <div class="card">
        <img class="card__image" src={props.card.image}/>
        <p class="card__title">JAYEONMAPPING ESSENCE MASK</p>
        <a class="card__bottom" href={props.card.wbLink}>
          <button class="card__link-btn">Посмостреть на сайте WB</button>
        </a>
      </div>
  );
}

export default Card;
