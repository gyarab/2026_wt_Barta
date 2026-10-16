# Poznámky HTML

## 9.10.2026
- mimo značku **`<html>`** -> chyba
  - prohlížeč se však vždy snaží zobrazit
- nikdy se nepoužívá tabulátor -> 4 mezery
- **`<!DOCTYPE html>`** - *HTML 5*

### Značky:
- **`<head>`** - ikonka a název na záložce (headline)
- **`<meta charset="utf-8">`** - bez něj by mohly některé browsery vyhodit české znaky špatně
- **`<body>`** - hlavní obsah
- **`<p>`** - odstavec (paragraph)
- **`<h1>`** - nadpis 1. úrovně (headline)
- **`<a>`** - kotva (anchor) - odkaz
---
## 16.10.2026
- *html:5* - zkratka, která vygeneruje základní strukturu ve VS Code
- **`<strong>`** - text silně
- **Bootstrap** - z CDN - ohromná knihovna nápadů
  - *CSS* do **`<head>`**
  - *JS* před konec **`</head>`**
  - Udělá *CSS* reset - aby se stránka ve všech prohlížečích a operačních systémech zobrazovala stejně
  - vícesloupcový design - grid a flex
- HTML elementy:
  - Řádkový (inline) - ten, který je v toku textu
    - **`<Span>`** - nevizuální
  - Block (block) - dává pod sebe
    - **`<Div>`** - nevizuální
- **`<Div>`** - třída