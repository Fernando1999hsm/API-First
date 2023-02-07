const api_url = "https://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();
function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        //0 = unset, no se llama al metodo open
        //1 = open, se llama al metodo open
        //2 = header_recived, se esta llamando al metodo send
        //3 = loading, esta cargando
        //4 = done, se completo la operacion
        const data = JSON.parse(this.response);
        console.log(data)
        const HTMLResponse = document.querySelector('#app1');
        const tpl = data.map(user => '<li>'+user.name+'</li>'+'<li>'+user.email+'</li>')
        HTMLResponse.innerHTML = '<ul>'+tpl+'</ul>'
    }
}

xhr.addEventListener('load',onRequestHandler);
xhr.open("GET",api_url+'/users');
xhr.send();

//otra manera // con promesas

const HTMLResponse2 = document.querySelector("#app2");
fetch(api_url+'/users')
    .then((response) => response.json())
    .then((users)=>{
        const tpl2=users.map(users => '<li>'+users.name+'</li>'+'<li>'+users.username+'</li>');
        HTMLResponse2.innerHTML = '<ul>'+tpl2+'</ul>';
    });

//otra manera // con promesas

const HTMLResponse3 = document.querySelector("#app3");
const tpl3 = document.createDocumentFragment('ul');
fetch(api_url+'/users')
    .then((response) => response.json())
    .then((usu)=>{
        usu.forEach(usu => {
            let elem = document.createElement('li');
            elem.appendChild(document.createTextNode(usu.name));
            tpl3.appendChild(elem);
        });
        HTMLResponse3.appendChild(tpl3);
    });