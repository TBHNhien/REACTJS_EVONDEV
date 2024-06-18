import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
function App() {
  const name = "Evondev";
  return (
    <div>
      <YoutubeList>
        {name}
        {/* <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          laborum ea consectetur fugit eum tempore dolores nulla! Repellendus,
          nisi voluptas sed suscipit recusandae, nulla excepturi necessitatibus
          eaque alias consequuntur incidunt.
        </h2> */}
        {/*children props : html, text, variable */}
      </YoutubeList>
    </div>
  );
}

export default App;
