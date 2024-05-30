    




const apikey=`3ec4bec9bee978c2dfce7b76235b6d99`

async function fetchweatherdata(city){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
    const data= await response.json();
    updateweatherui(data)

}
const city=document.querySelector('.city')
const temp=document.querySelector('.temp')
const windspeed=document.querySelector('.wind-speed')
const humid=document.querySelector('.humidity')
const visibility=document.querySelector('.visibility-distance')
const descriptiontext=document.querySelector('.description-text')
const date=document.querySelector('.date')
const btn=document.querySelector('search-btn')


function updateweatherui(data){
   city.textContent=data.name;
   temp.textContent=`${data.main.temp} C° `
   windspeed.textContent=`${data.wind.speed} km/hr`
   humid.textContent=`${data.main.humidity} %`
   visibility.textContent=`${data.visibility/1000} KM`
   descriptiontext.textContent=data.weather[0].description
   

   const currentdate=new Date();
   date.textContent=currentdate.toDateString()
}
const formele=document.querySelector('.search-form')
const inputelement=document.querySelector('.city-input')

formele.addEventListener('submit',function(e){
    e.preventDefault()

    const city= inputelement.value
    if(city!==''){
        fetchweatherdata(city)
        inputelement.value=''

    }

 
})

btn.addEventListener('click',function(e){
    e.preventDefault()

    if(city!==''){
        fetchweatherdata(city)
        inputelement.value=''
  }
})  


