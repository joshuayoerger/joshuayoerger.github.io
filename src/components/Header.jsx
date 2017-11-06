import React from 'react';
import g from 'glamorous';
import { css } from 'glamor';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

const linkStyle = css({ float: 'right' });

const MyHeader = g.header({
  // backgroundColor: 'palegreen',
});

const MyNav = g.nav({
  marginTop: rhythm(1),
  marginBottom: rhythm(1),
  verticalAlign: 'center',
});

const Header = () => (
  <MyHeader>
    <MyNav>
      <Link to="/">
        <g.H3 display="inline-block" fontStyle="normal" marginBottom="0">
          joshuayoerger.github.io
        </g.H3>
      </Link>
      <Link className={linkStyle} to="/work/">
        / Work
      </Link>
      <Link className={linkStyle} to="/contact/">
        / Contact /
      </Link>
      <Link className={linkStyle} to="/blog/">
        / Blog /
      </Link>
      <Link className={linkStyle} to="/about/">
        About /
      </Link>
    </MyNav>
  </MyHeader>
);

export default Header;

// export const query = graphql`
//   query LayoutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
