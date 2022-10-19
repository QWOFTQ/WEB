import axios from 'axios'
import React from 'react'
import Coin from '../../components/Coin'
import styles from '../../styles/Coin.module.css'

var axios = require('axios');



axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

export default function CoinList({coinData}) {
  console.log(coinData)
  const coins = coinData.coins
  return (
      <div className={styles.container}>
      <h1>Coin List</h1>
      <div className={styles.coinContainer}>

      {
        coins.map((coin) => {
          return (
            <div key ={coin.id} className={styles.coinItem}>
              <Coin coin={coin}/>

            </div>
          )
        })}
    </div>
    </div>
  )
}


export const getStaticProps = async () => {
  const result = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0np')
  
  return {
    props: {
      coinData: result.data,
    }, revalidate: 10,
  }
} 

