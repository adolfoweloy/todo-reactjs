import React from 'react'

class EditBox extends React.Component {
    add = (event) => {
        event.preventDefault();
        const { addItem } = this.props;
        const value = this.editBox.value;

        // callback to the main component
        addItem(value);

        // clean up input text
        this.editBox.value = '';
        this.editBox.focus();
    }

    render() {
        return (
            <div>
                <h1>TO-DO LIST</h1>
                <div className="editbox">
                    <form>
                        <input 
                            type="text" 
                            ref={node => this.editBox = node}
                            placeholder="task description" 
                        />
                        <button className="add" onClick={this.add}>add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditBox;