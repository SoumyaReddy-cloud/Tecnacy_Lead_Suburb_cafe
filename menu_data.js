const MENU_PAGES = [
  {
    pageNumber: 2,
    title: "Bites & Plates",
    columns: [
      {
        // Left Column
        sections: [
          {
            title: "SALAD",
            category: "starters",
            items: [
              { name: "GRILL SALAD VEG", price: 120, isVeg: true },
              { name: "GRILL SALAD CHICKEN", price: 160, isVeg: false },
              { name: "CAESAR SALAD VEG", price: 120, isVeg: true },
              { name: "CAESAR SALAD CHICKEN", price: 160, isVeg: false },
              { name: "GREEK SALAD", price: 140, isVeg: true }
            ]
          },
          {
            title: "GARLIC BREAD",
            category: "starters",
            items: [
              { name: "CHEESE GARLIC BREAD", price: 99, isVeg: true },
              { name: "MASALA CHEESE GARLIC BREAD", price: 120, isVeg: true },
              { name: "MUSHROOM GARLIC BREAD", price: 130, isVeg: true },
              { name: "CHICKEN CHEESE GARLIC BREAD", price: 140, isVeg: false }
            ]
          },
          {
            title: "STARTER",
            category: "starters",
            items: [
              { name: "HERB SAUTEED VEG", price: 199, isVeg: true },
              { name: "HERB SAUTEED CHICKEN", price: 259, isVeg: false },
              { name: "CHICKEN TENDER", price: 199, isVeg: false },
              { name: "CHICKEN PICCATA", price: 199, isVeg: false },
              { name: "CRISPY CHICKEN LOLLIPOP", price: 149, isVeg: false, isSignature: true },
              { name: "CHICKEN GUN POWDER", price: 179, isVeg: false },
              { name: "CHICKEN SCHENTZIL", price: 199, isVeg: false }
            ]
          },
          {
            title: "QUICK BITES",
            category: "starters",
            items: [
              { name: "FRENCH FRIES", price: 90, isVeg: true },
              { name: "FRENCH FRIES PERI PERI", price: 99, isVeg: true },
              { name: "LOADED FRIES", price: 149, isVeg: true },
              { name: "CAJUN SPICY POTATO", price: 89, isVeg: true },
              { name: "POTATO WEDGES", price: 89, isVeg: true },
              { name: "VEG NUGGETS", price: 79, isVeg: true },
              { name: "CHICKEN NUGGETS", price: 130, isVeg: false },
              { name: "POTATO CHEESE SHOTZ", price: 99, isVeg: true },
              { name: "CHILLI GARLIC POTATO POPS", price: 79, isVeg: true },
              { name: "PANEER STICKS", price: 129, isVeg: true }
            ]
          },
          {
            title: "MOMOS",
            category: "starters",
            headers: ["STEAM", "FRIED"],
            items: [
              { name: "VEG", prices: [80, 99], isVeg: [true, true] },
              { name: "JUICY CHICKEN", prices: [99, 109], isVeg: [false, false] }
            ]
          }
        ]
      },
      {
        // Right Column
        sections: [
          {
            title: "MAGGI",
            category: "starters",
            items: [
              { name: "CLASSIC MAGGI", price: 59, isVeg: true },
              { name: "VEGETABLE MAGGI", price: 69, isVeg: true },
              { name: "EGG MAGGI", price: 79, isVeg: false },
              { name: "CHEESE MAGGI", price: 79, isVeg: true },
              { name: "SCHEZWAN MAGGI", price: 79, isVeg: true }
            ]
          },
          {
            title: "OMELETTE",
            category: "starters",
            items: [
              { name: "BREAD OMELETTE", price: 59, isVeg: false },
              { name: "CHEESY BREAD OMELETTE", price: 79, isVeg: false }
            ]
          },
          {
            title: "BURGER",
            category: "mains",
            items: [
              { name: "VEG CHEESE", price: 99, isVeg: true },
              { name: "PANEER CHEESE", price: 129, isVeg: true },
              { name: "CHICKEN BURGER", price: 110, isVeg: false },
              { name: "SUBURB SPL CHICKEN", price: 129, isVeg: false, isSignature: true },
              { name: "CRISPY CHICKEN CHEESE", price: 129, isVeg: false }
            ]
          },
          {
            title: "SANDWICH",
            category: "mains",
            items: [
              { name: "SUBURB SPL CHICKEN", price: 149, isVeg: false, isSignature: true },
              { name: "BOMBAY SANDWICH", price: 90, isVeg: true },
              { name: "PANEER CHILLI", price: 120, isVeg: true },
              { name: "CHEESE BURST", price: 139, isVeg: true },
              { name: "CHICKEN CHEESE", price: 139, isVeg: false },
              { name: "PANEER TIKKA", price: 120, isVeg: true },
              { name: "CHOCOLATE SANDWICH", price: 80, isVeg: true },
              { name: "NUTELLA SANDWICH", price: 99, isVeg: true },
              { name: "PITA BREAD VEG", price: 90, isVeg: true },
              { name: "PITA BREAD NON-VEG", price: 110, isVeg: false }
            ]
          },
          {
            title: "ROLLS",
            category: "mains",
            items: [
              { name: "CHICKEN SHAWARMA", price: 130, isVeg: false, isSignature: true },
              { name: "VEG ROLL", price: 89, isVeg: true },
              { name: "EGG ROLL", price: 110, isVeg: false },
              { name: "PANEER CHILLI ROLL", price: 130, isVeg: true }
            ]
          },
          {
            title: "PASTA",
            category: "mains",
            items: [
              { name: "ARRABIATA/ RED SAUCE PASTA VEG", price: 139, isVeg: true },
              { name: "ARRABIATA/ RED SAUCE PASTA CHICKEN", price: 159, isVeg: false },
              { name: "ALFREDO/WHITE SAUCE PASTA VEG", price: 149, isVeg: true },
              { name: "ALFREDO/WHITE SAUCE PASTA CHICKEN", price: 169, isVeg: false },
              { name: "BARBARESCO/ PINK SAUCE PASTE VEG", price: 139, isVeg: true },
              { name: "BARBARESCO/ PINK SAUCE PASTE CHICKEN", price: 159, isVeg: false },
              { name: "MAC N CHEESE VEG", price: 159, isVeg: true },
              { name: "MAC N CHEESE CHICKEN", price: 179, isVeg: false }
            ]
          }
        ]
      }
    ]
  },
  {
    pageNumber: 3,
    title: "Pizzas, Drinks & Desserts",
    columns: [
      {
        // Left Column
        sections: [
          {
            title: "PIZZA",
            category: "mains",
            headers: ["SMALL", "MEDIUM"],
            items: [
              { name: "MARGHERITA", prices: [129, 199], isVeg: [true, true] },
              { name: "CORN & CHEESE", prices: [199, 299], isVeg: [true, true] },
              { name: "FARMHOUSE", prices: [249, 329], isVeg: [true, true] },
              { name: "TIKKA PANEER", prices: [219, 299], isVeg: [true, true] },
              { name: "CHICKEN CHEESE", prices: [229, 319], isVeg: [false, false] },
              { name: "BARBEQUE CHICKEN PIZZA", prices: [239, 329], isVeg: [false, false] },
              { name: "EXTRA CHEESE TO BRUST", prices: [50, 70], isVeg: [true, true] }
            ]
          },
          {
            title: "DESERT",
            category: "desserts",
            items: [
              { name: "CHOCO LAVA CAKE", price: 90, isVeg: true },
              { name: "BROWNIE", price: 99, isVeg: true },
              { name: "BROWNIE WITH ICE CREAM", price: 119, isVeg: true, isSignature: true }
            ]
          },
          {
            title: "PAN CAKE",
            category: "desserts",
            items: [
              { name: "CHOCOTRIO", price: 119, isVeg: true },
              { name: "RED VELVET", price: 219, isVeg: true }
            ]
          },
          {
            title: "TRES LECHES",
            category: "desserts",
            items: [
              { name: "PISTA", price: 179, isVeg: true },
              { name: "ROSE", price: 159, isVeg: true },
              { name: "STRAWBERRY", price: 169, isVeg: true, isSignature: true }
            ]
          },
          {
            title: "WAFFLES",
            category: "desserts",
            items: [
              { name: "CLASSIC", price: 100, isVeg: true },
              { name: "CHOCOLATE", price: 140, isVeg: true },
              { name: "NUTELLA", price: 150, isVeg: true },
              { name: "ARABIAN DELIGHT", price: 160, isVeg: true }
            ]
          },
          {
            title: "KUNAFA",
            category: "desserts",
            items: [
              { name: "CLASSIC", price: 299, isVeg: true, isSignature: true },
              { name: "NUTELLA", price: 329, isVeg: true },
              { name: "CHEESE", price: 349, isVeg: true },
              { name: "CARAMEL", price: 329, isVeg: true },
              { name: "LOTUS BISCOFF", price: 339, isVeg: true }
            ]
          }
        ]
      },
      {
        // Right Column
        sections: [
          {
            title: "JUICE",
            category: "beverages",
            items: [
              { name: "ORANGE", price: 79, isVeg: true },
              { name: "MANGO", price: 79, isVeg: true },
              { name: "WATER MELON", price: 69, isVeg: true },
              { name: "CHIKOO", price: 69, isVeg: true },
              { name: "STRAWBERRY", price: 89, isVeg: true },
              { name: "ANJEER", price: 89, isVeg: true },
              { name: "FRESH LIME", price: 40, isVeg: true },
              { name: "FRESH LIME SODA", price: 50, isVeg: true }
            ]
          },
          {
            title: "MOCKTAIL",
            category: "beverages",
            items: [
              { name: "VIRGIN MOJITO", price: 79, isVeg: true, isSignature: true },
              { name: "GREEN APPLE", price: 89, isVeg: true },
              { name: "KOKAM", price: 89, isVeg: true },
              { name: "BLUE CURACAO", price: 89, isVeg: true },
              { name: "BUBBLEGUM", price: 89, isVeg: true },
              { name: "PAN", price: 89, isVeg: true },
              { name: "SUNRISE", price: 99, isVeg: true },
              { name: "BLUE MOON", price: 99, isVeg: true }
            ]
          },
          {
            title: "LASSI",
            category: "beverages",
            items: [
              { name: "MANGO", price: 70, isVeg: true },
              { name: "SWEET", price: 60, isVeg: true },
              { name: "ROSE", price: 70, isVeg: true }
            ]
          },
          {
            title: "MILKSHAKE",
            category: "beverages",
            items: [
              { name: "OREO", price: 89, isVeg: true, isSignature: true },
              { name: "BANANA", price: 79, isVeg: true },
              { name: "STRAWBERRY", price: 90, isVeg: true },
              { name: "CHOCOLATE", price: 90, isVeg: true },
              { name: "BANANA STRAWBERRY", price: 110, isVeg: true }
            ]
          },
          {
            title: "BUN MASKA",
            category: "desserts",
            items: [
              { name: "CLASSIC", price: 40, isVeg: true },
              { name: "PINEAPPLE", price: 60, isVeg: true },
              { name: "STRAWBERRY", price: 60, isVeg: true }
            ]
          },
          {
            title: "TEA",
            category: "beverages",
            headers: ["HALF", "FULL"],
            items: [
              { name: "GINGER TEA", prices: [15, 20], isVeg: [true, true] },
              { name: "BOOST", prices: [20, 30], isVeg: [true, true] },
              { name: "LEMON TEA", prices: [null, 25], isVeg: [true, true] }
            ]
          },
          {
            title: "COFFEE",
            category: "beverages",
            headers: ["HALF", "FULL"],
            items: [
              { name: "HOT COFFEE", prices: [20, 30], isVeg: [true, true], isSignature: true },
              { name: "COLD COFFEE", prices: [null, 89], isVeg: [true, true], isSignature: true }
            ]
          }
        ]
      }
    ]
  },
  {
    pageNumber: 4,
    title: "Chinese & Mains",
    columns: [
      {
        // Left Column
        sections: [
          {
            title: "SOUP",
            category: "chinese",
            items: [
              { name: "VEG MANCHOW", price: 70, isVeg: true },
              { name: "VEG HOT AND SOUR", price: 70, isVeg: true },
              { name: "TOMATO", price: 70, isVeg: true },
              { name: "VEGETABLE SOUP", price: 70, isVeg: true },
              { name: "SWEET CORN SOUP", price: 70, isVeg: true },
              { name: "CHICKEN MANCHURIAN SOUP", price: 90, isVeg: false },
              { name: "CHICKEN HOT AND SOUR", price: 90, isVeg: false },
              { name: "MUSHROOM SOUP", price: 90, isVeg: true }
            ]
          },
          {
            title: "CORN",
            category: "chinese",
            items: [
              { name: "CRISPY CORN", price: 89, isVeg: true },
              { name: "ROASTED MASALA CORN", price: 89, isVeg: true },
              { name: "BABY CORN MANCHURIAN", price: 99, isVeg: true },
              { name: "BABY CORN CHILLI", price: 99, isVeg: true },
              { name: "BABY CORN SALT AND PEPPER", price: 99, isVeg: true }
            ]
          },
          {
            title: "POTATO",
            category: "chinese",
            items: [
              { name: "HONEY CHILLI POTATO", price: 90, isVeg: true },
              { name: "POTATO CHILLI", price: 70, isVeg: true }
            ]
          },
          {
            title: "GOBI",
            category: "chinese",
            items: [
              { name: "GOBI 65", price: 79, isVeg: true },
              { name: "CHILLI", price: 79, isVeg: true },
              { name: "MANCHURIAN", price: 79, isVeg: true },
              { name: "SALT AND PEPPER", price: 79, isVeg: true }
            ]
          },
          {
            title: "PANEER",
            category: "chinese",
            items: [
              { name: "MANCHURIAN", price: 109, isVeg: true },
              { name: "CHILLI", price: 109, isVeg: true },
              { name: "PANEER 65", price: 109, isVeg: true },
              { name: "MAJESTIC", price: 109, isVeg: true },
              { name: "SCHEZUAN PANEER", price: 109, isVeg: true },
              { name: "LOLLIPOP", price: 109, isVeg: true }
            ]
          },
          {
            title: "MUSHROOM",
            category: "chinese",
            items: [
              { name: "MANCHURIAN", price: 99, isVeg: true },
              { name: "FRIED RICE", price: 99, isVeg: true },
              { name: "CHILLI", price: 99, isVeg: true },
              { name: "PEPPER DRY", price: 99, isVeg: true },
              { name: "MUSHROOM 65", price: 99, isVeg: true }
            ]
          }
        ]
      },
      {
        // Right Column
        sections: [
          {
            title: "CHICKEN",
            category: "chinese",
            items: [
              { name: "MANCHURIAN", price: 109, isVeg: false },
              { name: "CHILLI", price: 119, isVeg: false },
              { name: "MAJESTIC", price: 130, isVeg: false, isSignature: true },
              { name: "SALT AND PEPPER", price: 130, isVeg: false },
              { name: "65 FRY", price: 100, isVeg: false },
              { name: "LOLLIPOP (5 PIECE)", price: 130, isVeg: false },
              { name: "LOLLIPOP (6 PIECE)", price: 149, isVeg: false },
              { name: "WINGS", price: 130, isVeg: false },
              { name: "WINGS PERI PERI", price: 140, isVeg: false }
            ]
          },
          {
            title: "NOODLES",
            category: "mains",
            items: [
              { name: "VEG HAKKA NOODLES", price: 80, isVeg: true },
              { name: "BUTTER GARLIC", price: 80, isVeg: true },
              { name: "VEG SCHEZUAN NOODLES", price: 80, isVeg: true },
              { name: "CHICKEN NOODLES", price: 99, isVeg: false },
              { name: "CHICKEN SCHEZUAN NOODLES", price: 99, isVeg: false },
              { name: "EGG NOODLES", price: 90, isVeg: false },
              { name: "CHICKEN CHILLI GARLIC NOODLES", price: 99, isVeg: false }
            ]
          },
          {
            title: "RICE",
            category: "mains",
            items: [
              { name: "VEG FRIED RICE", price: 75, isVeg: true },
              { name: "VEG SCHEZUAN FRIED RICE", price: 80, isVeg: true },
              { name: "EGG FRIED RICE", price: 85, isVeg: false },
              { name: "SINGAPORE FRIED RICE", price: 85, isVeg: true },
              { name: "GOBI FRIED RICE", price: 89, isVeg: true },
              { name: "CHICKEN FRIED RICE", price: 109, isVeg: false },
              { name: "CHICKEN SCHEZUAN FRIED RICE", price: 109, isVeg: false },
              { name: "PANEER FRIED RICE", price: 109, isVeg: true },
              { name: "MUSHROOM FRIED RICE", price: 99, isVeg: true }
            ]
          },
          {
            title: "BURRITO BOWL",
            category: "mains",
            items: [
              { name: "CHICKEN", price: 129, isVeg: false, isSignature: true },
              { name: "EGG", price: 109, isVeg: false },
              { name: "PANEER", price: 109, isVeg: true }
            ]
          },
          {
            title: "SOFT DRINKS",
            category: "beverages",
            items: [
              { name: "AS PER AVAILABILITY", isVeg: true }
            ]
          }
        ]
      }
    ]
  }
];
