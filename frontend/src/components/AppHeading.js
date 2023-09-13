import React from 'react';
import PropTypes from 'prop-types'

import logo from '../assets/logo.png'
const style = {
    div: {
        backgroundColor: '#282c34',
        borderRadius: '10px',
        // width: 'calc(100% - 40px)',
        border: '#3e4148 solid 5px',
        // margin: '2px',
        // padding: '20px',
        display: 'flex',
        // justifyContent: 'center',
        // flexDirection: 'column',
        // alignItems: 'center'
    },

    h1: {
        margin: 0,
        padding: '1vmin 0',
        color: '#FFFFFF',
        fontSize: "5vmin"
    },

    logo: {
        height: "10vmin"

    },

    nextToEachOther: {
        display: 'flex',
        width: 'calc(100% - 40px)',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
}
export default class AppHeading extends React.Component {
    static get propTypes () {
        return {
          children: PropTypes.any.isRequired
        }
      }
    render() {
        return (
            <div style={style.div}>
                <div>
                    <img src={logo} alt='logo' style={style.logo} />
                </div>
                <div style={style.nextToEachOther}>
                    <h1 style={style.h1}>{this.props.children}</h1>
                </div>
            </div>
        )
    }
}