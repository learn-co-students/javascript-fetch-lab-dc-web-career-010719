const baseURL = 'https://api.github.com'
let jsonUser

function getIssues() {
  fetch(`${baseURL}/repos/${jsonUser}/issues`, {
  headers: {
    Authorization: `token ${getToken()}`
  }
})
  .then(res => res.json())
  .then(json => showIssues(json));
}
function showIssues(json) {
list = document.querySelector('#list')
  for (const key in json){
  li = document.createElement('li')
  li.innerHTML = `Title:<a href="${json[key].html_url}">${json[key].title}</a> | Body:${json[key].title}`
  list.appendChild(li)
  }
}

function createIssue() {
  console.log("Inside createIssue function")
  const postData = {
    body: document.querySelector('input#body').value,
    title: document.querySelector('input#title').value
  }
  fetch(`${baseURL}/repos/${jsonUser}/issues`, {
    method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  },
  body: JSON.stringify(postData)
})
  .then(res => res.json())
  .then(json => getIssues(json));
}

function showResults(json) {
jsonUser = json.full_name
let forkUrl = json.html_url
debugger
results = document.getElementById("results")
results.innerHTML = `<h3>Forked Successfully!</h3><a href="${forkUrl}">Go To Fork</a>`
}

function forkRepo() {
  console.log("Inside forkRepo function")
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`
  fetch(url, {
    method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  }
})
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '1da54ddc697803bb947e6c2f9a45c6a9f5226fff'
}
