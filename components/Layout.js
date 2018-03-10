import Head from 'next/head'
import Link from 'next/link'

export default class Layout extends React.Component {
  render() {
    return <div>
      <Head>
        <title>{ this.props.title || "CHE TE OLVIDASTE EL TITLE" }</title>
        <meta name="viewport" content="initial-scale=1.0; width=device-width;" />
      </Head>

      <nav><Link href="/" prefetch><a>Hacker News</a></Link></nav>

      { this.props.children }

      <style jsx>{`
        nav {
          background: indigo;
          color: white;
          font-weight: bold;
          font-size: 1.1em;
          padding: 15px;
        }
        nav a {
          color: white;
          text-decoration: none;
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