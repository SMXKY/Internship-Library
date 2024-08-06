import CallToActionButton from "./CallToActionButton";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import "../../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <div className="header-btns">
        <CallToActionButton isImgBtn={false} name="Join" />
        <CallToActionButton isImgBtn={false} name="Login" />
      </div>
    </div>
  );
}
