import React from 'react'
import ListItem from './list-item'

class TodoList extends React.Component {

    render() {
        const { deleteItem, items } = this.props;
        if (items.length > 0) {
            return (
            <div className="todolist">
            {
                items.map((item) => 
                (<ListItem 
                    key={item.id} 
                    item={item}
                    deleteItem={deleteItem}
                />))
            }
            </div>);
        } else {
            return (
            <div>
                <h3>nothing to-do</h3>
            </div>
            );
        }
    }
};

export default TodoList;