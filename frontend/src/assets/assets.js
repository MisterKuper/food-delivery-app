// UI and main images
import logo from './logo.png'
import logo_text from './logo_text.png'
import search_icon from './search_icon.png'
import basket_icon from './basket_icon.png'
import header_img from './header_img.png'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import facebook_icon from './facebook_icon.png'
import instagram_icon from './instagram_icon.png'
import linkedin_icon from './linkedin_icon.png'
import play_store from './play_store.png'
import app_store from './app_store.png'
import cross_icon from './cross_icon.png'
import profile_icon from './profile_icon.png'
import logout_icon from './logout_icon.png'
import bag_icon from './bag_icon.png'

// menu categories
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

// menu images (dishes)
import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

export const assets = {
    logo,
    logo_text,
    search_icon,
    basket_icon,
    header_img,
    add_icon_white,
    add_icon_green,
    remove_icon_red,
    facebook_icon,
    instagram_icon,
    linkedin_icon,
    play_store,
    app_store,
    cross_icon,
    profile_icon,
    logout_icon,
    bag_icon
}

export const menu_list = [
    {
        menu_name: "Salads",
        menu_image: menu_1
    },
    {
        menu_name: "Soups",
        menu_image: menu_2
    },
    {
        menu_name: "Meat",
        menu_image: menu_3
    },
    {
        menu_name: "Side dishes",
        menu_image: menu_4
    },
    {
        menu_name: "Pastes",
        menu_image: menu_5
    },
    {
        menu_name: "Pizza",
        menu_image: menu_6
    },
    {
        menu_name: "Sushi",
        menu_image: menu_7
    },
    {
        menu_name: "Desserts",
        menu_image: menu_8
    }
]

export const food_list = [
    {
        _id: '1',
        name: 'Greek Salad',
        image: food_1,
        price: 20,
        description: 'A fresh and light salad made with crunchy cucumbers, juicy tomatoes, sweet bell peppers, red onions, and Kalamata olives. Topped with cubes of feta cheese and drizzled with fragrant olive oil, with a sprinkle of oregano.',
        category: 'Salads'
    },
    {
        _id: '2',
        name: 'Caesar Salad',
        image: food_2,
        price: 20,
        description: 'A timeless favorite with crisp romaine lettuce, crunchy croutons, and shaved Parmesan cheese, all tossed in a creamy Caesar dressing made from anchovies, garlic, and lemon. Garnished with additional Parmesan and a hint of black pepper.',
        category: 'Salads'
    },
    {
        _id: '3',
        name: 'Caprese Salad',
        image: food_3,
        price: 25,
        description: 'A simple yet elegant salad of ripe tomatoes, fresh mozzarella cheese, and basil leaves. Drizzled with extra-virgin olive oil and balsamic reduction, and seasoned with sea salt and freshly ground black pepper.',
        category: 'Salads'
    },
    {
        _id: '4',
        name: 'Cobb Salad',
        image: food_4,
        price: 28,
        description: 'A hearty and satisfying salad composed of chopped romaine lettuce, crispy bacon, hard-boiled eggs, grilled chicken, avocado, cherry tomatoes, and crumbled blue cheese. Served with a choice of dressing, offering a rich mix of textures and flavors.',
        category: 'Salads'
    },
    {
        _id: '5',
        name: 'Chicken Noodle Soup',
        image: food_5,
        price: 25,
        description: 'A comforting classic with tender chicken pieces, egg noodles, and a medley of vegetables in a flavorful chicken broth.',
        category: 'Soups'
    },
    {
        _id: '6',
        name: 'Tomato Basil Soup',
        image: food_6,
        price: 26,
        description: 'A rich and velvety soup made from ripe tomatoes and fresh basil, simmered to perfection and blended into a smooth, creamy texture.',
        category: 'Soups'
    },
    {
        _id: '7',
        name: 'French Onion Soup',
        image: food_7,
        price: 30,
        description: 'A savory and aromatic soup featuring caramelized onions in a rich beef broth, topped with a slice of toasted baguette and melted Gruyère cheese.',
        category: 'Soups'
    },
    {
        _id: '8',
        name: 'Minestrone Soup',
        image: food_8,
        price: 30,
        description: 'A hearty and nutritious Italian soup filled with seasonal vegetables, beans, and pasta in a tomato-based broth.',
        category: 'Soups'
    },
    {
        _id: '9',
        name: 'Beef Stroganoff',
        image: food_9,
        price: 30,
        description: 'Tender strips of beef sautéed with onions and mushrooms in a creamy, savory sauce made with sour cream and mustard.',
        category: 'Meat'
    },
    {
        _id: '10',
        name: 'Roast Chicken',
        image: food_10,
        price: 32,
        description: 'Juicy and flavorful whole chicken, seasoned with a blend of herbs and spices, then roasted to golden perfection.',
        category: 'Meat'
    },
    {
        _id: '11',
        name: 'BBQ Ribs',
        image: food_11,
        price: 32,
        description: 'Succulent pork ribs slow-cooked and glazed with a tangy, smoky barbecue sauce. Finished on the grill for a perfect caramelized exterior, these ribs are tender, juicy, and packed with flavor.',
        category: 'Meat'
    },
    {
        _id: '12',
        name: 'Baked Salmon',
        image: food_12,
        price: 35,
        description: 'Fresh salmon fillet seasoned with herbs and lemon, then baked until perfectly flaky and tender.',
        category: 'Meat'
    },
    {
        _id: '13',
        name: 'Garlic Mashed Potatoes',
        image: food_13,
        price: 25,
        description: 'Creamy and smooth mashed potatoes blended with roasted garlic for a rich, savory flavor',
        category: 'Side dishes'
    },
    {
        _id: '14',
        name: 'Roasted Vegetables',
        image: food_14,
        price: 28,
        description: 'A colorful medley of seasonal vegetables, such as carrots, bell peppers, zucchini, and red onions, roasted to caramelized perfection.',
        category: 'Side dishes'
    },
    {
        _id: '15',
        name: 'Potato Wedges',
        image: food_15,
        price: 30,
        description: 'Crispy and golden brown potato wedges seasoned with a blend of herbs and spices.',
        category: 'Side dishes'
    },
    {
        _id: '16',
        name: 'Pilaf',
        image: food_16,
        price: 28,
        description: 'A fragrant and savory rice dish cooked with aromatic spices, vegetables, and often complemented with meat or seafood.',
        category: 'Side dishes'
    },
    {
        _id: '17',
        name: 'Spaghetti Carbonara',
        image: food_17,
        price: 30,
        description: 'Classic Italian pasta dish made with al dente spaghetti tossed in a creamy sauce of eggs, Pecorino Romano cheese, and crispy pancetta.',
        category: 'Pastes'
    },
    {
        _id: '18',
        name: 'Fettuccine Alfredo',
        image: food_18,
        price: 28,
        description: 'Smooth and creamy Alfredo sauce made with butter, heavy cream, and Parmesan cheese, coating perfectly cooked fettuccine noodles.',
        category: 'Pastes'
    },
    {
        _id: '19',
        name: 'Penne Arrabbiata',
        image: food_19,
        price: 28,
        description: 'Spicy and flavorful pasta dish featuring penne noodles tossed in a robust tomato sauce infused with garlic, red chili peppers, and olive oil.',
        category: 'Pastes'
    },
    {
        _id: '20',
        name: 'Lasagna',
        image: food_20,
        price: 28,
        description: 'Layered pasta dish with rich meat sauce, creamy béchamel, and melted cheese, alternated with tender lasagna noodles.',
        category: 'Pastes'
    },
    {
        _id: '21',
        name: 'Margherita Pizza',
        image: food_21,
        price: 32,
        description: 'A classic pizza topped with a simple yet delicious combination of fresh tomato sauce, slices of mozzarella cheese, and fresh basil leaves.',
        category: 'Pizza'
    },
    {
        _id: '22',
        name: 'Pepperoni Pizza',
        image: food_22,
        price: 35,
        description: 'A crowd-pleasing favorite with a generous layer of spicy pepperoni slices on top of a rich tomato sauce and melted mozzarella cheese.',
        category: 'Pizza'
    },
    {
        _id: '23',
        name: 'Quattro Stagioni Pizza',
        image: food_23,
        price: 35,
        description: 'A delightful pizza representing the four seasons with distinct sections topped with artichokes, ham, mushrooms, and black olives.',
        category: 'Pizza'
    },
    {
        _id: '24',
        name: 'BBQ Chicken Pizza',
        image: food_24,
        price: 37,
        description: 'A savory pizza featuring tender pieces of grilled chicken, tangy barbecue sauce, red onions, and cilantro.',
        category: 'Pizza'
    },
    {
        _id: '25',
        name: 'California Roll (8 szt.)',
        image: food_25,
        price: 21,
        description: 'A popular sushi roll filled with imitation crab meat (surimi), creamy avocado, and crunchy cucumber, wrapped in seaweed and rice, and often topped with sesame seeds or tobiko (fish roe).',
        category: 'Sushi'
    },
    {
        _id: '26',
        name: 'Spicy Tuna Rol (8 szt.)',
        image: food_26,
        price: 37,
        description: 'A flavorful roll featuring fresh tuna mixed with spicy mayo sauce, combined with cucumber for a refreshing crunch.',
        category: 'Sushi'
    },
    {
        _id: '27',
        name: 'Dragon Roll (8 szt.)',
        image: food_27,
        price: 37,
        description: 'An eye-catching sushi roll with eel and cucumber on the inside, topped with thinly sliced avocado and drizzled with a sweet eel sauce.',
        category: 'Sushi'
    },
    {
        _id: '28',
        name: 'Salmon Nigiri (8 szt.)',
        image: food_28,
        price: 37,
        description: 'A simple yet exquisite sushi consisting of a slice of fresh, raw salmon placed atop a small mound of vinegared rice.',
        category: 'Sushi'
    },
    {
        _id: '29',
        name: 'Tiramisu',
        image: food_29,
        price: 25,
        description: 'A classic Italian dessert made with layers of coffee-soaked ladyfingers, creamy mascarpone cheese, and a dusting of cocoa powder',
        category: 'Desserts'
    },
    {
        _id: '30',
        name: 'Cheesecake',
        image: food_30,
        price: 21,
        description: 'A smooth and creamy dessert with a graham cracker crust, featuring a rich filling made from cream cheese, eggs, and sugar.',
        category: 'Desserts'
    },
    {
        _id: '31',
        name: 'Chocolate Fondant',
        image: food_31,
        price: 25,
        description: 'A luxurious dessert with a molten chocolate center encased in a rich chocolate cake.',
        category: 'Desserts'
    },
    {
        _id: '32',
        name: 'Apple Pie',
        image: food_32,
        price: 21,
        description: 'A timeless dessert with a flaky, buttery crust filled with spiced apples. ',
        category: 'Desserts'
    },
]