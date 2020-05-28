class hotel {
  constructor(hotelName, address, image) {
    this.hotelName = hotelName
    this.numberOfNights = Math.floor(Math.random() * 9) + 1
    this.address = address
    this.image = image
  }
  isAvailable() {
    let numberOfNightsreq = prompt(`How long would you like to stay in ${this.hotelName}?`)
    if (this.numberOfNights >= numberOfNightsreq) {
      return true
    } else {
      return false
    }
  }
}

let hotel1 = new hotel("Sultan Palace", "5th Paradise Street", "images/sultan-palace.jpg")
let hotel2 = new hotel("Beach Hotel", "4th Beach Lane", "images/beach-hotel.jpg")
let hotel3 = new hotel("High Rise Hotel", "Casino Center Boulevard", "images/high-rise-hotel.jpg")

let hotels = [hotel1, hotel2, hotel3]

for (i = 0; i < hotels.length; i++) {
  document.getElementById("hotel-selector").innerHTML += `<option value='${hotels[i].hotelName}'>${hotels[i].hotelName}</option>`
}

document.getElementById("hotel-selector").addEventListener("change", function() {
  if (document.getElementById("hotel-selector").value == "") {
    document.getElementById("hotel-name").innerHTML = ""
    document.getElementById("hotel-address").innerHTML = ""
    document.getElementById("hotel-image").src = "images/placeholder.jpg"
    document.getElementById("hotel-image").src = "images/placeholder.jpg"
    document.getElementById("response").innerHTML = ""
    return
  }
  for (i = 0; i < hotels.length; i++) {
    if (hotels[i].hotelName == document.getElementById("hotel-selector").value) {
      document.getElementById("hotel-name").innerHTML = hotels[i].hotelName
      document.getElementById("hotel-address").innerHTML = hotels[i].address
      document.getElementById("hotel-image").src = hotels[i].image
      document.getElementById("response").innerHTML = ""
    }
  }
})

document.getElementById("check").addEventListener("click", function() {
  if (document.getElementById("hotel-selector").value == "") {
    alert("Please select a hotel")
  } else {
    for (i = 0; i < hotels.length; i++) {
      if (hotels[i].hotelName == document.getElementById("hotel-selector").value) {
        if (hotels[i].isAvailable()) {
          document.getElementById("response").innerHTML = `Okay, We'll reserve ${document.getElementById("hotel-selector").value} for you!`
        } else {
          document.getElementById("response").innerHTML = `Sorry, no available nights for ${document.getElementById("hotel-selector").value}!`
        }
      }
    }
  }
})
