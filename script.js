/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var images = [
  "https://cdn.glitch.com/c637ab8b-0784-485e-9298-a32bcf538985%2Ffood%20bank.png?v=1563484988623", // Food Banks
  "https://cdn.glitch.com/c637ab8b-0784-485e-9298-a32bcf538985%2Fsoup%20kitchen.png?v=1563483696194", // Soup Kitchens
  "https://cdn.glitch.com/c637ab8b-0784-485e-9298-a32bcf538985%2FScreen%20Shot%202019-07-18%20at%201.42.03%20PM.png?v=1563482545643" // Homeless Shelters
];

// Food Banks
 var foodBankA = {
  name: "San Francisco-Marin Food Bank",
  address: "900 Pennsylvania Ave, San Francisco, CA 94107",
  hours: "8am to 5pm, closed Saturday and Sunday",
  phone: "(415) 282-1900",
  info: "210,000 people rely on food from San Francisco-Marin Food Bank every year and 30,000 families receive healthy groceries at over 278 pantries.",
  link: "https://www.sfmfoodbank.org/",
};

var foodBankB = {
  name: "San Francisco City Impact Rescue Mission",
  address: "140 Turk St, San Francisco, CA 94102",
  hours: "10am to 4pm, closed Saturday and Sunday",
  phone: "(415) 441-1628",
  info: "Through our food bank, we can offer families and residents bags of groceries to take with them.",
  link: "https://www.sfcityimpact.com/",
}

var foodBankC = {
  name: "Groceries for Seniors ",
  address: " Old St. Mary's Church | 660 California St, San Francisco, CA 94108",
  hours: "9am to 3pm, closed Friday, Saturday and Sunday",
  phone: "(415) 309-0951",
  info: "Groceries for Seniors provides bags for approximately 1,000 seniors in San Francisco each week.",
  link: "http://groceriesforseniors.org/index.html",
};

var foodBankD = {
  name: "Food Runners",
  address: "2579 Washington St, San Francisco, CA 94115",
  hours: "Drop off food during weekdays.",
  phone: "(415) 929-1866",
  info: "Food Runners provides enough food for over 20,000 meals every week in San Francisco.",
  link: "http://www.foodrunners.org/",
}

var foodBankE = {
  name: "Holy Trinity Greek Orthodox Church",
  address: "999 Brotherhood Way, San Francisco, CA 94132",
  hours: "Saturdays from 11AM - 1PM",
  phone: "(415) 584-4747",
  info: "Dry and canned goods, fresh produce, paper products, hygiene supplies, and personal toiletries are collected for those in need.",
  link: "https://www.holytrinitysf.org/holy-trinity-making-an-impact",
}

// Soup Kitchens
var soupKitchenA= { 
  name: "St. Anthony Foundation",
  address: "150 Golden Gate Avenue",
  phone: "(415)-241-2600",
  hours: "Weekdays: 8:30AM-5PM, Weekends: Closed",
  link: "https://www.stanthonysf.org/",
  info: "St. Anthony Foundation services include free hot meals, free computer classes and one-on-one counseling, a medical clinic, a drug and alcohol treatment program for men, a free clothing program, and a social work center.",
}

var soupKitchenB = {
  name: "GLIDE",
  address: "330 Ellis Street, San Francisco, CA",
  phone: "415-674-6000",
  hours: "Daily meals 8-9am, 12-1:30pm, Dinner served M-F 4-5:30pm",
  info: "GLIDE's program is the only one in San Francisco to provide 3 nutritious meals a day, 364 days a year, to the city's poor, homeless and hungry.",
  link: "https://www.glide.org/feedthehungry",
  }

var soupKitchenC = {
  name: "Mother Brown's Kitchen",
  address: "2111 Jennings St, San Francisco, CA 94124",
  phone: "(415) 671-1100",
  hours: "Breakfast: Daily, 7am-9am Dinner: Daily, 5pm-7pm",
  info: "The United Council of Human Services operates Mother Brown's Kitchen, which started as a small mobile food operation 20 years ago. The organization also runs food pantries in Oakdale and Sunnyvale.",
  link: "https://sfbayview.com/tag/mother-browns-kitchen/"
}


var soupKitchenD = {
  name: "Curry Senior Center",
  address: "333 Turk St., San Francisco, CA 94102",
  phone: "(415) 885-2274",
  hours: "Breakfast: Daily: 7am-9am; Lunch: Daily, 10am-1pm",
  info: "Curry Senior Center is primarily focused on providing a place for low-income seniors to make connections with other people and get the health services they need. Meals are served daily (and bingo is available on Wednesdays and on weekends during lunch hours). Meal delivery to homebound seniors is also offered.",
  link: "https://curryseniorcenter.org/"
}

var soupKitchenE = {
  name: "Free the Need",
  phone: "(415) 587-6685",
  hours: "Hours not available",
  address: "827 Joost Ave, San Francisco, CA 94127",
  info: "Storage of perishable and non-perishable goods and accessibility of donated items through a Free Store will allow us to provide even more services to local communities and a new vehicle will ensure we are able to distribute with consistency and expediency.",
  link: "https://www.freetheneed.org/about/our-story/"
}


// Homeless Shelters

var homelessShelterA = {
  name: "The Sanctuary",
  address: "201 8th St, San Francisco, CA 94103",
  phone: "(415) 487-3300",
  hours: "Weekdays: 8:30AM-11PM; Saturday: 12PM-8PM; Sunday: Closed",
  info: "The Sanctuary provides shelter to homeless adults registered through the City of San Francisco and distributes beds on a 1-night or 90-day basis. There are two meals daily.",
  link: "https://ecs-sf.org/our-work/"
} 


var homelessShelterB = {
  name: "St. Vincent De Paul Society Multi Service Center",
  address: "525 5th St, San Francisco, CA 94107",
  phone: "(415) 597-7960",
  hours: "Open 24/7",
  info: "Each day, St. Vincent De Paul Society Multi Service Center shelters, feeds, and supports over 340 homeless men and women, in addition to providing drop-in care to another 70 people struggling to find adequate food or shelter throughout the city.",
  link: "https://svdp-sf.org/what-we-do/msc-shelter/"
}
  
var homelessShelterC = {
  name: "Hamilton Families",
  address: "1631 Hayes St, San Francisco, CA 94117",
  phone: "(415) 409-2100",
  hours: "Weekdays: 9AM-5PM; Weekends: Closed",
  info: "The Hamilton Shelter Program provides safe shelter, three meals a day and critical social services to 50 families a night for up to six months.",
  link: "https://www.facebook.com/pg/HamiltonFamilies/about/?ref=page_internal",
}

var homelessShelterD = {
  name: "LifeMoves | Family Crossroads",
  address: "50 Hillcrest Drive Daly City, CA 94014",
  phone: "(650) 994-8169",
  hours: "MWF: 1PM-4PM",
  link: "https://lifemoves.org/",
  info: "The LifeMoves mission is to provide interim housing and supportive services for homeless families and individuals to rapidly return to stable housing and achieve long-term self-sufficiency."
} 

var homelessShelterE = {
  name: "Navigation Center",
  address: "1950 Mission St, San Francisco, CA 94103",
  phone: "(415) 487-3300",
  hours: "Open 24/7",
  info: "Since their launch Navigation Centers helped 46% of their guests end their experience of homelessness after a stay in a Navigation Center. No walk-ins are accepted. All individuals and couples who enter have been selected by the SF Homeless Outreach Team or a centralized referral system.",
  link: "http://hsh.sfgov.org/services/emergencyshelter/navigation-centers/"
}

function getInput() {
  var checked = jQuery('input:radio:checked').val();
  if (checked == 'food') {
    $('#map').attr("src", images[0]);
    $('#info').hide();
    selectFood();
  }
  else if (checked == 'soup') {
    $('#map').attr("src", images[1]);
    $('#selector').show();
    $('#info').hide();
    selectSoup();
  }
  else if (checked == 'home') {
    $('#map').attr("src", images[2]);
    $('#selector').show();
    $('#info').hide();
    selectHome();
  }
  else {
    alert("Please select a value.");
  }
}

function selectFood() {
  $('#selector').show();
  $('#a').click(function() {
    $('#name').text(foodBankA.name);
    $('#address').text("⋙" + foodBankA.address);
    $('#phone').text("⋙" + foodBankA.phone);
    $('#hours').text("⋙" + foodBankA.hours);
    $('#infoP').text("⋙" + foodBankA.info);
    $('#link').attr("href", foodBankA.link);
    $('#info').show();
  })
  $('#b').click(function() {
    $('#name').text(foodBankB.name);
    $('#address').text("⋙" + foodBankB.address);
    $('#phone').text("⋙" + foodBankB.phone);
    $('#hours').text("⋙" + foodBankB.hours);
    $('#infoP').text("⋙" + foodBankB.info);
    $('#link').attr("href", foodBankB.link);
    $('#info').show();
  })
  $('#c').click(function() {
    $('#name').text(foodBankC.name);
    $('#address').text("⋙" + foodBankC.address);
    $('#phone').text("⋙" + foodBankC.phone);
    $('#hours').text("⋙" + foodBankC.hours);
    $('#infoP').text("⋙" + foodBankC.info);
    $('#link').attr("href", foodBankC.link);
    $('#info').show();
  })
  $('#d').click(function() {
    $('#name').text(foodBankD.name);
    $('#address').text("⋙" + foodBankD.address);
    $('#phone').text("⋙" + foodBankD.phone);
    $('#hours').text("⋙" + foodBankD.hours);
    $('#infoP').text("⋙" + foodBankD.info);
    $('#link').attr("href", foodBankD.link);
    $('#info').show();
  })
  $('#e').click(function() {
    $('#name').text(foodBankE.name);
    $('#address').text("⋙" + foodBankE.address);
    $('#phone').text("⋙" + foodBankE.phone);
    $('#hours').text("⋙" + foodBankE.hours);
    $('#infoP').text("⋙" + foodBankE.info);
    $('#link').attr("href", foodBankE.link);
    $('#info').show();
  })
}

function selectSoup() {
  $('#selector').show();
  $('#a').click(function() {
    $('#name').text(soupKitchenA.name);
    $('#address').text("⋙" + soupKitchenA.address);
    $('#phone').text("⋙" + soupKitchenA.phone);
    $('#hours').text("⋙" + soupKitchenA.hours);
    $('#infoP').text("⋙" + soupKitchenA.info);
    $('#link').attr("href", soupKitchenA.link);
    $('#info').show();
  })
  $('#b').click(function() {
    $('#name').text(soupKitchenB.name);
    $('#address').text("⋙" + soupKitchenB.address);
    $('#phone').text("⋙" + soupKitchenB.phone);
    $('#hours').text("⋙" + soupKitchenB.hours);
    $('#infoP').text("⋙" + soupKitchenB.info);
    $('#link').attr("href", soupKitchenB.link);
    $('#info').show();
  })
  $('#c').click(function() {
    $('#name').text(soupKitchenC.name);
    $('#address').text("⋙" + soupKitchenC.address);
    $('#phone').text("⋙" + soupKitchenC.phone);
    $('#hours').text("⋙" + soupKitchenC.hours);
    $('#infoP').text("⋙" + soupKitchenC.info);
    $('#link').attr("href", soupKitchenC.link);
    $('#info').show();
  })
  $('#d').click(function() {
    $('#name').text(soupKitchenD.name);
    $('#address').text("⋙" + soupKitchenD.address);
    $('#phone').text("⋙" + soupKitchenD.phone);
    $('#hours').text("⋙" + soupKitchenD.hours);
    $('#infoP').text("⋙" + soupKitchenD.info);
    $('#link').attr("href", soupKitchenD.link);
    $('#info').show();
  })
  $('#e').click(function() {
    $('#name').text(soupKitchenE.name);
    $('#address').text("⋙" + soupKitchenE.address);
    $('#phone').text("⋙" + soupKitchenE.phone);
    $('#hours').text("⋙" + soupKitchenE.hours);
    $('#infoP').text("⋙" + soupKitchenE.info);
    $('#link').attr("href", soupKitchenE.link);
    $('#info').show();
  })
}

function selectHome() {
  $('#selector').show();
  $('#a').click(function() {
    $('#name').text(homelessShelterA.name);
    $('#address').text("⋙" + homelessShelterA.address);
    $('#phone').text("⋙" + homelessShelterA.phone);
    $('#hours').text("⋙" + homelessShelterA.hours);
    $('#infoP').text("⋙" + homelessShelterA.info);
    $('#link').attr("href", homelessShelterA.link);
    $('#info').show();
  })
  $('#b').click(function() {
    $('#name').text(homelessShelterB.name);
    $('#address').text("⋙" + homelessShelterB.address);
    $('#phone').text("⋙" + homelessShelterB.phone);
    $('#hours').text("⋙" + homelessShelterB.hours);
    $('#infoP').text("⋙" + homelessShelterB.info);
    $('#link').attr("href", homelessShelterB.link);
    $('#info').show();
  })
  $('#c').click(function() {
    $('#name').text(homelessShelterC.name);
    $('#address').text("⋙" + homelessShelterC.address);
    $('#phone').text("⋙" + homelessShelterC.phone);
    $('#hours').text("⋙" + homelessShelterC.hours);
    $('#infoP').text("⋙" + homelessShelterC.info);
    $('#link').attr("href", homelessShelterC.link);
    $('#info').show();
  })
  $('#d').click(function() {
    $('#name').text(homelessShelterD.name);
    $('#address').text("⋙" + homelessShelterD.address);
    $('#phone').text("⋙" + homelessShelterD.phone);
    $('#hours').text("⋙" + homelessShelterD.hours);
    $('#infoP').text("⋙" + homelessShelterD.info);
    $('#link').attr("href", homelessShelterD.link);
    $('#info').show();
  })
  $('#e').click(function() {
    $('#name').text(homelessShelterE.name);
    $('#address').text("⋙" + homelessShelterE.address);
    $('#phone').text("⋙" + homelessShelterE.phone);
    $('#hours').text("⋙" + homelessShelterE.hours);
    $('#infoP').text("⋙" + homelessShelterE.info);
    $('#link').attr("href", homelessShelterE.link);
    $('#info').show();
  })
}





///SLIDESHOW!!
var slideIndex = 1;
showSlides(slideIndex);

/*
function plusSlides(n) {
  showSlides(slideIndex += n);
}
*/

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}