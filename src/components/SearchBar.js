import React from "react";

class SearchBar extends React.Component {
state = {term: ''}

onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
}
        render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                </div>
            </form>   
        </div>
        )
    }
}

//////  THE CODES ARE IDENTICAL. ABOVE NEEDS HANDLER, BELOW SHORTHAND SYNTAX USING ARROW FUNCTION

// class SearchBar extends React.Component {

//         render() {
//         return (
//         <div className="ui segment">
//             <form className="ui form">
//                 <div className="field">
//                     <label>Image Search</label>
//                     <input type="text" onChange={(event) => console.log(event.target.value)} />
//                 </div>
//             </form>   
//         </div>
//         )
//     }
// }




export default SearchBar