const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        category: "Dinner",
        image: "https://www.allrecipes.com/thmb/6UaBC03j_WXNoBfyOgW2hDMec2g=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/245775-spaghetti-alla-carbonara-the-traditional-italian-recipe-DDMFS-4x3-879c32ee3cfb463582e3e6230e311029.jpg",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 large eggs",
            "50g pecorino cheese, grated",
            "50g parmesan cheese, grated",
            "2 cloves garlic, minced",
            "Salt and black pepper to taste",
            "2 tbsp olive oil"
        ],
        procedure: [
            "Cook the spaghetti in a large pot of salted boiling water until al dente.",
            "While the pasta is cooking, heat the olive oil in a large skillet over medium heat.",
            "Add the pancetta and garlic to the skillet. Cook until the pancetta is crispy, about 5-7 minutes.",
            "In a bowl, beat the eggs and mix in the grated pecorino and parmesan cheeses.",
            "Drain the pasta, reserving some cooking water. Add the pasta to the skillet and toss with the pancetta.",
            "Remove the skillet from heat. Pour the egg and cheese mixture over the pasta, stirring quickly to avoid scrambling the eggs.",
            "Add a splash of reserved pasta water if needed to create a creamy sauce.",
            "Season with salt and black pepper. Serve immediately with extra cheese."
        ],
        description: "A classic Italian pasta dish made with a rich, creamy sauce of eggs, cheese, pancetta, and black pepper. Quick, easy, and delicious!",
        rating: 4.8,
        author: "Chef Mario Rossi",
        datePosted: "2023-10-12",
        readyIn: "25 minutes",
        serving: "4 servings"
    },
    {
        id: 2,
        title: "Vegan Buddha Bowl",
        category: "Lunch",
        image: "https://i0.wp.com/infusedliving.net/wp-content/uploads/2020/09/Thai-buddha-bowl.png?resize=1024%2C768&ssl=1",
        ingredients: [
            "1 cup quinoa",
            "1 can chickpeas, drained and rinsed",
            "1 sweet potato, diced",
            "1 cup baby spinach",
            "1/2 cup cherry tomatoes, halved",
            "1/4 cup shredded carrots",
            "1 avocado, sliced",
            "2 tbsp olive oil",
            "Salt and black pepper to taste",
            "1 tbsp tahini",
            "1 tbsp lemon juice",
            "1 tbsp maple syrup"
        ],
        procedure: [
            "Cook quinoa according to package instructions.",
            "Preheat the oven to 400°F (200°C).",
            "Toss the diced sweet potato with olive oil, salt, and pepper. Roast in the oven for 20-25 minutes or until tender.",
            "In a small bowl, mix tahini, lemon juice, maple syrup, and a splash of water to make a dressing.",
            "Assemble the bowl with cooked quinoa, roasted sweet potatoes, chickpeas, baby spinach, cherry tomatoes, shredded carrots, and sliced avocado.",
            "Drizzle with tahini dressing and serve."
        ],
        description: "A colorful and nutritious vegan bowl packed with a variety of fresh vegetables, grains, and a tangy tahini dressing.",
        rating: 4.5,
        author: "Chef Anna Green",
        datePosted: "2023-11-05",
        readyIn: "35 minutes",
        serving: "2 servings"
    },
    {
        id: 3,
        title: "Chocolate Lava Cake",
        category: "Other",
        image: "https://www.allrecipes.com/thmb/9vlX3vmUX8K2NfdVG0UWDAhhKYw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7272577-67dd531d7b4a48dbb254dcdaafa658d4.jpg",
        ingredients: [
            "100g dark chocolate, chopped",
            "100g unsalted butter",
            "2 large eggs",
            "2 egg yolks",
            "1/4 cup granulated sugar",
            "1/4 cup all-purpose flour",
            "Powdered sugar, for dusting",
            "Vanilla ice cream, for serving"
        ],
        procedure: [
            "Preheat oven to 425°F (220°C). Grease four ramekins with butter and dust with flour.",
            "Melt the dark chocolate and butter together in a heatproof bowl over simmering water.",
            "In another bowl, whisk the eggs, egg yolks, and sugar until light and fluffy.",
            "Fold the melted chocolate mixture into the egg mixture, then sift in the flour and gently combine.",
            "Pour the batter into the prepared ramekins and bake for 12-14 minutes until the edges are firm but the center is still soft.",
            "Allow to cool for 1 minute before inverting onto plates. Dust with powdered sugar and serve with vanilla ice cream."
        ],
        description: "A decadent dessert featuring a warm, gooey center of rich chocolate. Perfect for a special occasion or an indulgent treat.",
        rating: 4.9,
        author: "Pastry Chef Lisa White",
        datePosted: "2023-09-18",
        readyIn: "30 minutes",
        serving: "4 servings"
    },
    {
        id: 4,
        title: "Grilled Chicken Salad",
        category: "Lunch",
        image: "https://www.eatwell101.com/wp-content/uploads/2018/08/Grilled-Chicken-Salad-recipe-1.jpg",
        ingredients: [
            "200g chicken breast",
            "Mixed salad greens",
            "Cherry tomatoes, halved",
            "Cucumber, sliced",
            "1/4 cup feta cheese, crumbled",
            "2 tbsp olive oil",
            "Salt and black pepper to taste",
            "1 tbsp balsamic vinegar"
        ],
        procedure: [
            "Season the chicken breast with salt and black pepper.",
            "Grill the chicken over medium heat until cooked through, about 5-7 minutes per side.",
            "Slice the grilled chicken into strips.",
            "In a large bowl, combine salad greens, cherry tomatoes, cucumber, and feta cheese.",
            "Add the grilled chicken to the salad.",
            "Drizzle with olive oil and balsamic vinegar before serving."
        ],
        description: "A light and healthy salad featuring grilled chicken and fresh vegetables, topped with feta cheese and a simple dressing.",
        rating: 4.7,
        author: "Chef John Doe",
        datePosted: "2023-10-20",
        readyIn: "20 minutes",
        serving: "2 servings"
    },
    {
        id: 5,
        title: "Mushroom Risotto",
        category: "Dinner",
        image: "https://www.simplyrecipes.com/thmb/s7A4ppC52NpK3jzvA7bC2M7F1DU=/2000x1500/filters:no_upscale()/Simply-Recipes-Mushroom-Risotto-LEAD-04-ff3b7d4ef3ef4c8c9605d6a2d7cfb4a5.jpg",
        ingredients: [
            "1 cup Arborio rice",
            "200g mushrooms, sliced",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "4 cups vegetable broth",
            "1/4 cup parmesan cheese, grated",
            "2 tbsp olive oil",
            "Salt and black pepper to taste"
        ],
        procedure: [
            "Heat olive oil in a large pan over medium heat. Add onion and garlic, and sauté until soft.",
            "Add mushrooms and cook until they release their moisture and become golden brown.",
            "Stir in Arborio rice and cook for 2 minutes until lightly toasted.",
            "Gradually add vegetable broth, one cup at a time, stirring constantly until the liquid is absorbed before adding more.",
            "Continue until the rice is creamy and the grains are tender.",
            "Stir in parmesan cheese, and season with salt and black pepper before serving."
        ],
        description: "A creamy and flavorful risotto made with Arborio rice and fresh mushrooms, perfect for a comforting meal.",
        rating: 4.6,
        author: "Chef Jane Smith",
        datePosted: "2023-11-10",
        readyIn: "40 minutes",
        serving: "4 servings"
    },
    {
        id: 6,
        title: "Shrimp Tacos",
        category: "Dinner",
        image: "https://www.loveandlemons.com/wp-content/uploads/2021/03/shrimp-tacos.jpg",
        ingredients: [
            "200g shrimp, peeled and deveined",
            "Corn tortillas",
            "1 avocado, diced",
            "1/4 cup red onion, diced",
            "1/2 cup cabbage, shredded",
            "1 lime, juiced",
            "2 tbsp olive oil",
            "Salt and black pepper to taste",
            "1 tsp chili powder"
        ],
        procedure: [
            "Season shrimp with chili powder, salt, and black pepper.",
            "Heat olive oil in a pan over medium heat. Cook shrimp until pink and opaque, about 2-3 minutes per side.",
            "Warm the corn tortillas in a separate pan or microwave.",
            "Assemble the tacos with cooked shrimp, cabbage, diced avocado, and red onion.",
            "Drizzle with lime juice before serving."
        ],
        description: "Flavorful shrimp tacos with avocado, cabbage, and a hint of lime, perfect for a quick and delicious meal.",
        rating: 4.7,
        author: "Chef Emily Brown",
        datePosted: "2023-11-15",
        readyIn: "20 minutes",
        serving: "3 servings"
    }
];

export default recipes;