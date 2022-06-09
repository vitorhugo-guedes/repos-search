

function Card(props){
    const repo = props.repo
    return (
        <div>
            <p>{ repo.full_name }</p>
            <p>{ repo.description }</p>
        </div>
    )
}

export default Card