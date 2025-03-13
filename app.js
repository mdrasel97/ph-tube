const showLoader = () =>{
    document.getElementById('loader').classList.remove('hidden')
    document.getElementById('video-container').classList.add('hidden')
}
const hideLoader = () =>{
    document.getElementById('loader').classList.add('hidden')
    document.getElementById('video-container').classList.remove('hidden')
}

function removeActiveClass(){
  const activeButtons = document.getElementsByClassName('active');
  for(let btn of activeButtons){
    btn.classList.remove('active')
  }
}

const categoryLoad = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((Response) => Response.json())
    .then((data) => {
      
      categoryDisplay(data.categories);
    });
};

const videoLoad = (searchText = "") => {
  showLoader()
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((Response) => Response.json())
    .then((data) => {
      removeActiveClass()
      document.getElementById('btn-all').classList.add('active')
      videosDisplay(data.videos);
    });
};

const loadVideoDetails = (videoId) =>{
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
  fetch(url)
  .then(response => response.json())
  .then(data =>{

    displayVideoDetails(data.video)
  })
}

const displayVideoDetails = (video)=>{
  document.getElementById('video_details').showModal()
  // console.log(video)
  const detailsContainer = document.getElementById('details_container');

  detailsContainer.innerHTML = `
  <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
  </div>
</div>
  `
}

const displayCategory = (id) => {
  showLoader()
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  // console.log(url)
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {

      removeActiveClass()
      const clickedButtos = document.getElementById(`btn-${id}`);
      clickedButtos.classList.add('active')
      videosDisplay(data.category)
    });
};

const videosDisplay = (videos) => {
  // console.log(videos)
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";

  if (videos.length == 0) {
    videoContainer.innerHTML = `
    <div class="col-span-full flex flex-col justify-center items-center py-16">
                <img src="./image/Icon.png" alt="">
                <h2 class="text-2xl font-bold text-center">Oops!! Sorry, There is <br> no content here</h2>
            </div>
    `;
    hideLoader();
    return;
  }

  for (let video of videos) {
    // console.log(video)
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100">
                <figure class="relative">
                  <img class="w-full h-[180px] object-cover"
                    src="${video.thumbnail}"
                    alt="" />
                    <p class="bg-black text-white absolute px-3 rounded-md bottom-2 right-2">3hrs 56 min ago</p>
                </figure>
                <div class="px-0">
                  <div class="flex gap-3 py-5 pl-2">
                    <div class="avatar w-8 h-8">
                        <div class="ring-primary ring-offset-base-100 rounded-full ring ring-offset-2">
                          <img class="px-0 " src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                      <div class="space-y-2">
                        <h2 class="text-xl font-semibold">${video.title}</h2>
                        <p class="flex items-center gap-1 text-gray-500">
                            ${video.authors[0].profile_name}
                            ${video.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">`
                              : ``}
                            
                        </p>
                        <p class="text-gray-500">${video.others.views} Views</p>
                      </div>
                  </div>
                  <div class="flex gap-3">
                    
                  </div>
                </div>
                <div class="text-center">
                    <button onclick=loadVideoDetails('${video.video_id}') class="btn btn-wide">Show More</button>
                </div>
              </div>
            `;

    videoContainer.append(div);
  }
  hideLoader()
};

const categoryDisplay = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  for (let category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <div>
            <button id="btn-${category.category_id}" onclick="displayCategory(${category.category_id})" class="btn bg-gray-200 text-gray-500 hover:bg-red-600 hover:text-white">${category.category}</button>
        </div>
        `;
    categoryContainer.appendChild(categoryDiv);
  }
};


document.getElementById('search_input')
.addEventListener('keyup', function(event){
  const input = event.target.value;
  videoLoad(input)
  // console.log(input)
})

categoryLoad();
