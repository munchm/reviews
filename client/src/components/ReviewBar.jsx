import React from 'react';
import styled from 'styled-components';
import icons from '../iconKeys.js';


const StyledBar = styled.div`
  height: 225px;
  width: 715px;
  padding-top: 32px;
  border-bottom: 1px solid #eeeeef;
  border-top: 1px solid #eeeeef;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;

`;

const StyledHeader = styled.h4`
  font-size: 20px;
  line-height: 26px;
  color: #2b273c;
  font-weight: 700;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 15px;
`;


const StyledForm = styled.form`
  // height: 15px;
`;

const StyledSearch = styled.input`
  outline: none;
  height: 22px;
  width: 252px;
  padding: 13px 16px;
  border-radius: 4px 0px 0px 4px;
  position: relative;
  float: left;
  border-right: 0px;
  border-color: #eeeeef;
  border-collapse: collapse;

`;

const StyledButton = styled.button`
  height: 52px;
  width: 50px;
  background-color: #f43a3a;
  border-radius: 0px 4px 4px 0px;
  border-color: #eeeeef;
  border-collapse: collapse;
  border: 0;
  position: relative;
  float: left;
  outline: none;
  &:hover {
    cursor: pointer;

   }
   border-top: 0px;
   border-left: 0px;
`;

class ReviewBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    e.preventDefault();
    this.props.searchReviews(this.state.value);
  }

  render() {
    return (
      <StyledBar>
        <StyledHeader>
          Recommended Reviews
        </StyledHeader>
        <StyledForm>
          <StyledSearch onChange={(e) => this.setState({ value: e.target.value })} value={this.state.value} type='text' placeholder='Search within reviews' ></StyledSearch>
          <StyledButton onClick={(e) => this.handleClick(e)}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d={icons.searchIcon}></path></svg></span></StyledButton>
        </StyledForm>
      </StyledBar>
    );
  }
}

export default ReviewBar;