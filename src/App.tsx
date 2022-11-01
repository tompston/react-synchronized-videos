import Editor from './components/Editor';
import Header from './components/Header';

export default function App() {

  return (
    <div className="App">
      <div className="flex-center">
        <div className="max-width-1">
          <Header />
          <div className='mt-2 mb-4'></div>
          <Editor />
        </div>
      </div>
    </div>
  )
}
