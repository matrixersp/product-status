import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const initiatives = [
  'initiative 1',
  'initiative 2',
  'initiative 3',
];

const brands = [
  'brand 1',
  'brand 2',
  'brand 3',
];

const categories = [
  'category 1',
  'category 2',
  'category 3',
];

const Header = () => {
  const [initiative, setInitiative] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 3 }}
    >
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ fontWeight: "bold", mb: 2, mt: 2 }}
      >
        Product Status
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        alignItems="center"
        sx={{ width: { xs: "100%", sm: "initial" } }}
      >
        <Typography
          variant="body2"
          gutterBottom
          component="div"
          sx={{ textTransform: "uppercase", mb: 0 }}
        >
          Refine by:
        </Typography>
        <FormControl sx={{ ml: 2, minWidth: { xs: "100%", sm: 120 } }}>
          <Select
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
            displayEmpty
          >
            <MenuItem disabled value="">
              Initiative
            </MenuItem>
            { initiatives.map((initiative) => (
              <MenuItem key={initiative} value={initiative}>{initiative}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ ml: 2, minWidth: { xs: "100%", sm: 120 } }}>
          <Select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            displayEmpty
          >
            <MenuItem disabled value="">
              Brand
            </MenuItem>
            { brands.map((brand) => (
              <MenuItem key={brand} value={brand}>{brand}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ ml: 2, minWidth: { xs: "100%", sm: 120 } }}>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
          >
            <MenuItem disabled value="">
              Category
            </MenuItem>
            { categories.map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}
export default Header;
