import MetaTag from '@/components/meta-tag/meta-tag';
import { render } from '@testing-library/react';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { describe, expect, it } from 'vitest';

describe('MetaTag', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description'
  };
  HelmetProvider.canUseDOM = false;

  it('should render the title and description', () => {
    const helmetContext = {};
    render(
      <HelmetProvider context={helmetContext}>
        <MetaTag {...defaultProps} />
        <h1>Hmm</h1>
      </HelmetProvider>
    );

    const { helmet } = helmetContext as { helmet: HelmetServerState };

    // Extract title text from title tag
    const titleMatch = helmet.title
      .toString()
      .match(/<title[^>]*>([^<]+)<\/title>/);
    const titleText = titleMatch ? titleMatch[1] : '';

    // Extract description from meta tag
    const descriptionMatch = helmet.meta
      .toString()
      .match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/);
    const descriptionText = descriptionMatch ? descriptionMatch[1] : '';

    // Check title
    expect(titleText).toBe(defaultProps.title);

    // Check description
    expect(descriptionText).toBe(defaultProps.description);
  });

  it('should render the og:title and og:description', () => {
    const helmetContext = {};
    render(
      <HelmetProvider context={helmetContext}>
        <MetaTag {...defaultProps} />
      </HelmetProvider>
    );

    const { helmet } = helmetContext as { helmet: HelmetServerState };

    // Extract og:title from meta tag
    const ogTitleMatch = helmet.meta
      .toString()
      .match(/<meta[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/);
    const ogTitleText = ogTitleMatch ? ogTitleMatch[1] : '';

    // Extract og:description from meta tag
    const ogDescriptionMatch = helmet.meta
      .toString()
      .match(/<meta[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*>/);
    const ogDescriptionText = ogDescriptionMatch ? ogDescriptionMatch[1] : '';

    // Check og:title
    expect(ogTitleText).toBe(defaultProps.title);

    // Check og:description
    expect(ogDescriptionText).toBe(defaultProps.description);
  });

  it('should render the twitter:title and twitter:description', () => {
    const helmetContext = {};
    render(
      <HelmetProvider context={helmetContext}>
        <MetaTag {...defaultProps} />
      </HelmetProvider>
    );

    const { helmet } = helmetContext as { helmet: HelmetServerState };

    // Extract twitter:title from meta tag
    const twitterTitleMatch = helmet.meta
      .toString()
      .match(/<meta[^>]*name="twitter:title"[^>]*content="([^"]*)"[^>]*>/);
    const twitterTitleText = twitterTitleMatch ? twitterTitleMatch[1] : '';

    // Extract twitter:description from meta tag
    const twitterDescriptionMatch = helmet.meta
      .toString()
      .match(
        /<meta[^>]*name="twitter:description"[^>]*content="([^"]*)"[^>]*>/
      );
    const twitterDescriptionText = twitterDescriptionMatch
      ? twitterDescriptionMatch[1]
      : '';

    // Check twitter:title
    expect(twitterTitleText).toBe(defaultProps.title);

    // Check twitter:description
    expect(twitterDescriptionText).toBe(defaultProps.description);
  });
});
