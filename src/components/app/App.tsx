import Card from "../card/Card";
import "./App.css";

function App() {

  return (
    <div className="cards-container">
      <div className="card-container">
        <Card
          title="Rolling Stones новый студийный альбом"
          content="20 октября 2023 года вышел Hackney Diamonds — 24-й (или 26-й, в зависимости от того, как считать) студийный альбом Rolling Stones. Это первая новая полнометражная запись великой британской рок-группы за семь лет и первая полностью состоящая из авторского материала пластинка со времен альбома A Bigger Bang, вышедшего аж в 2005 году."
          linktext="Читать статью"
          link="https://iz.ru/1592631/oleg-sobolev/rok-dlia-frankenshteina-kakim-poluchilsia-novyi-albom-rolling-stones">
          <figure className="card-figure">
            <img className="card-image" src="../public/rollingstones.jpg" alt="Card image" />
          </figure>
        </Card>
      </div>
      <div className="card-container">
        <Card
          title="Greta Van Fleet «The Battle at Garden's Gate»"
          content="Природа не терпит пустоты. Вот пронзительный голос Роберта Планта с годами стал ниже, и появился-возник в рок'н'рольном биогеоценозе человек по имени Джош Киска, фронтмен группы Greta Van Fleet. Он голосит так, что невозможно отделаться от некого deja entendu — ощущения уже слышанного."
          linktext="Читать статью"
          link="https://stereo.ru/p/iqn9n-poka-vse-doma-novye-albomy-horoshih-vzroslyh-rok-grupp">
        </Card>
      </div>
      <div className="card-container">
        <Card
          title="The Beatles. NOW AND THEN"
          content="Пол Маккартни и Ринго Старр выпустили «последнюю» песню The Beatles «Now and Then».
            Now And Then» — демо-запись, которую Джон Леннон сделал в 1977 году с подписью «Для Пола».
            Пол придумал бас-партию, Ринго заново записал барабаны, также к песне добавили струнную секцию и использовали гитарное соло и бэк-вокал Джорджа Харрисона, которые остались в архиве студийных сессий 1995 года. Таким образом, все четыре участника The Beatles вновь объединились в одной песне."
          linktext="Читать статью"
          link="https://www.rockfm.ru/news/vossoedinenie-the-beatles-vyshla-poslednyaya-pesnya-gruppy-now-and-then">
          <figure className="card-figure">
            <img className="card-image" src="../public/beatles.jpg" alt="Card image" />
          </figure>
        </Card>
      </div>
      <div className="card-container">
        <Card
          title="Billy Gibbons «Hardware»"
          content="Гитарист-певец ZZ Top Билли Гиббонс — снова в формате трио — лабает тот же горячий хрусткий блюз-рок. Ну и чего б не делать такое и дальше вместе с ZZ Top, которые отдыхают от студии с 2012 года? Но нет, Гиббонс ищет новое с более молодым коллегой, барабанщиком Мэттом Сорумом (The Cult, Guns N’ Roses, Velvet Revolver)."
          linktext="Читать статью"
          link="https://stereo.ru/p/iqn9n-poka-vse-doma-novye-albomy-horoshih-vzroslyh-rok-grupp">
        </Card>
      </div>
    </div>
  )
}

export default App
