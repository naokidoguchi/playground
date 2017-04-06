import React, { Component } from 'react';

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1>チャット</h1>
            </div>
        );
    }
}

// CommentBoxクラス
var CommentBox = React.createClass({
    
    // コンストラクタ
    getInitialState: function() {
        return {data: []};
    },

    // サーバーからコメント取得
    loadCommentsFormServer: function() {
        $.ajax ({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
                console.log("取得してる");
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data: data});
                console.error(this.props.url, status, err.toString());
                console.log("取得できてない");
            }.bind(this),
        })
    },

    // コメントが投稿された時に呼ばれる
    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        // 持ってるコメントに新しいコメントを連結させる
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax ({
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
        })
    },

    // コンポーネントがレンダリングされた時に呼ばれる
    componentDidMount: function() {
        this.loadCommentsFormServer();
        // コメント取得時pollIntervalはレンダリング時にインターバルタイムをセットする
        setInterval(this.loadCommentsFormServer, this.props.pollInterval);
    },

    // レンダリング
    render: function() {
        return (
            <div className="commentBox">
                <h1>コメント</h1>
                {/*CommentListのコンポーネントを子に持つ*/}
                <CommentList data={this.state.data} />
                {/*CommentFormのコンポーネントを子に持つ*/}
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        )
    }

});

// CommentListクラス
var CommentList = React.createClass({

    render: function() {
        // mapでpropのdataの配列を操作する
        var commentNodes = this.props.data.map( function(comment) {
            return <Comment author={comment.author}>
                {comment.text}
            </Comment>
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }

});

// Commentクラス, コメント部分
// showdown.jsを利用(Markdownを使用できる)
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
                {/*誤ったinnerHTMLに注意*/}
                <span dangerouslySetInnerHTML={{__html: rawMarkUp}} />
            </div>
        )
    }

});

// CommentFormクラス, 投稿部分
var CommentForm = React.createClass({
    handleCommentSubmit: function(e) {
        e.preventDefault;
        // trim()は全ての空白、改行を取り除く
        var author = this.refs.author.findDOMNode().value.trim();
        var text   = this.refs.text.fincDOMNode().value.trim();
        if(!author || !text) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.findDOMNode().value = '';
        this.refs.text.findDOMNode().value = '';
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="名前" ref="author" />
                <input type="text" placeholder="カキコミ" ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});
