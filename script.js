const button = document.querySelector('.btn');
const colornamecode = document.querySelector('.colorname');

const GetColors = ()=>{
    //HEX color
    const randomNumber = Math.floor(Math.random() *16777215);
    const randomeCode = '#' + randomNumber.toString(16) 
    // console.log(randomNumber, randomeCode)
    document.body.style.backgroundColor = randomeCode
    colornamecode.innerHTML = randomeCode 
    button.style.backgroundColor = randomeCode  //btn

    navigator.clipboard.writeText(randomeCode) //auto copy code

}

button.addEventListener('click',GetColors)

GetColors()//automatic color feel








// const button =document.querySelector('.btn')
// const colornamecode = document.querySelector('.colorname')



// const getrandomecode = ()=>{

//     const colorCode =Math.floor(Math.random() * 16777215);
//     const randomeCode = '#' + colorCode.toString(16)
//     document.body.style.backgroundColor = randomeCode
//     // console.log(colorCode, randomeCode)
//     colornamecode.innerHTML = randomeCode
// }

// button.addEventListener('click', getrandomecode)

// getrandomecode()