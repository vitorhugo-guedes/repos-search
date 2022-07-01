
import Card from '../Card/Card'

import './repos-list.css'

function ReposList(props){
    const repositories = props.repos

    return (
        <ul className="repos-list">
                {repositories?.length > 0 && repositories.map(repo => {
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
    )
}


export default ReposList