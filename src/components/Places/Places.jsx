import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import PlaceModal from "./PlaceModal";
import Img1 from "../../assets/places/img1.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/img2.jpg";
import Img4 from "../../assets/places/img3.jpg";
import Img5 from "../../assets/places/img4.jpg";
import Img6 from "../../assets/places/img5.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Spiti Valley",
    location: "Ladakh",
    description: "Experience the thrill of adventure in the high-altitude desert valley of Spiti.",
    price: 6700,
    type: "Adventure",
    category: "Adventure",
    detailedDescription: "Spiti Valley's enchanting beauty and Buddhist monastery life is mesmerizing. This cold desert mountain located between India and the Tibetan plateau in the Himalayan region is perfect for adventure lovers and trekking enthusiasts.",
    packageIncludes: [
      "7-day guided tour",
      "Accommodation in local guesthouses and camps",
      "Trekking and mountain biking experiences",
      "Visit to ancient monasteries",
      "Stargazing sessions",
      "River rafting adventure",
      "Local cuisine experiences"
    ]
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "Agra, India",
    description: "Explore the iconic symbol of love and immerse yourself in Mughal architecture.",
    price: 6700,
    type: "Cultural Relax",
    category: "Cultural",
    detailedDescription: "The Taj Mahal, a UNESCO World Heritage Site, is one of the most famous monuments in the world. Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this architectural marvel is a symbol of eternal love.",
    packageIncludes: [
      "3-day Agra tour",
      "Guided visit to Taj Mahal at sunrise and sunset",
      "Exploration of Agra Fort and Fatehpur Sikri",
      "Traditional Mughlai cuisine experience",
      "Marble inlay workshop visit",
      "Accommodation in a heritage hotel",
      "Cultural performances showcasing Mughal era arts"
    ]
  },
  {
    img: Img3,
    title: "Kerala Backwaters",
    location: "Kerala, India",
    description: "Cruise through serene backwaters and experience the tranquility of God's Own Country.",
    price: 5500,
    type: "Nature Retreat",
    category: "Eco-Tourism",
    detailedDescription: "The Kerala Backwaters offer a serene and picturesque experience unique to this region. Cruise through a network of canals, lagoons, and lakes on traditional houseboats known as 'kettuvallams'.",
    packageIncludes: [
      "5-day Kerala backwaters tour",
      "Houseboat stay with all meals",
      "Village walks and interaction with locals",
      "Ayurvedic spa treatment",
      "Visit to spice and tea plantations",
      "Traditional Kerala dance performance",
      "Cooking class featuring Kerala cuisine"
    ]
  },
  {
    img: Img4,
    title: "Varanasi Ghats",
    location: "Varanasi, India",
    description: "Immerse in the spiritual aura of one of the world's oldest living cities.",
    price: 4800,
    type: "Spiritual Journey",
    category: "Religious Places",
    detailedDescription: "Varanasi, one of the oldest living cities in the world, is famous for its ghats along the River Ganges. These ghats are the center of various activities including religious rituals, yoga, and cremations.",
    packageIncludes: [
      "4-day spiritual retreat in Varanasi",
      "Boat ride on the Ganges at sunrise and sunset",
      "Attendance at the Ganga Aarti ceremony",
      "Guided tour of ancient temples",
      "Yoga and meditation sessions",
      "Visit to Sarnath, the birthplace of Buddhism",
      "Traditional Banarasi silk shopping experience"
    ]
  },
  {
    img: Img5,
    title: "Rann of Kutch",
    location: "Gujarat, India",
    description: "Experience the mesmerizing beauty of the world's largest salt desert.",
    price: 7200,
    type: "Desert Adventure",
    category: "Adventure",
    detailedDescription: "The Rann of Kutch is one of the largest salt deserts in the world, offering a surreal landscape that seems to stretch endlessly. During the Rann Utsav festival, this barren land transforms into a carnival of music, dance, and handicrafts.",
    packageIncludes: [
      "6-day Rann of Kutch adventure",
      "Stay in traditional Bhungas (mud houses)",
      "Camel safari in the white desert",
      "Participation in Rann Utsav festivities",
      "Visit to local handicraft villages",
      "Flamingo watching tour",
      "Gujarati cuisine cooking workshop"
    ]
  },
  {
    img: Img6,
    title: "Andaman Islands",
    location: "Andaman and Nicobar Islands, India",
    description: "Discover paradise on Earth with pristine beaches and rich marine life.",
    price: 8500,
    type: "Beach Paradise",
    category: "Beach",
    detailedDescription: "The Andaman Islands offer a perfect tropical getaway with their crystal-clear waters, white sandy beaches, and lush forests. Explore the rich marine life through snorkeling and scuba diving in places like Havelock Island and Neil Island.",
    packageIncludes: [
      "7-day island hopping tour",
      "Snorkeling and scuba diving sessions",
      "Glass-bottom boat ride",
      "Trek to Mount Harriet National Park",
      "Visit to Cellular Jail and Ross Island",
      "Bioluminescent beach night tour",
      "Seafood barbecue on the beach"
    ]
  }
];

const Places = ({ handleOrderPopup }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const openModal = (place) => {
    setSelectedPlace(place);
  };

  const closeModal = () => {
    setSelectedPlace(null);
  };

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                key={index}
                {...item}
                onClick={() => openModal(item)}
              />
            ))}
          </div>
        </section>
      </div>
      {selectedPlace && (
        <PlaceModal
          place={selectedPlace}
          onClose={closeModal}
          handleOrderPopup={handleOrderPopup}
        />
      )}
    </>
  );
};

export default Places;
