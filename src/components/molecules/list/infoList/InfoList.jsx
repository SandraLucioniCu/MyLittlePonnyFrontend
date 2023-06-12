import './infolist.css';

function InfoList({games, changeGame}){

    const handleClick = (gameId) => {
        changeGame(gameId);
      }

    return(  
        <div className='resume-menu'> 
            <ul className="resume-list">
                {games.map((item, index) => ( 
                    <li id={index} className="resume-item">
                        <button className="resume-button" onClick={() => handleClick(index)}>
                            <span className='button-text'>{item.title}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default InfoList;

