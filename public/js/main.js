const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const temp_real_value = document.getElementById('temp_real_value');
const datahide = document.querySelector('.middle_layer');
const temp_status = document.getElementById('temp_status');
// const prb = document.getElementById('prb');

// const datahide = document.querySelector('.middle_layer');


const getInfo =async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText=`Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            datahide.classList.remove('data_hide');
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=867932ad568651825fd9ae10ee4b9b6c`;
            const response = await fetch(url);

            const data = await response.json();
            const arrData = [data];
            city_name.innerText =`${arrData[0].name} ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            const tempStatus = arrData[0].weather[0].main;
            console.log(tempStatus);

            if(tempStatus == "Sunny"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68'></i>"
            }else if(tempStatus == "Clouds"){
                temp_status.innerHTML ="<i class='fa-solid fa-cloud' style='color: #dfe4ea'></i>"
            }else if(tempStatus == "Rainy"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>"
            }else{
                temp_status.innerHTML = "<i class='fa-solid fa-wind ' style='color: #8f8a8a;'></i>"
            }  
            cityVal =""; 
            datahide.classList.remove('data_hide');
            

        }catch{
            
            city_name.innerText=`Plz Enter the city name Properly`;
            cityVal=" "; 
            datahide.classList.add('data_hide');
        }
       
    }
}

submitBtn.addEventListener('click',getInfo);