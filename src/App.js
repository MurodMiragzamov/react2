
import './App.css';
import { useRef } from 'react';


function App() {
  const modal= useRef(null);
  return (
    <div className="App">
    
    <button  className="btn" onClick={()=>{
      modal.current.classList.add('modal-active');
    }}>
      Show
    </button>

    <div ref={modal} className="div-modal">
      <div className="m-modal">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, est.</p>
        <button  className="btn-modal" onClick={()=>{
        modal.current.classList.remove('modal-active');
    }}> x
    </button>
      </div>
    </div>


    </div>
  );
}

export default App;
