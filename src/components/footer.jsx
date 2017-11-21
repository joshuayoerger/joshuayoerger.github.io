import React from 'react';
import g from 'glamorous';
import { FaCode, FaHeartO } from 'react-icons/lib/fa';
import GatsbyNegative from './icons/GatsbyNegative';

const iconStyle = {
  height: '1.2em',
  width: '1.2em',
  verticalAlign: 'middle',
};

const MyFooter = g.footer({
  padding: '1rem',
  textAlign: 'center',
});

const Footer = () => (
  <MyFooter>
    <FaCode css={iconStyle} style={{ verticalAlign: 'text-bottom' }} /> with{' '}
    <FaHeartO css={iconStyle} /> using <GatsbyNegative css={iconStyle} /> - GNU
    GPLv3
  </MyFooter>
);

export default Footer;
