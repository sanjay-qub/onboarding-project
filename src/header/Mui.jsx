import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[400];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary.light,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: '#ff6333', // Change to the desired orange color
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.42),
    },
  };
});

export default function CustomizedBreadcrumbs() {
  React.useEffect(() => {
    // Remove all separators when the component mounts
    const separators = document.querySelectorAll('.MuiBreadcrumbs-separator');
    separators.forEach((separator) => {
      separator.style.display = 'none';
    });

    // Clean up all separators when the component unmounts
    return () => {
      separators.forEach((separator) => {
        separator.style.display = ''; // Restore the default display
      });
    };
  }, []);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/equipment">
          <StyledBreadcrumb label="Equipment" />
        </Link>

        <Link to="/location">
          <StyledBreadcrumb label="Location" />
        </Link>

        <Link to="/system">
          <StyledBreadcrumb
            label="System"
            deleteIcon={<ExpandMoreIcon />}
          />
        </Link>
        <Link to="/demo">
          <StyledBreadcrumb
            label="tailwind"
            deleteIcon={<ExpandMoreIcon />}
          />
        </Link>
      </Breadcrumbs>
    </div>
  );
}
