import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

const CardComponent = ({ size, contentHeight }) => {
  return <Grid item {...size}>
    <Card elevation={2}>
      <CardHeader />
      <Divider sx={{ mt: 3, mb: 3 }} />
      <CardContent sx={{ minHeight: contentHeight }}></CardContent>
    </Card>
  </Grid>
}

const Boxes = () => (
    <Grid container spacing={2} columns={6}>
      <CardComponent size={{ xs: 6, sm: 3, md: 2}} contentHeight={150} />
      <CardComponent size={{ xs: 6, sm: 3, md: 2}} contentHeight={150} />
      <CardComponent size={{ xs: 6, sm: 3, md: 2}} contentHeight={150} />
      <CardComponent size={{ xs: 6, sm: 3, md: 4}} contentHeight={{ xs: 150, md: 350 }} />
      <CardComponent size={{ xs: 6, sm: 3, md: 2}} contentHeight={{ xs: 150, md: 350 }} />
      <CardComponent size={{ xs: 6, sm: 3, md: 2}} contentHeight={150} />
      <CardComponent size={{ xs: 6, sm: 3, md: 2}} contentHeight={150} />
      <CardComponent size={{ xs: 6, sm: 3, md: 2}} contentHeight={150} />
    </Grid>
);

export default Boxes;
