const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// per clonare sia chef che restaurant è meglio utulizzare una copia profonda con structuredClone.
//nel primo caso perchè contiene una funziona, mentre nel secondo una data. in questo modo
// structured mi permette di gestire oggetti complessi e annidati come in questo caso