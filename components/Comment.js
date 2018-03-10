export default class Comment extends React.Component {

  render() {
    const { comment } = this.props

    return <div className="comment">
      <div className="author">{ comment.user }</div>
      <div className="content" dangerouslySetInnerHTML={ { __html: comment.content } }></div>
      <div className="replies">
        { comment.comments.map( reply => <Comment comment={ reply } key={ reply.id } /> ) }
      </div>

      <style jsx>{`
        .comment {
          padding:15px;
        }
        .comment > .content :global(a) {
          color: royalblue;
        }
        .author {
          color: indigo;
          font-weight: bold;
        }
      `}</style>
    </div>
  }

}