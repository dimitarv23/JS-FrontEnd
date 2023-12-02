function createCatObjects(catsArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow = function () {
            console.log(`${this.name}, age ${this.age} says Meow`);
        };
    }

    catsArr.forEach((catInfo) => {
        const [catName, catAge] = catInfo.split(" ");

        const cat = new Cat(catName, catAge);
        cat.meow();
    });
}

createCatObjects(["Mellow 2", "Tom 5"]);
