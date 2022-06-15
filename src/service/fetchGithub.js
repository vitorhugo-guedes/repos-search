
export const fetchRepos = async user => {
    const url = `https://api.github.com/users/${user}/repos`

    const data = await fetch(url)
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(e => {
            console.error(e)
        })
    return data
    
 }