import './App.css';
import MyForm from './components/Form';
import { styled } from '@mui/material';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

function App() {
  return (
    <div className="App">
      <Wrapper>
      <MyForm/>
      </Wrapper>
    </div>
  );
}

export default App;
