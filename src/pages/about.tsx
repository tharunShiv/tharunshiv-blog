import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About me</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Hi, I am Tharun Shiv. A Site-Reliability Engineer at <a href="https://www.phonepe.com">PhonePe</a> Find my videos on
                YouTube, courses on Udemy. The whole purpose of this blog is to share my Programming
                knowledge with the developer community.
              </p>
              <p>
                I believe that, by skilling yourself up, you can get a happier and a peaceful life. The reason you see people tell that there are lack of
                jobs is because the companies are not able to find skilled people. If you have the skills, you can freelance, do internships, work at companies or 
                you could as well build your own company with the skills.
              </p> <br/> 
              <p>
                This blog will be a place where I will be sharing my knowledge with the community. Feel free to get in touch with me. 
              </p>
              <p><b>My Written Articles on this blog & Dev.to:</b></p>
              <p><a href="https://dev.to/developertharun">Dev.to - Developer Tharun/a></p>
              <p><b>My Video Content:</b></p>
              <p><a href="https://www.youtube.com/c/developerTharun">Developer Tharun - YouTube</a></p>
              <p><b>My Courses:</b></p>
              <p><a href="https://www.udemy.com/user/tharun-shiv/">Udemy - Tharun Shiv</a></p>
              <p><b>My Podcast ( audio content ):</b></p>
              <p><a href="https://open.spotify.com/show/7shMt7zJDTTXxaQzadlgYy">Spotify - Developer Tharun Podcast</a></p>
              <p><b>Chat with me on Telegram:</b></p>
              <p><a href="https://t.me/tharunshiv">Telegram - Tharun Shiv</a></p> <br/>
              <p><i>Currently focusing on Podcast content, you can find the <b>Developer Tharun</b> podcasts on other popular music platforms too, like Google Podcasts, 
                Stitcher, Apple iTunes etc., Beyond all this, I seek true knowledge. By true knowledge, I mean those which are beyond us. Humans are the only fortunate 
                creatures on this planet who can take their consiousness to another level. So, I am on a journey to make myself more receptive. Namashivayam.</i></p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
