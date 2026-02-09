# AI Agent Security Vulnerability Remediation Guide

## Purpose
This guide documents the strategy and workflow for AI agents to efficiently address security vulnerabilities in this repository. It is based on successful remediation completed on February 6, 2026.

## Quick Summary
This repository is a JavaScript utility package for parcelLab's plugin system with React and Vue framework support. Security vulnerabilities typically come from:
1. Direct dependencies (lodash, buble)
2. Build tool dependencies (@vue/cli-service, webpack-dev-server)
3. Transitive dependencies (postcss, vue-template-compiler)

## Strategy Overview

### 1. Assessment Phase (5-10 minutes)

#### a. Understand the Repository
```bash
cd /home/runner/work/js-plugin-utils/js-plugin-utils
cat package.json
ls -la
```

**Key Points:**
- This is a build tool package, not a runtime application
- Contains React and Vue wrapper components
- Build scripts: `unsafe-build-react`, `unsafe-build-vue`
- DevDependencies only (no production dependencies)

#### b. Run Initial Security Audit
```bash
npm audit
npm audit --json > audit-report.json  # For detailed analysis
```

**Expected Output:**
- List of vulnerabilities with severity levels
- Direct vs. transitive dependency issues
- Suggested fix commands

#### c. Check for Outdated Packages
```bash
npm outdated
```

### 2. Triage Phase (5 minutes)

Categorize vulnerabilities by fix strategy:

#### Category A: Auto-fixable via `npm audit fix`
- Direct dependencies with available updates
- No breaking changes
- **Action:** Run `npm audit fix` first

#### Category B: Requires Dependency Updates
- Outdated major dependencies
- **Action:** Update via package.json modifications

#### Category C: Requires npm Overrides
- Transitive dependencies where parent package hasn't updated
- Examples: webpack-dev-server, postcss through @vue/cli-service
- **Action:** Add to `overrides` section in package.json

#### Category D: No Official Fix (EOL packages)
- Packages that are end-of-life
- Example: vue-template-compiler (Vue 2)
- **Action:** Search for community-maintained patches

### 3. Implementation Phase (15-30 minutes)

#### Step 1: Apply Automated Fixes
```bash
npm audit fix
npm audit  # Verify what remains
```

#### Step 2: Research Specific CVEs
For remaining vulnerabilities, search:
- GitHub Security Advisories (GHSA-xxxx-xxxx-xxxx)
- CVE databases
- Package changelogs and release notes
- Community discussions

**Web Search Template:**
```
"[package-name] vulnerability [GHSA-ID] fixed version"
```

#### Step 3: Update package.json

**Example Override Pattern:**
```json
{
  "overrides": {
    "webpack-dev-server": ">=5.2.1",
    "postcss": ">=8.4.31",
    "vue-template-compiler": "npm:vue-template-compiler-patched@^2.7.16-patch.2"
  }
}
```

**For EOL Packages:**
1. Search for "[package-name] patched" or "[package-name] community fix"
2. Use npm aliases: `"package": "npm:package-patched@version"`
3. Add to both `devDependencies` AND `overrides` to ensure transitive deps also use it

#### Step 4: Clean Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
npm audit  # Should show 0 vulnerabilities
```

### 4. Verification Phase (10-15 minutes)

#### a. Verify Security Fixes
```bash
npm audit
npm list [package-name]  # Verify specific package versions
```

#### b. Test Build Process
```bash
# Test React build
npm run unsafe-build-react

# Test Vue build  
npm run unsafe-build-vue
```

**Success Criteria:**
- Both builds complete without errors
- Output files generated in v3/ and v5/ directories
- File sizes are reasonable (~2-7 KB)

#### c. Check Generated Files
```bash
ls -lh v3/react/index.js
ls -lh v3/vue/index.js
```

### 5. Documentation Phase (5 minutes)

Update commit messages and PR descriptions with:
- What vulnerabilities were fixed
- How they were fixed
- CVE/GHSA identifiers
- Version changes
- Final audit status

## Common Vulnerabilities and Solutions

### 1. Lodash Prototype Pollution
**CVE:** CVE-2019-10744, GHSA-xxjr-mmjv-4gpg  
**Fix:** `npm audit fix` (updates to 4.17.21+)

### 2. webpack-dev-server Source Code Theft
**CVE:** CVE-2025-30360  
**GHSA:** GHSA-9jgg-88mc-972h, GHSA-4v9v-hfq4-rm2v  
**Fix:** Update to 5.2.1+  
**Method:** npm overrides (parent packages may not have updated)

### 3. PostCSS Line Return Parsing Error
**CVE:** CVE-2023-44270  
**GHSA:** GHSA-7fh5-64p2-3v2j  
**Fix:** Update to 8.4.31+  
**Method:** npm overrides

### 4. vue-template-compiler XSS (Vue 2 EOL)
**CVE:** CVE-2024-6783  
**GHSA:** GHSA-g3ch-rx76-35fx  
**Fix:** Use `vue-template-compiler-patched@2.7.16-patch.2`  
**Method:** npm alias + overrides  
**Note:** Official Vue 2 is EOL; community maintains patches

## Troubleshooting

### Build Failures After Updates
1. Check for breaking changes in updated packages
2. Review build output for specific errors
3. Consider pinning to specific patch versions if needed

### npm audit Still Shows Issues
- Verify package-lock.json has updated versions
- Check `npm list [package]` to confirm actual installed version
- Sometimes npm audit database lags behind; verify CVE is actually fixed

### Overrides Not Working
- Ensure syntax is correct in package.json
- Delete node_modules and package-lock.json
- Run `npm install` fresh
- Check npm version (overrides require npm 8.3.0+)

## Best Practices

1. **Always backup first:** Git commit or stash changes before major updates
2. **Test incrementally:** Fix and test one category at a time
3. **Document everything:** Note what worked and what didn't
4. **Use web search:** Security advisories have specific fix versions
5. **Prefer npm overrides:** More maintainable than forking packages
6. **Check for patches:** Community often maintains security patches for EOL packages
7. **Verify builds work:** Security fixes are useless if they break functionality

## Time Estimates

- **Simple case** (1-2 auto-fixable vulnerabilities): 10-15 minutes
- **Moderate case** (3-5 vulnerabilities, some require overrides): 30-45 minutes  
- **Complex case** (5+ vulnerabilities, EOL packages, custom patches): 60-90 minutes

## Success Metrics

✅ `npm audit` reports **0 vulnerabilities**  
✅ All build scripts execute successfully  
✅ Generated files are present and reasonable size  
✅ No breaking changes to public API  
✅ Documentation updated with changes made  

## Additional Resources

- [npm overrides documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides)
- [GitHub Security Advisories](https://github.com/advisories)
- [Snyk Vulnerability Database](https://security.snyk.io/)
- [npm audit documentation](https://docs.npmjs.com/cli/v8/commands/npm-audit)

## Maintenance Schedule

**Recommended frequency:** Monthly or when Dependabot alerts are received

**Quick check command:**
```bash
npm audit && echo "Security Status: OK" || echo "Security Status: VULNERABILITIES FOUND"
```

---

*Last Updated: February 6, 2026*  
*All vulnerabilities successfully resolved in this iteration*
