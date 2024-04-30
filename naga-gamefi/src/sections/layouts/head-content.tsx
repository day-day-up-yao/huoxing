import Head from 'next/head';
import { ReactNode } from 'react';

export const GoogleAnalytics = () => {
  const googleAnalyticsId = 'G-VWW56CPKW4';

  return (
    <>
      {googleAnalyticsId && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
      )}
      {googleAnalyticsId && (
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');`,
          }}
        />
      )}
    </>
  );
};

export const ThridJsLib = () => (
  <>
    <script src="https://accounts.google.com/gsi/client" async defer />
    <script src="https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js" />
  </>
);

export const BaiduAnalytics = () => {
  const baiduAnalyticsId = 'ae1940212b0bce03500bb0f37a6b6e05';

  return (
    <>
      {baiduAnalyticsId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?${baiduAnalyticsId}";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
            })();`,
          }}
        />
      )}
    </>
  );
};

export const ErudaDev = () =>
  process.env.ERUDA === 'true' && (
    <>
      <script src="/assets/eruda/eruda.js" />
      <script>eruda.init();</script>
    </>
  );

// --------------------------appDir and pagesDir shared head--------------------------
export const favicon = '/favicon/favicon.ico';
export const MetaTDKFixed = () => (
  <>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit|ie-comp|ie-stand" />
    <meta name="force-rendering" content="webkit" />
    <meta name="baidu-site-verification" content="aOvqU8RYOF" />
    {/* 外站分享图标 */}
    <meta property="og:site_name" content="NAGA" />
    {/* twitter */}
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="@NAGA" name="twitter:site" />
    <meta content="@NAGA" name="twitter:creator" />
    {/* 360site */}
    <meta name="360-site-verification" content="e432e6eb0e0b6446e0411134007b9955" />
    <meta name="emotion-insertion-point" content="naga" />
    <meta name="manifest" content="/manifest.json" />
    <link rel="icon" href={favicon} />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
  </>
);

// --------------------------head for app dir--------------------------
/* 注意事项:
 * appDir路由系统支持export const metadata，但是由于之前一的一些meta用metadata方式不好实现，在此还是用传统方式实现
 * 之后可以考虑把这些meta都改成metadata方式
 * 由于如果在RootLayout引入后，再在单独页面引入，会导致meta等信息重复，且刷新先显示Layout的meta，再显示页面的meta
 * PS: 必须在没有页面的Layout页面单独引入
 */
export const defaultTDK = {
  title: 'NAGA-Discover The Best Web3 Gaming',
  keywords: 'naga',
  description:
    'NAGA is a one-stop Web3 game platform incubated by Hong Kong-listed company Linekong Interactive. It provides game developers and players with a full range of solutions. NAGA integrates multi-chain game libraries, NFT Launchpad and NFT MarketPlaceetc. . In the beta stage, it will be launched in March.',
};

export const defaultMetadata = {
  viewport:
    'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
};

export const HeadAppDir = ({
  title,
  keywords,
  description,
  shareIcon: shareIconProp,
  twitterImg,
  children,
}: HeadProps) => {
  const pageTitle = title || defaultTDK.title;
  const pageDescription = description ? description.replace(/\n/g, '') : defaultTDK.description;
  const pageKeywords = keywords || defaultTDK.keywords;
  const shareIcon = shareIconProp || `https://www.naga.io${favicon}`;
  const twettericon = twitterImg || `https://www.naga.io${favicon}`;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="keywords" content={pageKeywords} />
      <meta name="description" content={pageDescription} />
      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={pageDescription} />
      <meta itemProp="image" content={shareIcon} />
      {/* 外站分享图标 */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={twettericon} />
      <meta property="og:description" content={pageDescription} />
      {/* twitter */}
      <meta content={pageTitle} name="twitter:title" />
      <meta content={pageDescription} name="twitter:description" />
      <meta content={twettericon} name="twitter:image" />
    </>
  );
};

// --------------------------head for pages dir--------------------------
/* 注意事项:
 * 代码内容基本与HeadAppDir一致，仅仅多了<meta charSet="utf-8" />, <meta name="viewport" />因为AppDir如果引入会与系统默认的重复，AppDir则RootLayout用metadata方式实现
 * 必须用<Head>包裹起来，否则会出现刷新title调动问题，即先显示_App.tsx title，再显示当前页面title
 * 由于上述原因，这里简单处理，代码基本一样但还是没有提取公共部分
 */
export type HeadProps = {
  title?: string;
  keywords?: string;
  description?: string;
  shareIcon?: string;
  twitterImg?: string;
  children?: ReactNode;
};
export const HeadPagesDir = ({
  title,
  keywords,
  description,
  shareIcon: shareIconProp,
  twitterImg,
  children,
}: HeadProps) => {
  // --------------------------这里变量设置与HeadAppDir完全一致 start--------------------------
  const pageTitle = title || defaultTDK.title;
  const pageDescription = description ? description.replace(/\n/g, '') : defaultTDK.description;
  const pageKeywords = keywords || defaultTDK.keywords;
  const shareIcon = shareIconProp || `https://www.naga.io${favicon}`;
  const twettericon = twitterImg || `https://www.naga.io${favicon}`;
  // --------------------------这里变量设置与HeadAppDir完全一致 end--------------------------

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      {/* ------------------以下内容与HeadAppDir完全一致 start------------------ */}
      {children}
      <title>{pageTitle}</title>
      <meta name="keywords" content={pageKeywords} />
      <meta name="description" content={pageDescription} />
      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={pageDescription} />
      <meta itemProp="image" content={shareIcon} />
      {/* 外站分享图标 */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={twettericon} />
      <meta property="og:description" content={pageDescription} />
      {/* twitter */}
      <meta content={pageTitle} name="twitter:title" />
      <meta content={pageDescription} name="twitter:description" />
      <meta content={twettericon} name="twitter:image" />
      {/* ------------------以下内容与HeadAppDir完全一致 end------------------ */}
    </Head>
  );
};
