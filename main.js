class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.color = "";
  }
}

class CarDepot {
  constructor() {
    if (!CarDepot.instance) {
      this.cars = [];
      CarDepot.instance = this;
    }
    return CarDepot.instance;
  }

  addCar(car) {
    this.cars.push(car);
    this.notify();
  }

  removeCar(car) {
    const index = this.cars.indexOf(car);
    if (index > -1) {
      this.cars.splice(index, 1);
      this.notify();
    }
  }

  notify() {
    CarDepotRenderer.render(this.cars);
  }
}

class CarDepotRenderer {
  static carListViewFactory = null;

  static setCarListViewFactory(factory) {
    this.carListViewFactory = factory;
  }

  static render(cars) {
    const carListView = this.carListViewFactory.createCarListView();
    carListView.render(cars);
  }
}

class CarListView {
  constructor() {
    this.carListElement = document.getElementById("car-list");
  }

  render(cars) {
    this.carListElement.innerHTML = "";
    cars.forEach(car => {
      const li = document.createElement("li");
      li.textContent = `${car.brand} ${car.model}`;
      if (car.color) {
        li.style.backgroundColor = car.color;
      }
      const removeButton = document.createElement("button");
      removeButton.textContent = "Șterge";
      removeButton.addEventListener("click", () => {
        carDepot.removeCar(car);
      });
      li.appendChild(removeButton);
      this.carListElement.appendChild(li);
    });
  }
}

class CarListViewFactory {
  createCarListView() {}
}

class BasicCarListViewFactory extends CarListViewFactory {
  createCarListView() {
    return new CarListViewBuilder()
      .withElementId("car-list")
      .build();
  }
}

class ColorfulCarListViewFactory extends CarListViewFactory {
  createCarListView() {
    const carListView = new CarListViewBuilder()
      .withElementId("car-list")
      .build();
    carListView.addColorfulStyle();
    return carListView;
  }
}

class CarListViewBuilder {
  constructor() {
    this.carListView = new CarListView();
  }

  withElementId(elementId) {
    this.carListView.carListElement = document.getElementById(elementId);
    return this;
  }

  build() {
    return this.carListView;
  }
}

const carDepot = new CarDepot();

const basicViewButton = document.getElementById("basic-view-button");
basicViewButton.addEventListener("click", () => {
  CarDepotRenderer.setCarListViewFactory(new BasicCarListViewFactory());
});

const colorfulViewButton = document.getElementById("colorful-view-button");
colorfulViewButton.addEventListener("click", () => {
  CarDepotRenderer.setCarListViewFactory(new ColorfulCarListViewFactory());
});

const carForm = document.getElementById("car-form");
carForm.addEventListener("submit", event => {
  event.preventDefault();
  const brandInput = document.getElementById("car-brand");
  const modelInput = document.getElementById("car-model");
  const colorInput = document.getElementById("car-color");
  const car = new Car(brandInput.value, modelInput.value);
  if (colorInput.value) {
    car.color = colorInput.value;
  }
  carDepot.addCar(car);
  brandInput.value = "";
  modelInput.value = "";
  colorInput.value = "";
});
