
// const showLoader = () =>{
//     const loaderBtn = document.getElementById('loader');
//     loaderBtn.classList.remove('hidden')
// }

const categoryLoad = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(Response => Response.json())
    .then(data =>{
        categoryDisplay(data.categories)
    })
}

const videoLoad = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(Response =>Response.json())
    .then(data=>{
        videosDisplay(data)
    })
}

const videosDisplay = ()=>{

}

const categoryDisplay = (categories)=>{
    const categoryContainer = document.getElementById('category-container');
    for(let category of categories){
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <div>
            <button class="btn bg-gray-200 text-gray-500 hover:bg-red-600 hover:text-white">${category.category}</button>
        </div>
        `
        categoryContainer.appendChild(categoryDiv)
    }
}


categoryLoad()
videoLoad()