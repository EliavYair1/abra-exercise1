import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MyTodos from './components/myTodos';

function App() {
  return (
    <div className="TodoApp">
      <Header />
      <MyTodos />
      <Footer />
    </div>
  );
}

export default App;
