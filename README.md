# skoffroad-skworld-io

Source for the official site at **[skoffroad.skworld.io](https://skoffroad.skworld.io)**.

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

## DNS

For the custom domain to work, add a `CNAME` record at the DNS provider:

```
skoffroad.skworld.io.   CNAME   smilintux.github.io.
```

GitHub Pages serves with HTTPS automatically once DNS resolves.

## License

GPL-3.0-or-later. See `LICENSE`.
