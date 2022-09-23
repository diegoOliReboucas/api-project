import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  h1{
    margin-bottom: 2rem;
    color: white;
  }
`;

export const Body = styled.div`
  h2{
  background: ${props => props.theme};
  color: white;
  padding: 15px;
  text-align: center;
  }
`;

export const Conteudo = styled.div`
  display: flex;
`;

export const Conversao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #ccc;
  padding: 20px 20px;

  button{
  border-radius: 25px;
  padding: 10px;
  color: white;
  background: ${props => props.theme};
  border: 0;
  cursor: pointer;

  &:disabled{
    opacity: .5;
    cursor: initial;
  }
  }

  select, input{
    padding: 5px 10px;
    border: 1px solid ${props => props.theme};

    &:focus{
      border: 1px solid ${props => props.theme}
    }
  }
`;

export const converterDe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const converterPara = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Valor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Convertido = styled.div`
  background: #ccc;
  padding: 10px;
`;

export const convertidoConteudo = styled.div`
  border: 1px solid ${props => props.theme};
  height: 270px;
  width: 200px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
`;

export const Resultado1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const Resultado2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Seta = styled.div`
  position: absolute;
  top: 315px;
  font-size: 4rem;
  color: ${props => props.theme};
  opacity: .1;
`;

export const Theme = styled.div`
 color: white;
 position: absolute;
 display: flex;
 gap: 10px;
 transition: all ease 1s;

  img{
    max-width: 35px;
    max-height: 35px;
    cursor: pointer;

    &:hover{
      animation: rotate 5s infinite;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }to {
      transform: rotate(360deg);
    }
  }
`;
export const themeColors = styled.div`
  background-color: #fff;
  color: #000;
  height: 50px;
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

`;
export const Colors = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  .orange, .red, .blue, .green, .purple{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
  }
  .orange{
    background-color: #CD853F;
  }
  .red{
    background-color: #8B0000;
  }
  .blue{
    background-color: #483D8B;
  }
  .green{
    background-color: #2F4F4F;
  }
  .purple{
    background-color: purple;
  }
`;