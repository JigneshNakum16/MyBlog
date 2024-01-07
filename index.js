const popularPost = [
  {
    id: "1",
    imgPost: "./image/post-01-free-img.jpg",
    category: "CRYPTOCURRENCY",
    title: "What are blockchain transaction fees?",
    description:
      "Lorem ipsum dolor sit amet, consectetur amet  adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "2",
    imgPost: "./image/post-02-free-img.jpg",
    category: "TECHNOLOGIES",
    title: "Best Places to Download HTML Templates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "3",
    imgPost: "./image/post-03-free-img.jpg",
    category: "PROGRAMMING",
    title: "5 Best Samsung Galaxy Buds Pro Settings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
];

const dealCoupons = [
  {
    id: "1",
    imgPost: "./image/deal-01-free-img.jpg",
    discount: "SAVE 66%",
    description: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
  },
  {
    id: "2",
    imgPost: "./image/deal-02-free-img.jpg",
    discount: "UP TO 63%",
    description: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
  },
  {
    id: "3",
    imgPost: "./image/deal-03-free-img.jpg",
    discount: "UP TO 63%",
    description: "LogoIpsum Hosting Coupon: Save 66% + Free Domain",
  },
];

const latestPostList = [
  {
    id: "1",
    imgPost: "./image/post-04-free-img.jpg",
    category: "CRYPTOCURRENCY",
    title: "What is BETH and how to use it?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "2",
    imgPost: "./image/post-05-free-img.jpg",
    category: "PROGRAMMING",
    title: "How to lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "3",
    imgPost: "./image/post-06-free-img.jpg",
    category: "TECHNOLOGIES",
    title: "The most awesome online lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "4",
    imgPost: "./image/post-07-free-img.jpg",
    category: "CRYPTOCURRENCY",
    title: "5 NFT projects you should learn about",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "5",
    imgPost: "./image/post-08-free-img.jpg",
    category: "TECHNOLOGIES",
    title: "15 Common-sense tips for Tech Startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "6",
    imgPost: "./image/post-09-free-img.jpg",
    category: "PROGRAMMING",
    title: "How to earn lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
  },
];

const blogContainerList = document.getElementById("popularPostInner");
popularPost.forEach((item) => {
  const blogItem = document.createElement("div");
  blogItem.innerHTML = `  
        <div class="postImgContainer">
          <img src="${item.imgPost}" alt="PostImg" />
        </div>
        <div class="postContent">
          <h5 class="category">${item.category}</h5>
          <h4 class="question">${item.title}</h4>
          <p class="description">${item.description}</p>
        </div>
  `;

  blogContainerList.appendChild(blogItem);
});

const dealContainerList = document.getElementById("dealsInner");
dealCoupons.forEach((item) => {
  const dealItem = document.createElement("div");
  dealItem.innerHTML = `
        <div class="dealImgContainer">
          <img src="${item.imgPost}" alt="PostImg" />
        </div>
        <div class="dealContent">
          <h5 class="discount">${item.discount}</h5>
          <p class="description">${item.description}</p>
        </div>
  `;
  dealContainerList.appendChild(dealItem);
});

const latestContainerList = document.getElementById("latestPostsInner");
latestPostList.forEach((item) => {
  const latestPostItem = document.createElement("div");
  latestPostItem.innerHTML = `
        <div class="postImgContainer">
          <img src="${item.imgPost}" alt="PostImg" />
        </div>
        <div class="postContent">
          <h5 class="category">${item.category}</h5>
          <h4 class="question">${item.title}</h4>
          <p class="description">${item.description}</p>
        </div>
  `;
  latestContainerList.appendChild(latestPostItem);
});

const logOutForm = () => {
  window.location.href = "http://127.0.0.1:5500/auth.html";
};

const navbar = document.getElementById("navbarItem");

const storedUserData = localStorage.getItem("userData");
const user = JSON.parse(storedUserData || false);

if (user.email == "") {
  const logIn = document.createElement("li");
  logIn.innerHTML = `<li><a href="./auth.html">Login</a></li>`;
  navbar.appendChild(logIn);
} else {
  const logOut = document.createElement("li");
  logOut.innerHTML = `<li onclick="logOutForm()" class="logout">Logout</li>`;
  navbar.appendChild(logOut);
}
