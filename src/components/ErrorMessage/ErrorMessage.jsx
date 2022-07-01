import './errorMessage.css'

function ErrorMessage(props){
    const error = props.error;

    function errorNotFound(){
        return (
            <p className='message-error'>
                User not found, search a valid username.
            </p>
        )
    }

    return (
        <>
            {error?.status && error.status == 404 && errorNotFound()}
        </>
    )
}

export default ErrorMessage