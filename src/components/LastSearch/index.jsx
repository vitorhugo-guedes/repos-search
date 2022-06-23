import './lastSearch.css'
import {VscChromeClose} from 'react-icons/vsc'

function LastSearch(props) {
    return (
        <ul className='user-list'>
            { props.data?.length > 0 && props.data.map((item) => {
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