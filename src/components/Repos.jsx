import { useState } from "react";
import Card from "./Card";
import { fetchRepos } from "../service/fetchGithub";
import { isStrEmpty } from "../js/module.js";

import './css/repos.css'
import { ImSearch } from "react-icons/im";
import { AiOutlineEnter } from "react-icons/ai"

function Repos(props){
    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState([]);

    function handleSearchChange(ev){
        const value = ev.target.value
        const user = value.toLowerCase().trim()
        setUsername(user)
    }
    
    function handleSubmit(ev){
        ev.preventDefault();

        if(isStrEmpty(username)){
            return
        }

        fetchRepos(username)
            .then(res =>setRepos(res))
            .catch(e => console.error(e))
    }

    // const repos = [
    //     {
    //         id: 1,
    //         name: 'Aleatorioaleatorioaleatorio',
    //         description: 'LoremipsumdolorsitametconsecteturadipiscingelitVivamusquamarcu, pellentesque',
    //         topics: ['um', 'dois', 'javascript', 'java', 'pythonfrontendbackenddevlopment'],
    //         homepage: '',
    //         html_url: '',
    //         stargazers_count: 0,
    //         created_at: '2051-20-89T'
    //     }
    // ]

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
                        placeholder="Search a user"
                        spellCheck="false"
                        autoComplete="off"
                    />
                    <span className="input__underline"></span>
                </form>
                {!repos.length &&
                    <p className="search-section__message">
                        Press enter <AiOutlineEnter className="message__icon" /> to search...
                    </p>
                }
            </section>

            <ul className="repos-list">
                {repos.length > 0 && repos.map(repo => {
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