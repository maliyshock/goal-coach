import React, {Component} from 'react';
import {connect} from 'react-redux'
import {completeGoalRef} from '../firebase'
import {setCompletedGoals} from '../actions'

class CompleteGoalList extends Component {

    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const {email, title} = completeGoal.val();
                completeGoals.push({email, title});
            });

            this.props.setCompletedGoals(completeGoals);
        })
    }

    clearGoals(){
        completeGoalRef.set([]);
    }


    render() {
        return(
            <div>
                {
                    this.props.completeGoals.map( (item,index) => {
                        return <div key={index}>
                                    <del>{item.title}</del>
                                    <span> Completed by <em>{item.email}</em></span>
                                </div>
                    }
                )}
                <button
                    className={'btn btn-sm btn-danger'}
                    onClick={ ()=>this.clearGoals() }
                >
                    Clear completed goals list
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {completeGoals} = state;
    return {completeGoals};
}

export default connect(mapStateToProps, {setCompletedGoals})(CompleteGoalList);