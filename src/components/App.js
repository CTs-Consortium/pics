import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
/////////initialize state on the component
    state = {images:[]};


    ///axios requesting images on submit API API
    onSearchSubmit = async term =>{
        const response = await unsplash.get('/search/photos', {
        params: {query: term},
    });

        this.setState({images: response.data.results});
    }
    
    render(){
        return(
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images}/>
        </div>
        )
    }
}

//////////had to refactor to above to pass from child to parent!!!

// const App = () =>{
//     return (
//     <div className='ui container' style={{marginTop: '10px'}}>
//         <SearchBar />
//     </div>
//     )
// }

export default App