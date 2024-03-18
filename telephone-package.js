class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }

  addPhoneNumber(phoneNumber) {
    if (!this.phoneNumbers.includes(phoneNumber)) {
      this.phoneNumbers.push(phoneNumber);
    }
  }

  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      console.log(`Dialing ${phoneNumber}...`);
      this.notifyObservers(phoneNumber);
    } else {
      console.log(`Phone number ${phoneNumber} is not added.`);
    }
  }
}

class Observer {
  notify(phoneNumber) {
    // To be implemented by the specific observer
  }
}

// Example usage:
class MyObserver extends Observer {
  notify(phoneNumber) {
    console.log(`Observer: Dialed ${phoneNumber}`);
  }
}

// Telephone object
const telephone = new Telephone();

// Create observer
const observer = new MyObserver();

// Add observer to telephone
telephone.addObserver(observer);

// Add some phone numbers
telephone.addPhoneNumber("08067190421");
telephone.addPhoneNumber("08022448800");

// Dial a phone number
telephone.dialPhoneNumber("08067190421");
telephone.dialPhoneNumber("07030091456"); // This number is not added

// Remove a phone number
telephone.removePhoneNumber("08067190421");

// Dial a removed phone number
telephone.dialPhoneNumber("08067190421"); // it will not notify the observer
