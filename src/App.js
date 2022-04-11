import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {

  //variable round
  const [round, setRound] = useState(0)

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
  const [botMoney1, setBotMoney1] = useState(3000)
  const [botMoney2, setBotMoney2] = useState(3000)
  const [botMoney3, setBotMoney3] = useState(3000)
  const [playerMoney, setPlayerMoney] = useState(3000)

  //random value for money bots
  const [botMoneyRandom1, setBotMoneyRandom1] = useState(0)
  const [botMoneyRandom2, setBotMoneyRandom2] = useState(0)
  const [botMoneyRandom3, setBotMoneyRandom3] = useState(0)


  //function for start game:
  const start = () => {
    //variables for the numbre roulette
    const min = 0
    const max = 50

    //variable for money bot
    const minMoney = 1

    //random variable for bots
    if(botMoney1 === 0){
      setBotMoney1(0)
    }

    else if(botMoney2 === 0 ){
      setBotMoney2(0)
    }

    else if(botMoney3 === 0 ){
      setBotMoney3(0)
    }

    else {
      setBot1(Math.floor(Math.random() * (max-min)) + min)
      setBot2(Math.floor(Math.random() * (max-min)) + min)
      setBot3(Math.floor(Math.random() * (max-min)) + min)
    }

      //random variable for roulette
      setRoulette(Math.floor(Math.random() * (max - min)) + min)

    //random value for money bots
    setBotMoneyRandom1(Math.floor(Math.random() * (botMoney1-minMoney)) + minMoney)
    setBotMoneyRandom2(Math.floor(Math.random() * (botMoney2-minMoney)) + minMoney)
    setBotMoneyRandom3(Math.floor(Math.random() * (botMoney3-minMoney)) + minMoney)

    //condition for win
    if (valueRoul === roulette){
      setBotMoney1(botMoney1-botMoneyRandom1)
      setBotMoney2(botMoney2-botMoneyRandom2)
      setBotMoney3(botMoney3-botMoneyRandom3)
    }

    if(bot1 === roulette){
      setBotMoney2(botMoney2-botMoneyRandom2)
      setBotMoney3(botMoney3-botMoneyRandom3)
      setPlayerMoney(playerMoney - money)

    }

    if(bot2 === roulette){
      setBotMoney3(botMoney3-botMoneyRandom3)
      setBotMoney1(botMoney1-botMoneyRandom1)
      setPlayerMoney(playerMoney - money)
    }

    if(bot3 === roulette){
      setBotMoney1(botMoney1-botMoneyRandom1)
      setBotMoney2(botMoney2-botMoneyRandom2)
      setPlayerMoney(playerMoney - money)

    }

    setRound(round + 1)

  }

    
  const restart = () =>{
    //random variable for bots
    setBot1(0)
    setBot2(0)
    setBot3(0)

    //random value for money bots
    setBotMoneyRandom1(0)
    setBotMoneyRandom2(0)
    setBotMoneyRandom3(0)
    setMoney(0)

    //random variable for roulette
    setRoulette(0)

    setPlayerMoney(3000)
    setBotMoney1(3000)
    setBotMoney2(3000)
    setBotMoney3(3000)

    setValueRoul(0)

    setRound(0)
  }


  return <>
    <main>
      <div class='bot1'>
        <p>Bot 1</p>
        <p>Amount: {botMoney1} $</p>
        <p>Bet: {botMoneyRandom1} $</p>
        <p>Number: {bot1}</p>
      </div>

      <div class='sec'>
        <div class='bot2'>
          <p>Bot 2</p>
          {<p>Amount: {botMoney2} $</p>}
          <p>Bet: {botMoneyRandom2} $</p>
          <p>Number: {bot2}</p>
        </div>

        <div class='roulette'>
          <p>{roulette}</p>
        </div>

        <div class='bot3'>
          <p>Bot 3</p>
          <p>Amount: {botMoney3} $</p>
          <p>Bet: {botMoneyRandom3} $</p>
          <p>Number: {bot3}</p>
        </div>
      </div>

      <div class='player'>
        <p>Player</p>
        <p>Amount: {playerMoney} $</p>
        <p>Bet: {money} $</p>
        <p>Number: {valueRoul}</p>
        <input 
          value={money} 
          name="valueMoney" 
          onChange={e=> setMoney(e.target.value)}/>

        <input 
          value={valueRoul} 
          name="valueRoulette" 
          onChange={e=> setValueRoul(e.target.value)}
          />
      </div>
    </main>

      <footer>
        <button 
        onClick={start}
        disabled={playerMoney === 0 
        || playerMoney < money 
        || valueRoul > 50
        || botMoney1 === 0
        && botMoney2 === 0
        && botMoney3 === 0 }>
          start
        </button>
        {
           valueRoul > 50 &&
            <p class='para'>Error value roulette</p> ||

          playerMoney !== 0 &&
            <p class='para'>Round: {round}</p>
        }
        <button
          onClick={restart}
          disabled={playerMoney !== 0
          && botMoney1 !== 0
          && botMoney2 !== 0
          && botMoney3 !== 0}>restart</button>
      </footer>
  </>
}

export default App;
