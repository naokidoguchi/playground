import React from 'react';
import { render } from 'react-dom';

import Hello from './components/hello.jsx';
import World from './components/world.jsx';

// React.render(
//     <Hello />,
//     <World />,
//     <CommentBox url="./src/json/comments.json" pollInterval={2000} />,
//     document.getElementById('content')
// );

render(
    <div>
        <Hello />
        <World />
    </div>,
    document.getElementById('content')
);

// $ ./node_modules/.bin/webpack-dev-server --progress --colors --hot
