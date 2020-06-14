import React from 'react'
import PropTypes from 'prop-types'

const BreadCrump = props => {
    return (
        <div className="container-xxx bg-danger" style={{marginTop:'70px'}}>
            {/* <div>
                <a className="homebtn left" href="#" />
                <div className="left">
                <ul className="bcrumbs">
                    <li>/</li>
                    <li><a href="#">Hotels</a></li>
                    <li>/</li>
                    <li><a href="#">U.S.A.</a></li>
                    <li>/</li>					
                    <li><a href="#" className="active">New York</a></li>					
                </ul>				
                </div>
                <a className="backbtn right" href="#" />
            </div> */}
            <div className="clearfix bg-dark" />
            <div className="brlines bg-success" />
        </div>
    )
}

BreadCrump.propTypes = {

}

export default BreadCrump
