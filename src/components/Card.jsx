
import './css/card.css'

function Card(props){
    const repo = props.repo
    const createdDate = formattedRepoDate(repo.created_at)

    function formattedRepoDate(date){
        const newDate = date.substring(0, 10);
        const formatted = newDate.split('-').reverse().join(' ')
        return formatted
    }

    return (
        <div className="card card--blue">

            <section className='card__header'>
                <div className='card__title-wrapper'>
                    <h4 className='card__title'>
                        {repo.name}
                    </h4>
                </div>
                <div className='card__date-wrapper'>
                    <p className='card__creation-date'>
                        {createdDate}
                    </p>
                </div>
            </section>

            <section className='card__body'>
                
                <p className='card__descrip'>
                    {repo.description}
                </p>
                {/* <span className='card__language-wrapper'>
                    <p className='card__language'>
                        {repo.language}
                    </p>
                </span> */}
                <span className='card__topics'>
                    {repo.topics.map(topic => {
                        return (
                            <p key={topic} className='topics__item'>{topic}</p>
                        )
                    })}
                </span>
            </section>

            <section className='card__footer'>

                <div className="card__stars">
                    <p>Stars: { repo.stargazers_count }</p>
                </div>

                <div className="card__buttons">
                    <button className='btn btn-primary'>Homepage</button>
                    <button className='btn btn-primary'>Repository</button>
                </div>

            </section>

        </div>
    )
}

export default Card