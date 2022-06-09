import { useState } from "react";
import Card from "./Card";
import { fetchRepos } from "../service/fetchGithub";

function Repos(props){
    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState([]);

    function handleSearchChange(ev){
        setUsername(ev.target.value)
    }

    function handleSubmit(ev){
        ev.preventDefault()
        fetchRepos(username).then(res => setRepos(res))
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input 
                    type="search"
                    onChange={handleSearchChange} 
                    placeholder="search..." 
                />
            </form>

            <ul>
                {repos?.map(repo => {
                    return (
                        <li key={repo.full_name}>
                            <Card repo={repo} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Repos