import { Marker as LMarker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import L from 'leaflet';
import { styled } from '@mui/material/styles';

import { Avatar, Unstable_Grid2 as Grid, Box, Paper, IconButton } from '@mui/material';
import { Email, Smartphone, Edit } from '@mui/icons-material';

import 'leaflet/dist/leaflet.css';

type Props = {
  key: string;
  latitude: number;
  longitude: number;
  isSelected: boolean;
  phoneNumbers: string[];
  firstName: string;
  lastName: string;
  jobTitle: string;
  avatar: string;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Marker({ id, latitude, longitude, isSelected, firstName, lastName, jobTitle, phoneNumbers, avatar, organization }: Props) {
  //  Create the Icon

  const blueIcon = new L.Icon({
    iconAnchor: [15, 20],
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  });
  const greyIcon = new L.Icon({
    iconAnchor: [15, 20],
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
  });
  let primaryPhone = phoneNumbers[0].phone ? phoneNumbers[0].phone : '';

  return (
    <LMarker
      key={id}
      position={[latitude, longitude]}
      icon={isSelected ? blueIcon : greyIcon}
    >
      <Popup>
        <Box style={{ minWidth: '210px' }}>
          <Grid
            container
            spacing={2}
          >
            <Grid
              display='flex'
              justifyContent='center'
              alignItems='center'
              xs={4}
            >
              <Avatar
                alt='Cindy Baker'
                src={avatar}
              />
            </Grid>
            <Grid
              xs={8}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <h2>
                {firstName} {lastName}
                <h5 style={{ margin: '3px', color: '#555555' }}>{primaryPhone}</h5>
              </h2>
            </Grid>
            <Grid
              p={0}
              xs={12}
            >
              <h3 style={{ margin: 0 }}>
                {organization} <hr style={{ margin: 0, height: '1px', border: 'none', color: '#DDD', backgroundColor: '#DDD' }}></hr>
              </h3>
              <p style={{ margin: '10px' }}>{jobTitle}</p>
            </Grid>
            <Grid
              p={0}
              xs={12}
              display='flex'
              justifyContent='right'
              alignItems='center'
            >
              <IconButton aria-label='Send Email'>
                <Email />
              </IconButton>
              <IconButton aria-label='Call'>
                <Smartphone />
              </IconButton>
              <IconButton aria-label='Edit'>
                <Edit />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Popup>
    </LMarker>
  );
}

export default Marker;
