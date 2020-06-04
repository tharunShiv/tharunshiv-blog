export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * full url, no username
   */
  youtube?: string;
  /**
   * full url, no username
   */
  udemy?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Tharun Shiv',
  description: 'A Blog to quench Programming thirst',
  coverImage: 'img/blog-cover.png',
  logo: 'img/ts-logo-c.png',
  lang: 'en',
  siteUrl: 'https://tharunshiv.com',
  facebook: 'https://www.facebook.com/developertharun',
  twitter: 'https://twitter.com/followtharun',
  youtube: 'https://www.youtube.com/channel/UCDvWreVvvAwyoVHXG7QnqRg',
  udemy: 'https://www.udemy.com/user/tharun-shiv/',
  showSubscribe: true,
  mailchimpAction:
    'https://tharunshiv.us4.list-manage.com/subscribe/post?u=caf448c4c16cf5e8cbf38ce42&amp;id=242a7b954a',
  mailchimpName: 'tharunshiv',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
};

export default config;
