import React from 'react';
import PropTypes from 'prop-types'

const styles = {
    iconbutton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: "black",
        width: "60px",
        height: "60px",
        background: "white",
        position: "fixed",
        bottom: "50px",
        right: "50px",
        cursor: "pointer",
        borderRadius: "100%",
        fontSize: "40px"
    },

}
export default class AppHeading extends React.Component {
    render() {
        return <div style={styles.iconbutton}>
            +
        </div>
    }
}
