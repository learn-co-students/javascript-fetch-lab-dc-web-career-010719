const baseURL = 'https://api.github.com'
const owner = "mkay0961"
function getIssues() {
  const url = `${baseURL}/repos/${owner}/javascript-fetch-lab-dc-web-career-010719/issues`
  //use fetch to fork it!
  fetch(url, {
  headers: {
    Authorization: `token ${getToken()}`
  }
  })
  .then(res => res.json())
  .then(json => showIssues(json));

}

function showIssues(json) {

  let issues = document.getElementById('issues')
  issues.innerText = ""
  for (var i = 0; i < json.length; i++) {
    let li = document.createElement("li")
    let a = document.createElement("a")
    let span = document.createElement("span")
    span.innerText = ` | Body: ${json[i].body}`
    a.href = `${json[i].html_url}`
    a.innerText = `${json[i].title}`
    li.innerText = "Title: "
    li.appendChild(a)
    li.appendChild(span)
    issues.appendChild(li)
    // debugger






  }
  //debugger
}

function createIssue() {
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
  console.log("Inside createIssue function")

  const url = `${baseURL}/repos/${owner}/javascript-fetch-lab-dc-web-career-010719/issues`
  //use fetch to fork it!
  fetch(url, {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${getToken()}`
  }
  })
  .then(res => res.json())
  .then(json => getIssues());


}

function showResults(json) {
  document.getElementById("results").innerHTML = `<h3>Forked Successfully!</h3><a href="${json.html_url}">Go To Fork</a>`
  issue = json.html_url
  console.log(json);
}

function forkRepo() {
  console.log("Inside forkRepo function")
  const url = `${baseURL}/repos/learn-co-students/javascript-fetch-lab-dc-web-career-010719/forks`
  //use fetch to fork it!
  fetch(url, {
  method: 'POST',
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
  return ""
}
