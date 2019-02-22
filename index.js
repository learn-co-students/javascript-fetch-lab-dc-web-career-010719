const baseURL = 'https://api.github.com'

function getIssues() {
  // GET /issues
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/issues`
  fetch(`${url}`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => showResults(json))

}

function showIssues(json) {
  debugger
  let message = document.createElement('h3')
  message.innerText = 'Showing issues...!'
  document.getElementById('issues').appendChild(message)
}

function createIssue() {
  console.log("Inside createIssue function")
  // POST /repos/:owner/:repo/issues
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/issues`



}

function showResults(json) {
  // debugger
  let message = document.createElement('h3')
  message.innerText = 'Forked Successfully!'
  document.getElementById('results').appendChild(message)
  let link = document.createElement('a')
  document.getElementById('results').appendChild(link)
  link.outerHTML = '<a href=https://github.com/PhilH725/javascript-fetch-lab>Go To Fork</a>'
}

function forkRepo() {
  console.log("Inside forkRepo function")
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`
  // let url = `${baseURL}/repos/learn-co-students/javascript-fetch-lab-dc-web-career-010719/forks`
  //use fetch to fork it!
  fetch(`${url}`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => showResults(json))

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
