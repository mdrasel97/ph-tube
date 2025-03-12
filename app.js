// const showLoader = () =>{
//     const loaderBtn = document.getElementById('loader');
//     loaderBtn.classList.remove('hidden')
// }

const categoryLoad = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((Response) => Response.json())
    .then((data) => {
      categoryDisplay(data.categories);
    });
};

const videoLoad = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => {
      videosDisplay(data.videos);
    });
};

const videosDisplay = (videos) => {
  // console.log(videos)
  const videoContainer = document.getElementById("video-container");
  for (let video of videos) {
    // console.log(video)
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100">
                <figure class="relative">
                  <img class="w-full h-[180px]"
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
                            <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                        </p>
                        <p class="text-gray-500">${video.others.views}</p>
                      </div>
                  </div>
                  <div class="flex gap-3">
                    
                  </div>
                </div>
                <div class="text-center">
                    <button class="btn btn-wide">Show More</button>
                </div>
              </div>
            `;

            videoContainer.append(div)
  }
};

const categoryDisplay = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  for (let category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <div>
            <button class="btn bg-gray-200 text-gray-500 hover:bg-red-600 hover:text-white">${category.category}</button>
        </div>
        `;
    categoryContainer.appendChild(categoryDiv);
  }
};

categoryLoad();
videoLoad();
