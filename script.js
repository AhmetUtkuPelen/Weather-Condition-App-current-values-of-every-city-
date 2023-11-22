const wrapper = document.querySelector('.wrapper')
const sehirBilgisi = document.getElementById('sehir-bilgisi')

let sehirler=["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
]

sehirler.forEach(sehir => {

  const option = document.createElement('option')
  option.textContent = sehir
  sehirBilgisi.append(option)

})

// async function getWeather(){

//     let response = await fetch(api)

//     let data = await response.json()

//     console.log(data)

// }





async function getWeather(city) {

  let key = '0b9b1c0c05c56cd74795c4768bee46b0'
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`

    try {
      const response = await axios.get(api);
      ekranaYaz(response.data);
    } catch (error) {
      console.error(error);
    }
  }



sehirBilgisi.addEventListener('change', () => {

  getWeather(sehirBilgisi.value)

})

function ekranaYaz(data){

  wrapper.innerHTML = ''

  console.log(data)

  let hissedileNSicaklik = data.main.feels_like
  let sicaklik = data.main.temp
  let nem = data.main.humidity
  let durum = data.weather[0].description
  let resim = data.weather[0].icon

  let card = document.createElement('div')
  card.classList.add('card','p-0')
  card.innerHTML = 
  
  `
  <div class="card-body p-0">

  <div class='d-flex justify-content-between align-items-center'>
    <h5 class="card-title">${sehirBilgisi.value}</h5>
    <img src="${resim}.png"  class="resim-boyut" alt="...">
    <div>
    <p class="card-text">Sıcaklık : ${sicaklik}</p>
    <p class="card-text">Hissedilen Sıcaklık : ${hissedileNSicaklik}</p>
    <p class="card-text">Nem Oranı : %${nem}</p>
    <p class="card-text">hava Durumu : ${durum}</p>

  </div>
  `
  wrapper.append(card)

}