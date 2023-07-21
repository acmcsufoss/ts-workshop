const firstName: string | undefined = "Ethan";
if (firstName === undefined) {
  console.log(typeof firstName);
}
console.log(firstName);

const names = ["Ethan"];
console.log(names);

for (const name of names) {
  console.log(name);
}

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark: () => void;
}

const dog: Dog = {
  name: "dog",
  age: 1,
  breed: "dog",
  bark() {
    console.log("bark");
  },
};

dog.bark();

class DogClass implements Dog {
  constructor(
    public name: string,
    public age: number,
    public breed: string,
  ) {}

  bark() {
    console.log("bark");
  }
}

const dog2 = new DogClass("dog", 1, "boxer");
dog2.bark();
