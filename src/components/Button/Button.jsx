//импорт стилей
import "./styles.css";

function Button() {
  const isGetButton = true;
  const buttonType = "submit";

  return (
    <button className="main-button" type={buttonType}>
      {isGetButton ? "GET" : "SEND"}
    </button>
  );
}

//экспорт по умолчанию (он может быть только один в файле)
export default Button;
