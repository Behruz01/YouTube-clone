import home from "../../images/ui-71.png";
import tranding from "../../images/ui-01.png";
import combined from "../../images/ui-45.png";
import libery from "../../images/documents-11.png";
import others from "../../images/others-07.png";
import tech from "../../images/tech-25.png";
import start from "../../images/ui-02.png";
import like from "../../images/ui-03.png";
import music from "../../images/Combined-Shape.png";
import game from "../../images/tech-02.png";
import more from "../../images/chevron-down.png";
import user from "../../images/Oval.png";
import settings from "../../images/Combined-Shape (1).png";

function Menu(props) {
  return (
    <>
      <div className="container p-8  ">
        <div className="wrapper">
          <ul className="item ">
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={home} alt="icon" />
              <p className="text-red-700">Home</p>
            </li>
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={tranding} alt="icon" />
              <p className="text-gray-400">Trending</p>
            </li>
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={combined} alt="icon" />
              <p className="text-gray-400">Subscriptions</p>
            </li>
          </ul>

          <ul className="item mt-14  ">
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={libery} alt="icon" />
              <p className="text-gray-400">Libery</p>
            </li>
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={others} alt="icon" />
              <p className="text-gray-400">History</p>
            </li>
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={tech} alt="icon" />
              <p className="text-gray-400">Watch laterr</p>
            </li>
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={start} alt="icon" />
              <p className="text-gray-400">Favourites</p>
            </li>
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={like} alt="icon" />
              <p className="text-gray-400">Liked videos</p>
            </li>
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={music} alt="icon" />
              <p className="text-gray-400">Music</p>
            </li>
            <li className="list flex align-center gap-2">
              <img className="menuIcon" src={game} alt="icon" />
              <p className="text-gray-400">Games</p>
            </li>

            <li className="list flex  gap-2">
              <img className="miniIcon" src={more} alt="icon" />
              <p className="text-gray-400">Show more</p>
            </li>
          </ul>
          <h3 className="mt-9 font-bold ">Subscriptions</h3>
          <ul className="follow item mt-9">
            <li className="folli flex gap-2">
              <img src={user} alt="" />
              <p className="text-gray-400">Gussie Singleton</p>
            </li>{" "}
            <li className="folli flex gap-2">
              <img src={user} alt="" />
              <p className="text-gray-400">Nora Francis</p>
            </li>{" "}
            <li className="folli flex gap-2">
              <img src={user} alt="" />
              <p className="text-gray-400">Belle Briggs</p>
            </li>{" "}
            <li className="folli flex gap-2">
              <img src={user} alt="" />
              <p className="text-gray-400">Eunice Cortez</p>
            </li>{" "}
            <li className="folli flex gap-2">
              <img src={user} alt="" />
              <p className="text-gray-400">Emma Hanson</p>
            </li>
            <li className="list folli flex gap-2 mt-24">
              <img src={settings} alt="" />
              <p className="text-gray-300 ">Setting</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
