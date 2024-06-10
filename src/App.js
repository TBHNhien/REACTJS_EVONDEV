import "./App.css";
import { YoutubeData } from "./YoutubeData";
function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);

  console.log(YoutubeData);
  // return (
  //   <div className="youtube-list">
  //     {YoutubeData.map((item, index) => (
  //       <YoutubeItem
  //         key={item.id}
  //         image={item.image}
  //         avatar={item.avatar || item.image}
  //         title={item.title}
  //         author={item.author}
  //       ></YoutubeItem>
  //     ))}
  //   </div>
  // );

  // cách viết đầy đủ
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            // className={index === 1 ? "abc" : ""}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
}

function YoutubeItem(props) {
  // console.log(props);
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "this is example of title"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "this is example of author name"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
