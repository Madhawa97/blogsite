// regular function
// function myFn(){
//     console.log("====================================");
// }

// arrow function
// const _myFn = (param1, param2) => {
//     console.log("====================================");
// }

// for a text payload

// const url = "https://jsonplaceholder.typicode.com/"

// const get_comment = async() => {
//     const response = await fetch (url);  //create response object
//     const data = await response.text();
//     console.log("===============================");
//     console.log(data);
//     console.log("===============================");
// }
// get comment()


// for a json payload

// const url = "https://jsonplaceholder.typicode.com/posts"

// const get_comment = async() => {
//     const response = await fetch (url);  //create response object
//     const data = await response.json();
//     console.log("===============================");
//     console.log(data);
//     console.log("===============================");
// }

// get_comment()


const url = "https://jsonplaceholder.typicode.com/posts"

const get_comment = async() => {
    const response = await fetch (url);  //create response object
    const posts = await response.json();
    for (post of posts) {

        // console.log("===============================");
        // console.log(post['id']);
        // console.log(post['title']);
        // console.log(post.title);

        const {id,title,body} = post; //destructure
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        div.id = id; // add id
        h1.innerHTML = title;
        p.innerHTML = body;

        // div.innerHTML = 'title'; // add innerhtml //div.innerHTML = `${title}\n${body}`;

        div.appendChild(h1);
        div.appendChild(p);

        document.getElementById('root').appendChild(div);
        // break;
    }
}

get_comment()

// de