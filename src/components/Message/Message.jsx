import { AiOutlineEnter } from "react-icons/ai"
import './message.css'

import ErrorMessage from "../ErrorMessage/ErrorMessage"

function Message(props){
    const messageData = props.messageData
    const message = messageData.error ? <ErrorMessage error={messageData.error} /> : defaultMessage()

    function defaultMessage(){
        return (
            <p >
                Press enter <AiOutlineEnter className="message__icon" /> to search...
            </p>
        )
    }

    return message
}

export default Message