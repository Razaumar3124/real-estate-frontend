import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      light: string;
      soft: string;
      tan: string;
      lightBronze: string;
      camel: string;
      faddedCopper: string;
      toffeeBrown: string;
      walnut: string;
      mediumWalnut: string;
      darkWalnut: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      light?: string;
      soft?: string;
      tan?: string;
      lightBronze?: string;
      camel?: string;
      faddedCopper?: string;
      toffeeBrown?: string;
      walnut?: string;
      mediumWalnut?: string;
      darkWalnut?: string;
    };
  }
}
