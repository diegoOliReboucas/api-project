import React from "react"
import { Input } from "../Input/Index"
import * as C from './Styles'
import './BgTypes.css'

type pokeProps = {
  titulo: string
}

export const Pokemon = ({titulo}: pokeProps) =>{
  const [poke, setPoke] = React.useState<string>('')
  const [nome, setNome] = React.useState<string>('pikachu');
  const [id, setId] = React.useState<number>(25);
  const [imgpoke, setImgpoke] = React.useState<string>(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  );
  const [hp, setHp] = React.useState<number>(35);
  const [type, setType] = React.useState<string>('electric');
  const [height, setHeight] = React.useState<number>(4);
  const [weight, setWeight] = React.useState<number>(60);
  const [hability, setHability] = React.useState<string>('static');
  const [error, setError] = React.useState('');

  const handleClick = async (e: React.FormEvent) =>{
    e.preventDefault()

    try{
      let r = await fetch (`https://pokeapi.co/api/v2/pokemon/${poke}`)
      let json = await r.json()

      setNome(json.forms[0].name);
      setId(json.id);
      setHp(json.stats[0]['base_stat']);
      setHeight(json.height);
      setWeight(json.weight);
      setType(json.types[0].type.name);
      setHability(json.abilities[0].ability.name);
      setImgpoke(json.sprites.other['official-artwork']['front_default']);

      setError('')
    } catch {
      setError('Pokemon nao encontrado')
    }
  }

  return (
    <C.divMain>
      <h1>{titulo}</h1>
      <form>
        <Input
        type='text'
          placeholder="Digite o nome do pokemon"
          button="Buscar"
          value={poke}
          onClick={handleClick}
          onChange={(e) => setPoke(e.target.value)}
        />
      </form>
     <p style={{marginBottom: '10px'}}> {error ? <p>Pokemon nao indentificado</p> : ''}</p>

      <C.mainCard className={`${type}`}>
        <C.headerCard>
          <h3>{nome + ' #' + id}</h3>
          <span>hp {hp}</span>
        </C.headerCard>
        <img src={imgpoke} alt={`${id}`} />
        <C.informacoesCard>
          <h3>Informações</h3>
          <p>
            O pokemon {nome} é do tipo {type}, sua altura é: {height / 10} m e
            seu peso é: {weight / 10} kg, e sua principal habilidade é: {hability}
          </p>
        </C.informacoesCard>
      </C.mainCard>
    </C.divMain>
  )
}