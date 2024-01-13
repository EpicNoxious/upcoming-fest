const item = document.querySelector('.fest-container')
const dateContainer = document.querySelector('.date-container')


const getFests = async () => {
    const link = "https://script.googleusercontent.com/macros/echo?user_content_key=ci0l4FqcqNSmdFxqgGXYrrhN9zJ2ty6t16LY4PNIkheAa413DwV2Cjllw8KhxpPv9bmdpiV5HdEpqrPc9WzRZXf0A5paT1Cmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIbuoq3Dqzzdb5Hdn9_wtvSIcC7tFDRZZ0EQREjpE5SZnYVi9gL77S7NNXuna2s715ByihW7fxjbZgoWL-2SZl4_sMJr-k3KFA&lib=MFC3aotLKiHwPeHV8zLpiYcRdh3XndcC5"
    fetch(link).
    then((res)=>res.json()).then((data)=>{
        dateContainer.innerHTML = `Last Updated: Today, ${data.date}`
        data.data.forEach((fest)=>{
            let festhtml = `
            <div class="sm:w-1/2 mb-10 px-4" name="fest" id="${fest.Name}">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full w-3/4" src="${fest.Photo}">
            </div>
            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">${fest.Name}</h2>
            <p class="leading-relaxed text-base">📍 ${fest.Location}<br>${fest.Details}<br>Date : ${fest.Dates}</p>

            <a href="${fest.Insta}" target="_blank"><button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Instagram Page</button></a>
            ${fest.Register != "" ? `<a href="${fest.Register}" target="_blank"><button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Register Here</button></a>` : ''}
            </div>`
            item.innerHTML += festhtml
        })
    })
}


getFests()