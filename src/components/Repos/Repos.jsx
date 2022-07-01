// Hooks and functions
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import createID from "../../modules/createID";

// Components
import ReposList from "../ReposList/ReposList";
import LastSearch from "../LastSearch/LastSearch";
import Message from "../Message/Message";

// Styles
import './repos.css'
import { ImSearch } from "react-icons/im";

function Repos(props){
    const [username, setUsername] = useState('');
    const [url, setUrl] = useState(null);
    const { data, error } = useFetch({ url });
    const [lastUsernames, setLastUsernames] = useLocalStorage('lastUsernames', [])

    function onChangeInputSearchHandler(ev){
        const value = ev.target.value
        setUsername(value);
    }
    
    function onFormSubmitHandler(ev){
        ev.preventDefault();

        const formattedUsername = username.toLocaleLowerCase().trim();

        setUrl(`https://api.github.com/users/${formattedUsername}/repos`);

        setLastUsernames(prev => {
            if(username == '') return [...prev]

            if(prev.length  > 0){
                const checkedArray = prev.filter( user => user.username !== username)
                return [...checkedArray, { 'id': createID(), 'username': formattedUsername}]
            }else{
                return [...prev, { 'id': createID(), 'username': formattedUsername}]
            }
        });
    }

    function deleteLastSearch(ev, id){
        let newUsernameList = lastUsernames.filter(item => item.id !== id)
        setLastUsernames([...newUsernameList]);
    }

    function setInputSearchValue(ev, value){
        const user = value.toLowerCase().trim();
        setUsername(user)
    }

    return (
        <main className="main main--dark">
            <section className="search-section">

                <form className="form" action="#" onSubmit={onFormSubmitHandler}>
                    <ImSearch className="input__search-icon" />
                    <input
                        type="search"
                        value={username}
                        onChange={onChangeInputSearchHandler}
                        className="form__input form__input--dark"
                        placeholder="Search a github username"
                        autoComplete="off"
                        spellCheck="false"
                    />
                    <span className="input__underline"></span>
                </form>

                <Message messageData={{error}} />
            </section>

            <LastSearch 
                data={lastUsernames} 
                onDelete={deleteLastSearch} 
                onInput={setInputSearchValue}
            />

            <ReposList repos={data} />

        </main>
    )
}

export default Repos