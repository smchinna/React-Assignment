/* eslint-disable no-undef */
import React from "react";
import Slider from 'react-slick-16';
import PropTypes from 'prop-types';

import { OtherImage, ClientSection, Container, ClientImage, AuthorDetailSection } from './styles';
import ReactResizeDetector from 'react-resize-detector';


class SlideCategory extends React.Component {
  constructor(){
    super();
    this.state = {
      slideIndex: 0,          
      showTooltip: true,
      slideCount:1,
      mobileDiviceMode: false,
      innerWidth: 0,
      display: 'block',
      showCustomeArrow: false
    }
  }

  componentDidMount() {
    this.updateSliderImage();
    setTimeout(this.setState({display: 'flex'}), 3000)
  }
  
  /* Automatic Reload when Change the Size of device Ex: portroid to landscope*/
  onResize = () => {
    const { innerWidth } = this.state;
    if( innerWidth !== window.innerWidth ) {
      window.location.reload();
    }
  };

  /* Making Responsive Slider Count as per the Device */
  updateSliderImage = () => {
    const { categoryData } = this.props;
    if(window.innerWidth < 1000) {
      this.setState({
        slideCount: 1,
        mobileDiviceMode: false,
        innerWidth: window.innerWidth
      }) 
    }
    else {
      if(categoryData.models.length <= 3) {
        if(categoryData.modelss.length%2 != 0){
          this.setState({
            slideCount: categoryData.models.length,
            mobileDiviceMode: true,
            innerWidth: window.innerWidth
          })
        }
        else{
          this.setState({
            slideCount: categoryData.models.length-1,
            mobileDiviceMode: true,
            innerWidth: window.innerWidth
          })
        }
      }
      else {
        this.setState({
          slideCount: 3,
          mobileDiviceMode: true,
          innerWidth: window.innerWidth
        })
      }
    }
  };

  /** To Looping the Category Models */

  showSliderImages = () => {
    const { categoryData } = this.props;
    const sliderImages = categoryData.models.map((data, index) => {
      let showName;
      if(this.state.slideIndex == index) {
        showName = true;
      }
      else {
        showName = false;
      }
      return ( 
        <div key={index}>
          <div>
            <OtherImage src={data.thumb}/>
          </div>
          <ClientImage showDetail = {showName}>
            <AuthorDetailSection>
              <p className="user-name">{data.name}</p>
            </AuthorDetailSection>
          </ClientImage>
        </div>
      );
    });
    return sliderImages;
  };

  /* Custom Next Arrow Button function */
  nextModel = () => {
    const { categoryData } = this.props;
    const { slideIndex } = this.state;
    if(categoryData.models.length-1 > slideIndex) {
      this.slider.slickNext();
    }
  }

  /* Custom Prev Arrow Button function */
  prevModel = () => {
    const { slideIndex } = this.state;
    if(slideIndex != 0) {
      this.slider.slickPrev();
    }
  }

  render() {
    const { showCustomeArrow, mobileDiviceMode, slideCount, display, slideIndex } = this.state; 

    const { categoryData } = this.props;
    let settings = {
      arrows: false,
      centerMode: mobileDiviceMode,
      infinite: !showCustomeArrow,
      autoplay: !showCustomeArrow,
      dots: false,
      focusOnSelect: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      slidesToShow: slideCount,
      draggable: true,  
      swipe: true, 
      beforeChange: (currentIndex, nextIndex) => {
        this.setState({
          slideIndex: nextIndex
        })
      },
    };

    return (
      <ReactResizeDetector handleHeight onResize={this.onResize} handleWidth={this.onResize}>
        <ClientSection>
          { slideIndex !== 0 && showCustomeArrow &&
            <div className="arrowContainer">
              <button onClick={() => this.prevModel()}>
                <span className="glyphicon glyphicon-arrow-left" />Prev
              </button>
            </div>
          }
          <Container display={display}> 
            <Slider {...settings} ref={(c) => (this.slider = c)}>
              { this.showSliderImages() }             
            </Slider>
          </Container>
          { categoryData.models.length-1 > slideIndex && showCustomeArrow &&
            <div className="arrowContainer">
              <button onClick={() => this.nextModel()}>
                <span className="glyphicon glyphicon-arrow-right" /> Next
              </button>
            </div>
          }
        </ClientSection>
      </ReactResizeDetector>
    );
  }
}

SlideCategory.propTypes = {
  categoryData: PropTypes.object
}

export default SlideCategory;