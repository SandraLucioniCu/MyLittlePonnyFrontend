import '../../../style/menu/stadisticDiv.css';

function StadisticDiv(props) {
    return (
        <div className="skill-percent"> 
            <div className="skill-name" data-percent={props.text}>
            </div>
        </div>
    );
}

export default StadisticDiv;

//style={{width: '30%'}}
/*
<dl class="skills-list">
          <dt class="skill-name">HTML</dt>
          <dd class="skill-percent skill-percent-html" data-percent="90%"></dd>
          <dt class="skill-name">CSS</dt>
          <dd class="skill-percent skill-percent-css" data-percent="82%"></dd>
          <dt class="skill-name">jQuery</dt>
          <dd class="skill-percent skill-percent-jquery" data-percent="28%"></dd>
          <dt class="skill-name">SCSS</dt>
          <dd class="skill-percent skill-percent-scss" data-percent="22%"></dd>
          <dt class="skill-name">Javascript</dt>
          <dd class="skill-percent skill-percent-javascript" data-percent="25%"></dd>
          <dt class="skill-name">Wordpress</dt>
          <dd class="skill-percent skill-percent-wordpress" data-percent="77%"></dd>
          <dt class="skill-name">PHP</dt>
          <dd class="skill-percent skill-percent-php" data-percent="20%"></dd>
          <dt class="skill-name">GIT</dt>
          <dd class="skill-percent skill-percent-git" data-percent="30%"></dd>
        </dl>
*/