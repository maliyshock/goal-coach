import React, {Component} from 'react';
import { firebaseApp } from "../firebase";
import { connect } from 'react-redux'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

// const user = firebaseApp.auth().currentUser;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    signOut(){
        firebaseApp.auth().signOut().then(
                function() {},
                function(error) {}
            );

    }

    render() {
        return(
            <div>
                <header>
                    <small>you logined as {this.props.user.email}</small>
                </header>
                <h1>Goals</h1>
                <AddGoal/>
                <hr/>
                <h2>List of goals:</h2>
                <GoalList/>
                <hr/>
                <CompleteGoalList/>
                <button className={'btn btn-warning'} onClick={ () => this.signOut() }>Sign Out</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {user}
}

export default connect(mapStateToProps, null)(App);