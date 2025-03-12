
// const showLoader = () =>{
//     const loaderBtn = document.getElementById('loader');
//     loaderBtn.classList.remove('hidden')
// }


// const categoryload = () =>{
//     fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
//     .then(Response => Response.json())
//     .then(data =>{
//         // console.log(data)

//        categoriesData(data.categories)
//     })
// }

// const categoriesData = (categories) =>{
    
//     const categoriesContainer = document.getElementById('category-container');
//     for(let categorie of categories){
//         // console.log(categorie)
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <button class="btn bg-red-100 hover:bg-red-600 hover:text-white">${categorie.category}</button>
//         `
//         categoriesContainer.appendChild(div)
//     }
// }
// categoryload()