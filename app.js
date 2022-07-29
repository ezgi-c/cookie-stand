'use strict';

// locations

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  randomSalesPerHour: function () {
    let value =  Math.floor((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust ))*this.avgSale);
    return value;  
  },
  hourlySales: function () {
    for (let i=0; i<hours.length; i++) {
      let randomSale = this.randomSalesPerHour();
      this.cookiesSoldPerHour.push(randomSale);
      this.totalCookiesSold += randomSale;
    }
  },
  render: function(){
    this.hourlySales();
    let section = document.getElementById('sales');
    let header = document.createElement('h2');
    section.appendChild(header);
    header.textContent = this.city;
    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i=0; i<hours.length; i++){
      let li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

let tokyo = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  randomSalesPerHour: function () {
    let value =  Math.floor((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust ))*this.avgSale);
    return value;  
  },
  hourlySales: function () {
    for (let i=0; i<hours.length; i++) {
      let randomSale = this.randomSalesPerHour();
      this.cookiesSoldPerHour.push(randomSale);
      this.totalCookiesSold += randomSale;
    }
  },
  render: function(){
    this.hourlySales();
    let section = document.getElementById('sales');
    let header = document.createElement('h2');
    section.appendChild(header);
    header.textContent = this.city;
    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i=0; i<hours.length; i++){
      let li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

let dubai = {
  city: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  randomSalesPerHour: function () {
    let value =  Math.floor((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust ))*this.avgSale);
    return value;  
  },
  hourlySales: function () {
    for (let i=0; i<hours.length; i++) {
      let randomSale = this.randomSalesPerHour();
      this.cookiesSoldPerHour.push(randomSale);
      this.totalCookiesSold += randomSale;
    }
  },
  render: function(){
    this.hourlySales();
    let section = document.getElementById('sales');
    let header = document.createElement('h2');
    section.appendChild(header);
    header.textContent = this.city;
    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i=0; i<hours.length; i++){
      let li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

let paris = {
  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  randomSalesPerHour: function () {
    let value =  Math.floor((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust ))*this.avgSale);
    return value;  
  },
  hourlySales: function () {
    for (let i=0; i<hours.length; i++) {
      let randomSale = this.randomSalesPerHour();
      this.cookiesSoldPerHour.push(randomSale);
      this.totalCookiesSold += randomSale;
    }
  },
  render: function(){
    this.hourlySales();
    let section = document.getElementById('sales');
    let header = document.createElement('h2');
    section.appendChild(header);
    header.textContent = this.city;
    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i=0; i<hours.length; i++){
      let li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

let lima = {
  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  cookiesSoldPerHour: [],
  totalCookiesSold: 0,
  randomSalesPerHour: function () {
    let value =  Math.floor((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust ))*this.avgSale);
    return value;  
  },
  hourlySales: function () {
    for (let i=0; i<hours.length; i++) {
      let randomSale = this.randomSalesPerHour();
      this.cookiesSoldPerHour.push(randomSale);
      this.totalCookiesSold += randomSale;
    }
  },
  render: function(){
    this.hourlySales();
    let section = document.getElementById('sales');
    let header = document.createElement('h2');
    section.appendChild(header);
    header.textContent = this.city;
    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i=0; i<hours.length; i++){
      let li = document.createElement('li');
      list.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    }
    let total = document.createElement('li');
    list.appendChild(total);
    total.textContent = `Total: ${this.totalCookiesSold} cookies`;
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



