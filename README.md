# Site Nadah Store

Static site (HTML/CSS/JS, no build step). Open `index.html`, or serve the folder:

```bash
python3 -m http.server 5173 --directory site
```

## Pages
- `index.html`: home page (hero, product ranges, store, new arrivals, why us, how to order, matchday, FAQ, contact)
- `boutique.html`: catalog with filters (`?cat=crampons|minifoot|tenues|sneakers|vetements`)
- `produit.html?id=<id>`: product page with a WhatsApp order button (prefilled with the model and size)

## Editing the catalog: `assets/js/products.js`
- `price`: a number in DH (e.g. `price: 349`). `null` shows "Prix sur demande".
- `sizes`: e.g. `[40, 41, 42]`. `[]` shows "Tailles sur demande".
- `isNew: true`: "Nouveau" badge, and the product appears first on the home page.
- Image: `images/products/<id>.jpg`. To add a product, drop a photo in the folder and add a line with the same `id`.

## Store details: `assets/js/main.js` (`STORE` object)
Phone / WhatsApp: 06 49 59 25 21 (from Google Maps). Address: Route Ain Chkef, near Adri Gym, Fès.

## Text (FR / AR)
All site text is in the `T` object in `assets/js/main.js` (`fr` and `ar` keys). The FR/عربي button switches language and RTL direction; the choice is remembered in the browser.

## Still to get from the client
- The original logo (SVG/PNG). `images/brand/logo-mark.svg` is a redrawn version of the crowned "N".
- Prices for each model.
- Original product photos (current ones are compressed Instagram images).
- Confirm opening hours (Google Maps says it closes at 00:00).
