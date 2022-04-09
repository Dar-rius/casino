import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  //value for player
  const [value, setValue] = useState(0)
  
  //value money for player
  const [money, setMoney] = useState(0)

  //variables for the numbre roulette
  const min = 0
  const max = 50
  
  //random variable for roulette
  let roulette = Math.floor(Math.random() * (max - min)) + min 

  //random variable for bots
  let bot1 = Math.floor(Math.random() * (max-min)) + min
  let bot2 = Math.floor(Math.random() * (max-min)) + min
  let bot3 = Math.floor(Math.random() * (max-min)) + min

  //money for bots and player
  const botMoney1 = 3000
  const botMoney2 = 3000
  const botMoney3 = 3000
  const playerMoney = 3000 

  //variable for money bot
  const minMoney = 1
  const maxMoney = 3000

  //random value for money bots
  let botMoneyRandom1 = Math.floor(Math.random() * (maxMoney-minMoney)) + minMoney
  let botMoneyRandom2 = Math.floor(Math.random() * (maxMoney-minMoney)) + minMoney
  let botMoneyRandom3 = Math.floor(Math.random() * (maxMoney-minMoney)) + minMoney

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
        <input value={money} name="valueMoney" onChange={e=> setMoney(e.target.money)}/>
        <input value={value} name="valueRoulette" onChange={e=> setValue(e.target.value)}/>
      </div>

      <footer>
        <button>start</button>
        <button>restart</button>
      </footer>
    </main>
  );
}

export default App;
