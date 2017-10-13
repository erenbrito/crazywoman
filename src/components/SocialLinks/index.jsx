import React, { Component } from "react";
import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";
import PropTypes from 'prop-types';
import config from "../../../data/SiteConfig";
import "./style.scss";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postPath;
    const {
      FacebookShareButton,
      TwitterShareButton,
      TelegramShareButton,
      WhatsappShareButton
    } = ShareButtons;
    const {
      FacebookShareCount
    } = ShareCounts;

    const FacebookIcon = generateShareIcon("facebook");
    const TwitterIcon = generateShareIcon("twitter");
    const TelegramIcon = generateShareIcon("telegram");
    const WhatsappIcon = generateShareIcon("whatsapp");
    const iconSize = 48;
    const filter = count => (count > 0 ? count : "");

    return (
      <div className="social-links">
        <p className="social-links__text">E aí curtiu? Compartilhaê!</p>
        <FacebookShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count =><div className="social-links__count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon round size={iconSize} />
        </WhatsappShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </div>
    );
  }
}

export default SocialLinks;

SocialLinks.propTypes = {
  postNode: PropTypes.object.isRequired,
  postPath: PropTypes.string.isRequired
};