import React from 'react';
import Sidebar from '../components/Sidebar';

class NotFoundRoute extends React.Component {
  render() {
    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Nada por aqui</h1>
              <div className="page__body">
                <p>Você tentou acessar uma página que não existe... que triste :(</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          facebook
          twitter
          instagram
          github
          rss
          email
        }
      }
    }
  }
`;
