import styled from 'styled-components';

const CategoryLayout = styled.div`
  width: 60%;
  margin-left: 20%;
  border: 1px solid #deebf2;
  box-shadow: 0 0 8px rgba(0,0,0,0.15);
  height: 100%;
  float: left;
  margin-top: 40px;
  @media(max-width: 1000px) {
    width: 80%;
    margin-left: 10%;
  }
  .categoryName {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: rgb(82, 180, 200);
    font-weight: bold;
  }
`;

export { CategoryLayout };
