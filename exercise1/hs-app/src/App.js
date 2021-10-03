import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Main from './components/Main';
import Notifications from './components/Notifications';
import Sidebar from './components/Sidebar';
import MainNews from './components/MainNews';
import joukkoliikennePhoto from './photos/joukkoliikenne.png';
import koronaPhoto from './photos/koronavirus.png';
import hesburgerPhoto from './photos/hesburger.png';

function App() {

  const notificationData = [
    {
      topic: 'KULTTUURI',
      body: 'Kokoelma Mad Max -elokuvassa nähtyjä autoja tulee myyntiin huutokaupassa'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Betonibrutalismi on tärkeä osa suomalaista modernia arkkitehtuuria'
    },
    {
      topic: 'JUOKSU',
      body: 'Kaisa Mäkäräinen osallistui ensimmäistä kertaa vuoristojuoksuun ja voitti heti'
    }
  ];

  const mainNewsData = [
    {
      photo: joukkoliikennePhoto,
      topic: 'Joukkoliikenne |',
      body: 'Metro- ja raitioliikenne uhkaavat seisahtua kahdeksi päiväksi lakon vuoksi',
      tag: 'Kaupunki 15:42'
    },
    {
      photo: koronaPhoto,
      topic: 'Koronavirus |',
      body: 'Hallituksessa jälleen kiistaa ravintolarajoituksista',
      tag: 'Politiikka 14:54'
    },
    {
      photo: hesburgerPhoto,
      topic: 'Työelämä |',
      body: 'Murskakritiikkiä saanut Hesburger lupaa korjata työolojaan',
      tag: 'Talous 16:11'
    },
  ];

  const sideNewsData = [
    {
      itemNumber: '1',
      topic: 'Verotus |',
      body: 'Hallituksen päätös uudesta arvon­nousu­verosta nostatti kovan kiistan: Tästä verossa on kyse, HS käy läpi hyödyt ja haitat'
    },
    {
      itemNumber: '2',
      topic: 'Sijoittaminen |',
      body: 'Hallituksen päätös uudesta arvon­nousu­verosta nostatti kovan kiistan: Tästä verossa on kyse, HS käy läpi hyödyt ja haitat'
    },
    {
      itemNumber: '3',
      topic: 'Urheilu |',
      body: 'Hallituksen päätös uudesta arvon­nousu­verosta nostatti kovan kiistan: Tästä verossa on kyse, HS käy läpi hyödyt ja haitat'
    },
    {
      itemNumber: '4',
      topic: 'HS-analyysi |',
      body: 'Hallituksen päätös uudesta arvon­nousu­verosta nostatti kovan kiistan: Tästä verossa on kyse, HS käy läpi hyödyt ja haitat'
    },
    {
      itemNumber: '5',
      topic: 'Viihde |',
      body: 'Hallituksen päätös uudesta arvon­nousu­verosta nostatti kovan kiistan: Tästä verossa on kyse, HS käy läpi hyödyt ja haitat'
    },
    {
      itemNumber: '6',
      topic: 'Kotimaa |',
      body: 'Hallituksen päätös uudesta arvon­nousu­verosta nostatti kovan kiistan: Tästä verossa on kyse, HS käy läpi hyödyt ja haitat'
    },
    {
      itemNumber: '7',
      topic: 'Talous |',
      body: 'Hallituksen päätös uudesta arvon­nousu­verosta nostatti kovan kiistan: Tästä verossa on kyse, HS käy läpi hyödyt ja haitat'
    },
  ];

  return (
    <div className="backgroundColor">
      <Header />
      <Subheader />
      <div>
        {
          notificationData.map(element => <Notifications topic={element.topic} body={element.body}/>)
        }
        <Main />
        <div className="newsBox">
          <span className="main">
          {
            mainNewsData.map(element => <MainNews photo={element.photo} topic={element.topic} body={element.body} tag={element.tag}/>)
          }
          </span>
          <span className="side"><span className="bigHeader">Luetuimmat</span>
          {
            sideNewsData.map(element => <Sidebar itemNumber={element.itemNumber} topic={element.topic} body={element.body}/>)
          }
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
