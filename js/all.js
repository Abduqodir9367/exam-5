const url = "http://localhost:3000/posts";


async function fetchUsers() {
  try {
    const res = await axios.get(url);
    let result = res.data;
    let str = "";
    result.map((card) => {
      str += `      <div class="post">
      <img src="${card.img}" alt="img" class="post-img" width="547" height="318">
      <div class="post-content">
        <h3>${card.category}</h3>
        <h2>${card.title}</h2>
        <p>${card.description}</p>
        <a href='../pages/post.html'><button onclick="goDetails(${card.id})" class="more-btn">More</button></a>
      </div>
    </div>
          `;
    });
    document.querySelector(".posts").innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}
fetchUsers();
// ///// ////////////

