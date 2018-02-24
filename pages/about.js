export default class extends React.Component {

  render() {
    return <div>
      <h1>Hecho por yo</h1>
      <img src="/static/unicorn.jpg" alt=""/>

      <style jsx>{`
        h1 {
          font-family: "Comic Sans MS";
          color: hotpink;
          text-align: center;
        }
        img {
          width: 100%;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          background: indigo;
        }
      `}</style>
    </div>
  }

}