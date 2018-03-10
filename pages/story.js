import 'isomorphic-fetch'
import Layout from '../components/Layout'
import Comment from '../components/Comment'

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
          return <Comment comment={ comment } key={ comment.id } />
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
      `}</style>
    </Layout>
  }

}