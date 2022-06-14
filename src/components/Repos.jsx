import { useState } from "react";
import Card from "./Card";
import { fetchRepos } from "../service/fetchGithub";

import './css/repos.css'
import { ImSearch } from "react-icons/im";
import { AiOutlineEnter } from "react-icons/ai"

function Repos(props){
    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState([]);

    function handleSearchChange(ev){
        const value = ev.target.value
        setUsername(value)
    }

    function handleSubmit(ev){
        ev.preventDefault()
        fetchRepos(username).then(res => setRepos(res))
    }


    return (
        <main className="main main--dark">
            <form className="form" action="#" onSubmit={handleSubmit}>
                <ImSearch className="input__search-icon" />
                <input
                    className="form__input form__input--dark"
                    name="searchUser"
                    type="search"
                    onChange={handleSearchChange}
                    placeholder="Search a user"
                    spellCheck="false"
                    autoComplete="off"
                />
                <span className="input__underline"></span>
            </form>

            <ul className="repos-list">
                {!repos.length &&
                    <p className="repo-list__message">
                        Press enter <AiOutlineEnter className="message_enter-icon" /> to search...
                    </p>}
                {repos?.map(repo => {
                    return (
                        <li key={repo.id} className="repos-list__item">
                            <Card  repo={repo} />
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Repos