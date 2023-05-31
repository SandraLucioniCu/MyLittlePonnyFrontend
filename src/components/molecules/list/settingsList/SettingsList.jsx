import '../../../../style/menu/settingsList.css';
import ProgressBar from '../../../atoms/progressBar/ProgressBar';


function SettingsList(props){

  const testData = [
    {completed: props.popularity, name:"Popularidad" },
    {completed: props.knowledge, name:"Conocimiento"},
    {completed: props.fun, name:"Diversion" }
];

    return(
        <div className="menuLive">
            {testData.map((item) => (
                <ProgressBar completed={item.completed} name={item.name} />
                ))}
        </div>
    );

}

export default SettingsList;