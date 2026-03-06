
    // ─── Theme ────────────────────────────────────────────────────
    function initTheme() {
        const saved = localStorage.getItem('theme') || 'light';
        const btn   = document.getElementById('theme-toggle');
        document.documentElement.setAttribute('data-theme', saved);
        btn.textContent = saved === 'dark' ? '☀️' : '🌙';
        btn.addEventListener('click', () => {
            const cur  = document.documentElement.getAttribute('data-theme');
            const next = cur === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            btn.textContent = next === 'dark' ? '☀️' : '🌙';
        });
    }
    document.addEventListener('DOMContentLoaded', initTheme);

    // ─── Utility ──────────────────────────────────────────────────
    function pick(arr)      { return arr[Math.floor(Math.random() * arr.length)]; }
    function pad2(n)        { return n < 10 ? '0' + n : '' + n; }
    function randDigits(n)  { return Array.from({length: n}, () => Math.floor(Math.random() * 10)).join(''); }
    function randAlpha(n) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return Array.from({length: n}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }

    // ─── All Generators ───────────────────────────────────────────
    const generators = {

        names() {
            return `${pick(DATA.firstNames)} ${pick(DATA.lastNames)}`;
        },

        jobTitle() {
            const tier = Math.random();
            if (tier < 0.05) {
                // Funny: 5% — "[Noun] [Role]" e.g. "Rubber Duck Debugger"
                return pick(DATA.jobTitleFunnyNouns) + ' ' + pick(DATA.jobTitleFunnyRoles);
            }
            if (tier < 0.25) {
                // Executive: 20%
                const r = Math.random();
                if (r < 0.3)  return 'VP of ' + pick(DATA.jobTitleVPDepts);
                if (r < 0.6)  return 'Director of ' + pick(DATA.jobTitleDirectorDepts);
                if (r < 0.85) return 'Chief ' + pick(DATA.jobTitleChiefTitles);
                return pick(DATA.jobTitleExecutiveStandalone);
            }
            // Real: optional "[Prefix] [Role] [Suffix]" e.g. "Senior Software Engineer II"
            const parts = [];
            const hasPrefix = Math.random() < 0.5;
            if (hasPrefix) parts.push(pick(DATA.jobTitlePrefixes));
            parts.push(pick(DATA.jobTitleRoles));
            if (!hasPrefix && Math.random() < 0.25) parts.push(pick(DATA.jobTitleSuffixes));
            return parts.join(' ');
        },

        personalEmails() {
            const first = pick(DATA.firstNames).toLowerCase().replace(/[^a-z]/g, '');
            const last  = pick(DATA.lastNames).toLowerCase().replace(/[^a-z]/g, '');
            const sep   = Math.random() < 0.5 ? '.' : '';
            const numD  = Math.random() < 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
            const suf   = numD > 0 ? ('' + Math.floor(Math.random() * Math.pow(10, numD))).slice(0, numD).padStart(numD, '0') : '';
            return `${first}${sep}${last}${suf}@${pick(DATA.personalEmailDomains)}`;
        },

        workEmails() {
            const first  = pick(DATA.firstNames).toLowerCase().replace(/[^a-z]/g, '');
            const last   = pick(DATA.lastNames).toLowerCase().replace(/[^a-z]/g, '');
            const domain = `${pick(DATA.workEmailDomainNames)}.${pick(DATA.workEmailTLDs)}`;
            const r = Math.random();
            const local = r < 0.4 ? `${first}.${last}` : r < 0.75 ? `${first}${last}` : `${first[0]}${last}`;
            return `${local}@${domain}`;
        },

        phones() {
            const area = Math.floor(Math.random() * 800) + 200;
            const exch = Math.floor(Math.random() * 800) + 200;
            return `(${area}) ${exch}-${randDigits(4)}`;
        },

        username() {
            const adj  = pick(DATA.usernameAdjectives);
            const noun = pick(DATA.usernameNouns);
            const num  = Math.random() < 0.5 ? (Math.floor(Math.random() * 9000) + 10).toString() : '';
            const sr   = Math.random();
            const sep  = sr < 0.33 ? '_' : sr < 0.66 ? '.' : '';
            const h    = `${adj}${sep}${noun}${num}`;
            return Math.random() < 0.6 ? `@${h}` : h;
        },

        cityState() {
            return `${pick(DATA.cities)}, ${pick(DATA.states)}`;
        },

        addresses() {
            const digits = Math.floor(Math.random() * 5) + 1;
            const min    = digits === 1 ? 1 : Math.pow(10, digits - 1);
            const max    = Math.pow(10, digits) - 1;
            const num    = Math.floor(Math.random() * (max - min + 1)) + min;
            const street = `${pick(DATA.streets)} ${pick(DATA.streetTypes)}`;
            const zip    = (Math.floor(Math.random() * 90000) + 10000).toString();
            return `${num} ${street}, ${pick(DATA.cities)}, ${pick(DATA.states)} ${zip}`;
        },

        organizations() {
            const cnt  = Math.floor(Math.random() * 2) + 1;
            const used = new Set();
            const words = [];
            while (words.length < cnt) {
                const w = pick(DATA.organizationNames);
                if (!used.has(w)) { used.add(w); words.push(w); }
            }
            words.push(pick(DATA.organizationTypes));
            return words.join(' ');
        },

        apps() {
            const wc = Math.floor(Math.random() * 3) + 2; // 2-4 words
            const words = [];
            for (let i = 0; i < wc - 1; i++) {
                words.push(i === 0 ? pick(DATA.appNameAdjectives) : pick(DATA.appNameModifiers));
            }
            words.push(pick(DATA.appNameNouns));
            return words.join(' ');
        },

        statusLabel() {
            return pick(DATA.statusLabels);
        },

        url() {
            const sub  = Math.random() < 0.7 ? pick(DATA.urlSubdomains) + '.' : '';
            const path = Math.random() < 0.75 ? '/' + pick(DATA.urlPaths) : '';
            return `https://${sub}${pick(DATA.urlDomains)}.${pick(DATA.urlTLDs)}${path}`;
        },

        mac() {
            const device  = pick(['MacBook', 'Apple MB', 'Apple Macbook', 'MB']);
            const model   = pick(['Air', 'Pro']);
            const size    = pick(['13"', '14"', '15"', '16"', '13-inch', '14-inch', '15-inch', '16-inch']);
            const cpu     = pick(['M3', 'M4', 'M4 Pro', 'M4 Max', 'M3 Ultra', 'M4 Ultra']);
            const year    = pick(['2024', '2025', '2026']);
            const storage = pick(['256GB', '512GB', '1TB', '2TB']);
            const ram     = pick(['8GB', '16GB', '24GB', '32GB', '64GB', '128GB']);
            const color   = pick(['Space Gray', 'Silver', 'Gold', 'Space Black', 'Midnight', 'Starlight']);
            switch (Math.floor(Math.random() * 6)) {
                case 0: return `${device} ${model} ${size}`;
                case 1: return `${device} ${model} ${size} - ${cpu}`;
                case 2: return `${device} ${model} ${size} - ${cpu} - (${year})`;
                case 3: return `${device} ${model} ${size} ${cpu} (${year} - ${ram} RAM - ${storage} SSD)`;
                case 4: return `${device} ${model} ${size} - ${cpu} - ${year} - ${ram} RAM - ${storage} SSD`;
                case 5: return `${device} ${model} ${size} - ${cpu} - ${year} - ${ram} RAM - ${storage} SSD - ${color}`;
                default: return `${device} ${model} ${size}`;
            }
        },

        windows() {
            const base = pick(DATA.windowsDeviceBases);
            const size = Math.random() < 0.6 ? ' ' + pick(DATA.windowsDeviceSizes) : '';
            return base + size;
        },

        assets() {
            const dc    = Math.floor(Math.random() * 3); // 0-2 descriptors
            const words = [pick(DATA.assetBrands)];
            for (let i = 0; i < dc; i++) words.push(pick(DATA.assetDescriptors));
            words.push(pick(DATA.assetDeviceNouns));
            let label = words.join(' ');
            if (Math.random() < 0.5) {
                const l = 'ABCDEFGHJKLMNPRSTXZ';
                const ml = l[Math.floor(Math.random() * l.length)] + l[Math.floor(Math.random() * l.length)];
                const md = Math.floor(Math.random() * 9000 + 10) * (Math.random() < 0.5 ? 10 : 100);
                label += ` ${ml}${md}`;
            }
            return label;
        },

        serials() {
            return randAlpha(Math.floor(Math.random() * 9) + 8);
        },

        ups() {
            return `1Z${randAlpha(6)}${randDigits(8)}${Math.floor(Math.random() * 10)}`;
        },

        fedex() {
            return randDigits(Math.random() < 0.5 ? 15 : 12);
        },

        shortDate() {
            const y = Math.floor(Math.random() * 6) + 2025;
            const m = Math.floor(Math.random() * 12) + 1;
            const d = Math.floor(Math.random() * 28) + 1;
            return `${pad2(m)}/${pad2(d)}/${y}`;
        },

        shortYearDate() {
            const y = Math.floor(Math.random() * 6) + 2025;
            const m = Math.floor(Math.random() * 12) + 1;
            const d = Math.floor(Math.random() * 28) + 1;
            return `${pad2(m)}/${pad2(d)}/${('' + y).slice(-2)}`;
        },

        abbrDate() {
            const mo = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            const y  = Math.floor(Math.random() * 6) + 2025;
            const m  = Math.floor(Math.random() * 12);
            const d  = Math.floor(Math.random() * 28) + 1;
            return `${mo[m]} ${d}, ${y}`;
        },

        longDate() {
            const mo = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            const y  = Math.floor(Math.random() * 6) + 2025;
            const m  = Math.floor(Math.random() * 12);
            const d  = Math.floor(Math.random() * 28) + 1;
            return `${mo[m]} ${d}, ${y}`;
        },

        timeValue() {
            const h  = Math.floor(Math.random() * 12) + 1;
            const m  = Math.floor(Math.random() * 60);
            const ap = Math.random() < 0.5 ? 'AM' : 'PM';
            return `${h}:${pad2(m)} ${ap}`;
        },

        creditCard() {
            const isVisa = Math.random() < 0.5;
            const digits = [];
            if (isVisa) {
                digits.push(4);
                for (let i = 0; i < 14; i++) digits.push(Math.floor(Math.random() * 10));
            } else {
                const ft = Math.floor(Math.random() * 5) + 51;
                digits.push(Math.floor(ft / 10), ft % 10);
                for (let i = 0; i < 13; i++) digits.push(Math.floor(Math.random() * 10));
            }
            let sum = 0;
            for (let i = digits.length - 1; i >= 0; i--) {
                let d = digits[i];
                if ((digits.length - i) % 2 === 0) { d *= 2; if (d > 9) d -= 9; }
                sum += d;
            }
            digits.push((10 - (sum % 10)) % 10);
            const s = digits.join('');
            return `${s.slice(0,4)} ${s.slice(4,8)} ${s.slice(8,12)} ${s.slice(12,16)}`;
        },

        currency() {
            const tier = Math.random();
            let cents;
            if      (tier < 0.25) cents = Math.floor(Math.random() * 9999) + 1;
            else if (tier < 0.65) cents = Math.floor(Math.random() * 990000) + 10000;
            else                  cents = Math.floor(Math.random() * 99000000) + 1000000;
            const dollars = Math.floor(cents / 100);
            const c       = pad2(cents % 100);
            const d       = '' + dollars;
            let withCommas = '';
            for (let i = 0; i < d.length; i++) {
                if (i > 0 && (d.length - i) % 3 === 0) withCommas += ',';
                withCommas += d[i];
            }
            return `$${withCommas}.${c}`;
        },

        percentage() {
            const val = Math.random() * 100;
            return Math.random() < 0.4 ? `${val.toFixed(1)}%` : `${Math.round(val)}%`;
        },

        ipv4() {
            const o = () => Math.floor(Math.random() * 254) + 1;
            return `${o()}.${o()}.${Math.floor(Math.random() * 256)}.${o()}`;
        },

        ipv6() {
            const hex = () => {
                let v = Math.floor(Math.random() * 0xffff).toString(16);
                while (v.length < 4) v = '0' + v;
                return v;
            };
            return Array.from({length: 8}, hex).join(':');
        },

        macAddress() {
            const h = () => {
                let v = Math.floor(Math.random() * 256).toString(16).toUpperCase();
                return v.length === 1 ? '0' + v : v;
            };
            return Array.from({length: 6}, h).join(':');
        },

    };

    // ─── UI Helpers ───────────────────────────────────────────────
    function gen(type) {
        const value = generators[type]();
        const el = document.getElementById(`${type}-output`);
        el.textContent = value;
        el.classList.add('has-content');
    }

    function copyOutput(type) {
        const el = document.getElementById(`${type}-output`);
        if (!el.classList.contains('has-content')) return;
        navigator.clipboard.writeText(el.textContent).then(() => {
            const notice = document.getElementById(`${type}-copy`);
            notice.classList.add('show');
            setTimeout(() => notice.classList.remove('show'), 1500);
        });
    }

    // ─── Bulk Generator ───────────────────────────────────────────
    function generateBulk() {
        const type  = document.getElementById('bulk-type').value;
        const count = Math.max(1, parseInt(document.getElementById('bulk-count').value, 10) || 10);
        const fn    = generators[type];
        if (!fn) return;
        const lines = Array.from({length: count}, () => fn());
        const out   = document.getElementById('bulk-output');
        out.textContent = lines.join('\n');
        out.classList.remove('copied');
    }

    function copyBulk() {
        const out = document.getElementById('bulk-output');
        const txt = out.textContent;
        if (!txt || txt === 'Select a type and count, then click Generate Bulk') return;
        navigator.clipboard.writeText(txt).then(() => {
            out.classList.add('copied');
            setTimeout(() => out.classList.remove('copied'), 1500);
        });
    }
