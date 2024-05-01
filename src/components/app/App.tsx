import Wraper from "../wrapper/Wraper";
import "./App.css";

function App() {

  return (
    <div className="tidings-container">
      <div className="news-container">
        <Wraper
          wrapertype="news"
          icon="https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square"
          title="Чехия обвинила ГРУ РФ во взрывах на складах со снарядами для ВСУ">
        </Wraper>
      </div>
    </div>
  )
}

export default App
