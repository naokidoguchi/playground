// 掲示板全体のコンポーネント
var CommentBox = React.createClass({
 
    // コンポーネントのコンストラクタ的なfunction
    getInitialState: function() {
        return {data: []};
    },
 
    // 非同期でサーバーからコメントを取得する
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data: data});
                console.error(this.props.url, status, err.toString());
            }.bind(this),
        });
    },
 
    // コメントが投稿されたときに呼ばれる
    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data: data});
                console.error(this.props.url, status, err.toString());
            }.bind(this),
        });
    },
 
    // コンポーネントがレンダリングされるときに呼ばれる
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
 
    // レンダリング
    // CommentListとCommentFormのコンポーネントを子に持つ
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
});
 
// コメント群を束ねるコンポーネント
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map( function (comment) {
            return <Comment author={comment.author}>
                {comment.text}
            </Comment>
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});
 
// コメント部分のコンポーネント
var converter = new Showdown.converter();
var Comment = React.createClass({
    render: function() {
        var rawMarkUp = converter.makeHtml(this.props.children.toString());
        console.log(rawMarkUp);
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkUp}} />
            </div>
        );
    }
});
 
// 投稿部分のコンポーネント
var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text   = this.refs.text.getDOMNode().value.trim();
        if (!author || !text) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your Name" ref="author" />
                <input type="text" placeholder="say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});
 
// 掲示板をレンダリングする
React.render(
    <CommentBox url="comments.json" pollInterval={2000} />,
    document.getElementById('content')
);