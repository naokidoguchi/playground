import React from 'react';

// const World = () => {
//     return (
//         <h1>World</h1>
//     );
// }
// export default World;

function dateToString(d) {
    return [
        d.getFullYear(),
        d.getMonth() + 1,
        d.getDate()
    ].join('-');
}

var World = React.createClass({
    render: function() {
        return (
            <div>
                <h2>{dateToString(new Date())}</h2><hr />
            </div>
        );
    }
});

export default World;

