import { MenuItem, Testimonial, FlavorCardProps } from './types';

export const FLAVORS: FlavorCardProps[] = [
  {
    name: "Grandma's Red Velvet",
    tagline: "The one that started it all",
    description: "Rich cocoa sponge, heritage recipe cream cheese frosting, topped with a secret red crumb.",
    price: "$4.50",
    image: "https://picsum.photos/id/1080/600/600",
    badges: ["Signature", "Fan Favorite"]
  },
  {
    name: "Salted Caramel Dream",
    tagline: "Sweet meets savory",
    description: "Brown sugar sponge injected with house-made caramel, topped with sea salt buttercream.",
    price: "$4.75",
    image: "https://picsum.photos/id/431/600/600",
    badges: ["Bestseller"]
  },
  {
    name: "Lemon Lavender",
    tagline: "A garden party in a bite",
    description: "Zesty lemon cake infused with fresh lavender buds, finished with a honey glaze.",
    price: "$4.50",
    image: "https://picsum.photos/id/425/600/600",
    badges: ["Seasonal"]
  },
  {
    name: "Triple Chocolate Decadence",
    tagline: "For the true chocoholic",
    description: "Dark chocolate cake, milk chocolate ganache core, white chocolate shavings.",
    price: "$5.00",
    image: "https://picsum.photos/id/292/600/600",
    badges: []
  },
  {
    name: "Vanilla Bean Cloud",
    tagline: "Pure and simple",
    description: "Madagascan vanilla bean sponge with the lightest whipped buttercream you've ever tasted.",
    price: "$4.25",
    image: "https://picsum.photos/id/312/600/600",
    badges: ["Classic"]
  },
  {
    name: "Strawberry Shortcake",
    tagline: "Summer all year round",
    description: "Vanilla sponge with fresh strawberry compote filling and strawberry cream.",
    price: "$4.75",
    image: "https://picsum.photos/id/102/600/600",
    badges: ["New"]
  }
];

export const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Classic Vanilla', description: 'Madagascan vanilla bean sponge', price: '$4.00', category: 'Classic', image: 'https://picsum.photos/id/400/400/400' },
  { id: '2', name: 'Double Chocolate', description: 'Rich fudge cake with ganache', price: '$4.25', category: 'Classic', image: 'https://picsum.photos/id/401/400/400' },
  { id: '3', name: 'Spiced Carrot', description: 'Walnuts, raisins, cream cheese', price: '$4.50', category: 'Classic', image: 'https://picsum.photos/id/402/400/400' },
  { id: '4', name: 'Pumpkin Spice', description: 'Autumn spices with maple frosting', price: '$4.75', category: 'Seasonal', image: 'https://picsum.photos/id/403/400/400', isSeasonal: true },
  { id: '5', name: 'Peppermint Bark', description: 'Chocolate mint with crushed candy', price: '$4.75', category: 'Seasonal', image: 'https://picsum.photos/id/404/400/400', isSeasonal: true },
  { id: '6', name: 'The Party Box', description: '12 assorted classic flavors', price: '$45.00', category: 'Dozen Boxes', image: 'https://picsum.photos/id/405/400/400' },
  { id: '7', name: 'Chocoholic Box', description: '12 chocolate varieties', price: '$48.00', category: 'Dozen Boxes', image: 'https://picsum.photos/id/406/400/400' },
  { id: '8', name: 'Mini Sampler', description: '6 bite-sized cupcakes', price: '$12.00', category: 'Mini Bites', image: 'https://picsum.photos/id/407/400/400' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', text: "The red velvet cupcake brought me to tears. It tasted exactly like my grandmother used to make.", author: "Maria S.", role: "Local Regular", rating: 5 },
  { id: '2', text: "I drove 45 minutes just for the Salted Caramel. Worth every single second.", author: "James T.", role: "Food Blogger", rating: 5 },
  { id: '3', text: "The attention to detail is incredible. Not just a bakery, it's an art gallery you can eat.", author: "Sarah L.", role: "Wedding Planner", rating: 5 },
  { id: '4', text: "Best gluten-free options in the city, hands down. You can't even tell the difference.", author: "Mike R.", role: "Verified Customer", rating: 5 },
];