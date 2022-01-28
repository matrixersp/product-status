import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CachedIcon from "@mui/icons-material/Cached";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InventoryIcon from "@mui/icons-material/Inventory";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Status = ({ icon: IconComponent, title, count, bgcolor }) => (
  <Card sx={{ minWidth: 105, color: "#272727", bgcolor }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "18px 20px 10px",
      }}
    >
      <IconComponent sx={{ mb: 1 }} />
      <Typography component="div" variant="body1" sx={{ fontSize: "0.75rem" }}>
        {title}
      </Typography>
      <Typography component="div" variant="h5">
        {count}
      </Typography>
    </Box>
  </Card>
);

const Statuses = () => {
  return (
    <Grid container spacing={1} columns={8}>
      <Grid item xs={8} sm={4} md={2} lg={1}>
        <Status
          icon={PlayCircleOutlineIcon}
          title="Created"
          count={25458}
          bgcolor="#71a8fa"
        />
      </Grid>
      <Grid item xs={8} sm={4} md={2} lg={1}>
        <Status
          icon={AccessTimeIcon}
          title="Awaiting content"
          count={12}
          bgcolor="#3a86f6"
        />
      </Grid>
      <Grid item xs={8} sm={4} md={2} lg={1}>
        <Status
          icon={CachedIcon}
          title="In Progress"
          count={325}
          bgcolor="#ffbd08"
        />
      </Grid>
      <Grid item xs={8} sm={4} md={2} lg={1}>
        <Status
          icon={AssignmentIcon}
          title="Awaiting approval"
          count={12}
          bgcolor="#4cc894"
        />
      </Grid>
      <Grid item xs={8} sm={4} md={2} lg={1}>
        <Status
          icon={CheckIcon}
          title="Published"
          count={24535}
          bgcolor="#00b470"
        />
      </Grid>
      <Grid item xs={8} sm={4} md={2} lg={1}>
        <Status
          icon={HighlightOffIcon}
          title="Rejected"
          count={25}
          bgcolor="#fec2ab"
        />
      </Grid>
      <Grid item xs={8} sm={4} md={2} lg={1}>
        <Status
          icon={InventoryIcon}
          title="Archived"
          count={6336}
          bgcolor="#ff745e"
        />
      </Grid>
      <Grid item xs={8} sm={4} md={2} lg={1}>
        <Status
          icon={DeleteOutlineIcon}
          title="Deleted"
          count={27364}
          bgcolor="#ff3f24"
        />
      </Grid>
    </Grid>
  );
};

export default Statuses;
