import Layout from '../components/Layout'

export default class extends React.Component {

  render() {
    return <Layout title="About">
      <h1>Workshop por Aerolab</h1>
      <img src="/static/unicorn.jpg" alt=""/>


      <style jsx>{`
        h1 {
          text-align: center;
        }
        img {
          display: block;
          margin: 0 auto;
          width: 100%;
          max-width: 600px;
        }
      `}</style>
    </Layout>
  }

}