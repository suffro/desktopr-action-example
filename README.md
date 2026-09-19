# Desktopr action example

A tiny web app that is turned into a desktop app by the
[Desktopr](https://github.com/suffro/desktopr) build action, the way any
repository would use it.

Nothing from Desktopr is cloned or copied here. The action carries the runtime
with it, so the whole integration is these few lines:

```yaml
- run: npm run build                 # your web app, built however you build it
- uses: suffro/desktopr@v1
  with:
    app_name: Desktopr Example
    app_identifier: dev.desktopr.example
    frontend_dist: dist              # the folder your build produced
```

[`.github/workflows/desktop.yml`](.github/workflows/desktop.yml) runs that, plus
the other way of pointing Desktopr at a web app — `app_url`, which loads a live
address instead of embedding files. Each job uploads the installers as a
workflow artifact.

Only Linux is built here to keep the example quick. Add `windows-latest` and
`macos-latest` to a matrix for the other two, and pass your certificates to have
them signed. See the [documentation](https://desktopr.dev/guide/configuration/github-actions).
