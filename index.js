const baseURL = 'https://api.github.com'
const repo = 'javascript-fetch-lab-dc-web-career-010719'
const owner = ''

function getIssues() {
  const url = `${baseURL}/repos/${owner}/${repo}/issues`
  fetch(url, {
    method: 'GET',
    headers: {Authorization: `token ${getToken()}`}
  }).then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  const issueList = document.getElementById('issues')
  issueList.innerHTML = ''
  
  console.log(json);
  for (const issue of json) {
    const issueLink = `<a href="${issue.url}">${issue.title}</a>`
    const issueBody = `<span> | Body: ${issue.body}</span>`
    issueList.innerHTML += `<li>Title: ${issueLink} ${issueBody}</li>`
  }
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  if (!title.length)
    return

  const postData = {
    title: title,
    body: body
  }

  const url = `${baseURL}/repos/${owner}/${repo}/issues`
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {Authorization: `token ${getToken()}`}
  }).then(res => getIssues());
  // .then(res => res.json())
  //   .then(json => showIssues(json))
}

function showResults(json) {
  let results = `<h3>Forked Successfully!</h3>`
  results += `<a href="${json.html_url}">Go To Fork</a>`
  document.getElementById('results').innerHTML += results
}

function forkRepo() {
  const url=`${baseURL}/repos/learn-co-students/${repo}/forks`

  fetch(url, {
    method: 'POST',
    headers: {Authorization: `token ${getToken()}`}
  }).then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
