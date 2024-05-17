import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const  swap = () =>{
     setFrom(to)
     setTo(from)
     setConvertedAmount(amount)
     setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
        <div 
            className="w-full  h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                
            }}
        >
            <div className="w-full">
                <div style={{width:'600px'}} className=" mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute text-xl left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md  bg-violet-600 hover:bg-violet-500
                                font-semibold text-white px-4 py-2"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency) }
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-violet-600 hover:bg-violet-500 font-semibold  text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
    </>
  )
}

export default App
