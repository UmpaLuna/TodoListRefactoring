import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styled-component/GlobalStyle";
import theme from "./styled-component/Theme";
import TodoPage from "./page/TodoPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoPage />
    </ThemeProvider>
  );
}

export default App;
