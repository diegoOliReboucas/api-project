import * as C from './Styles'
import React from 'react'
import { useAppSelector } from "../../redux/hooks/useAppSelector"
import { setThemeColor } from '../../redux/reducers/themeReducer'
import { useDispatch } from "react-redux"
import './flags.css'
import engrenagem from '../../assets/engre.png'

type moneyProps = {
  titulo: string
 }

export const Money = ({titulo}: moneyProps) =>{
  const dispatch = useDispatch()
  const theme = useAppSelector(state => state.theme)

  const [themeRight, setThemeRight] = React.useState('-170px')
  const [conversao, setConversao] = React.useState<string>('Real')
  const [convertido, setConvertido] = React.useState<string>('Real')
  const [valor, setValor] = React.useState<number>(0)
  const [nomeConversao, setNomeConversao] = React.useState<string>('Real');
  const [nomeConvertido, setNomeConvertido] = React.useState<string>('Real');
  const [codigo, setCodigo] = React.useState<string>('BRL');
  const [codigo2, setCodigo2] = React.useState<string>('BRL');
  const [valorConvertido, setValorConvertido] = React.useState<number>(0);

  React.useEffect(() => {
    console.log(theme.color)
  },[theme.color])

  const handleClick = async (e:React.FormEvent) => {
    e.preventDefault()

    try{
      let r = await fetch (`https://economia.awesomeapi.com.br/last/${codigo}-${codigo2}`)
      let json = await r.json()
      setValorConvertido(valor * json[codigo + codigo2].bid);
    }catch{
      alert('error')
    }
  }

  React.useEffect(() => {

    switch (conversao) {
      case 'Real':
        setCodigo('BRL');
        break;
      case 'Dolar':
        setCodigo('USD');
        break;
      case 'Euro':
        setCodigo('EUR');
        break;
      case 'Libra':
        setCodigo('GBP');
        break;
      case 'Bitcoin':
        setCodigo('BTC');
        break;
    }

    setNomeConversao(conversao);
  }, [conversao]);

  React.useEffect(() => {
    switch (convertido) {
      case 'Real':
        setCodigo2('BRL');
        setValorConvertido(0)
        break;
      case 'Dolar':
        setCodigo2('USD');
        setValorConvertido(0)
        break;
      case 'Euro':
        setCodigo2('EUR');
        setValorConvertido(0)
        break;
      case 'Libra':
        setCodigo2('GBP');
        setValorConvertido(0)
        break;
    }

    setNomeConvertido(convertido);
  }, [convertido]);

  return (
    <C.Main>
    <h1>{titulo}</h1>
    <C.Body theme={theme.color}>
      <h2>Conversor de Moedas</h2>
      <C.Conteudo>
        <C.Conversao theme={theme.color}>
          <C.converterDe>
            <label htmlFor="converterDe">Converter de:</label>
            <select
              onChange={(e) => setConversao(e.target.value)}
              id="converterDe"
            >
              <option id="BRL" value="Real">
                Real Brasileiro
              </option>
              <option id="USD" value="Dolar">
                Dolar Americano
              </option>
              <option id="GBP" value="Libra">
                Libra Esterlina
              </option>
              <option id="EUR" value="Euro">
                Euro
              </option>
              <option id="BTC" value="Bitcoin">
                Bitcoin
              </option>
            </select>
          </C.converterDe>
          <C.converterPara>
            <label htmlFor="converterPara">Converter para:</label>
            <select
              onChange={(e) => setConvertido(e.target.value)}
              id="converterPara"
            >
              <option value="Real">Real Brasileiro</option>
              <option value="Dolar">Dolar Americano</option>
              <option value="Libra">Libra Esterlina</option>
              <option value="Euro">Euro</option>
            </select>
          </C.converterPara>
          <C.Valor>
            <label htmlFor="valor">Valor:</label>
            <input
              onChange={(e) => setValor(Number(e.target.value))}
              id="valor"
              type="number"
            />
          </C.Valor>
          <button disabled={codigo === codigo2 ? true : false} onClick={handleClick}>Converter</button>
        </C.Conversao>

        <C.Convertido>
          <C.convertidoConteudo theme={theme.color}>
            <C.Resultado1>
              <div className={`${conversao}`}></div>
              <p>{nomeConversao}</p>
              <h4>{valor}</h4>
            </C.Resultado1>
            <C.Seta theme={theme.color}>⇩</C.Seta>
            <C.Resultado2>
              <div className={`${convertido}`}></div>
              <p>{nomeConvertido}</p>
              <h4>{valorConvertido.toFixed(2).replace('.', ',')}</h4>
            </C.Resultado2>
          </C.convertidoConteudo>
        </C.Convertido>
      </C.Conteudo>
    </C.Body>

    <C.Theme style={{right: themeRight}}>
    <img onClick={() => themeRight === '0' ? setThemeRight('-170px') : setThemeRight('0')} src={engrenagem} alt="engrenagem" />
      <C.themeColors>
        <h4>Theme Colors</h4>
        <C.Colors>
          <div onClick={() => dispatch(setThemeColor('purple'))} className='purple'></div>
          <div onClick={() => dispatch(setThemeColor('#8B0000'))}className='red'></div>
          <div onClick={() => dispatch(setThemeColor('#483D8B'))} className='blue'></div>
          <div onClick={() => dispatch(setThemeColor('#2F4F4F'))} className='green'></div>
          <div onClick={() => dispatch(setThemeColor('#CD853F'))} className='orange'></div>
        </C.Colors>
      </C.themeColors>
    </C.Theme>
  </C.Main>
  )
}