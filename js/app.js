// Vars
const make = document.querySelector('#make');
const model = document.querySelector('#model');
const year = document.querySelector('#year');
const minPrice = document.querySelector('#min');
const maxPrice = document.querySelector('#max');
const doors = document.querySelector('#doors');
const color = document.querySelector('#color');
const transmission = document.querySelector('#transmission');

// Results container
const results = document.querySelector('#results');

// Creating year const
const maxYear = new Date().getFullYear();
const minYear = maxYear - 15;

// Keep data for the form
const dataSearch = {
    make: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    doors: '',
    transmission: '',
    color: '',
}

// Inputs listeners
make.addEventListener('change', (e) => {
    dataSearch.make = e.target.value;
    console.log(dataSearch);
    searchCar();
});

year.addEventListener('change', (e) => {
    dataSearch.year = parseInt(e.target.value);
    console.log(dataSearch);
    searchCar();
});

minPrice.addEventListener('change', (e) => {
    dataSearch.minPrice = e.target.value;
    console.log(dataSearch);
    searchCar();
});

maxPrice.addEventListener('change', (e) => {
    dataSearch.maxPrice = e.target.value;
    console.log(dataSearch);
    searchCar();
});

doors.addEventListener('change', (e) => {
    dataSearch.doors = parseInt(e.target.value);
    console.log(dataSearch);
    searchCar();
});

transmission.addEventListener('change', (e) => {
    dataSearch.transmission = e.target.value;
    console.log(dataSearch);
    searchCar();
});

color.addEventListener('change', (e) => {
    dataSearch.color = e.target.value;
    console.log(dataSearch);
    searchCar();
})




// Events
document.addEventListener('DOMContentLoaded', () => {
    showCars(cars); //show all cars in db

    // fill year select
    generateSelectYears();
});


//Functions
function showCars(cars) {
    cleanHTML();

    cars.forEach((car) => {
        const { make, model, year, price, doors, color, transmission } = car;
        const carHTML = document.createElement('p');

        carHTML.textContent = `
        ${make} ${model} - ${year} - ${doors} doors - ${transmission} transmission - Price: ${price} USD - ${color} color`;

        results.appendChild(carHTML);
    });
}

// Clean HTML
function cleanHTML() {
    while(results.firstChild) {
        results.removeChild(results.firstChild)
    }
}

function generateSelectYears() {
    for (let i = 2024; i > minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    };
};

// Searching car according to form
function searchCar() {
    const result = cars.filter(filterMake).filter(searchYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTransmission)

    console.log(result);
    showCars(result);
}

// Searching by make
function filterMake(car) {
    const {make} = dataSearch;
    if(make) {
        return car.make === make;
    }
    return car;
}

// Searching by year
function searchYear(car) {
    const { year } = dataSearch;
    if(year) {
        return car.year === year;
    }
    return car;
}

function filterMin(car) {
    const { minPrice } = dataSearch;
    if(minPrice) {
        return car.price >= minPrice;
    }
    return car;
}

function filterMax(car) {
    const { maxPrice } = dataSearch;
    if(maxPrice) {
        return car.price <= maxPrice;
    }
    return car;
}

function filterDoors(car) {
    const { doors } = dataSearch;
    if(doors) {
        return car.doors === doors;
    }
    return car;
}

function filterTransmission(car) {
    const { transmission } = dataSearch;
    if(transmission) {
        return car.transmission === transmission;
    }
    return car;
}

