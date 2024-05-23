import "./header.css";
import travelLogo from '/public/travel_logo.png';
export default function Header() {
  return (
    <header>
      <img src={travelLogo} alt="Travel logo"/>
      <h1>Travel<span></span>Journal</h1>
    </header>
  );
}
