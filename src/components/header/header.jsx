import './header.css';
import img from '../../images/memo-emoji_2022-04-13/memo-emoji.png';
function Header() {
  return (
    <>
      <div className="header-container">
        <img src={img} alt="" />
        <h1 className="headline">to do list</h1>
      </div>
    </>
  );
}

export default Header;
