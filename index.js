const baseURL = 'https://api.github.com'

function getIssues() {
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
for (i=0; i<json.length; i++){

  issueList.innerHTML += `<li>Title: <a href=${json[i].url}>${json[i].title} </a><span> | Body: ${json[i].body}</span></li>`
}
}

function createIssue() {

  let issueTitle = document.getElementById("title").value
  let issueContent = document.getElementById("body").value
  const postData = {
    title: issueTitle,
    body: issueContent
  }

  console.log("Inside createIssue function")
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/issues`
  fetch(url, {
    method:"POST",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
  }
  })

  .then(getIssues())
}





function makeRepoLinkDiv(url){
  let childAnnouncement = document.createElement('div')
    childAnnouncement.innerHTML =  `<h3>Forked Successfully!</h3><a href='${url}'>Go To Fork</a>`
    showResults(childAnnouncement)
}

let resultsDiv = document.getElementById("results")

function showResults(child) {

resultsDiv.appendChild(child)
}

function forkRepo() {
  console.log("Inside forkRepo function")
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`
    fetch(url, {
    method: 'POST',
    headers: {
    Authorization: `token ${getToken()}`
  }
})
.then(res=> res.json())
  .then(json => makeRepoLinkDiv(json.html_url))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return '995457aa5b98a47d1793f939195c8da6334d0330'
}
