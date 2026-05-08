# skoffroad-smilintux-org

Source for the official site at **[skoffroad.smilintux.org](https://skoffroad.smilintux.org)**.

Static single-page site (HTML/CSS/JS, no build step) served via GitHub Pages.

## Local preview

```sh
python3 -m http.server 8080
# then open http://localhost:8080
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure + content |
| `styles.css` | All styling (no preprocessor) |
| `script.js`  | Counter animation + parallax |
| `CNAME`      | GitHub Pages custom domain |
| `assets/`    | Favicon + future SVGs |

## DNS (Cloudflare)

A `CNAME` on the `smilintux.org` zone:

```
skoffroad   CNAME   smilintux.github.io   (DNS-only / gray cloud)
```

GitHub Pages provisions HTTPS automatically once DNS resolves.

## License

GPL-3.0-or-later. See `LICENSE`.
