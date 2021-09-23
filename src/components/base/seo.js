import { graphql, useStaticQuery } from 'gatsby'

import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

const SEO = ({ title, description, image, article, location }) => {
  const { site } = useStaticQuery(query)
  const { pathname } = location
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    phone,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  const RichSnippetSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: seo.title,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '704 Fir St',
      addressLocality: 'Edmonds',
      addressRegion: 'WA',
      postalCode: '98020',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.507912,
      longitude: -121.947052,
    },
    url: seo.url,
    telephone: phone,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}/opengraph-gen.png`}
      />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:width" content="50" />
      {/* <script type="application/ld+json">
        {JSON.stringify(RichSnippetSchema)}
      </script> */}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        address
        phone
        twitterUsername
      }
    }
  }
`
