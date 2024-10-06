import RoutesProvider from "@/router/RoutesProvider"
import { GlobalStyles } from "./common/styles/GlobalStyle"

function App() {
  return (
    <>
      <RoutesProvider />
      <GlobalStyles />
    </>
  )
}

export default App
