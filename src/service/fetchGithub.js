
export const fetchRepos = async user => {
    if(user === undefined || '' || null) return
    
    const url = `https://api.github.com/users/${user}/repos`

    const data = await fetch(url)
        .then(response => response.json())
        .then(data => {
            return data
        })

    return data
 }