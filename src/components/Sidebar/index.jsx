import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Menu from '../Menu';
import Links from '../Links';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { title, subtitle, author, copyright, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt*/
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="220" height="220"
            alt={author.name}
          />
        </Link>
        { isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{title}</Link>
          </h1>
        ) :
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{title}</Link>
          </h2>
        }
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt*/

    return (
      <div className="sidebar" data-collapsed={!isHomePage}>
        <div className="sidebar__inner">
          <div className="sidebar__author">
            {authorBlock}
          </div>
          <div>
            <Menu data={menu} />
            <Links data={author} />
            <p className="sidebar__copyright">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        author: PropTypes.object.isRequired,
        copyright: PropTypes.string.isRequired,
        menu: PropTypes.array.isRequired
      })
    })
  }),
  location: PropTypes.object
};

export default Sidebar;
