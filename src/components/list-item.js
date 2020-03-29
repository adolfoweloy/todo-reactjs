import React from 'react'

class ListItem extends React.Component {
    del = () => {
      const { item, deleteItem } = this.props;
      deleteItem(item.id);
    }
    
    render() {
      const { item } = this.props;
      
      return (
        <div className="listItem">
          <div>{item.description}</div>
          <button className="delete" onClick={this.del}>x</button>
        </div>
      )
    }
};

export default ListItem;