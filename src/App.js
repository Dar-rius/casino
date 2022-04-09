import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  //value for player
  const [valueRoul, setValueRoul] = useState(0)
  
  //value money for player
  const [money, setMoney] = useState(0)
  
  //random variable for roulette
  const [roulette, setRoulette] = useState(0)

  //random variable for bots
  const [bot1, setBot1] = useState(0)
  const [bot2, setBot2] = useState(0)
  const [bot3, setBot3] = useState(0)

  //money for bots and player
  const botMoney1 = 3000
  const botMoney2 = 3000
  const botMoney3 = 3000
  const playerMoney = 3000 

  //random value for money bots
  const [botMoneyRandom1, setBotMoneyRandom1] = useState(0)
  const [botMoneyRandom2, setBotMoneyRandom2] = useState(0)
  const [botMoneyRandom3, setBotMoneyRandom3] = useState(0)

  let valueRoulFinal = 0
  let moneyFinal = 0


  //function for start game:
  const start = () => {
    //variables for the numbre roulette
    const min = 0
    const max = 50

    //variable for money bot
    const minMoney = 1
    const maxMoney = 3000

    //random variable for bots
      setBot1(Math.floor(Math.random() * (max-min)) + min)
      setBot2(Math.floor(Math.random() * (max-min)) + min)
      setBot3(Math.floor(Math.random() * (max-min)) + min)

    //random value for money bots
    setBotMoneyRandom1(Math.floor(Math.random() * (maxMoney-minMoney)) + minMoney)
    setBotMoneyRandom2(Math.floor(Math.random() * (maxMoney-minMoney)) + minMoney)
    setBotMoneyRandom3(Math.floor(Math.random() * (maxMoney-minMoney)) + minMoney)

    //random variable for roulette
    setRoulette(Math.floor(Math.random() * (max - min)) + min)

    valueRoulFinal = setValueRoul
    moneyFinal = setMoney
  }


  return (
    <main>
      <div class='bot1'>
        <p>Bot1</p>
        <p>{botMoney1}</p>
        <p>{botMoneyRandom1}</p>
        <p>{bot1}</p>
      </div>

      <div class='sec'>
        <div class='bot2'>
          <p>Bot2</p>
          <p>{botMoney2}</p>
          <p>{botMoneyRandom2}</p>
          <p>{bot2}</p>
        </div>

        <div class='roulette'>
          <p>Roulette</p>
          <p>{roulette}</p>
        </div>

        <div class='bot3'>
          <p>Bot3</p>
          <p>{botMoney3}</p>
          <p>{botMoneyRandom3}</p>
          <p>{bot3}</p>
        </div>
      </div>

      <div class='player'>
        <p>Player</p>
        <p>{playerMoney}</p>
        <p>{moneyFinal}</p>
        <p>{valueRoulFinal}</p>
        <input value={money} name="valueMoney" onChange={e=> setMoney(e.target.money)}/>
        <input value={valueRoul} name="valueRoulette" onChange={e=> setValueRoul(e.target.valueRoul)}/>
      </div>

      <footer>
        <button onClick={start}>
          start
        </button>
        <button>restart</button>
      </footer>
    </main>
  );
}

export default App;
