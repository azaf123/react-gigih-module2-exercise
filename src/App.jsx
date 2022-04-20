import './App.css';

import store from './redux/store';
import { Provider } from 'react-redux';
import AppRouter from './router';
import { ThemeProvider } from 'styled-components';
function App() {
  // function find_max(nums) {
  //    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  //    for (let num of nums) {
  //   if (num > max_num) {
  //    max_num = num;
  //    }
  //    }
  //    return max_num;
  //   }
  return (
    <Provider store={store}>
    <div className="App">
     {/* <Home /> */}
    {/* <Search /> */}
    {/* <Hook/> */}
    <AppRouter/>
    
    </div>
    </Provider>
  );
}

export default App;
