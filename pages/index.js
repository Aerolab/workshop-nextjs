import 'isomorphic-fetch'
import Layout from '../components/Layout'
import StoryItem from '../components/StoryItem'

export default class extends React.Component {

  static async getInitialProps({ query }) {
    let req = await fetch('https://node-hnapi.herokuapp.com/news')
    let stories = await req.json()
    return { stories }
  }

  render() {
    let { stories } = this.props

    return <Layout title="Hacker News">
      { stories.map( (story) => <StoryItem story={ story } key={ story.id } /> ) }
    </Layout>
  }

}