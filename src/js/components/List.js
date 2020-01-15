import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles };
};
// console.log('-- List | articles : ', mapStateToProps);
console.log('List1 ');


// const ConnectedList = ({ articles }) => (
//     <ul className="list-group list-group-flush">
//         {articles.map(el => (
//             <li className="list-group-item" key={el.id}>
//                 {el.title}
//             </li>
//         ))}
//     </ul>
// );

const  ConnectedList = function({ articles }){
    console.log('List2')
    return (
        <ul className="list-group list-group-flush">
            {articles.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.title}
                </li>
            ))}
        </ul>
    );
} 

const List = connect(mapStateToProps)(ConnectedList);
console.log('List3 ');

export default List;