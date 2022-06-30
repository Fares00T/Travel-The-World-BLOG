import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Header() {
  const { user } = useContext(Context);
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span data- className='headerTitleSm'>
          Travel The World <br /> and make your experience
        </span>
        <span className='headerTitleLg'>Blog</span>
        <div className='topRight'>
          {user ? (
            <Link to='/'></Link>
          ) : (
            <ul className='topList'>
              <li className='topListItem headerTitlebtn'>
                <Link className='link' to='/register'>
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <img
        className='headerImg'
        src='https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?b=1&k=20&m=155439315&s=170667a&w=0&h=N2BzlH2GYabhWN0LXZTqTkVODuTb8qDAESQYCPzIig8='
        alt=''
      />
    </div>
  );
}
