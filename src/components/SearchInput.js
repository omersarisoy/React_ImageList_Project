import React from "react";

class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {entry:""}    
    }
    
    onFormSubmit = (event) => {     
        event.preventDefault();  
        this.props.onSearchSubmit(this.state.entry); 

    }

    
    render(){
        return(
            <div className="ui segment ">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text" 
                            placeholder="search..." 
                            onChange= {(ömer) => this.setState({entry: ömer.target.value})}
                            value = {this.state.entry}
                            ></input>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput