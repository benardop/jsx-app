import React from "react";
import ReactDOM  from "react-dom/client";


function MyThing() {

  let isValid = true
  return (
    <span>{ isValid ? 'Valid' : 'Invalid' }</span>
  )
}

function BookDetails() {
  return (
    <div>
      <div className="title">
        Title
      </div>
      <div className="author">
        Author
      </div>
      <ul className="stats">
        <li className="ratings">
          5 stars
        </li>
        <li className="isbn">
           12345-78-930
        </li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<div>
    <MyThing/>,
    <BookDetails/>
</div>);