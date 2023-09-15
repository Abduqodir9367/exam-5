const url = "http://localhost:3000/posts";

//  GET CAR DETAILS
async function getCarDetails(id) {
    try {
        let res = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        let data = await res.json();
        // console.log(data);
        displayCarDetails(data);
    } catch (err) {
        console.log(err);
    }
}
let id = JSON.parse(localStorage.getItem('postId'));
getCarDetails(id);

function displayCarDetails(post) {
    document.querySelector('.big').innerHTML = `     <div class="post-content">
  <img src="${post.img}" alt="img" width="1240" height="542" class="post-img">
  <h3>${post.author}</h3>
  <p class="p1">${post.date}</p>
  <h2>${post.title}</h2>
  <h4>${post.category}</h4>
  <p class="p2">${post.description}</p>
  <p class="p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
    risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus
    mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida
    rutrum quisque non.</p>
</div>`;
}
