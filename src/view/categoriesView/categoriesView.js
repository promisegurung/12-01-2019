import React from "react";
import "./categoriesView.css";

import Cat1 from "../../assets/categoriesView/cat-1.jpeg";
import Cat2 from "../../assets/categoriesView/cat-2.jpeg";
import Cat3 from "../../assets/categoriesView/cat-3.jpeg";
import Cat4 from "../../assets/categoriesView/cat-4.jpeg";
import Cat5 from "../../assets/categoriesView/cat-5.jpeg";
import Cat6 from "../../assets/categoriesView/cat-6.jpeg";

const sixCategories = [
  {
    id: "cat-1",
    title: "Restarants and Banquets",
    desc:
      "Top Quality Restaurants and Banqueting Halls. - From Street Style Food to 5-stars.",
    src: Cat1
  },
  {
    id: "cat-2",
    title: "Bars and Clubs",
    desc: "Looking for a great place to spend your weekend? - Look no further.",
    src: Cat2
  },
  {
    id: "cat-3",
    title: "Festivals and Concerts",
    desc:
      "Outdoor June Festivals to the indoor Wembley Arena. - The home of festivals, concerts and events.",
    src: Cat3
  },
  {
    id: "cat-4",
    title: "Travel",
    desc:
      "Airline Tickets, holiday packages and all things travel. - All approved and quality assured vendors.",
    src: Cat4
  },
  {
    id: "cat-5",
    title: "Ceremony and Celebrations",
    desc:
      "Weddings, baby showers, birthdays or any special occasions. - From venues to organisers to photographers.",
    src: Cat5
  },
  {
    id: "cat-6",
    title: "Businesses and Services",
    desc:
      "Large Businesses to one person freelancers. - For all your large jobs and your odd jobs.",
    src: Cat6
  }
];
const View = () => {
  return (
    <div className="categories-view fade">
      <div className="default-categories">
        {sixCategories.map(cat => {
          return (
            <div className="categories" id={cat.id}>
              <img id="cat-img" src={cat.src} />
              <div className="cat-desc">
                <div id="cat-title">{cat.title}</div>
                <div id="cat-desc">
                  {cat.desc.split("-")[0]} <br />
                  {cat.desc.split("-")[1]}
                </div>
              </div>
            </div>
          );
        })}
        <div className="see-more-categories">
          <p>See More Categories</p>
        </div>
      </div>
    </div>
  );
};

export default View;
