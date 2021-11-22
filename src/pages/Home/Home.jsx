export default function Home() {
  return (
    <div className="bg-primary flex text-center flex-col font-theme text-2xl">
      <h1 className="text-center text-4xl text-theme-dark font-theme font-black">
        The MERN Bible
      </h1>
      <br />
      <h2 className="text-2xl">
        A King James Version Bible reference powered by the{" "}
        <a href="https://api.biblesupersearch.com/" className="underline">
          Bible SuperSearch API
        </a>
      </h2>
      <br/>
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
