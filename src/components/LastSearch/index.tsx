import './lastSearch.css'
import {VscChromeClose} from 'react-icons/vsc'

function LastSearch(props) {
    let exampleArray = ['user1', 'username2', 'UserUsed']

    return (
        <ul className='user-list'>

            {exampleArray?.map((item) => {
                return (
                    <li className='user-list__item'>
                        <button className="btn btn--user">
                            { item }
                        </button>

                        <button className="btn btn--close">
                            <VscChromeClose className="close-icon" />
                        </button>
                    </li>
                )
            })}

        </ul>
    )
}

export default LastSearch