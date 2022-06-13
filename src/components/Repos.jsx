import { useState } from "react";
import Card from "./Card";
import { fetchRepos } from "../service/fetchGithub";

import './css/repos.css'

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

    // Teste
    // const repos = [
    //     {
    //         "id": 482605252,
    //         "node_id": "R_kgDOHMP4xA",
    //         "name": "advice-generator",
    //         "full_name": "vitorhugo-guedes/advice-generator",
    //         "private": false,
    //         "owner": {
    //           "login": "vitorhugo-guedes",
    //           "id": 67174283,
    //           "node_id": "MDQ6VXNlcjY3MTc0Mjgz",
    //           "avatar_url": "https://avatars.githubusercontent.com/u/67174283?v=4",
    //           "gravatar_id": "",
    //           "url": "https://api.github.com/users/vitorhugo-guedes",
    //           "html_url": "https://github.com/vitorhugo-guedes",
    //           "followers_url": "https://api.github.com/users/vitorhugo-guedes/followers",
    //           "following_url": "https://api.github.com/users/vitorhugo-guedes/following{/other_user}",
    //           "gists_url": "https://api.github.com/users/vitorhugo-guedes/gists{/gist_id}",
    //           "starred_url": "https://api.github.com/users/vitorhugo-guedes/starred{/owner}{/repo}",
    //           "subscriptions_url": "https://api.github.com/users/vitorhugo-guedes/subscriptions",
    //           "organizations_url": "https://api.github.com/users/vitorhugo-guedes/orgs",
    //           "repos_url": "https://api.github.com/users/vitorhugo-guedes/repos",
    //           "events_url": "https://api.github.com/users/vitorhugo-guedes/events{/privacy}",
    //           "received_events_url": "https://api.github.com/users/vitorhugo-guedes/received_events",
    //           "type": "User",
    //           "site_admin": false
    //         },
    //         "html_url": "https://github.com/vitorhugo-guedes/advice-generator",
    //         "description": "Advice generator using advice slip api",
    //         "fork": false,
    //         "url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator",
    //         "forks_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/forks",
    //         "keys_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/keys{/key_id}",
    //         "collaborators_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/collaborators{/collaborator}",
    //         "teams_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/teams",
    //         "hooks_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/hooks",
    //         "issue_events_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/issues/events{/number}",
    //         "events_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/events",
    //         "assignees_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/assignees{/user}",
    //         "branches_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/branches{/branch}",
    //         "tags_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/tags",
    //         "blobs_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/git/blobs{/sha}",
    //         "git_tags_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/git/tags{/sha}",
    //         "git_refs_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/git/refs{/sha}",
    //         "trees_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/git/trees{/sha}",
    //         "statuses_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/statuses/{sha}",
    //         "languages_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/languages",
    //         "stargazers_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/stargazers",
    //         "contributors_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/contributors",
    //         "subscribers_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/subscribers",
    //         "subscription_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/subscription",
    //         "commits_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/commits{/sha}",
    //         "git_commits_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/git/commits{/sha}",
    //         "comments_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/comments{/number}",
    //         "issue_comment_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/issues/comments{/number}",
    //         "contents_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/contents/{+path}",
    //         "compare_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/compare/{base}...{head}",
    //         "merges_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/merges",
    //         "archive_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/{archive_format}{/ref}",
    //         "downloads_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/downloads",
    //         "issues_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/issues{/number}",
    //         "pulls_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/pulls{/number}",
    //         "milestones_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/milestones{/number}",
    //         "notifications_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/notifications{?since,all,participating}",
    //         "labels_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/labels{/name}",
    //         "releases_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/releases{/id}",
    //         "deployments_url": "https://api.github.com/repos/vitorhugo-guedes/advice-generator/deployments",
    //         "created_at": "2022-04-17T18:42:36Z",
    //         "updated_at": "2022-05-11T19:05:21Z",
    //         "pushed_at": "2022-04-19T19:12:59Z",
    //         "git_url": "git://github.com/vitorhugo-guedes/advice-generator.git",
    //         "ssh_url": "git@github.com:vitorhugo-guedes/advice-generator.git",
    //         "clone_url": "https://github.com/vitorhugo-guedes/advice-generator.git",
    //         "svn_url": "https://github.com/vitorhugo-guedes/advice-generator",
    //         "homepage": "https://bestadvicegenerator.vercel.app/",
    //         "size": 282,
    //         "stargazers_count": 1,
    //         "watchers_count": 1,
    //         "language": "SCSS",
    //         "has_issues": true,
    //         "has_projects": true,
    //         "has_downloads": true,
    //         "has_wiki": true,
    //         "has_pages": false,
    //         "forks_count": 0,
    //         "mirror_url": null,
    //         "archived": false,
    //         "disabled": false,
    //         "open_issues_count": 0,
    //         "license": null,
    //         "allow_forking": true,
    //         "is_template": false,
    //         "topics": [
    //           "css",
    //           "html5",
    //           "js",
    //           "sass",
    //           "scss"
    //         ],
    //         "visibility": "public",
    //         "forks": 0,
    //         "open_issues": 0,
    //         "watchers": 1,
    //         "default_branch": "main"
    //     }
    // ]

    return (
        <div className="main-content">
            <form action="#" onSubmit={handleSubmit}>
                <input 
                    type="search"
                    onChange={handleSearchChange} 
                    placeholder="search..." 
                />
            </form>

            <ul className="repos-list">
                {/* {repos && <p>Waiting...</p>} */}
                {repos?.map(repo => {
                    return (
                        <li key={repo.id} className="repos-list__item">
                            <Card  repo={repo} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Repos