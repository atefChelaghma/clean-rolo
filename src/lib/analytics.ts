declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type AffiliateClickParams = {
  location: 'header' | 'hero' | 'product' | 'footer';
};

export function trackAffiliateClick({ location }: AffiliateClickParams) {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'affiliate_click',

    affiliate_partner: 'mercado_livre',

    product_name: 'conjunto_rolo_adesivo',

    click_location: location,
  });
}
