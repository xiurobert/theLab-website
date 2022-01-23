import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

const StyledFAIcon = styled(FontAwesomeIcon)`
  opacity: 0.6;
  transition: 0.3s;
  transition-timing-function: ease-in-out;
  &:hover {
    color: #469EFF;
    opacity: 1;
  }
`

class ClickyIcon extends React.Component {
    url;
    icon;
    render() {
        return(
            <div className={this.props.className}>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <StyledFAIcon icon={this.props.icon} size="2x" color="black"/>
                </a>
            </div>
        );
    }
}

const StyledClickyIcon = styled(ClickyIcon)`
    font-size: 1.5em;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
`
export default StyledClickyIcon;