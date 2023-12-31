import '../../../style/menu/navList.css';
import MenuListSvg from "../svg/MenuListSvg";
import { useNavigate } from 'react-router-dom';
const CONFIG = require('../../../config/roots.json');

function NavList(){

    const navigate = useNavigate();

    const logout = () => {
        fetch(CONFIG.url + '/login/logout', {
            method: "GET",
            mode: 'cors',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                let responseCopy = response;
                if (responseCopy.ok === true) {
                    navigate('/');
                }
            })
            .catch(function (error) { console.error(error) });
    };

    return(
        <ul className="menu-list">
            <li className="menu-item context-buttons">

                <button title="Salir" className="context-button" onClick ={ () => logout()}>
                    <MenuListSvg className="bi bi-box-arrow-right"
                        vectors={[
                            {
                                fillRule: "evenodd",
                                vector: "M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                            },
                            {
                                fillRule: "evenodd",
                                vector: "M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                            }
                        ]}
                    />
                </button>

                <button title="Selector de historias" className="context-button" onClick ={ () => navigate('/selectGame#carousel__slide0')}>
                    <MenuListSvg className="bi bi-book"
                        vectors={[
                            {
                                fillRule: "evenodd",
                                vector: "M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                            }
                        ]}
                    />
                </button>

                <button title="Tu historia" className="context-button" onClick ={ () => navigate('/historyResume')}>
                    <MenuListSvg className="bi bi-file-text"
                        vectors={[
                            {
                                fillRule: "evenodd",
                                vector: "M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"
                            },
                            {
                                fillRule: "evenodd",
                                vector: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
                            }
                        ]}
                    />
                </button>
            </li>
        </ul>
    );
}

export default NavList;