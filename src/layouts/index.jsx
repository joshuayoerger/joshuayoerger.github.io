import React from 'react';
import g from 'glamorous';
import { css } from 'glamor';
import Link from 'gatsby-link';

import Footer from '../components/footer';

import { rhythm } from '../utils/typography';

const linkStyle = css({ float: `right` });

export default ({ children, data }) => (
  <g.Div
    margin="0 auto"
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to="/">
      <g.H3 marginBottom={rhythm(2)} display="inline-block" fontStyle="normal">
        {data.site.siteMetadata.title}
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
    {children()}
    <Footer />
  </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// const TemplateWrapper = ({ children }) => (
//   <div>
//     <Helmet
//       title="Gatsby Default Starter"
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header />
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >
//       {children()}
//     </div>
//   </div>
// );

// TemplateWrapper.propTypes = {
//   children: PropTypes.func,
// };

// export default TemplateWrapper;
