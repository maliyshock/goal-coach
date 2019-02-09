import React, {Component} from 'react';
import {completeGoalRef, goalRef} from "../firebase";
import {connect} from 'react-redux'

class GoalItem extends Component {

    completeGoal(){

        const {email} = this.props.user;
        const {title, goalKey} = this.props.goal;

        goalRef.child(goalKey).remove();
        completeGoalRef.push({email, title});
    }

    render() {
        const {title, email} = this.props.goal;

        return(
            <div>
                <strong>{title}</strong>
                <span> was submitted by <em>{email}</em></span>
                <button
                    className={'btn btn-sm btn-primary'}
                    onClick={ ()=>this.completeGoal() }
                >
                    Complete
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, null)(GoalItem);