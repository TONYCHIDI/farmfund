import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'; 

const Container = styled.div`
    progress {
        width: 100%;
        justify-content: center;
        height: 13px;
    }

    progress[value] {
        width: ${props => props.width};
        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        width: 95%;
        height: 13px;
        background-color: #E3E1E;
        border-radius: 20px;
        box-shadow: 0 0 5px #E3E1E1 inset;
    }

    progress[value]::-webkit-progress-value {
        width: 100%;
        height: 13px;
        background-color: ${props => props.color};
        border-radius: 20px;
    }

    @media only screen and (max-width: 376px) {
        progress[value]::-webkit-progress-bar {
            background-color: #E3E1E;
            border-radius: 20px;
            box-shadow: 0 0 5px #E3E1E1 inset;
        }

        progress[value]::-webkit-progress-value {
            background-color: ${props => props.color};
            border-radius: 20px;
        }
    }

    @media only screen and (max-width: 320px) {
        progress[value]::-webkit-progress-bar {
            background-color: #E3E1E;
            border-radius: 20px;
            box-shadow: 0 0 5px #E3E1E1 inset;
        }

        progress[value]::-webkit-progress-value {
            background-color: ${props => props.color};
            border-radius: 20px;
        }
    }
`;

const ProgressBar = ({ value, max, color, width }) => {

    return (
        <Container color={color} width={width} >
            <progress value={value} max={max}  />
            <i style={{zIndex:20, font: "normal normal 14px/40px Roboto", color: "#3E5140"}}>{(value / max) * 100}%</i>
        </Container>
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
}

ProgressBar.defaultProps = {
    max: 100,
    color: '#22CF67',
    width: '300px',
}

export default ProgressBar;