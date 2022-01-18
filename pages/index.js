import React from "react";
import Link from "./ninartes";


class Home extends React.Component {
  
  render() {
    return (
      <div>
           <h1 className="title">
  Estou aprendendo NexjJS <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <h1 className="title">
          Read{' '}
          <Link href="./ninartes">
          <a>Nesta Página!</a>
         </Link>
</h1>
      </div>
    );
  }
};

export default Home;




