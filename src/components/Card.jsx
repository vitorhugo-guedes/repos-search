
import './css/card.css'

function Card(props){
    const repo = props.repo
    return (
        <div className="card card--blue">

            <div className='card__header'>
                <h4 className='card__title'>
                    {repo.name}
                </h4>
                <p className='card__descrip'>
                    {repo.description}
                </p>
            </div>

            <div className='card__body'>
                <p className='card__creation-date'>
                    criado em: {repo.created_at}
                </p>
                <span className='card__topics'>
                    topics: {repo.topics.map(topic => {
                        return (
                            <p className='topics__item'>{topic}</p>
                        )
                    })}
                </span>
            </div>

            <div className='card__footer'>
                <p>Stars: { repo.stargazers_count }</p>
                <div className="card__buttons">
                    <button className='btn btn-primary'>Homepage</button>
                    <button className='btn btn-primary'>Repository</button>
                </div>
            </div>
        </div>
    )
}

export default Card