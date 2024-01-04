const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const temp_real_value = document.getElementById('temp_real_value');
const datahide = document.querySelector('.middle_layer');
const temp_status = document.getElementById('temp_status');


const getInfo =async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText=`Plz write the name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=867932ad568651825fd9ae10ee4b9b6c`;
            const response = await fetch(url);
            let data = await response.json();
            const arrData = [data];
            // console.log(arrData);
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            const tempStatus = arrData[0].weather[0].main;
            console.log(tempStatus);

            if(tempStatus == "Sunny"){
                weathercon.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68'></i>"
            }else if(tempStatus == "Clouds"){
                weathercon.innerHTML ="<i class='fa-solid fa-cloud' style='color: #dfe4ea'></i>"
            }else if(tempStatus == "Rainy"){
                weathercon.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>"
            }else{
                weathercon.innerHTML = "<i class='fa-solid fa-cloud' style='color: #44c3de'></i>"
            }   
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText=`Plz Enter the city name Properly`;
            datahide.classList.add('data_hide');
        }
       
    }
}

submitBtn.addEventListener('click',getInfo);