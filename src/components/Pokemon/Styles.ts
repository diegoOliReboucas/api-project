import styled from "styled-components";

export const divMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h1{
    margin-bottom: 2rem;
  }
`;

export const mainCard = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;

  img{
  max-width: 200px;
  align-self: center;
  }
`;

export const headerCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: #000;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;

  h3{
    margin: 0;
  }
  span{
  background: #fff;
  color: #000;
  padding: 3px 5px;
  font-weight: bold;
  border-radius: 10px;
  }
`;

export const informacoesCard = styled.div`
  h3{
  background-color: #000;
  color: #fff;
  margin-bottom: 0;
  padding: 5px;
  }
  p{
  background: #fff;
  color: #000;
  margin-top: 0;
  border-radius: 0 0 10px 10px;
  padding: 5px;
  opacity: .8;
  }
`;