import React from 'react'
import TodoList from './components/todo-list'  
import EditBox from './components/edit-box'
  
class App extends React.Component {
    state = { items: [] }

    addItem = (description) => {
        const r1 = Math.round(Math.random() * 10) | Math.round(Math.random() * 100);
        const id = '' + new Date().getTime() + '-' + r1;
        
        this.setState(({items}) => ({
            items: [
            ...items,
            { id, description }
            ]
        }));
    };

    deleteItem = (id) => {
        this.setState(({items}) => ({
            items: items.filter(item => item.id !== id),
        }));
    }

    render() {
        const { items } = this.state;
        return (
        <div className="main">
            <EditBox addItem={this.addItem} />
            <TodoList 
                deleteItem={this.deleteItem} 
                items={items}
            />
        </div>
        );
    }
}

export default App