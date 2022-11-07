import config from 'settings/appConfig.json';

function Header() {
  return (
    <header className="page-header">
      <div className="brand">
        <p>{config.name}</p>
      </div>
    </header>
  );
}
export default Header;
