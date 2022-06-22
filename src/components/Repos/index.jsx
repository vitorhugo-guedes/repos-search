import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import Card from "../Card";
import LastSearch from "../LastSearch";

import './repos.css'
import { ImSearch } from "react-icons/im";
import { AiOutlineEnter } from "react-icons/ai"

function Repos(props){
    const [username, setUsername] = useState('');
    const [url, setUrl] = useState(null);
    const { data, error } = useFetch({ 
        url 
    });

    function handleSearchChange(ev){
        const value = ev.target.value
        const user = value.toLowerCase().trim()
        setUsername(user);
    }
    
    function handleSubmit(ev){
        ev.preventDefault();
        setUrl(`https://api.github.com/users/${username}/repos`);
    }

    return (
        <main className="main main--dark">

            <section className="search-section">

                <form className="form" action="#" onSubmit={handleSubmit}>
                    <ImSearch className="input__search-icon" />
                    <input
                        className="form__input form__input--dark"
                        name="searchUser"
                        type="search"
                        onChange={handleSearchChange}
                        placeholder="Search a github username"
                        spellCheck="false"
                        autoComplete="off"
                    />
                    <span className="input__underline"></span>
                </form>

                {!data?.length &&
                    <p className="search-section__message">
                        Press enter <AiOutlineEnter className="message__icon" /> to search...
                    </p>
                }
                <LastSearch />
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