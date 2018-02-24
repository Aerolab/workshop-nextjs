import Head from 'next/head'

export default class Layout extends React.Component {
  render() {
    return <div>
      <Head>
        <title>{ this.props.title || "CHE TE OLVIDASTE EL TITLE" }</title>
        <meta name="viewport" content="initial-scale=1.0; width=device-width;" />
      </Head>

      <nav>Hacker News</nav>

      { this.props.children }

      <style jsx>{`
        nav {
          background: indigo;
          color: white;
          font-weight: bold;
          font-size: 1.1em;
          padding: 15px;
        }
        :global(body) {
          background: #f0f0f0;
          margin: 0;
          font-family: system-ui;
        }
      `}</style>
    </div>
  }
}