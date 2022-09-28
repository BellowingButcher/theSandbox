// function getWeather(){
// axios.get(
// //`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4`
//         //I used the bellow url for testing hardcoded zips
//         'https://api.openweathermap.org/data/2.5/weather?zip=41472,us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4'
//         )
//         .then(function (response) {
//             //this is where i would pass information off to the elements that i created earlier
//             // console.log(response);
//             return response.data
//         })
//         .catch(function (error){
//             //this is where I would handle errors 
//             //What errors are possible????????????????????????????????????????????????????????
//             console.log(error);
//         })
//         // .then(function() {
//         //     //always exicuted im unsure about what i would put here.  
//         //     console.log('always do this')
//         // });


//     }
async function getWeather () {
    let response = await axios.get ('https://api.openweathermap.org/data/2.5/weather?zip=41472,us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4')
    console.log('before return', response);
    return response;

}

let subBtn = document.getElementById('submit');
subBtn.addEventListener('click', async () => {
    let data = await getWeather();
    //Here is where i need to use dot notation to 
    console.log('afterAwait', data.data.weather);
})

