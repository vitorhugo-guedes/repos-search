
import './css/card.css'
import {IoStarSharp} from 'react-icons/io5'

function Card(props){
    const repo = props.repo
    const createdDate = formattedRepoDate(repo.created_at);
    const hasHomepage = !repo.homepage ? 'btn--disabled' : 'btn--primary';

    function formattedRepoDate(date){
        const newDate = date.substring(0, 10);
        const formatted = newDate.split('-').reverse().join(' ')
        return formatted
    }

    return (
        <div className="card card--dark">

            <section className='card__header'>
                <h4 className='card__title'>
                    {repo.name}
                </h4>

                <p className='card__creation-date'>
                    {createdDate}
                </p>
            </section>

            <section className='card__body'>
                
                <p className='card__descrip'>
                    {!repo.description && <span>No description</span>}
                    {repo.description}
                </p>
                
                <div className='card__topics'>
                    {!repo.topics.length && <span>No topics</span>}
                    {repo.topics.map(topic => {
                        return (
                            <span key={topic} className='topics__item'>{topic}</span>
                        )
                    })}
                </div>
            </section>

            <section className='card__footer'>

                <div className="card__stars">
                    <p><IoStarSharp className='stars__icon' /> { repo.stargazers_count }</p>
                </div>

                <div className="card__buttons">
                    <a 
                        target="_blank" 
                        href={repo.homepage} 
                        className={`btn ${hasHomepage}`}
                    >
                        Homepage
                    </a>
                    <a 
                        target="_blank" 
                        href={repo.html_url} 
                        className='btn btn--primary'
                    >
                        Repository
                    </a>
                </div>

            </section>

        </div>
    )
}

export default Card