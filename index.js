const baseURL = 'https://api.github.com'

function getIssues() {
	fetch(url, {
		method: 'GET',
		headers: {Authorization: `token ${getToken()}`}
	}).then(res => res.json())
	.then(json => showIssues(json)) 
}

function showIssues(json) {
	let issues = getElementById('issues')

  for (const key in json) {
    li = document.createElement('li')
    li.innerHTML = `Title: <a href="${json[key].html_url}">${json[key].title}</a> | Body: ${json[key].body}`
    issues.appendChild(li)
  }
}

function createIssue() {
	const postData = {
		"title" : document.querySelector('input#title'),
		"body" : document.querySelector('input#body') 
	};
 
	fetch(`${baseURL}/repos/smaraghi/javascript-fetch-lab-issues`, {
		method: 'POST',
		body: JSON.stringify(postData),
		headers: {
			Authorization: `token ${getToken}`
		}
		}).then(res => res.json()).then(json => showIssues(json));
	
	}

function showResults(json) {
  let results = document.getElementById('results')
  results.innerHTML = `<h3>Forked Successfully!</h3><a href="${json.html_url}">Go To Fork</a>`
}

function forkRepo() {
  const url = `${baseURL}/repos/learn-co-curriculum/javascript-fetch-lab/forks`
 
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
  
}


function getToken() {
		return ''
}