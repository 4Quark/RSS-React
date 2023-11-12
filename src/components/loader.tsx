import './../styles/loader.css';

function Loader() {
  return (
    <div className="lds-ring" data-testid="loader-element">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
