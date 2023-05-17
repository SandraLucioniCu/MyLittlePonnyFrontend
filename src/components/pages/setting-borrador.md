```jsx
var NewComponent = React.createClass({
    render: function() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <title>Configuración</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-food.css" />
                <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-2021.css" />
                <style dangerouslySetInnerHTML={{__html: "\n        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n    " }} />
                <link rel="stylesheet" href="/static/scss/footerStyle.css" />
                <link rel="stylesheet" href="/static/css/settings/settings-style.css" />
                <div className="container" id="container ">
                    <div className="force-overflow " />
                    <form action="/menu/actualizado" method="post">
                        <button className="context-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-up-left-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z" />
                            </svg>
                        </button>
                        <h1>Tus datos:</h1>
                        <div className="characterSelector-container">
                            <ul>
                                <li>
                                    <input type="checkbox" id="myCheckbox1" />
                                    <label htmlFor="myCheckbox1"><img src="/static/img/profiles/profileOne.png" value="photoProfile" /></label>
                                </li>
                                <li>
                                    <input type="checkbox" id="myCheckbox2" />
                                    <label htmlFor="myCheckbox2"><img src="/static/img/profiles/profileThree.png" value="photoProfile" /></label>
                                </li>
                                <li>
                                    <input type="checkbox" id="myCheckbox3" />
                                    <label htmlFor="myCheckbox3"><img src="/static/img/profiles/profileFour.png" value="photoProfile" /></label>
                                </li>
                                <li>
                                    <input type="checkbox" id="myCheckbox4" />
                                    <label htmlFor="myCheckbox4"><img src="/static/img/profiles/profileTwo.png" value="photoProfile" /></label>
                                </li>
                            </ul>
                        </div>
                        <label>Nombre: </label>
                        <input name="name" type="text" placeholder="Username" defaultValue="name" />
                        <label>Email: </label>
                        <input name="email" type="email" placeholder="Email" defaultValue="email" />
                        <label>Contraseña: </label>
                        <input name="password" type="password" placeholder="Password" defaultValue="password" />
                        <label>Pregunta:</label>
                        <textarea name="question" defaultValue={""} />
                        <label>Respuesta 1:</label>
                        <textarea name="answerOnes" defaultValue={""} />
                        <label>Respuesta 2:</label>
                        <textarea name="answerTwo" defaultValue={""} />
                        <label>Respuesta 3:</label>
                        <textarea name="answerThree" defaultValue={""} />
                        <div>
                            <button name="button" type="submit" className="sendButton" onclick="myFunction()">Guardar</button>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <div className="bubbles">
                        <div className="bubble" style={{-size: '3.5537436888393286rem', -distance: '6.4168708016988365rem', -position: '68.24266325825751%', -time: '2.1478866657382194s', -delay: '-3.7801743403753405s'}} />
                        <div className="bubble" style={{-size: '2.847031010347872rem', -distance: '7.9071129260649rem', -position: '38.50243897766941%', -time: '3.2487179049281782s', -delay: '-3.3533435685755344s'}} />
                        <div className="bubble" style={{-size: '3.245438332400057rem', -distance: '6.861150662549126rem', -position: '89.26864390150008%', -time: '3.9653692468412314s', -delay: '-3.0692366735824588s'}} />
                        <div className="bubble" style={{-size: '5.1906799068212734rem', -distance: '6.607644740573126rem', -position: '40.51381068098339%', -time: '3.9259251892053038s', -delay: '-3.970798584791129s'}} />
                        <div className="bubble" style={{-size: '3.163155199426467rem', -distance: '6.002520423579487rem', -position: '59.84709082027267%', -time: '3.3734565312583396s', -delay: '-2.806422082820316s'}} />
                        <div className="bubble" style={{-size: '3.059899589285002rem', -distance: '6.546086322739647rem', -position: '91.47248216902494%', -time: '2.2639946674368585s', -delay: '-2.0187398820723943s'}} />
                        <div className="bubble" style={{-size: '2.437679409386985rem', -distance: '9.782642328079449rem', -position: '-2.3581469331981175%', -time: '3.488072226094637s', -delay: '-2.4123882172486666s'}} />
                        <div className="bubble" style={{-size: '4.732290335796977rem', -distance: '7.049447941117755rem', -position: '50.882459654261226%', -time: '3.972879467185857s', -delay: '-2.9674658825361435s'}} />
                        <div className="bubble" style={{-size: '3.2900027443945534rem', -distance: '6.475597007510755rem', -position: '23.33448715327733%', -time: '3.380251391955404s', -delay: '-2.6915408762622244s'}} />
                        <div className="bubble" style={{-size: '5.827709251674568rem', -distance: '7.9922417774645504rem', -position: '21.61392312454257%', -time: '3.457123511426517s', -delay: '-3.0953257188701158s'}} />
                        <div className="bubble" style={{-size: '3.373812856823416rem', -distance: '9.708731276016614rem', -position: '60.926256824258246%', -time: '2.5483553875484466s', -delay: '-2.689387447552215s'}} />
                        <div className="bubble" style={{-size: '4.221048146784237rem', -distance: '9.5433226616431rem', -position: '7.564260831715801%', -time: '3.5498612463485273s', -delay: '-2.829481766967723s'}} />
                        <div className="bubble" style={{-size: '3.7488459416267306rem', -distance: '9.18781461150705rem', -position: '91.22498671102596%', -time: '2.5501329302855575s', -delay: '-2.763573814151123s'}} />
                        <div className="bubble" style={{-size: '5.584183101930494rem', -distance: '9.233020443862305rem', -position: '5.250845661004215%', -time: '3.877617874558128s', -delay: '-3.9074022953109013s'}} />
                        <div className="bubble" style={{-size: '5.602096503547491rem', -distance: '6.974169338047398rem', -position: '22.522601566811502%', -time: '2.947583205182729s', -delay: '-2.9457600715455925s'}} />
                        <div className="bubble" style={{-size: '2.249082594558634rem', -distance: '8.8670419482802rem', -position: '5.424073827012389%', -time: '3.185741239205259s', -delay: '-2.4438919344286734s'}} />
                        <div className="bubble" style={{-size: '5.114901736945918rem', -distance: '8.669854799906911rem', -position: '28.522262008996286%', -time: '3.756567481942804s', -delay: '-3.834084812638559s'}} />
                        <div className="bubble" style={{-size: '5.67062181419932rem', -distance: '9.3001469729763rem', -position: '-0.03924946453286715%', -time: '3.163420509854504s', -delay: '-3.1990215835129074s'}} />
                        <div className="bubble" style={{-size: '5.229501610879139rem', -distance: '9.72524963624878rem', -position: '74.19727033902868%', -time: '2.3349288673086837s', -delay: '-2.6311685464054477s'}} />
                        <div className="bubble" style={{-size: '3.873751666392379rem', -distance: '6.3959332675969565rem', -position: '50.50894176258265%', -time: '3.1649007921914123s', -delay: '-3.2099489112583637s'}} />
                        <div className="bubble" style={{-size: '2.0683751323133155rem', -distance: '6.089031985125228rem', -position: '11.16294212365478%', -time: '3.081767717697974s', -delay: '-3.456139822986513s'}} />
                        <div className="bubble" style={{-size: '2.666335632447539rem', -distance: '7.749763964177803rem', -position: '5.983117805915672%', -time: '3.5758463738266784s', -delay: '-2.379473418609026s'}} />
                        <div className="bubble" style={{-size: '2.1027379030492126rem', -distance: '8.532254971692739rem', -position: '64.68574558158846%', -time: '3.457805568951363s', -delay: '-3.1901844748177273s'}} />
                        <div className="bubble" style={{-size: '3.0831925414804564rem', -distance: '7.378857383938689rem', -position: '92.15191361515583%', -time: '3.34956791121155s', -delay: '-3.1169847849471233s'}} />
                        <div className="bubble" style={{-size: '2.3867636817108986rem', -distance: '6.840552635390442rem', -position: '89.62195201605353%', -time: '2.4217211865146426s', -delay: '-2.040750724248389s'}} />
                        <div className="bubble" style={{-size: '4.9572971119334595rem', -distance: '9.420720760930637rem', -position: '-4.821847863535753%', -time: '3.326190024994763s', -delay: '-2.148601705847085s'}} />
                        <div className="bubble" style={{-size: '5.4519044871677975rem', -distance: '9.614254550360446rem', -position: '33.425748641051925%', -time: '2.0649329930794376s', -delay: '-3.463914850971419s'}} />
                        <div className="bubble" style={{-size: '5.75096619712518rem', -distance: '9.569933740594635rem', -position: '-3.4229480916731836%', -time: '3.72702174900452s', -delay: '-3.853781748491419s'}} />
                        <div className="bubble" style={{-size: '2.829000006036779rem', -distance: '7.441096552621709rem', -position: '22.290012509740393%', -time: '3.8414379433234753s', -delay: '-2.885123883828993s'}} />
                        <div className="bubble" style={{-size: '2.501144280522177rem', -distance: '9.260019067653435rem', -position: '26.54361961700285%', -time: '3.761681192276945s', -delay: '-3.188391491809793s'}} />
                        <div className="bubble" style={{-size: '2.440162847345584rem', -distance: '8.029623042468664rem', -position: '93.15085676496227%', -time: '2.0195044055218827s', -delay: '-2.4389342947321855s'}} />
                        <div className="bubble" style={{-size: '3.6055642898458276rem', -distance: '6.928812216260912rem', -position: '20.87995671185667%', -time: '2.089016448879217s', -delay: '-3.894108955908805s'}} />
                        <div className="bubble" style={{-size: '5.628655465649587rem', -distance: '6.550299751469446rem', -position: '18.212159719784424%', -time: '3.1111065400974973s', -delay: '-2.4827839191652568s'}} />
                        <div className="bubble" style={{-size: '2.1925753348050048rem', -distance: '9.091608979302956rem', -position: '60.88020619713107%', -time: '3.315076102366543s', -delay: '-2.9404519287889093s'}} />
                        <div className="bubble" style={{-size: '5.875126913587768rem', -distance: '6.862655981146862rem', -position: '84.92365039358533%', -time: '3.307026447029654s', -delay: '-3.2333807757425497s'}} />
                        <div className="bubble" style={{-size: '4.986607323802707rem', -distance: '8.764132771847603rem', -position: '76.60069186172973%', -time: '2.2531826919001317s', -delay: '-2.0806538088470012s'}} />
                        <div className="bubble" style={{-size: '4.749274026243068rem', -distance: '6.853932654486981rem', -position: '96.82064062945103%', -time: '3.2227574054378794s', -delay: '-2.4740091085909466s'}} />
                        <div className="bubble" style={{-size: '2.5904715170990187rem', -distance: '9.739765625899985rem', -position: '31.37373423326929%', -time: '3.3128631300829325s', -delay: '-2.14288781481245s'}} />
                        <div className="bubble" style={{-size: '4.3145433336095635rem', -distance: '9.960644291844886rem', -position: '77.3889032763694%', -time: '2.4313913490078685s', -delay: '-2.7893879241345156s'}} />
                        <div className="bubble" style={{-size: '3.0587277747646926rem', -distance: '8.94821100385132rem', -position: '41.86226283310789%', -time: '2.293375481087099s', -delay: '-3.8355986200849337s'}} />
                        <div className="bubble" style={{-size: '2.681614825314764rem', -distance: '6.952642436277579rem', -position: '101.81541002989387%', -time: '2.8956572327669683s', -delay: '-2.912365435602372s'}} />
                        <div className="bubble" style={{-size: '2.049679765953945rem', -distance: '7.582995449501144rem', -position: '8.393554939726563%', -time: '2.0808132740067578s', -delay: '-2.752562870388889s'}} />
                        <div className="bubble" style={{-size: '2.3690268948411104rem', -distance: '6.896783021577204rem', -position: '-2.6888276654135446%', -time: '2.346733108533256s', -delay: '-2.109681642654958s'}} />
                        <div className="bubble" style={{-size: '3.767984545421938rem', -distance: '8.799869440711205rem', -position: '52.065776639270226%', -time: '2.0611930342091775s', -delay: '-3.647489385662137s'}} />
                        <div className="bubble" style={{-size: '2.0718893141928953rem', -distance: '6.758582068532972rem', -position: '65.77619220587565%', -time: '2.1968723656933626s', -delay: '-3.40267707226492s'}} />
                        <div className="bubble" style={{-size: '2.1133898160797786rem', -distance: '9.116037107351751rem', -position: '44.71738900775312%', -time: '3.3163147239421815s', -delay: '-2.2183803918095615s'}} />
                        <div className="bubble" style={{-size: '5.134943714687794rem', -distance: '7.311565161928681rem', -position: '65.37486366285594%', -time: '2.26982923102703s', -delay: '-3.872014148974751s'}} />
                        <div className="bubble" style={{-size: '2.424989145514939rem', -distance: '9.7204771539044rem', -position: '71.68099530446888%', -time: '2.87351303142351s', -delay: '-3.8937979190303116s'}} />
                        <div className="bubble" style={{-size: '2.634677747661036rem', -distance: '8.112659629061767rem', -position: '63.75386914365694%', -time: '3.60843823369488s', -delay: '-2.5872602823962616s'}} />
                        <div className="bubble" style={{-size: '3.218058487858726rem', -distance: '6.485419321448164rem', -position: '2.8990254077283906%', -time: '2.1348924899618025s', -delay: '-3.7630791389770324s'}} />
                        <div className="bubble" style={{-size: '3.3174260346602003rem', -distance: '6.791269077630983rem', -position: '36.795528329132125%', -time: '2.849584400065006s', -delay: '-3.0762459078987603s'}} />
                        <div className="bubble" style={{-size: '4.650217702668881rem', -distance: '8.523610718759244rem', -position: '94.67594660316303%', -time: '2.3314443641253964s', -delay: '-2.39036178252309s'}} />
                        <div className="bubble" style={{-size: '5.582506654524852rem', -distance: '7.544335228206337rem', -position: '21.39466051410111%', -time: '2.1036270437493756s', -delay: '-3.1457916819764264s'}} />
                        <div className="bubble" style={{-size: '4.069219640490587rem', -distance: '9.377772239809634rem', -position: '23.151810502413248%', -time: '2.116313598388562s', -delay: '-3.101494971294942s'}} />
                        <div className="bubble" style={{-size: '5.26712146964795rem', -distance: '6.457610727608806rem', -position: '6.841987700044134%', -time: '3.9808666662258037s', -delay: '-2.334727239657027s'}} />
                        <div className="bubble" style={{-size: '2.1439718574101914rem', -distance: '9.381213656709352rem', -position: '77.61205164604124%', -time: '2.979371403791578s', -delay: '-3.640524250346582s'}} />
                        <div className="bubble" style={{-size: '4.301256298838042rem', -distance: '8.26190749270826rem', -position: '99.36681553454649%', -time: '3.5341364503780444s', -delay: '-2.6226531202494128s'}} />
                        <div className="bubble" style={{-size: '5.482900777904915rem', -distance: '6.60335479637313rem', -position: '29.54355028138344%', -time: '2.091989872276367s', -delay: '-3.951440485583038s'}} />
                        <div className="bubble" style={{-size: '5.3872128329748765rem', -distance: '7.522096753897504rem', -position: '23.30142817211374%', -time: '2.4554205192120127s', -delay: '-3.2244024045623374s'}} />
                        <div className="bubble" style={{-size: '3.4445652859402944rem', -distance: '8.33547465074653rem', -position: '63.03096503389642%', -time: '2.4067538373472215s', -delay: '-3.4039314035009878s'}} />
                        <div className="bubble" style={{-size: '3.45157425712614rem', -distance: '6.136178925442492rem', -position: '55.26070630548848%', -time: '2.364112773977031s', -delay: '-2.7509419347462685s'}} />
                        <div className="bubble" style={{-size: '4.4974264228953915rem', -distance: '9.70022109729404rem', -position: '101.04055613180925%', -time: '2.8394504649712213s', -delay: '-3.9306429425672316s'}} />
                        <div className="bubble" style={{-size: '3.612753859453954rem', -distance: '7.550533270606672rem', -position: '76.00069276105374%', -time: '3.8893979028178935s', -delay: '-2.915419869565707s'}} />
                        <div className="bubble" style={{-size: '5.7471434681993rem', -distance: '8.325130489101582rem', -position: '39.615406080710386%', -time: '3.029184207930645s', -delay: '-3.02534938346742s'}} />
                        <div className="bubble" style={{-size: '3.5303927759922376rem', -distance: '6.840805454186077rem', -position: '57.05871037945456%', -time: '3.9603868418456103s', -delay: '-2.9358184610330857s'}} />
                        <div className="bubble" style={{-size: '4.226351267380722rem', -distance: '8.786635063444303rem', -position: '5.364468761287187%', -time: '2.4189313946738302s', -delay: '-2.1299055191987826s'}} />
                        <div className="bubble" style={{-size: '3.600982791348751rem', -distance: '6.940400263247315rem', -position: '72.85056744711994%', -time: '2.6609706558251154s', -delay: '-2.965136194829847s'}} />
                        <div className="bubble" style={{-size: '2.3580924160328722rem', -distance: '7.414815053220411rem', -position: '31.33429654896718%', -time: '2.434491926449215s', -delay: '-2.485149470199523s'}} />
                        <div className="bubble" style={{-size: '4.869088527012976rem', -distance: '7.259654926312083rem', -position: '3.587324055307416%', -time: '3.7091874123016573s', -delay: '-3.2145901492816735s'}} />
                        <div className="bubble" style={{-size: '5.153229014014598rem', -distance: '6.687183606000194rem', -position: '97.33774724102332%', -time: '2.212464778575871s', -delay: '-3.003108372436426s'}} />
                        <div className="bubble" style={{-size: '5.59413217999003rem', -distance: '6.836877979198213rem', -position: '81.1029746529344%', -time: '2.2534887470531246s', -delay: '-3.0477865767222356s'}} />
                        <div className="bubble" style={{-size: '2.080186671214369rem', -distance: '7.910451876876776rem', -position: '91.86121915647799%', -time: '3.851353518496062s', -delay: '-2.8078833622776065s'}} />
                        <div className="bubble" style={{-size: '4.559742525707683rem', -distance: '8.723608216194865rem', -position: '45.14712596685827%', -time: '2.3435573438287722s', -delay: '-2.7659514521057638s'}} />
                        <div className="bubble" style={{-size: '5.2782805417400676rem', -distance: '8.545811208278813rem', -position: '16.61704279374431%', -time: '3.1535899667397724s', -delay: '-3.9776225954017392s'}} />
                        <div className="bubble" style={{-size: '5.756594953871654rem', -distance: '8.889973025273504rem', -position: '52.29431729726018%', -time: '2.531663531139812s', -delay: '-3.5184319047293657s'}} />
                        <div className="bubble" style={{-size: '4.43470102085899rem', -distance: '8.358486085145081rem', -position: '-0.5643888474725127%', -time: '3.4590173125129344s', -delay: '-2.0174245114069898s'}} />
                        <div className="bubble" style={{-size: '4.4348436057318015rem', -distance: '8.978142811852358rem', -position: '27.66202512380626%', -time: '2.6980653039852855s', -delay: '-3.199664939262182s'}} />
                        <div className="bubble" style={{-size: '4.255352647069008rem', -distance: '9.584364855189602rem', -position: '69.53343068680869%', -time: '2.003848143320949s', -delay: '-2.1900550623845274s'}} />
                        <div className="bubble" style={{-size: '2.5741769011582836rem', -distance: '8.929406418636585rem', -position: '18.7810900747349%', -time: '2.6522085362554146s', -delay: '-2.6617341493847637s'}} />
                        <div className="bubble" style={{-size: '2.89019739477113rem', -distance: '7.567273631730419rem', -position: '57.20771406241714%', -time: '2.6048771682141107s', -delay: '-2.3220031155421985s'}} />
                        <div className="bubble" style={{-size: '3.5101351830945955rem', -distance: '8.011133568646262rem', -position: '88.61368236979453%', -time: '2.712097885367589s', -delay: '-3.436340381511676s'}} />
                        <div className="bubble" style={{-size: '3.474135254773823rem', -distance: '8.301721324774267rem', -position: '99.92302114798903%', -time: '2.367489166941789s', -delay: '-2.779086523338919s'}} />
                        <div className="bubble" style={{-size: '5.22163177025438rem', -distance: '7.421217425517266rem', -position: '69.70926815261475%', -time: '3.287849504454904s', -delay: '-3.9285042284721143s'}} />
                        <div className="bubble" style={{-size: '5.333286537481439rem', -distance: '8.318755015583587rem', -position: '74.92597912947608%', -time: '3.9345335606297764s', -delay: '-3.787514367438602s'}} />
                        <div className="bubble" style={{-size: '2.552611440525512rem', -distance: '7.041609535411282rem', -position: '47.5179293091485%', -time: '2.8505950760475365s', -delay: '-2.107553745726134s'}} />
                        <div className="bubble" style={{-size: '4.947500641515708rem', -distance: '8.649319695146207rem', -position: '27.161028532038273%', -time: '3.1985729879094116s', -delay: '-3.7360620624568193s'}} />
                        <div className="bubble" style={{-size: '4.248896972627815rem', -distance: '6.3142057764452995rem', -position: '82.91260094272694%', -time: '2.7997114051825798s', -delay: '-2.546961766459524s'}} />
                        <div className="bubble" style={{-size: '3.628636971855486rem', -distance: '6.518363503895907rem', -position: '8.75354589857759%', -time: '3.6154915838512776s', -delay: '-3.6993964233545915s'}} />
                        <div className="bubble" style={{-size: '5.512996181098786rem', -distance: '8.806333323561034rem', -position: '45.211729646683196%', -time: '2.0511147396583365s', -delay: '-2.5667350840346694s'}} />
                        <div className="bubble" style={{-size: '2.5244767359766405rem', -distance: '8.618300345797698rem', -position: '20.152115772759043%', -time: '3.2190030685121758s', -delay: '-2.005665218663446s'}} />
                        <div className="bubble" style={{-size: '3.3759940948943514rem', -distance: '6.248418493777085rem', -position: '60.794217456095495%', -time: '3.54139669584718s', -delay: '-3.176811168854594s'}} />
                        <div className="bubble" style={{-size: '5.449182777334612rem', -distance: '9.074974802923425rem', -position: '99.23590790443144%', -time: '3.7260021965048513s', -delay: '-2.080696616482488s'}} />
                        <div className="bubble" style={{-size: '2.885490384086185rem', -distance: '6.519758261247112rem', -position: '2.6818446460235412%', -time: '3.948936411956935s', -delay: '-2.522319952306569s'}} />
                        <div className="bubble" style={{-size: '4.737814464765312rem', -distance: '8.541238932411183rem', -position: '102.64077021787266%', -time: '3.9365710464785764s', -delay: '-3.124073150110252s'}} />
                        <div className="bubble" style={{-size: '5.603827295163036rem', -distance: '9.016635254636752rem', -position: '52.591967522876516%', -time: '2.4110108497718747s', -delay: '-2.867819515525573s'}} />
                        <div className="bubble" style={{-size: '2.773371895705745rem', -distance: '9.23137501001973rem', -position: '3.6110450373659546%', -time: '3.4389873472546997s', -delay: '-3.0514138142393312s'}} />
                        <div className="bubble" style={{-size: '2.4028888483078292rem', -distance: '8.775848476184247rem', -position: '58.37578837636664%', -time: '2.798322265003121s', -delay: '-2.089288233069875s'}} />
                        <div className="bubble" style={{-size: '5.3311456301302265rem', -distance: '8.991716088993579rem', -position: '62.851783800654914%', -time: '3.9535615077429886s', -delay: '-2.6412082220985265s'}} />
                        <div className="bubble" style={{-size: '4.272868740224444rem', -distance: '6.869413354911682rem', -position: '71.80572375993414%', -time: '2.295484215752994s', -delay: '-3.0139150830606662s'}} />
                        <div className="bubble" style={{-size: '2.5353047965884423rem', -distance: '6.23701175429567rem', -position: '80.08784069522584%', -time: '2.3359102940358683s', -delay: '-3.7217588877255707s'}} />
                        <div className="bubble" style={{-size: '2.0843138470708373rem', -distance: '6.262900728418019rem', -position: '8.827015523310724%', -time: '2.0206189624623776s', -delay: '-2.660183301249015s'}} />
                        <div className="bubble" style={{-size: '2.492165702138922rem', -distance: '7.0882592468508845rem', -position: '17.713634643014352%', -time: '3.8205050458059766s', -delay: '-3.916779317440066s'}} />
                        <div className="bubble" style={{-size: '4.824623421954303rem', -distance: '9.3814968694026rem', -position: '-1.5312829673501516%', -time: '2.9719635658613797s', -delay: '-2.5103447932381777s'}} />
                        <div className="bubble" style={{-size: '3.7042390409181136rem', -distance: '9.621606252220129rem', -position: '70.07123895296884%', -time: '2.806235356536221s', -delay: '-2.5684038412500425s'}} />
                        <div className="bubble" style={{-size: '5.774584230741852rem', -distance: '6.734000488491716rem', -position: '15.251369863678022%', -time: '3.294883404298238s', -delay: '-3.3792994563245844s'}} />
                        <div className="bubble" style={{-size: '4.62129626225956rem', -distance: '6.383258372144795rem', -position: '81.77534949910566%', -time: '2.3401923133037816s', -delay: '-2.696155245778461s'}} />
                        <div className="bubble" style={{-size: '4.055176230327965rem', -distance: '6.812724080987042rem', -position: '-3.508384495708403%', -time: '2.067254602795649s', -delay: '-3.9734394470971925s'}} />
                        <div className="bubble" style={{-size: '3.505591668839841rem', -distance: '6.90914375880004rem', -position: '96.9042395100492%', -time: '3.1637793220035504s', -delay: '-3.2359325661572726s'}} />
                        <div className="bubble" style={{-size: '5.078148275190573rem', -distance: '6.372428560444728rem', -position: '35.046913842312065%', -time: '3.783810778248774s', -delay: '-2.648659686004224s'}} />
                        <div className="bubble" style={{-size: '5.538631597854123rem', -distance: '6.9033663434615535rem', -position: '41.1548430861621%', -time: '3.30354522576202s', -delay: '-2.145146577753305s'}} />
                        <div className="bubble" style={{-size: '2.7822945236693917rem', -distance: '7.212932313134221rem', -position: '60.42902108059863%', -time: '2.743442426248987s', -delay: '-2.991233521652845s'}} />
                        <div className="bubble" style={{-size: '3.656774661977864rem', -distance: '6.377845311120426rem', -position: '98.83762079817647%', -time: '3.4232119020806144s', -delay: '-3.8232130248669454s'}} />
                        <div className="bubble" style={{-size: '4.629536135578619rem', -distance: '7.902113066355081rem', -position: '31.324336214331993%', -time: '2.5933147433859634s', -delay: '-2.996633143082344s'}} />
                        <div className="bubble" style={{-size: '3.3459765357288482rem', -distance: '8.018169717138893rem', -position: '-4.63518467661334%', -time: '3.5458689370993928s', -delay: '-3.478978984323893s'}} />
                        <div className="bubble" style={{-size: '4.499284221589727rem', -distance: '8.080360724822498rem', -position: '62.94734562915424%', -time: '3.5283393493372204s', -delay: '-3.6621056881216894s'}} />
                        <div className="bubble" style={{-size: '2.99717090628626rem', -distance: '6.420675691133064rem', -position: '21.00292695216685%', -time: '2.9097817708821205s', -delay: '-3.7496673083026884s'}} />
                        <div className="bubble" style={{-size: '2.8234398946354773rem', -distance: '7.584123399371226rem', -position: '78.69918027038618%', -time: '2.1148807193241983s', -delay: '-3.6420531555220412s'}} />
                        <div className="bubble" style={{-size: '2.1014656329399095rem', -distance: '9.5942822440445rem', -position: '26.707649580659414%', -time: '3.109552653302366s', -delay: '-2.1468722419952466s'}} />
                        <div className="bubble" style={{-size: '5.183114214691532rem', -distance: '9.871674624718986rem', -position: '70.36236681874442%', -time: '2.2105672977411572s', -delay: '-2.5492453462126226s'}} />
                        <div className="bubble" style={{-size: '3.1181021243148477rem', -distance: '8.625552970525645rem', -position: '42.67470546064294%', -time: '3.548684359301194s', -delay: '-2.3219672460058733s'}} />
                        <div className="bubble" style={{-size: '3.4981769042726087rem', -distance: '9.178748007199612rem', -position: '98.19910684693647%', -time: '2.34676387090579s', -delay: '-3.2792459725783116s'}} />
                        <div className="bubble" style={{-size: '4.839119543153725rem', -distance: '6.613143058899418rem', -position: '89.24468180387248%', -time: '3.2535706424297115s', -delay: '-2.098950497377039s'}} />
                        <div className="bubble" style={{-size: '5.364268056226728rem', -distance: '7.4655521031360434rem', -position: '34.556110167932935%', -time: '3.291438017537119s', -delay: '-2.315864280962526s'}} />
                        <div className="bubble" style={{-size: '2.3475297002460493rem', -distance: '7.827668329084507rem', -position: '97.73258697281045%', -time: '3.68011624820407s', -delay: '-3.663874608355206s'}} />
                        <div className="bubble" style={{-size: '4.997696273360701rem', -distance: '9.23434574503444rem', -position: '95.4723221929187%', -time: '3.2555173706233638s', -delay: '-3.4978537474483073s'}} />
                        <div className="bubble" style={{-size: '4.850803690955163rem', -distance: '7.868682619782718rem', -position: '-0.21605764206633626%', -time: '3.842629335242806s', -delay: '-2.3439797880077915s'}} />
                        <div className="bubble" style={{-size: '5.578014439223439rem', -distance: '7.8144530000148755rem', -position: '48.3799900739656%', -time: '3.8388941020449665s', -delay: '-3.282679844140658s'}} />
                        <div className="bubble" style={{-size: '3.7548919899725863rem', -distance: '6.002519049389422rem', -position: '46.92525907856774%', -time: '2.597709943018738s', -delay: '-3.907457157838525s'}} />
                    </div>
                    <div className="content">
                        <div>
                            <div><p>My Little Ponny Game made it by Sandra Lucioni Curay. <br /> TFG for D.A.W. in I.E.S. Francisco de Quevedo 2022</p></div>
                        </div>
                        <div><a className="image" target="_blank" style={{backgroundImage: 'url("../static/img/characters/all.png")'}} />
                            <p>©2022 Madrid</p>
                        </div>
                    </div>
                </div>
                <svg style={{position: 'fixed', top: '100vh'}}>
                    <defs>
                        <filter id="blob">
                            <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob" />
                        </filter>
                    </defs>
                </svg>
            </div>
        );
    }
});
```

footer:

```jsx
var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>footer</title>
        <div className="main" />
        <div className="footer">
          <div className="bubbles">
            <div className="bubble" style={{-size: '3.5537436888393286rem', -distance: '6.4168708016988365rem', -position: '68.24266325825751%', -time: '2.1478866657382194s', -delay: '-3.7801743403753405s'}} />
            <div className="bubble" style={{-size: '2.847031010347872rem', -distance: '7.9071129260649rem', -position: '38.50243897766941%', -time: '3.2487179049281782s', -delay: '-3.3533435685755344s'}} />
            <div className="bubble" style={{-size: '3.245438332400057rem', -distance: '6.861150662549126rem', -position: '89.26864390150008%', -time: '3.9653692468412314s', -delay: '-3.0692366735824588s'}} />
            <div className="bubble" style={{-size: '5.1906799068212734rem', -distance: '6.607644740573126rem', -position: '40.51381068098339%', -time: '3.9259251892053038s', -delay: '-3.970798584791129s'}} />
            <div className="bubble" style={{-size: '3.163155199426467rem', -distance: '6.002520423579487rem', -position: '59.84709082027267%', -time: '3.3734565312583396s', -delay: '-2.806422082820316s'}} />
            <div className="bubble" style={{-size: '3.059899589285002rem', -distance: '6.546086322739647rem', -position: '91.47248216902494%', -time: '2.2639946674368585s', -delay: '-2.0187398820723943s'}} />
            <div className="bubble" style={{-size: '2.437679409386985rem', -distance: '9.782642328079449rem', -position: '-2.3581469331981175%', -time: '3.488072226094637s', -delay: '-2.4123882172486666s'}} />
            <div className="bubble" style={{-size: '4.732290335796977rem', -distance: '7.049447941117755rem', -position: '50.882459654261226%', -time: '3.972879467185857s', -delay: '-2.9674658825361435s'}} />
            <div className="bubble" style={{-size: '3.2900027443945534rem', -distance: '6.475597007510755rem', -position: '23.33448715327733%', -time: '3.380251391955404s', -delay: '-2.6915408762622244s'}} />
            <div className="bubble" style={{-size: '5.827709251674568rem', -distance: '7.9922417774645504rem', -position: '21.61392312454257%', -time: '3.457123511426517s', -delay: '-3.0953257188701158s'}} />
            <div className="bubble" style={{-size: '3.373812856823416rem', -distance: '9.708731276016614rem', -position: '60.926256824258246%', -time: '2.5483553875484466s', -delay: '-2.689387447552215s'}} />
            <div className="bubble" style={{-size: '4.221048146784237rem', -distance: '9.5433226616431rem', -position: '7.564260831715801%', -time: '3.5498612463485273s', -delay: '-2.829481766967723s'}} />
            <div className="bubble" style={{-size: '3.7488459416267306rem', -distance: '9.18781461150705rem', -position: '91.22498671102596%', -time: '2.5501329302855575s', -delay: '-2.763573814151123s'}} />
            <div className="bubble" style={{-size: '5.584183101930494rem', -distance: '9.233020443862305rem', -position: '5.250845661004215%', -time: '3.877617874558128s', -delay: '-3.9074022953109013s'}} />
            <div className="bubble" style={{-size: '5.602096503547491rem', -distance: '6.974169338047398rem', -position: '22.522601566811502%', -time: '2.947583205182729s', -delay: '-2.9457600715455925s'}} />
            <div className="bubble" style={{-size: '2.249082594558634rem', -distance: '8.8670419482802rem', -position: '5.424073827012389%', -time: '3.185741239205259s', -delay: '-2.4438919344286734s'}} />
            <div className="bubble" style={{-size: '5.114901736945918rem', -distance: '8.669854799906911rem', -position: '28.522262008996286%', -time: '3.756567481942804s', -delay: '-3.834084812638559s'}} />
            <div className="bubble" style={{-size: '5.67062181419932rem', -distance: '9.3001469729763rem', -position: '-0.03924946453286715%', -time: '3.163420509854504s', -delay: '-3.1990215835129074s'}} />
            <div className="bubble" style={{-size: '5.229501610879139rem', -distance: '9.72524963624878rem', -position: '74.19727033902868%', -time: '2.3349288673086837s', -delay: '-2.6311685464054477s'}} />
            <div className="bubble" style={{-size: '3.873751666392379rem', -distance: '6.3959332675969565rem', -position: '50.50894176258265%', -time: '3.1649007921914123s', -delay: '-3.2099489112583637s'}} />
            <div className="bubble" style={{-size: '2.0683751323133155rem', -distance: '6.089031985125228rem', -position: '11.16294212365478%', -time: '3.081767717697974s', -delay: '-3.456139822986513s'}} />
            <div className="bubble" style={{-size: '2.666335632447539rem', -distance: '7.749763964177803rem', -position: '5.983117805915672%', -time: '3.5758463738266784s', -delay: '-2.379473418609026s'}} />
            <div className="bubble" style={{-size: '2.1027379030492126rem', -distance: '8.532254971692739rem', -position: '64.68574558158846%', -time: '3.457805568951363s', -delay: '-3.1901844748177273s'}} />
            <div className="bubble" style={{-size: '3.0831925414804564rem', -distance: '7.378857383938689rem', -position: '92.15191361515583%', -time: '3.34956791121155s', -delay: '-3.1169847849471233s'}} />
            <div className="bubble" style={{-size: '2.3867636817108986rem', -distance: '6.840552635390442rem', -position: '89.62195201605353%', -time: '2.4217211865146426s', -delay: '-2.040750724248389s'}} />
            <div className="bubble" style={{-size: '4.9572971119334595rem', -distance: '9.420720760930637rem', -position: '-4.821847863535753%', -time: '3.326190024994763s', -delay: '-2.148601705847085s'}} />
            <div className="bubble" style={{-size: '5.4519044871677975rem', -distance: '9.614254550360446rem', -position: '33.425748641051925%', -time: '2.0649329930794376s', -delay: '-3.463914850971419s'}} />
            <div className="bubble" style={{-size: '5.75096619712518rem', -distance: '9.569933740594635rem', -position: '-3.4229480916731836%', -time: '3.72702174900452s', -delay: '-3.853781748491419s'}} />
            <div className="bubble" style={{-size: '2.829000006036779rem', -distance: '7.441096552621709rem', -position: '22.290012509740393%', -time: '3.8414379433234753s', -delay: '-2.885123883828993s'}} />
            <div className="bubble" style={{-size: '2.501144280522177rem', -distance: '9.260019067653435rem', -position: '26.54361961700285%', -time: '3.761681192276945s', -delay: '-3.188391491809793s'}} />
            <div className="bubble" style={{-size: '2.440162847345584rem', -distance: '8.029623042468664rem', -position: '93.15085676496227%', -time: '2.0195044055218827s', -delay: '-2.4389342947321855s'}} />
            <div className="bubble" style={{-size: '3.6055642898458276rem', -distance: '6.928812216260912rem', -position: '20.87995671185667%', -time: '2.089016448879217s', -delay: '-3.894108955908805s'}} />
            <div className="bubble" style={{-size: '5.628655465649587rem', -distance: '6.550299751469446rem', -position: '18.212159719784424%', -time: '3.1111065400974973s', -delay: '-2.4827839191652568s'}} />
            <div className="bubble" style={{-size: '2.1925753348050048rem', -distance: '9.091608979302956rem', -position: '60.88020619713107%', -time: '3.315076102366543s', -delay: '-2.9404519287889093s'}} />
            <div className="bubble" style={{-size: '5.875126913587768rem', -distance: '6.862655981146862rem', -position: '84.92365039358533%', -time: '3.307026447029654s', -delay: '-3.2333807757425497s'}} />
            <div className="bubble" style={{-size: '4.986607323802707rem', -distance: '8.764132771847603rem', -position: '76.60069186172973%', -time: '2.2531826919001317s', -delay: '-2.0806538088470012s'}} />
            <div className="bubble" style={{-size: '4.749274026243068rem', -distance: '6.853932654486981rem', -position: '96.82064062945103%', -time: '3.2227574054378794s', -delay: '-2.4740091085909466s'}} />
            <div className="bubble" style={{-size: '2.5904715170990187rem', -distance: '9.739765625899985rem', -position: '31.37373423326929%', -time: '3.3128631300829325s', -delay: '-2.14288781481245s'}} />
            <div className="bubble" style={{-size: '4.3145433336095635rem', -distance: '9.960644291844886rem', -position: '77.3889032763694%', -time: '2.4313913490078685s', -delay: '-2.7893879241345156s'}} />
            <div className="bubble" style={{-size: '3.0587277747646926rem', -distance: '8.94821100385132rem', -position: '41.86226283310789%', -time: '2.293375481087099s', -delay: '-3.8355986200849337s'}} />
            <div className="bubble" style={{-size: '2.681614825314764rem', -distance: '6.952642436277579rem', -position: '101.81541002989387%', -time: '2.8956572327669683s', -delay: '-2.912365435602372s'}} />
            <div className="bubble" style={{-size: '2.049679765953945rem', -distance: '7.582995449501144rem', -position: '8.393554939726563%', -time: '2.0808132740067578s', -delay: '-2.752562870388889s'}} />
            <div className="bubble" style={{-size: '2.3690268948411104rem', -distance: '6.896783021577204rem', -position: '-2.6888276654135446%', -time: '2.346733108533256s', -delay: '-2.109681642654958s'}} />
            <div className="bubble" style={{-size: '3.767984545421938rem', -distance: '8.799869440711205rem', -position: '52.065776639270226%', -time: '2.0611930342091775s', -delay: '-3.647489385662137s'}} />
            <div className="bubble" style={{-size: '2.0718893141928953rem', -distance: '6.758582068532972rem', -position: '65.77619220587565%', -time: '2.1968723656933626s', -delay: '-3.40267707226492s'}} />
            <div className="bubble" style={{-size: '2.1133898160797786rem', -distance: '9.116037107351751rem', -position: '44.71738900775312%', -time: '3.3163147239421815s', -delay: '-2.2183803918095615s'}} />
            <div className="bubble" style={{-size: '5.134943714687794rem', -distance: '7.311565161928681rem', -position: '65.37486366285594%', -time: '2.26982923102703s', -delay: '-3.872014148974751s'}} />
            <div className="bubble" style={{-size: '2.424989145514939rem', -distance: '9.7204771539044rem', -position: '71.68099530446888%', -time: '2.87351303142351s', -delay: '-3.8937979190303116s'}} />
            <div className="bubble" style={{-size: '2.634677747661036rem', -distance: '8.112659629061767rem', -position: '63.75386914365694%', -time: '3.60843823369488s', -delay: '-2.5872602823962616s'}} />
            <div className="bubble" style={{-size: '3.218058487858726rem', -distance: '6.485419321448164rem', -position: '2.8990254077283906%', -time: '2.1348924899618025s', -delay: '-3.7630791389770324s'}} />
            <div className="bubble" style={{-size: '3.3174260346602003rem', -distance: '6.791269077630983rem', -position: '36.795528329132125%', -time: '2.849584400065006s', -delay: '-3.0762459078987603s'}} />
            <div className="bubble" style={{-size: '4.650217702668881rem', -distance: '8.523610718759244rem', -position: '94.67594660316303%', -time: '2.3314443641253964s', -delay: '-2.39036178252309s'}} />
            <div className="bubble" style={{-size: '5.582506654524852rem', -distance: '7.544335228206337rem', -position: '21.39466051410111%', -time: '2.1036270437493756s', -delay: '-3.1457916819764264s'}} />
            <div className="bubble" style={{-size: '4.069219640490587rem', -distance: '9.377772239809634rem', -position: '23.151810502413248%', -time: '2.116313598388562s', -delay: '-3.101494971294942s'}} />
            <div className="bubble" style={{-size: '5.26712146964795rem', -distance: '6.457610727608806rem', -position: '6.841987700044134%', -time: '3.9808666662258037s', -delay: '-2.334727239657027s'}} />
            <div className="bubble" style={{-size: '2.1439718574101914rem', -distance: '9.381213656709352rem', -position: '77.61205164604124%', -time: '2.979371403791578s', -delay: '-3.640524250346582s'}} />
            <div className="bubble" style={{-size: '4.301256298838042rem', -distance: '8.26190749270826rem', -position: '99.36681553454649%', -time: '3.5341364503780444s', -delay: '-2.6226531202494128s'}} />
            <div className="bubble" style={{-size: '5.482900777904915rem', -distance: '6.60335479637313rem', -position: '29.54355028138344%', -time: '2.091989872276367s', -delay: '-3.951440485583038s'}} />
            <div className="bubble" style={{-size: '5.3872128329748765rem', -distance: '7.522096753897504rem', -position: '23.30142817211374%', -time: '2.4554205192120127s', -delay: '-3.2244024045623374s'}} />
            <div className="bubble" style={{-size: '3.4445652859402944rem', -distance: '8.33547465074653rem', -position: '63.03096503389642%', -time: '2.4067538373472215s', -delay: '-3.4039314035009878s'}} />
            <div className="bubble" style={{-size: '3.45157425712614rem', -distance: '6.136178925442492rem', -position: '55.26070630548848%', -time: '2.364112773977031s', -delay: '-2.7509419347462685s'}} />
            <div className="bubble" style={{-size: '4.4974264228953915rem', -distance: '9.70022109729404rem', -position: '101.04055613180925%', -time: '2.8394504649712213s', -delay: '-3.9306429425672316s'}} />
            <div className="bubble" style={{-size: '3.612753859453954rem', -distance: '7.550533270606672rem', -position: '76.00069276105374%', -time: '3.8893979028178935s', -delay: '-2.915419869565707s'}} />
            <div className="bubble" style={{-size: '5.7471434681993rem', -distance: '8.325130489101582rem', -position: '39.615406080710386%', -time: '3.029184207930645s', -delay: '-3.02534938346742s'}} />
            <div className="bubble" style={{-size: '3.5303927759922376rem', -distance: '6.840805454186077rem', -position: '57.05871037945456%', -time: '3.9603868418456103s', -delay: '-2.9358184610330857s'}} />
            <div className="bubble" style={{-size: '4.226351267380722rem', -distance: '8.786635063444303rem', -position: '5.364468761287187%', -time: '2.4189313946738302s', -delay: '-2.1299055191987826s'}} />
            <div className="bubble" style={{-size: '3.600982791348751rem', -distance: '6.940400263247315rem', -position: '72.85056744711994%', -time: '2.6609706558251154s', -delay: '-2.965136194829847s'}} />
            <div className="bubble" style={{-size: '2.3580924160328722rem', -distance: '7.414815053220411rem', -position: '31.33429654896718%', -time: '2.434491926449215s', -delay: '-2.485149470199523s'}} />
            <div className="bubble" style={{-size: '4.869088527012976rem', -distance: '7.259654926312083rem', -position: '3.587324055307416%', -time: '3.7091874123016573s', -delay: '-3.2145901492816735s'}} />
            <div className="bubble" style={{-size: '5.153229014014598rem', -distance: '6.687183606000194rem', -position: '97.33774724102332%', -time: '2.212464778575871s', -delay: '-3.003108372436426s'}} />
            <div className="bubble" style={{-size: '5.59413217999003rem', -distance: '6.836877979198213rem', -position: '81.1029746529344%', -time: '2.2534887470531246s', -delay: '-3.0477865767222356s'}} />
            <div className="bubble" style={{-size: '2.080186671214369rem', -distance: '7.910451876876776rem', -position: '91.86121915647799%', -time: '3.851353518496062s', -delay: '-2.8078833622776065s'}} />
            <div className="bubble" style={{-size: '4.559742525707683rem', -distance: '8.723608216194865rem', -position: '45.14712596685827%', -time: '2.3435573438287722s', -delay: '-2.7659514521057638s'}} />
            <div className="bubble" style={{-size: '5.2782805417400676rem', -distance: '8.545811208278813rem', -position: '16.61704279374431%', -time: '3.1535899667397724s', -delay: '-3.9776225954017392s'}} />
            <div className="bubble" style={{-size: '5.756594953871654rem', -distance: '8.889973025273504rem', -position: '52.29431729726018%', -time: '2.531663531139812s', -delay: '-3.5184319047293657s'}} />
            <div className="bubble" style={{-size: '4.43470102085899rem', -distance: '8.358486085145081rem', -position: '-0.5643888474725127%', -time: '3.4590173125129344s', -delay: '-2.0174245114069898s'}} />
            <div className="bubble" style={{-size: '4.4348436057318015rem', -distance: '8.978142811852358rem', -position: '27.66202512380626%', -time: '2.6980653039852855s', -delay: '-3.199664939262182s'}} />
            <div className="bubble" style={{-size: '4.255352647069008rem', -distance: '9.584364855189602rem', -position: '69.53343068680869%', -time: '2.003848143320949s', -delay: '-2.1900550623845274s'}} />
            <div className="bubble" style={{-size: '2.5741769011582836rem', -distance: '8.929406418636585rem', -position: '18.7810900747349%', -time: '2.6522085362554146s', -delay: '-2.6617341493847637s'}} />
            <div className="bubble" style={{-size: '2.89019739477113rem', -distance: '7.567273631730419rem', -position: '57.20771406241714%', -time: '2.6048771682141107s', -delay: '-2.3220031155421985s'}} />
            <div className="bubble" style={{-size: '3.5101351830945955rem', -distance: '8.011133568646262rem', -position: '88.61368236979453%', -time: '2.712097885367589s', -delay: '-3.436340381511676s'}} />
            <div className="bubble" style={{-size: '3.474135254773823rem', -distance: '8.301721324774267rem', -position: '99.92302114798903%', -time: '2.367489166941789s', -delay: '-2.779086523338919s'}} />
            <div className="bubble" style={{-size: '5.22163177025438rem', -distance: '7.421217425517266rem', -position: '69.70926815261475%', -time: '3.287849504454904s', -delay: '-3.9285042284721143s'}} />
            <div className="bubble" style={{-size: '5.333286537481439rem', -distance: '8.318755015583587rem', -position: '74.92597912947608%', -time: '3.9345335606297764s', -delay: '-3.787514367438602s'}} />
            <div className="bubble" style={{-size: '2.552611440525512rem', -distance: '7.041609535411282rem', -position: '47.5179293091485%', -time: '2.8505950760475365s', -delay: '-2.107553745726134s'}} />
            <div className="bubble" style={{-size: '4.947500641515708rem', -distance: '8.649319695146207rem', -position: '27.161028532038273%', -time: '3.1985729879094116s', -delay: '-3.7360620624568193s'}} />
            <div className="bubble" style={{-size: '4.248896972627815rem', -distance: '6.3142057764452995rem', -position: '82.91260094272694%', -time: '2.7997114051825798s', -delay: '-2.546961766459524s'}} />
            <div className="bubble" style={{-size: '3.628636971855486rem', -distance: '6.518363503895907rem', -position: '8.75354589857759%', -time: '3.6154915838512776s', -delay: '-3.6993964233545915s'}} />
            <div className="bubble" style={{-size: '5.512996181098786rem', -distance: '8.806333323561034rem', -position: '45.211729646683196%', -time: '2.0511147396583365s', -delay: '-2.5667350840346694s'}} />
            <div className="bubble" style={{-size: '2.5244767359766405rem', -distance: '8.618300345797698rem', -position: '20.152115772759043%', -time: '3.2190030685121758s', -delay: '-2.005665218663446s'}} />
            <div className="bubble" style={{-size: '3.3759940948943514rem', -distance: '6.248418493777085rem', -position: '60.794217456095495%', -time: '3.54139669584718s', -delay: '-3.176811168854594s'}} />
            <div className="bubble" style={{-size: '5.449182777334612rem', -distance: '9.074974802923425rem', -position: '99.23590790443144%', -time: '3.7260021965048513s', -delay: '-2.080696616482488s'}} />
            <div className="bubble" style={{-size: '2.885490384086185rem', -distance: '6.519758261247112rem', -position: '2.6818446460235412%', -time: '3.948936411956935s', -delay: '-2.522319952306569s'}} />
            <div className="bubble" style={{-size: '4.737814464765312rem', -distance: '8.541238932411183rem', -position: '102.64077021787266%', -time: '3.9365710464785764s', -delay: '-3.124073150110252s'}} />
            <div className="bubble" style={{-size: '5.603827295163036rem', -distance: '9.016635254636752rem', -position: '52.591967522876516%', -time: '2.4110108497718747s', -delay: '-2.867819515525573s'}} />
            <div className="bubble" style={{-size: '2.773371895705745rem', -distance: '9.23137501001973rem', -position: '3.6110450373659546%', -time: '3.4389873472546997s', -delay: '-3.0514138142393312s'}} />
            <div className="bubble" style={{-size: '2.4028888483078292rem', -distance: '8.775848476184247rem', -position: '58.37578837636664%', -time: '2.798322265003121s', -delay: '-2.089288233069875s'}} />
            <div className="bubble" style={{-size: '5.3311456301302265rem', -distance: '8.991716088993579rem', -position: '62.851783800654914%', -time: '3.9535615077429886s', -delay: '-2.6412082220985265s'}} />
            <div className="bubble" style={{-size: '4.272868740224444rem', -distance: '6.869413354911682rem', -position: '71.80572375993414%', -time: '2.295484215752994s', -delay: '-3.0139150830606662s'}} />
            <div className="bubble" style={{-size: '2.5353047965884423rem', -distance: '6.23701175429567rem', -position: '80.08784069522584%', -time: '2.3359102940358683s', -delay: '-3.7217588877255707s'}} />
            <div className="bubble" style={{-size: '2.0843138470708373rem', -distance: '6.262900728418019rem', -position: '8.827015523310724%', -time: '2.0206189624623776s', -delay: '-2.660183301249015s'}} />
            <div className="bubble" style={{-size: '2.492165702138922rem', -distance: '7.0882592468508845rem', -position: '17.713634643014352%', -time: '3.8205050458059766s', -delay: '-3.916779317440066s'}} />
            <div className="bubble" style={{-size: '4.824623421954303rem', -distance: '9.3814968694026rem', -position: '-1.5312829673501516%', -time: '2.9719635658613797s', -delay: '-2.5103447932381777s'}} />
            <div className="bubble" style={{-size: '3.7042390409181136rem', -distance: '9.621606252220129rem', -position: '70.07123895296884%', -time: '2.806235356536221s', -delay: '-2.5684038412500425s'}} />
            <div className="bubble" style={{-size: '5.774584230741852rem', -distance: '6.734000488491716rem', -position: '15.251369863678022%', -time: '3.294883404298238s', -delay: '-3.3792994563245844s'}} />
            <div className="bubble" style={{-size: '4.62129626225956rem', -distance: '6.383258372144795rem', -position: '81.77534949910566%', -time: '2.3401923133037816s', -delay: '-2.696155245778461s'}} />
            <div className="bubble" style={{-size: '4.055176230327965rem', -distance: '6.812724080987042rem', -position: '-3.508384495708403%', -time: '2.067254602795649s', -delay: '-3.9734394470971925s'}} />
            <div className="bubble" style={{-size: '3.505591668839841rem', -distance: '6.90914375880004rem', -position: '96.9042395100492%', -time: '3.1637793220035504s', -delay: '-3.2359325661572726s'}} />
            <div className="bubble" style={{-size: '5.078148275190573rem', -distance: '6.372428560444728rem', -position: '35.046913842312065%', -time: '3.783810778248774s', -delay: '-2.648659686004224s'}} />
            <div className="bubble" style={{-size: '5.538631597854123rem', -distance: '6.9033663434615535rem', -position: '41.1548430861621%', -time: '3.30354522576202s', -delay: '-2.145146577753305s'}} />
            <div className="bubble" style={{-size: '2.7822945236693917rem', -distance: '7.212932313134221rem', -position: '60.42902108059863%', -time: '2.743442426248987s', -delay: '-2.991233521652845s'}} />
            <div className="bubble" style={{-size: '3.656774661977864rem', -distance: '6.377845311120426rem', -position: '98.83762079817647%', -time: '3.4232119020806144s', -delay: '-3.8232130248669454s'}} />
            <div className="bubble" style={{-size: '4.629536135578619rem', -distance: '7.902113066355081rem', -position: '31.324336214331993%', -time: '2.5933147433859634s', -delay: '-2.996633143082344s'}} />
            <div className="bubble" style={{-size: '3.3459765357288482rem', -distance: '8.018169717138893rem', -position: '-4.63518467661334%', -time: '3.5458689370993928s', -delay: '-3.478978984323893s'}} />
            <div className="bubble" style={{-size: '4.499284221589727rem', -distance: '8.080360724822498rem', -position: '62.94734562915424%', -time: '3.5283393493372204s', -delay: '-3.6621056881216894s'}} />
            <div className="bubble" style={{-size: '2.99717090628626rem', -distance: '6.420675691133064rem', -position: '21.00292695216685%', -time: '2.9097817708821205s', -delay: '-3.7496673083026884s'}} />
            <div className="bubble" style={{-size: '2.8234398946354773rem', -distance: '7.584123399371226rem', -position: '78.69918027038618%', -time: '2.1148807193241983s', -delay: '-3.6420531555220412s'}} />
            <div className="bubble" style={{-size: '2.1014656329399095rem', -distance: '9.5942822440445rem', -position: '26.707649580659414%', -time: '3.109552653302366s', -delay: '-2.1468722419952466s'}} />
            <div className="bubble" style={{-size: '5.183114214691532rem', -distance: '9.871674624718986rem', -position: '70.36236681874442%', -time: '2.2105672977411572s', -delay: '-2.5492453462126226s'}} />
            <div className="bubble" style={{-size: '3.1181021243148477rem', -distance: '8.625552970525645rem', -position: '42.67470546064294%', -time: '3.548684359301194s', -delay: '-2.3219672460058733s'}} />
            <div className="bubble" style={{-size: '3.4981769042726087rem', -distance: '9.178748007199612rem', -position: '98.19910684693647%', -time: '2.34676387090579s', -delay: '-3.2792459725783116s'}} />
            <div className="bubble" style={{-size: '4.839119543153725rem', -distance: '6.613143058899418rem', -position: '89.24468180387248%', -time: '3.2535706424297115s', -delay: '-2.098950497377039s'}} />
            <div className="bubble" style={{-size: '5.364268056226728rem', -distance: '7.4655521031360434rem', -position: '34.556110167932935%', -time: '3.291438017537119s', -delay: '-2.315864280962526s'}} />
            <div className="bubble" style={{-size: '2.3475297002460493rem', -distance: '7.827668329084507rem', -position: '97.73258697281045%', -time: '3.68011624820407s', -delay: '-3.663874608355206s'}} />
            <div className="bubble" style={{-size: '4.997696273360701rem', -distance: '9.23434574503444rem', -position: '95.4723221929187%', -time: '3.2555173706233638s', -delay: '-3.4978537474483073s'}} />
            <div className="bubble" style={{-size: '4.850803690955163rem', -distance: '7.868682619782718rem', -position: '-0.21605764206633626%', -time: '3.842629335242806s', -delay: '-2.3439797880077915s'}} />
            <div className="bubble" style={{-size: '5.578014439223439rem', -distance: '7.8144530000148755rem', -position: '48.3799900739656%', -time: '3.8388941020449665s', -delay: '-3.282679844140658s'}} />
            <div className="bubble" style={{-size: '3.7548919899725863rem', -distance: '6.002519049389422rem', -position: '46.92525907856774%', -time: '2.597709943018738s', -delay: '-3.907457157838525s'}} />
          </div>
          <div className="content">
            <div>
              <div><b>Eldew</b><a href="#">Secuce</a><a href="#">Drupand</a><a href="#">Oceash</a><a href="#">Ugefe</a><a href="#">Babed</a></div>
              <div><b>Spotha</b><a href="#">Miskasa</a><a href="#">Agithe</a><a href="#">Scesha</a><a href="#">Lulle</a></div>
              <div><b>Chashakib</b><a href="#">Chogauw</a><a href="#">Phachuled</a><a href="#">Tiebeft</a><a href="#">Ocid</a><a href="#">Izom</a><a href="#">Ort</a></div>
              <div><b>Athod</b><a href="#">Pamuz</a><a href="#">Vapert</a><a href="#">Neesk</a><a href="#">Omemanen</a></div>
            </div>
            <div><a className="image" href="https://codepen.io/z-" target="_blank" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")'}} />
              <p>©2019 Not Really</p>
            </div>
          </div>
        </div>
        <svg style={{position: 'fixed', top: '100vh'}}>
          <defs>
            <filter id="blob">
              <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob" />
              {/*feComposite(in="SourceGraphic" in2="blob" operator="atop") //After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect*/}
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
});
```