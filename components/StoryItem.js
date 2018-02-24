import Link from 'next/link'

export default class StoryItem extends React.Component {
  render() {
    let story = this.props.story

    return <div className="story">
      <h2><a href={ story.url } target="_blank">{ story.title }</a></h2>
      <div className="meta">
        { story.points } points - {' '}
        <Link href={ `/story?id=${story.id}` }><a>{ story.comments_count } comments</a></Link>
      </div>


      <style jsx>{`
        .story {
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding: 15px;
        }
        .story h2 {
          font-size: 1.1em;
          margin: 0;
          margin-bottom: 5px;
        }
        .story a {
          color: indigo;
          text-decoration: none;
        }
        .story h2 a:hover {
          text-decoration: underline;
        }
        .story .meta {
          color: #333;
          font-size: 0.9em;
        }
      `}</style>
    </div>
  }
}