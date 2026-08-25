# Portafolio de Barbara Sánchez

Portafolio profesional segmentado por tipo de oferta laboral, construido con **Astro** + **Tailwind CSS** y desplegado en **GitHub Pages**.

## Rutas

| Ruta | Sección |
|------|---------|
| `/` | Home — vista general para redes |
| `/bi-reporting/` | Análisis de Datos / BI / Reporting |
| `/data-science/` | Data Science (práctica) |
| `/docencia/` | Docencia / Enseñanza |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages — configuración de rutas

Editar `astro.config.mjs` **antes del primer deploy**:

```js
// Sitio de usuario: username.github.io
site: 'https://TU-USUARIO.github.io',
base: '/',

// Sitio de proyecto: username.github.io/nombre-repo
site: 'https://TU-USUARIO.github.io',
base: '/nombre-repo/',
```

## Deploy

1. Crear repo en GitHub
2. Push del código a `main`
3. En **Settings → Pages → Build and deployment**: seleccionar **GitHub Actions**
4. El workflow `.github/workflows/deploy.yml` publica automáticamente en cada push a `main`

## Contenido pendiente de personalizar

- [ ] Datos de contacto en `src/data/site.ts`
- [ ] Foto de perfil: `public/images/barb-profile.jpg`
- [ ] Capturas BI: `public/images/jonda-dashboard.png`, `public/images/qlik-dashboard.png`
- [ ] Fotos curso Excel: `public/images/excel-curso-1.jpg`, etc.
- [ ] URLs reales de YouTube (reemplazar placeholders en páginas BI y Docencia)
- [ ] `site` y `base` en `astro.config.mjs` según tu repo de GitHub

## Stack

- Astro 5 (sitio estático)
- Tailwind CSS 3
- GitHub Pages + GitHub Actions
