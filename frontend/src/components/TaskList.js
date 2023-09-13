import React from 'react';
import Task from './Task'

export default class TaskList extends React.Component {
    render() {
        return <ul>
            <Task />
            <Task />
            <Task />
            <Task />
        </ul>
    }
}