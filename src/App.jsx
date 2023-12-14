import { ThemeProvider } from "styled-components";
import Layout from "./page/Layout";
import GlobalStyle from "./styled-component/GlobalStyle";
import theme from "./styled-component/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
