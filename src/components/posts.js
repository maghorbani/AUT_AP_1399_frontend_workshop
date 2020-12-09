import React, { Component } from 'react'

class Posts extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>{
                this.setState({posts: data})
            })
    }

    render() {
        const items = this.state.posts.map(item=>(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        ))
        return (
           <div>
               <h1>my posts</h1>
                {items}
           </div>
        )
    }
}

export default Posts;
