import React, {Component} from 'react';
import { connect } from 'react-redux'
import { goalRef } from '../firebase';
import { setGoals } from '../actions/index';
import GoalItem from './GoalItem';

class GoalList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goals: []
        }
    }

    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach( goal => {
                const {email, title} = goal.val();
                const goalKey = goal.key;
                goals.push( {email, title, goalKey} );
            });

            this.props.setGoals(goals);
        })
    }

    render() {
        return(
            <div>
                {
                    this.props.goals.map( (goal, index) => {
                        return <GoalItem key={index} goal={goal}/>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    const { goals } = state;
    return { goals };
}

export default connect(mapStateToProps, {setGoals} )(GoalList);