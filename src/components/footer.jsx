import React from 'react';
import g from 'glamorous';
import GatsbyNegative from './icons/GatsbyNegative';

const iconStyle = {
  verticalAlign: 'middle',
};

const MyFooter = g.footer({
  padding: '1rem',
  textAlign: 'center',
});

const Footer = () => (
  <MyFooter>
    Made with {'<3'} using <GatsbyNegative css={iconStyle} /> - GNU GPLv3
  </MyFooter>
);

export default Footer;
