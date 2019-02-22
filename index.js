const baseURL = 'https://api.github.com'

let forkUrl

function getIssues() {
  // let issueUrl = forkUrl + '/issues'
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/issues`
  fetch(url,{
   headers: {
     Authorization: `token ${getToken()}`
 }
}).then(res=> res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  let issueList = document.getElementById("issues")
  for (let i=0; i<json.length; i++){
   issueList.innerHTML += `<li>Title: <a href=${json[i].url}>${json[i].title}</a><span> | Body: ${json[i].body}</span></li>`
  }
}

function createIssue() {
  let inputTitle = document.querySelector("#title")
  let inputBody = document.querySelector("#body")
  console.log("Inside createIssue function")
  // let issueUrl = forkUrl + '/issues'
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/issues`
  const token = getToken()
  const postData = {"title": inputTitle.value, "body": inputBody.value}
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(getIssues)
}

function showResults(json) {
  forkUrl = json
  let results = document.getElementById('results')
  results.innerHTML = `<h3>Forked Successfully!</h3><a href=${json}>Go To Fork</a>`
}

function forkRepo() {
  console.log("Inside forkRepo function")
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`
  //use fetch to fork it!
  const token = getToken()
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json.html_url))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '9cfaa5d24ef7372a3627c6cbe27d79a0c305f71a'
}
