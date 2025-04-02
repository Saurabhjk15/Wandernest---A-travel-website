import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/Nandi.jpg";
import Img2 from "../../assets/places/Newyork.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Nandi Hills in Bangalore: One of the Best Travel Destinations",
    description: 
      "Once Tipu Sultan's summer retreat, Nandi Hills is one of the best places in India for hiking and bird watching. On the hill, there are temples that date back to the Chola period, which makes it an ancient place in India." +
      " Nandi Hills is a popular weekend getaway in the Bengaluru area. The area of Bandi Hills is a source of abundant rivers, which include the South Pennar, North Palar, Arkavathi, Chitravathi, and Papaghni. Talking of the past, there were many kings and kingdoms that ruled the Nandi Hills." +
      "Some of the famous ones include the Marathas, Tipu Sultan, Paleyagars of Chikkaballapura, and the British. Formerly, the Nandi Hills were known as 'Nandigiri,' and it functioned as a summer getaway for the Tipu Sultan and British owing to its excellent air and serene surroundings at an elevation of 4850 feet. When it comes to the weather, it is good all year, allowing for leisurely strolls and other activities for thrill seekers. There's no doubt the fact that Nandi Hills is an excellent hiking location and, of course, an aesthetic place to travel. What makes it a popular attraction are the adjacent places such as Brahmagiri, Channakeshava Betta, Skandagiri, and the cliff known as  which is worth seeing. Bicycles are the best way to explore the magnificent terrain of Nandi Hills, a decision that not only accords with ecological concerns but also shows to be economically wise. This lovely location, which caters to nature lovers' tastes, provides a perfect environment for a relaxed and pleasurable riding journey. To truly immerse oneself in the exceptional ambience, it is best to start the journey early in the day, allowing for the once-in-a-lifetime opportunity to watch the glorious dawn that blesses the undulating crests of these renowned hills.",
    author: "Saurabh",
    date: "Sept. 06, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "1. New York City\n\n" +
      "The city that never sleeps, New York City is a global center for commerce, finance, and culture. It's a melting pot of diverse communities, offering an unparalleled urban experience.\n\n" +
      "Key Attractions:\n" +
      "- Iconic Skyline: Featuring skyscrapers like the Empire State Building and One World Trade Center\n" +
      "- Times Square: Famous for its billboards, theaters, and vibrant atmosphere\n" +
      "- Central Park: An 843-acre oasis offering green spaces and various recreational activities\n" +
      "- Broadway: Home to world-class theater productions\n" +
      "- Metropolitan Museum of Art: Houses an extensive collection of art and artifacts\n" +
      "- Statue of Liberty: A symbol of freedom and democracy\n" +
      "- Brooklyn Bridge: An architectural marvel and popular spot for walks and views\n\n" +
      "Cultural Highlights:\n" +
      "- Diverse Neighborhoods: Explore unique areas like Chinatown, Little Italy, and Harlem\n" +
      "- Culinary Scene: From street food to Michelin-starred restaurants\n" +
      "- Museums: MoMA, Guggenheim, and American Museum of Natural History\n" +
      "- Shopping: High-end boutiques on Fifth Avenue to vintage shops in Brooklyn\n\n" +
      "Best Time to Visit: April to June or September to November for mild weather\n\n" +
      "How to Get Around:\n" +
      "- Subway: Extensive network covering most of the city\n" +
      "- Taxis and Ride-sharing: Readily available but can be expensive during peak hours\n" +
      "- Walking: Many neighborhoods are pedestrian-friendly\n\n" +
      "Tips for Visitors:\n" +
      "- Purchase a MetroCard for easy subway and bus access\n" +
      "- Book popular attractions in advance to avoid long queues\n" +
      "- Explore beyond Manhattan to experience the city's diverse boroughs\n" +
      "- Try a slice of New York-style pizza, a local staple\n\n" +
      "New York City offers an endless array of experiences, from world-class museums and theaters to diverse neighborhoods and iconic landmarks. Its energy and diversity make it a must-visit destination for travelers from around the globe.",
    author: "Saurabh",
    date: "Sept. 06, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "1. Tokyo\n" +
      "As the capital city of Japan, Tokyo is a bustling metropolis that blends traditional and modern elements. It's a city of contrasts, with towering skyscrapers, serene temples, and vibrant neighborhoods.\n\n" +
      "Key Attractions:\n" +
      "- Shibuya Crossing: Known for its bustling pedestrian crossing and Shibuya 109 shopping mall\n" +
      "- Senso-ji Temple: One of Tokyo's most popular temples, famous for its colorful torii gate and Nakamise shopping street\n" +
      "- Tokyo Tower: A symbol of Tokyo, offering panoramic views of the city\n" +
      "- Harajuku: A trendy area known for its unique fashion and youth culture\n" +
      "- Shinjuku: Offers a vibrant nightlife scene with Shinjuku Gyoen National Garden nearby\n" +
      "- Asakusa: A traditional district with Senso-ji Temple and Nakamise shopping street\n" +
      "- Meiji Shrine: A serene Shinto shrine dedicated to Emperor Meiji and Empress Shoken\n" +
      "- Tsukiji Outer Market: Famous for its fresh seafood and sushi restaurants\n\n" +
      "Cultural Highlights:\n" +
      "- Cuisine: From world-class sushi to street food like takoyaki and ramen\n" +
      "- Technology: Experience cutting-edge gadgets and robotics in Akihabara\n" +
      "- Pop Culture: Explore anime and manga culture in Akihabara and Nakano Broadway\n" +
      "- Traditional Arts: Watch sumo wrestling or attend a kabuki theater performance\n" +
      "- Gardens: Visit tranquil Japanese gardens like Rikugien and Koishikawa Korakuen\n\n" +
      "Best Time to Visit: Late March to early April for cherry blossoms, or October to November for autumn colors\n\n" +
      "How to Get Around:\n" +
      "- Tokyo Metro and JR Lines: Extensive and efficient subway and train network\n" +
      "- Taxis: Convenient but can be expensive\n" +
      "- Walking: Many neighborhoods are best explored on foot\n\n" +
      "Tips for Visitors:\n" +
      "- Purchase a Suica or Pasmo card for easy public transportation access\n" +
      "- Try onsen (hot spring) experiences for relaxation\n" +
      "- Visit a themed café or restaurant for a unique dining experience\n" +
      "- Respect local customs and etiquette, such as being quiet on public transport\n" +
      "- Consider a day trip to nearby attractions like Mount Fuji or Kamakura\n\n" +
      "Tokyo offers a unique blend of ultra-modern and traditional experiences, making it a fascinating destination for travelers. From its efficient public transportation to its diverse neighborhoods, Tokyo provides endless opportunities for exploration and cultural immersion.",
    author: "Saurabh",
    date: "Sept. 06, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
