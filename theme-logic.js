        // --- THEME LOGIC ---
        const toggleButton = document.getElementById('theme-toggle');
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        const html = document.documentElement;

        const savedTheme = localStorage.getItem('theme');
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        function setTheme(theme) {
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            if (theme === 'dark') {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }

        if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
            setTheme('light');
        } else {
            setTheme('dark');
        }

        toggleButton.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            setTheme(currentTheme === 'light' ? 'dark' : 'light');
        });