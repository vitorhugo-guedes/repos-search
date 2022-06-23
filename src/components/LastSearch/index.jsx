import './lastSearch.css'
import {VscChromeClose} from 'react-icons/vsc'

function LastSearch(props) {
    const lastUsernames = props.data
    return (
        <ul className='user-list'>
            { lastUsernames?.length > 0 && lastUsernames.map( lastUsername => {
                return (
                    <li 
                        key={lastUsername.id} 
                        className='user-list__item'
                    >
                        <button className="btn btn--user">
                            { lastUsername.user }
                        </button>
                        <button 
                            onClick={props.onDelete} 
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