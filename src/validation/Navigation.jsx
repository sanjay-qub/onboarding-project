import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function Navigation() {
  const VisuallyHiddenInput = styled('output')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <header>
      <nav className='bg-blue-500 md:bg-green-500 ...'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <h1 className='flex items-center'>
              <StarTwoToneIcon />CRASP
            </h1>
            <ul className='flex space-x-4'>
              <li>
                <a href="">Components</a>
              </li>
              <li>
                <a href="">Examples</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex items-center justify-end'>
          <ul className='flex space-x-4'>
            <li>
              <a href=""><FacebookIcon /></a>
            </li>
            <li>
              <a href=""><InstagramIcon /></a>
            </li>
            <li>
              <a href=""><TwitterIcon /></a>
            </li>
            <li>
              <a href=""><GitHubIcon /></a>
            </li>
            <li>
              <Button component="label" variant="contained" startIcon={<CloudDownloadIcon />}>
                Download
                <VisuallyHiddenInput type="file" />
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
