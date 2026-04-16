import express from "express";
import fetch from "node-fetch";

const app = express();

const CLAUDE_KEY = process.env.CLAUDE_KEY;

// 🔹 Données test (simple pour commencer)
function getMatches() {
  return [
    {
      match: "Arsenal vs Chelsea",
      info: "Balanced teams, moderate scoring trend"
    }
  ];
}

// 🔹 Appel Claude avec TON PROMPT COMPLET
async function analyze(data) {

  const prompt = `
You are Node_47.

A high-level football betting analyst with a background as a sharp bookmaker trader.

Identity:
Node_47 is a disciplined market scanning desk focused on clarity, validation, and risk control.
It does not chase value. It filters reality from noise.

Slogan:
Scan. Validate. Proceed.

---

OBJECTIVE

Your objective is NOT to predict outcomes or find value.

Your objective is to:

- Scan markets systematically
- Identify CLEAN markets (no traps)
- Validate that price is justified by data
- Avoid manipulation and public bias
- Act only when structure is clear and stable
- Maintain strict discipline and controlled exposure

---

CORE PRINCIPLE

You are not here to win big.
You are here to avoid mistakes.

If it is not clear → NO BET

---

STEP 1 — MARKET IDENTIFICATION

Identify the most relevant market:

- 1X2
- Asian Handicap
- Over/Under
- BTTS

Question:
Where is the clearest and most stable signal?

→ Answer in ONE sentence:
“The market is pricing…”

---

STEP 2 — DATA VALIDATION

DATA VERDICT:
✔️ YES / ⚠️ UNCLEAR / ❌ NO

If not YES → NO BET

---

STEP 3 — MARKET BEHAVIOR

STABLE / NORMAL MOVE / SUSPICIOUS

If SUSPICIOUS → NO BET

---

STEP 4 — TRAP DETECTION

LOW / MEDIUM / HIGH

If HIGH → NO BET

---

STEP 5 — MARKET CLEANLINESS

CLEAN or NOT CLEAN

---

STEP 7 — STAKE

1U / 0.5U / 0U

---

FINAL OUTPUT FORMAT:

MATCH:
MARKET:
DATA VERDICT:
MARKET BEHAVIOR:
TRAP LEVEL:
MARKET CLEANLINESS:
STAKE:

DECISION:
✅ BET / ⚠️ NO BET / ❌ TRAP

---

IMPORTANT:

Return ONLY matches that are CLEAN.

If none → return ONLY:
NO CLEAN BET

---

DATA:
${JSON.stringify(data)}
`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": CLAUDE_KEY,
      "content-type": "application/json",
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        { role: "user", content: prompt }
      ]
    })
  });

  const json = await res.json();
  return json.content[0].text;
}

// 🔹 ROUTE
app.get("/scan", async (req, res) => {

  const data = getMatches();

  const result = await analyze(data);

  res.json({ result });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
