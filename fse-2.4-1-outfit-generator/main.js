// Codecademy FSE 2.3 Interactive Sites - Git and GitHub I
// Outfit Generator
// Sep 24, 2024

//  object of available outfit items
const items = {
  shirt: ['swag t-shirt', 't-shirt with clever saying', 'sweater', 'hoodie'],
  pants: ['cargo pants', 'jeans', 'chinos'],
  shoes: ['sneakers', 'boots', 'sandals'],
  accessory: ['backpack', 'poof ball hat', 'ball cap', 'sunglasses']
};

// utility function to randomly select an item in each category
const selectRandomItem = category => {
  const randomIndex = Math.floor(Math.random() * items[category].length);
  return items[category][randomIndex];
};

// outfit factory function
const outfitFactory = () => ({
  shirt: selectRandomItem('shirt'),
  pants: selectRandomItem('pants'),
  shoes: selectRandomItem('shoes'),
  accessory: selectRandomItem('accessory'),
  logOutfit: function() { 
    // note: ': function' so method can be use with dot notiation
    console.log("Outfit:");
    console.log(`Shirt: ${this.shirt}`);
    console.log(`Pants: ${this.pants}`);
    console.log(`Shoes: ${this.shoes}`);
    console.log(`Accessory: ${this.accessory}`);
    }
  });

const outfit = outfitFactory();
outfit.logOutfit();

// Output, randomly selected: 
// Outfit:
// Shirt: swag t-shirt
// Pants: cargo pants
// Shoes: boots
// Accessory: backpack