const baseURL = 'https://api.github.com'
let jsonUser

function getIssues() {
  fetch(`${baseURL}/repos/${jsonUser}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  issueList = document.querySelector('#issueList')
  for (const key in json) {
    li = document.createElement('li')
    li.innerHTML = `Title: <a href="${json[key].html_url}">${json[key].title}</a> | Body: ${json[key].body}`
    issueList.appendChild(li)
  }
}

function createIssue() {
  const postData = {
    title: document.querySelector('input#title').value,
    body: document.querySelector('input#body').value
  }
  fetch(`${baseURL}/repos/${jsonUser}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(json => getIssues(json));
}

function showResults(json) {
  jsonUser = json.full_name
  results = document.getElementById('results')
  results.innerHTML = `<h3>Forked Successfully!</h3><a href="${json.html_url}">Go To Fork</a>`
}

function forkRepo() {
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`
  fetch(url, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  return ''
}
