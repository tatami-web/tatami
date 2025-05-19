        function showTab(tabId) {
            const contents = document.querySelectorAll('.tab-content');
            const tabs = document.querySelectorAll('.tab');

            contents.forEach(content => {
                content.style.opacity = '0';
            });

            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            const selectedContent = document.getElementById(tabId);
            setTimeout(() => {
                contents.forEach(content => {
                    content.style.display = 'none';
                });
                selectedContent.style.display = 'block';
                selectedContent.style.opacity = '1';
                // Reset scroll position to top
                document.querySelector('.content-wrapper').scrollTop = 0;
                // Show footer on tab change
                document.getElementById('footer').classList.remove('hidden');
            }, 300);

            document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
        }

        // Hide footer when scrolling down
        document.querySelector('.content-wrapper').addEventListener('scroll', function() {
            const footer = document.getElementById('footer');
            if (this.scrollTop > 50) { // Hide after scrolling 50px
                footer.classList.add('hidden');
            } else {
                footer.classList.remove('hidden');
            }
        });
  