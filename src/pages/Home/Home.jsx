export default function Home() {
  return (
    <div class="bg-primary flex text-center flex-col">
      <h1 class="text-center text-2xl font-theme font-black">The MERN Bible</h1>
      <h2>
        A King James Version Bible reference powered by the{" "}
        <a href="https://api.biblesupersearch.com/">Bible SuperSearch API</a>
      </h2>
      <button class="p-0 border-2 border-black">
        <a href="/search">Start Reading</a>
      </button>
      <h1>What does 'MERN' stand for?</h1>
      <h2>
        MERN is the acronym for the tech stack used to create this application:
      </h2>
      <ul>
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
