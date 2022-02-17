const url = "https://jsonplaceholder.typicode.com/posts"

const get_comment = async() => {
    const response = await fetch (url);  //create response object
    const posts = await response.json();
    for (post of posts) {
        const {id,title,body} = post; //destructure

        const tr = document.createElement('tr')
        const td_title = document.createElement('td')
        td_title.innerHTML = title;

        const td_body = document.createElement('td')
        td_body.innerHTML = body;

        tr.appendChild(td_title)
        tr.appendChild(td_body)

        document.querySelector('table').appendChild(tr)

    }
}

get_comment()
