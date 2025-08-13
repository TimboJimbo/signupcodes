
SignupCode – Revenue-Optimized Static Build
===========================================

How to use
----------
1) Deploy the entire folder to your host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, etc.).
2) Replace the GA4 ID in `/assets/js/main.js` and in the `<head>` snippet (search for `G-REPLACE_ME`).
3) Keep `signupcodes-20` as the default Amazon tag. International visitors are supported via Amazon OneLink if your account is set up for:
   Canada, France, Germany, Italy, Netherlands, Poland, Spain, Sweden, United Kingdom.
4) All “Browse/View on Amazon” buttons are wired to build clean Amazon search URLs with the affiliate tag.
   If you have ASINs, set `data-amz-asin` on buttons to deep-link directly to product detail pages.
5) Images are WebP and lazy-loaded for speed. You can replace placeholders in `/assets/img/` later.

SEO & Tracking
--------------
- Clean titles, meta descriptions, canonical URLs.
- JSON-LD for `WebSite` + breadcrumbs on category pages.
- XML sitemap + robots.txt generated and included.
- Affiliate click events are sent as `click_out` to GA4.

Other monetization
------------------
- Add display ads (AdSense or your network) into `index.html` and category pages (search for `<!-- ad slot -->` placeholders if you add them).
- You can add more affiliate partners by creating new buttons with `data-url="..."` and `onclick="scOutbound(event)"`.

Build produced by ChatGPT on behalf of site owner.


Google Search Console & AdSense
-------------------------------
- Replace REPLACE_GSC_VERIFICATION in the <head> meta tag across pages with your Search Console verification token.
- Replace ca-pub-REPLACE_ADSENSE in the AdSense script and meta with your account ID to enable Auto Ads site-wide.
- GA4 is already present: replace G-REPLACE_ME with your Measurement ID in both the <head> and /assets/js/main.js.


IDs currently embedded
----------------------
- Google Analytics 4: G-2LGPRK5NX6
- Google Search Console token: GeAdeYNu_8muyMi2Wwp4mNM4L1FNG23aC94qymuWTeU
- Google AdSense: ca-pub-8757905862194096
