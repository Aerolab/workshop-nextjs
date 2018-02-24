import 'isomorphic-fetch'
import Layout from '../components/Layout'

export default class extends React.Component {

  static async getInitialProps({ query }) {
    let r = await fetch('https://node-hnapi.herokuapp.com/item/'+ query.id)
    let story = await r.json()

    return { story }
  }

  render() {
    
    return <Layout title={ this.props.story.title }>

      <h1>{ this.props.story.title }</h1>
      <div className="meta">{ this.props.story.points } points - { this.props.story.comments_count } comments</div>

      <div className="comments">
        { this.props.story.comments.map( (comment) => {
          return <div className="comment">
            <div className="author">{ comment.user }</div>
            <div className="content" dangerouslySetInnerHTML={ { __html: comment.content } }></div>
          </div>
         } ) }
      </div>

      <style jsx>{`
        h1 {
          padding: 15px;
          margin: 0;
          font-size: 1.8em;
          font-weight: normal;
        }
        .meta {
          padding: 0 15px 15px 15px;
          color: #333;
          font-size: 0.9em;
        }

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
    </Layout>
  }

}