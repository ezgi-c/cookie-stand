'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let tableHead = document.getElementById('table-head');
let tableRow = document.createElement('tr');
tableHead.appendChild(tableRow);
let tableHeader0 = document.createElement('th');
tableHeader0.innerText = '';
tableRow.appendChild(tableHeader0);
for (let i=0; i<hours.length; i++) {
  let tableHeader = document.createElement('th');
  tableHeader.innerText = hours[i];
  tableRow.appendChild(tableHeader);
}
let tableHeader2 = document.createElement('th');
tableHeader2.innerText = 'Daily Location Total';
tableRow.appendChild(tableHeader2);

function Locations (city, minCust, maxCust, avgSale) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.cookiesSoldPerHour = [];
  this.totalCookiesSold = 0;

  this.randomSalesPerHour = function () {
    let value =  Math.floor((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust ))*this.avgSale);
    return value;
  };

  this.hourlySales = function () {
    for (let i=0; i<hours.length; i++) {
      let randomSale = this.randomSalesPerHour();
      this.cookiesSoldPerHour.push(randomSale);
      this.totalCookiesSold += this.cookiesSoldPerHour[i];
    }
  };

  this.render = function(){

    this.hourlySales();

    let tableBody = document.getElementById('table-body');
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    let location = document.createElement('th');
    location.innerText = this.city;
    tableRow.appendChild(location);

    for (let i = 0; i < hours.length; i++ ) {
      let hourlySale = document.createElement('td');
      hourlySale.innerText = this.cookiesSoldPerHour[i];
      tableRow.appendChild(hourlySale);
    }

    let dailyTotal = document.createElement('td');
    dailyTotal.innerText = this.totalCookiesSold;
    tableRow.appendChild(dailyTotal);
  };
}

let seattle = new Locations('Seattle', 23, 65, 6.3);
let tokyo = new Locations('Tokyo', 3, 24, 1.2);
let dubai = new Locations('Dubai', 11, 38, 3.7);
let paris = new Locations('Paris', 20, 38, 2.3);
let lima = new Locations('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

let tableFoot = document.getElementById('table-foot');
let tableRow2 = document.createElement('tr');
let header = document.createElement('th');
header.innerText = 'Totals';
tableFoot.appendChild(tableRow2);
tableRow2.appendChild(header);

let locations = [seattle, tokyo, dubai, paris, lima];

for (let i=0; i<hours.length; i++) {
  let sum = 0;
  for (let j=0; j<locations.length; j++) {
    sum += locations[j].cookiesSoldPerHour[i];
  }
  let hourlyTotals = document.createElement('th');
  hourlyTotals.innerText = sum;
  tableRow2.appendChild(hourlyTotals);
}

let sum2 = 0;
for (let i=0; i<locations.length; i++) {
  sum2 += locations[i].totalCookiesSold;
}
let dailyTotal = document.createElement('th');
dailyTotal.innerText = sum2;
tableRow2.appendChild(dailyTotal);
console.log(sum2);




// this.getHourlyTotal = function(){
//   let hourlyTotal = [];
//   for (let i=0; i<hours.length; i++) {
//     for (let j = 0; j < locations.length; j++) {
//       hourlyTotal[i] += locations[j].cookiesSoldPerHour[i];
//     }
//     console.log(hourlyTotal[i]);
//   }
// };
// this.getHourlyTotal();

// console.log(locations[0].cookiesSoldPerHour[0]);

// let hourlyTotal = 0;

// for (let i = 0; i < hours.length; i++) {
//   for (let j = 0; j < locations.length; j++) {
//     hourlyTotal += locations[j].hourlySales();
//   }
// }

// 6 am total = seattle + tokyo + dubai + paris + lima

// let hourlyTotal = seattle.cookiesSoldPerHour[0];
// let cookiesSoldPerHour = seattle.cookiesSoldPerHour;

// console.log(hourlyTotal);
// console.log(seattle.cookiesSoldPerHour[0]);






