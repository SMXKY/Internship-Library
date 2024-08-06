import logoIcon from "../../images-and-icons/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logoIcon} alt="logo-icon" className="header-icon" />
      <p>My Library</p>
    </div>
  );
}
