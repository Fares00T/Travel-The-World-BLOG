import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [cats, setCats] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=dfc7d56f13d185444d81a3aa09a78789`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>WEATHER</span>
        <div className='whether'>
          <div className='app'>
            <div className='search'>
              <input
                className='textBox'
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
                type='text'
              />
            </div>
            <div className='container'>
              <div className='top'>
                <div className='location'>
                  <p>{data.name}</p>
                </div>
                <div className='temp'>
                  {data.main ? <h1>{data.main.temp.toFixed()}C°</h1> : null}
                </div>
              </div>

              {data.name !== undefined && (
                <div className='bottom'>
                  <div className='humidity'>
                    <p className='textinfo'>Humidity : </p>
                    {data.main ? (
                      <p className='bold'>{data.main.humidity}%</p>
                    ) : null}
                  </div>
                  <div className='wind'>
                    <p className='textinfo'>Wind Speed : </p>
                    {data.wind ? (
                      <p className='bold'>{data.wind.speed.toFixed()} (M/S)</p>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='sidebarItem sidebarItemCat'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <div>
            {cats.map((c, index) => (
              <Link key={index} to={`/?cat=${c.name}`} className='link'>
                <li className='sideBarListItem'>{c.name}</li>
              </Link>
            ))}
          </div>
        </ul>
      </div>

      <div className='sidebarItem sidebarItemSocial '>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
}
