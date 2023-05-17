import '../../../../style/menu/settingsList.css';
import ProgressBar from '../../../atoms/progressBar/ProgressBar';


const testData = [
    { bgcolor: "#6a1b9a", completed: 60, name:"Popularidad" },
    { bgcolor: "#00695c", completed: 30, name:"Conocimiento"},
    { bgcolor: "#ef6c00", completed: 53, name:"Diversion" },
];

function SettingsList(props){

    return(
        <div className="menuLive">
            {testData.map((item, idx) => (
                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name} />
                ))}
        </div>
    );

}

/*// Skills Bars
$('.skill-percent').each(function(){
    $(this).animate({
      width:$(this).attr('data-percent')},"fast");
    });


                <div class="container-fluid" id="skills">
  <div class="menuLive">
    <div class="abilities col-lg-4">
      <div class="skills-text">
        <dl class="skills-list">
          <dt class="skill-name">HTML</dt>
          <dd class="skill-percent skill-percent-html" data-percent="90%"></dd>
          </dl>
      </div>
    </div>
  </div>
</div>
*/
export default SettingsList;