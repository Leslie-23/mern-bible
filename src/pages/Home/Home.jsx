import BibleLogo from "../../components/BibleLogo/BibleLogo";

export default function Home() {
  return (
    <div className="flex text-center flex-col font-theme text-2xl">
      <div className="m-8 flex mx-auto" style={{maxWidth: 700, height: 144}}>
        <div className="pr-2 leading-none text-right text-5xl font-semibold text-white">
          The
          <br />
          MERN
          <br />
          Bible
        </div>
        <BibleLogo />
      </div>
      <h2 className="text-2xl text-white">
        A King James Version reference
        <br />
        powered by{" "}
        <a href="https://api.biblesupersearch.com/">BibleSuperSearch</a>
      </h2>
      <br />
      <a href="/search" className="underline">
        Start Reading
      </a>
      <br />
      <br />
      <h1>What does "MERN" stand for?</h1>
      <h2>
        MERN is the acronym for the tech stack used to create this application:
      </h2>
      <ul className="underline">
        <li>
          <a href="https://www.mongodb.com/">MongoDB</a>
        </li>
        <li>
          <a href="https://expressjs.com/">Express</a>
        </li>
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://nodejs.dev/">Node</a>
        </li>
      </ul>
    </div>
  );
}
