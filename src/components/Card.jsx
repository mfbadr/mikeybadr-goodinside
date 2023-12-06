export default function Card({card}){
    function getContent(){
      switch(card.type){
        case('audio'): 
          return (
            <audio  controls>
              <source src={card.audio_url} type="audio/mpeg" />
            </audio>
          )
        case('video'):
          return (
              <iframe
                src={`https://www.youtube.com/embed/${card.video_id}`}
                title={card.title}
                allowFullScreen
                frameBorder="0"
                />
          )  
          default:
            return ( 
              <div className="flex-grow"></div>
            )
      }  
    }

    function getBGColor(){
      switch(card.type){
        case('audio'): 
          return 'bg-yellow'
        case('video'):
          return 'bg-green'
        default:
          return 'bg-blue'
      }
    }


    return (
        <div className={`${getBGColor()}  card border-2 border-gray-300  p-6 mb-4 w-full  rounded-xl flex flex-col justify-center`}>
            <h2 className="mb-4 font-semibold text-xl ">{card.title || card.label}</h2>
            <div className="flex-grow flex items-center justify-center flex-col">
              {card.text && <p className="mb-4">{card.text}</p>}
              {getContent()}
            </div>
        </div>
    )
}