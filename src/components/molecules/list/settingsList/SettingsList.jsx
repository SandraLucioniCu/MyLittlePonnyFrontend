import '../../../../style/menu/settingsList.css';
import ProgressBar from '../../../atoms/progressBar/ProgressBar';


function SettingsList(props){

  const testData = [
    {completed: props.popularity, name:"Popularidad", backgroundColor: '#dbee9f'},
    {completed: props.knowledge, name:"Conocimiento", backgroundColor: '#80cbbd'},
    {completed: props.fun, name:"Diversion", backgroundColor: ' #beb7dc'}
];

    return(
        <div id={props.id}>
            {testData.map((item) => (
                <ProgressBar completed={item.completed} name={item.name} backgroundColor={item.backgroundColor} />
                ))}
        </div>
    );

}

export default SettingsList;