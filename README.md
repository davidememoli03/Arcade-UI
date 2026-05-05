# Arcade-UI

Libreria di componenti UI ispirata ai videogiochi arcade, pubblicata su npm come `@davide03memoli/arcade-ui`.

[![CI](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml/badge.svg)](https://github.com/davidememoli03/Arcade-UI/actions/workflows/ci.yml)

---

## Struttura del repository

```
Arcade-UI/
├── arcade-ui/          # Codice sorgente e configurazione del pacchetto npm
│   ├── src/            # Sorgenti della libreria
│   ├── dist/           # Output del build (generato, non committato)
│   └── package.json
├── scripts/            # Script di automazione del workflow Git
└── .github/workflows/  # Pipeline CI/CD
```

---

## Setup locale

```bash
cd arcade-ui
npm install
```

| Comando              | Descrizione                          |
|----------------------|--------------------------------------|
| `npm run dev`        | Avvia il server di sviluppo          |
| `npm run build`      | Compila la libreria in `dist/`       |
| `npm test`           | Esegue i test con Vitest             |
| `npm run lint`       | Lint JS (ESLint) e CSS (Stylelint)   |

---

## Workflow con Pull Request

Tutto il lavoro passa per PR — non si committa mai direttamente su `main`.
Usa gli script nella cartella `scripts/` per automatizzare il processo.

### 1. Inizio lavoro — crea un branch

```bash
./scripts/new-branch.sh feat/nome-feature
```

Crea un branch aggiornato da `main` e si posiziona su di esso.

### 2. Lavori, fai commit normalmente

```bash
git add .
git commit -m "feat: descrizione della modifica"
```

### 3. Apri la PR

```bash
./scripts/open-pr.sh "feat: titolo della PR"
```

Pusha il branch e apre la PR su GitHub. La CI parte automaticamente.

### 4. Merge e pulizia

Dopo che la CI è verde e hai fatto il merge su GitHub:

```bash
./scripts/cleanup.sh
```

Elimina i branch locali e remoti già mergati in `main`.

> Puoi usare `./scripts/cleanup.sh --dry-run` per vedere cosa verrebbe eliminato senza farlo davvero.

---

## Pipeline CI/CD

La pipeline (`.github/workflows/ci.yml`) si attiva su ogni push e PR verso `main`.

| Job           | Trigger        | Descrizione                               |
|---------------|----------------|-------------------------------------------|
| **Lint**      | PR + push main | ESLint + Stylelint                        |
| **Test**      | PR + push main | Vitest (richiede Lint verde)              |
| **Build**     | PR + push main | Vite build + verifica file `dist/`        |
| **Publish**   | solo push main | Pubblica su npm `@davide03memoli/arcade-ui` |

---

## Convenzioni per i commit

Seguiamo [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nuova funzionalità
fix: correzione di un bug
docs: solo documentazione
style: formattazione, nessuna logica
refactor: refactoring senza nuove feature
test: aggiunta o modifica di test
ci: modifiche alla pipeline
chore: task di manutenzione
```
