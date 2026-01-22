import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { ShoppingList } from "./components/ShoppingList";

export default function App() {
  const [dark, setDark] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light"
        }
      }),
    [dark]
  );

  return (
    <ThemeProvider theme={theme}>
      <ShoppingList />
    </ThemeProvider>
  );
}
