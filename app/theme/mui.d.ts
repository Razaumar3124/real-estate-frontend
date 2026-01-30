import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      theme1: string;
      theme2: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      theme1?: string;
      theme2?: string;
    };
  }
}
