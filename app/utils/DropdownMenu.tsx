import { Menu, Box, useTheme } from "@mui/material";

type DropdownItem = {
  path: string;
  navName: string;
};

type DropdownMenuProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  data: DropdownItem[];
  onItemClick?: (path: string) => void;
};

export default function DropdownMenu({
  anchorEl,
  open,
  onClose,
  data,
  onItemClick,
}: DropdownMenuProps) {
  const theme = useTheme();

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      slotProps={{
        paper: {
          sx: {
            mt: 1.5,
            borderRadius: "12px",
            bgcolor: "white",
            minWidth: { xs: "250px", md: "230px", xl: "200px" },
          },
        },
        list: {
          sx: { py: 0 },
        },
      }}
    >
      {data.map((val, i) => (
        <Box
          key={i}
          onClick={() => {
            onItemClick?.(val.path);
            onClose();
          }}
          sx={{
            fontFamily: "Afacad Flux",
            fontSize: { md: "1.1em", xl: "1em" },
            letterSpacing: "1px",
            color: theme.palette.custom.lightGrey,
            px: 2.5,
            py: 2,
            cursor: "pointer",
            transition: "background-color 0.2s ease",
            "&:hover": {
              bgcolor: theme.palette.custom.light,
            },
            "&:hover .menu-text": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Box
            className="menu-text"
            sx={{
              transition: "transform 0.5s ease",
            }}
          >
            {val.navName}
          </Box>
        </Box>
      ))}
    </Menu>
  );
}
