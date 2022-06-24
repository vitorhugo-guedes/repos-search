import './lastSearch.css'
import {VscChromeClose} from 'react-icons/vsc'

function LastSearch(props) {
    const users = props.data;

    function onInputPopulateHandler(e, username){
        props.onInput(e, username);
    }
    function onDeleteHandler(e, id){
        props.onDelete(e, id);
    }

    return (
        <ul className='user-list'>
            { users?.length > 0 && users.map( user => {
                return (
                    <li 
                        key={user.id} 
                        className='user-list__item'
                    >
                        <button
                            onClick={ev => onInputPopulateHandler(ev, user.username)}
                            className="btn btn--user"
                        >
                            { user.username }
                        </button>
                        <button 
                            onClick={ev => onDeleteHandler(ev, user.id)} 
                            className="btn btn--close"
                        >
                            <VscChromeClose className="close-icon" />
                        </button>
                    </li>
                )
            })
            }

        </ul>
    )
}

export default LastSearch