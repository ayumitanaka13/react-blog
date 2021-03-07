import React from 'react';
import Article from './Article';

// HOOKS

const Blog = () =>  {
    return (
        <React.Fragment>
            <Article
                title={'How to learn React 1'}
                order={1}
                // isPublished={this.state.isPublished}
            />
            <Article
                title={'How to learn React 2'}
                order={2}
                // isPublished={this.state.isPublished}
            />
            <Article
                title={'How to learn React 3'}
                order={3}
                // isPublished={this.state.isPublished}
            />
        </React.Fragment>
    )   
}

// CLASS COMPONENT

// class Blog extends React.Component {

//     // constructor
//     constructor(props) {
//         super(props);
//         this.state = {
//             isPublished: false,
//             count: 0
//         }
//     }

//     // life cycle
//     componentDidMount() {
//         // count up like number when button is clicked
//         document.querySelector('#counter').addEventListener('click', this.countUp)
//     }
//     componentDidUpdate() {
//         if (this.state.count >= 10) {
//             this.setState({
//                 count: 0
//             })
//         }
//     }
//     componentWillUnmount() {
//         document.querySelector('#counter').removeEventListener('click', this.countUp)
//     }

//     // func
//     togglePublished = () => {
//         this.setState({
//             isPublished: !this.state.isPublished
//         })
//     }
//     countUp = () => {
//         this.setState({
//             count: this.state.count +1
//         })
//     }

//     // render
//     render() {
//         const authorName = 'Ayumi';
//         return (
//             <React.Fragment>
//                 <Article
//                     title={'How to learn React 1'}
//                     order={1}
//                     isPublished={this.state.isPublished}
//                     toggle = {() => this.togglePublished()}
//                     count = {this.state.count}
//                     author={authorName}
//                 />
//                 <Article
//                     title={'How to learn React 2'}
//                     order={2}
//                     isPublished={this.state.isPublished}
//                     toggle = {() => this.togglePublished()}
//                     count = {this.state.count}
//                     author={authorName}
//                 />
//                 <Article
//                     title={'How to learn React 3'}
//                     order={3}
//                     isPublished={this.state.isPublished}
//                     toggle = {() => this.togglePublished()}
//                     count = {this.state.count}
//                     author={authorName}
//                 />
//             </React.Fragment>
//         )
//     }
// }

export default Blog