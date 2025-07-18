| Package                | Version                  | CVE / Advisory ID   | CVSS | Zero-day? | Status |
| ---------------------- | ------------------------ | ------------------- | ---- | --------- | ------ |
| @hookform/resolvers    | 5.0.1                    | —                   | —    | n/a       | OK     |
| @mobily/ts-belt        | 3.13.1                   | —                   | —    | n/a       | OK     |
| @radix-ui/react-dialog | 1.1.11                   | —                   | —    | n/a       | OK     |
| @reduxjs/toolkit       | 2.7.0                    | —                   | —    | n/a       | OK     |
| @testing-library/dom   | 10.4.0                   | —                   | —    | n/a       | OK     |
| @types/react           | 19.1.2                   | —                   | —    | n/a       | OK     |
| @types/react-dom       | 19.1.2                   | —                   | —    | n/a       | OK     |
| axios                  | 1.8.4                    | —                   | —    | n/a       | OK     |
| classnames             | 2.5.1                    | —                   | —    | n/a       | OK     |
| clsx                   | 2.1.1                    | —                   | —    | n/a       | OK     |
| neverthrow             | 8.2.0                    | —                   | —    | n/a       | OK     |
| react                  | 19.1.0                   | —                   | —    | n/a       | OK     |
| react-dom              | 19.1.0                   | —                   | —    | n/a       | OK     |
| react-hook-form        | 7.56.4                   | —                   | —    | n/a       | OK     |
| react-redux            | 9.2.0                    | —                   | —    | n/a       | OK     |
| react-router-dom       | 7.5.2                    | —                   | —    | n/a       | OK     |
| react-toastify         | 11.0.5                   | —                   | —    | n/a       | OK     |
| typescript             | 4.9.5                    | —                   | —    | n/a       | OK     |
| web-vitals             | 2.1.4                    | —                   | —    | n/a       | OK     |
| zod                    | 3.25.42                  | —                   | —    | n/a       | OK     |
| **brace-expansion\***  | 1.0.0–1.1.11,2.0.0–2.0.1 | GHSA-v6h2-p8h4-qcjw | 3.1  | n/a       | ⚠️     |
| **vite\***             | 6.3.0–6.3.3              | GHSA-859w-5945-r5v3 | 0    | n/a       | ⚠️     |

<br>
<br>

# Migration from `neverthrow` to `@mobily/ts-belt`: Security Assessment

## 1. Package Overview

- **Name:** `@mobily/ts-belt`
- **Version:** (check with `npm ls @mobily/ts-belt --depth=0`)
- **Dependencies:** zero (no transitive deps)
- **Purpose:** Provides type-safe `Result`, `pipe` and utility functions for TypeScript

---

## 2. Automated Vulnerability Scan

### 2.1 npm audit

```bash
npm audit --json > audit-report.json
```

**Result:** → 0 advisories found

### 2.3 GitHub Security Advisories & CVE

**GitHub Advisories:**

- URL: https://github.com/mobily/ts-belt/security/advisories
- **Result:** → none open

### 2.4 Issue Tracker Review

- Searched repo issues for keywords: `security`, `vulnerab`, `CVE`
- **Result:** → no matches

---

## 3. Code Audit ("Surface Attack")

### 3.1 Code Analysis

- **Code size:** ~4,000 lines (pure TypeScript)

### 3.2 Findings

- Minimal complexity, clear implementation
- Pure TypeScript implementation

---

## 4. Maintenance & Community

| Metric          | Value             |
| --------------- | ----------------- |
| GitHub stars    | ~5,500 ⭐         |
| Last commit     | ~3 weeks ago      |
| Maintainer      | Official "mobily" |
| Release cadence | Frequent, regular |

---

## 5. Conclusion

### Security Assessment Summary

- ✅ **Zero transitive dependencies** → minimal attack surface
- ✅ **No advisories**
- ✅ **Active maintenance** and clear codebase
- ✅ **Pure TypeScript** implementation with no unsafe operations

### Verdict

**`@mobily/ts-belt` is secure, well-maintained, and ready to adopt.**
