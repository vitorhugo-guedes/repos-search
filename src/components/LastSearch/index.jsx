import './lastSearch.css'
import {VscChromeClose} from 'react-icons/vsc'

function LastSearch(props) {
    const usernames = props.data

    function handleClick(e){
        props.onDelete(e)
    }

    function handlePopulateInput(e){
        props.onInput(e)
    }

    return (
        <ul className='user-list'>
            { usernames?.length > 0 && usernames.map( username => {
                return (
                    <li 
                        key={username.id} 
                        className='user-list__item'
                    >
                        <button
                            onClick={()=> handlePopulateInput(username.user)}
                            className="btn btn--user"
                        >
                            { username.user }
                        </button>
                        <button 
                            onClick={() => handleClick(username)} 
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