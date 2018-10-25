import React ,{Component} from 'react'

class ListComp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            newItem : "",
            list : []
        }
        this.addItem=this.addItem.bind(this);
        this.onChangeItem=this.onChangeItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    addItem(e){
        this.setState({
            newItem:'',
           list: [...this.state.list,this.state.newItem]
        });
        e.preventDefault()
    }
    onChangeItem(e){
        this.setState({
            newItem: e.target.value
        })
        console.log(this.state.newItem)
    }
    deleteItem(e){

    }

    render() {
       return(
        <div>
            <h1>Todo List</h1>
            <ul>
                {this.state.list.map((listItem,index)=>{
                return(
                        <div>
                        <li key={index}>{listItem}</li>
                            <span onClick={this.deleteItem} key={index}>X</span>
                        </div>)
                }
                )}
            </ul>
            <form onSubmit={this.addItem}>
            <input onChange={this.onChangeItem} value={this.state.newItem}/>
            <button> add | {this.state.list.length}</button>
            </form>
        </div>)
    }
}

export default ListComp;