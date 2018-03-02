import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateFoundHome } from '../../ducks/reducer';

class WizardFour extends Component {
    render(){
        const { updateFoundHome } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={ () => updateFoundHome(true) }>Yes</button></Link>
                        <Link to="/wFive"><button onClick={ () => updateFoundHome(false) }>No </button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}

export default connect(null, { updateFoundHome })(WizardFour);