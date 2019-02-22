const baseURL = 'https://api.github.com'
let repo

function getIssues(url) {
  //fetch request to get all issues from the repository
  fetch(url, {
      method: 'GET',
      headers: {Authorization: `token ${getToken()}`}
  }).then(res => res.json()) //parse to JSON
  .then(json => showIssues(json))
    
}

function showIssues(json) {
  //create elements to append list items to the #issues DIV
  let list = document.createElement("ul")
  let issues = document.querySelector("#issues")
  issues.appendChild(list)
  
  //create list item for each issue parsed from the json fetch
  json.forEach(function(e) {
    //create elements
    let li = document.createElement("li")
    let a = document.createElement("a")
    let span = document.createElement("span")
    
    //set attribute and innerText
    a.setAttribute("href", e.html_url)
    a.innerText = e.title
    span.innerText = ` | Body: ${e.body}`
    li.innerText = "Title: "
    
    //append "a" and "span" elements to list item
    li.appendChild(a)
    li.appendChild(span)
    //append list item to unordered list element
    list.appendChild(li)
  })
}

function createIssue() {
  //create variables for url and form submissions
  const url = `${baseURL}/repos/canikwe/javascript-fetch-lab/issues`
  console.log("Inside createIssue function")
  let issueTitle = document.querySelector("#title").value
  let issueText = document.querySelector("#body").value
  
  //create variable for fetch issue post. See link 55
  const postData = {
    "title": issueTitle,
    "body": issueText
  }
  //fetch request to git api
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData), //turns postData object into a string. Telling the computer to interpret this object as a string
    headers: {Authorization: `token ${getToken()}`,
      }
    }).then(res => console.log(res)) //logs response to the console. For my benefit only.
      .then(() => getIssues(url))
  
  //clear form after submission
  document.querySelector("#title").value = ''
  document.querySelector("#body").value = ''
  }


function showResults(json) {
  repo = json.html_url
  let el = document.createElement('p')
  document.querySelector("#results").appendChild(el)
  el.innerHTML = `<h3>Forked Successfully!</h3><a href='${repo}'>Go To Fork</a>`
}

function forkRepo() {
  console.log("Inside forkRepo function")
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`
  //use fetch to fork it!for
  fetch(url, {
  method: 'POST',
  headers: {Authorization: `token ${getToken()}`
  }
}).then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  //token revoked
  
}
