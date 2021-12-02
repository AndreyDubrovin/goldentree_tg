import Card from "./Card";

function CardsList(props) {
  return (

    <div class="cards">
      {props.cards.map((data, i) => (
        <Card
          key={data._id}
          card={data}
        />
        ))}
    </div>
  );
}

export default CardsList;
