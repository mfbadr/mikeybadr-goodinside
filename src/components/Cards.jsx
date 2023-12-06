import Card from "./Card";

export default async function Cards(){
  const response = await fetch('https://bff.goodinside.dev/api/p/cards');
  const cards = await response.json();
  //types
  ////audo -> has audio url, title, label
  ////video -> has videoid. title, text
  //text -> has text & label
  //opt_text -> has title and text
  
// green #54AE7E
// blue #C8E1FC
// yello #EDC745
  return (
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {cards.cards.map((card) => (<Card key={ card.card_id} card={card} />))}
      </div>
  )
}