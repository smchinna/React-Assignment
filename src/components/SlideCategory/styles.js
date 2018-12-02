import styled from 'styled-components';
const ProximaNovaRegular = 'Proxima-Nova-Regular';
const ProximaNovaBold = 'Proxima-Nova-Bold';

const OtherImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 1vw;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 802px) {
    margin-top: 10px;
    width: 60px;
    height: 60px;
  }
`;

const ClientSection = styled.div`
  padding: 30px;
  float: left;
  width: 100%;
  text-align: center;
  background-color: #f3f7fb;
  .arrowContainer {
    width: 100%;
    font-size: 19px;
    margin-top: 20px;
    float: left;
    > button {
      background-color: rgb(21, 159, 201);
      color: white;
      white-space: nowrap;
      text-transform: uppercase;
      font-family: monospace;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(21, 159, 201);
      border-image: initial;
      padding: 10px 30px;
      border-radius: 30px;
      cursor: pointer;
    }
  }
`;

const Title = styled.h1`
  font-size: 52px;
  color: rgb(0,57,70);
  font-family: ${ProximaNovaBold};
  margin-top: 0;
  letter-spacing: 0;
  margin-bottom: 23px;
  
  @media (max-width: 500px) {
    font-size: 2em;
  }
`;

const InformationText = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: rgb(139,139,139);
  text-align: center;
  margin-top: 20px;
`;

const CustomTooltip = styled.div`
  margin-left: 10%;
  width: 80%;
  background-color: white;
  text-align: center;
  position: relative;
  margin-top: 60px;
  
  > p {
    margin: 0px;
    background: #ffff;
    padding: 45px 40px 50px 40px;
    font-family: ${ProximaNovaRegular};
    border-radius: 6px ;
    box-shadow: 0px 3px 7px rgba(182,211,234,0.35);
  }

  &:after {
    content: " ";
    width: 42px;
    height: 42px;
    background-color: #fff;
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
    position: absolute;
    bottom: -13px;
    z-index: 1;
    left: calc(50% - 21px);
  }
`;

const Container = styled.div`
  width: 100%;
  float: left;
  text-align: center;
  margin-top: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: ${({display}) => display ? display : 'flex'};
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 802px) {
    display: ${({display}) => display ? display : 'flex'};
  }

  .slick-slider {
    width: 100%;
    text-align: center;
  }
  .slick-slide{
    text-align: -webkit-center;
    transition:all 1000s ease-in-out;
    float: left;
    padding: 20px;
  }
  .slick-initialized .slick-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
  .slider-control-centerleft, .slider-control-centerright { 
    display: none;
 }
`;

const ClientImage = styled.div`
  width: auto;
  height: auto;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: ${(props) => props.showDetail ? 'flex': 'none' }
`;

const AuthorDetailSection = styled.div`
  margin-left: 20px;
 
  text-align: left;
  .user-name {
    font-size: 26px;
    line-height: 28px;
    color: #030303;
    font-family: ${ProximaNovaRegular};
    margin-bottom: 5px;
  }
  .user-profile {
    font-size: 18px;
    line-height: 28px;
    color: rgb(139,139,139);
    font-family: ${ProximaNovaRegular};
    margin: 0px;
  }
`;


export { OtherImage, ClientSection, Title, InformationText, CustomTooltip, Container, ClientImage,
  AuthorDetailSection };