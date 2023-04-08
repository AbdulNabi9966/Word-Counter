
import './App.css';
import Nav from './Nav';
import TextForm from './TextForm';
// import Alert from './Alert';

function App() {

  // const [alert, setAlert] = useState(null)
  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }
  return (  
  <>
<Nav title={"Home "} aboutText={"About"}/>

{/* <Alert/> */}

<div className="container">
<TextForm heading = "Enter the text to analyze below" />
</div>

  </>
  );
}

export default App;
