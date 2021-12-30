// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route} from "react-router-dom";
// import Post from './pages/post';
import PostList from './components/postlist'
function App() {
  return (
    <div className="App">
      <PostList />
         {/* <Router>
        
            <Route exact path="/" component={Post} />
          
        
    </Router> */}
    </div>
  );
}

export default App;
