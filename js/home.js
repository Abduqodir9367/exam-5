
const url = "http://localhost:3000/posts";


async function fetchUsers() {
  try {
    const res = await axios.get(url);
    let result = res.data.slice(-3);
    let str = "";
    result.map((card) => {
      str += `               <div class="card">
        <div class="card-img">
          <img src="${card.img}" alt="img">
        </div>
        <div class="by">
          <p>By</p>
          <p class="purple">${card.author}</p>
          <p>| ${card.date}</p>
          <a href='../pages/post.html'><button onclick="goDetails(${card.id})" class="more-btn">More</button></a>

        </div>
          <h2 class="title">
           ${card.title}
          </h2>
          <p class="description">
     ${card.description}
          </p>
      </div>
          `;
    });
    document.querySelector(".cards").innerHTML = str;
  } catch (e) {
    console.log(e);
  }
}
fetchUsers();

function goDetails(id) {
  localStorage.setItem("postId", JSON.stringify(id));
}
