import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const data = [
  {
    src:
      'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src:
      'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40 M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
  return (
    <Grid container wrap="nowrap">
      {data.map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
          <Box pr={2}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box overflow="hidden">
      <Media loading />
    </Box>
  );
}
