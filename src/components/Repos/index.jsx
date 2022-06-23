import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useLocalStorage } from '../../hooks/useLocalStorage'
import createID from "../../modules/createID";

import Card from "../Card";
import LastSearch from "../LastSearch";

import './repos.css'
import { ImSearch } from "react-icons/im";
import { AiOutlineEnter } from "react-icons/ai"

function Repos(props){
    const [username, setUsername] = useState('');
    const [url, setUrl] = useState(null);
    const { data, error } = useFetch({ url });
    const [lastUsernames, setLastUsernames] = useLocalStorage('lastUsernames', [])

    function handleSearchChange(ev){
        const value = ev.target.value
        const user = value.toLowerCase().trim()
        setUsername(user);
    }
    
    function handleSubmit(ev){
        ev.preventDefault();
        setUrl(`https://api.github.com/users/${username}/repos`);
        setLastUsernames(prev => [...prev, { 'id': createID(), 'user': username}]);
    }

    function deleteLastSearch(user){
        let newUsernameList = lastUsernames.filter(item => item.id !== user.id)
        setLastUsernames([...newUsernameList])
    }

    function setInputValue(data){
        setUsername(data)
    }

    return (
        <main className="main main--dark">

            <section className="search-section">

                <form className="form" action="#" onSubmit={handleSubmit}>
                    <ImSearch className="input__search-icon" />
                    <input
                        type="search"
                        value={username}
                        onChange={handleSearchChange}
                        className="form__input form__input--dark"
                        placeholder="Search a github username"
                    />
                    <span className="input__underline"></span>
                </form>

                {!data?.length &&
                    <p className="search-section__message">
                        Press enter <AiOutlineEnter className="message__icon" /> to search...
                    </p>
                }

                <LastSearch 
                    data={lastUsernames} 
                    onDelete={deleteLastSearch} 
                    onInput={setInputValue}
                />

                {error?.status == 404 && 
                    <p className="search-section__message">
                        User not found. Search a valid username.
                    </p>
                }
            </section>

            <section>
            </section>

            <ul className="repos-list">
                {data?.length > 0 && data.map(repo => {
                    return (
                        <li 
                            key={repo.id} 
                            className="repos-list__item"
                        >
                            <Card  repo={repo} />
                        </li>
                    )
                })}
            </ul>

        </main>
    )
}

export default Repos