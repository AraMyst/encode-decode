# 🔐 Caesar Cipher Encoder / Decoder

Encode or decode secret messages with the **classical Caesar cipher** right in your browser. Choose any shift key, hit **Go**, and watch the text transform instantly—no page reloads, no server‑side processing.

> **Live demo →** https://aramyst.github.io/encode-decode/

---

## ✨ Features

|                                         |                                                                               |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| 🔄 **Bidirectional conversion**         | Encode plain text **→** cipher text *or* decode cipher text **→** plain text. |
| ⚡ **Real‑time, client‑side processing** | All logic runs in vanilla JS—no network latency, works offline.               |
| 🗝️ **Custom shift key**                | Choose any integer key (positive or negative).                                |
| 🅰️ **Case‑preserving**                 | Uppercase and lowercase letters are shifted within their own alphabets.       |
| 📝 **Non‑alphabetic passthrough**       | Numbers, punctuation, and spaces remain untouched.                            |
| 📱 **Responsive design**                | Mobile‑first layout built with pure CSS3.                                     |
| 🎨 **CSS custom properties**            | Easily tweak colours and themes in a single place.                            |

---

## 🛠 Tech Stack

| Layer     | Technology                    | Purpose / Notes                 |
| --------- | ----------------------------- | ------------------------------- |
| Structure | **HTML5**                     | Semantic layout & form elements |
| Styling   | **CSS3** (+Custom Properties) | Clean UI, easy theming          |
| Logic     | **Vanilla JavaScript (ES6)**  | Cipher algorithm & DOM handling |
| Hosting   | **GitHub Pages** (optional)   | Instant, free static deployment |

---

## 🕹 Usage

1. **Enter** the message you want to process in the *Message* field.
2. **Set** the *Key (shift)* to any integer. For decoding, use the same key that was used to encode.
3. **Choose** **Encode** or **Decode**.
4. Click **Go** → the result appears instantly in the *Result* box.

*Tip: Negative keys work too! A shift of −3 when encoding is the same as +3 when decoding.*

---

## 🧩 How It Works

The Caesar cipher shifts each alphabetical character by *k* positions within the English alphabet. Non‑alphabetic characters stay unchanged.

```text
Plain : A  B  C  D  E  F  ... Z
Shift : 3  3  3  3  3  3  ... 3
Cipher: D  E  F  G  H  I  ... C
```

In the code, characters are mapped to their ASCII codes, the shift is applied modulo 26, and the new character is reconstructed—all in **O(n)** time where *n* is the message length.

---
