const movies = [
    { 
        title: "Shivam Bhaje (2024)", 
        img: "https://m.media-amazon.com/images/M/MV5BNTY4MzhmZjMtOTdiMC00NDhlLWI5ZTgtNDExZDQ5MmNjYTRlXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg", 
        downloadLink: "https://rogmovies.vip/download-shivam-bhaje-2024-hindi-org-dubbed-480p-720p-1080p-web-dl/"
    },
    { 
        title: "Bank of Bhagyalakshmi", 
        img: "assets/BankofBhagyalakshmijpg.jpg", 
        downloadLink: "https://rogmovies.vip/download-bank-of-bhagyalakshmi-2025-hindi-org-dubbed-480p-720p-1080p-web-dl/" 
    },
    { 
        title: "Police Police", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSHr1NbZzyBoxyIde0oue-v4uOwuRN3WkCA&s", 
        downloadLink: "https://rogmovies.vip/download-police-police-season-1-hindi-hotstar-complete-series-480p-720p-1080p/" 
    },
    { 
        title: "Baby Girl (2026)", 
        img: "https://m.media-amazon.com/images/M/MV5BNzQyMWU3MjItMmJiZi00MTZhLTk2MTYtM2Y0NzQ0MjMyZDM4XkEyXkFqcGc@._V1_.jpg", 
        downloadLink: "https://rogmovies.vip/download-baby-girl-2026-hindi-org-dubbed-web-dl-480p-720p-1080p/" 
    },
    { 
        title: "Predator: Badlands", 
        img: "assets/PredatorBadlands.jpg", 
        downloadLink: "https://vegamovies.cologne/download-predator-badlands-2025-hindi-dubbed-org-english-480p-720p-1080p-bluray-2160p-4k/" 
    },

    // Added Movies
    { 
        title: "Alien: Covenant (2017)", 
        img: "https://image.tmdb.org/t/p/w500/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg", 
        downloadLink: "https://vegamovies.cologne/download-alien-covenant-2017-hindi-dubbed-full-movie-480p-720p-1080p-blu-ray-2/ "
    },
    { 
        title: "Alpha (2018)", 
        img: "https://image.tmdb.org/t/p/w500/afdZAIcAQscziqVtsEoh2PwsYTW.jpg", 
        downloadLink: "https://vegamovies.cologne/download-alpha-2018-dual-audio-hindi-bluray-480p-720p-1080p/"
    },
    { 
        title: "Love On The Amazon (2026)", 
        img: "https://i0.wp.com/rissiwrites.com/wp-content/uploads/sites/339/2026/01/LOVE-ON-THE-AMAZON-EDITORIAL-ART-PINTEREST-PIN1-a.jpg?resize=683%2C1024&ssl=1", 
        downloadLink: "https://vegamovies.cologne/download-love-on-the-amazon-2026-english-full-movie-480p-720p-1080p/"
    },
    { 
        title: "The Taking of Tiger Mountain (2014)", 
        img: "https://m.media-amazon.com/images/M/MV5BNDI3NTUxNjQxNl5BMl5BanBnXkFtZTgwNTgzMDE2NTE@._V1_FMjpg_UX1000_.jpg", 
        downloadLink: "https://vegamovies.cologne/download-the-taking-of-tiger-mountain-2014-hindi-org-english-480p-720p-1080p-bluray/"
    },
    { 
        title: "Anaconda (2025)", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyjVaRHZuwQyZeHoKaWBPomrYpAtC7GBVmw&s", 
        downloadLink: "https://vegamovies.cologne/download-anaconda-2025-hindi-dubbed-org-english-480p-720p-1080p-2160p-web-dl-amazon/"
    },
    { 
        title: "Zootopia 2 (2025)", 
        img: "https://m.media-amazon.com/images/I/813FYPV2qhL._AC_UF1000,1000_QL80_.jpg", 
        downloadLink: "https://vegamovies.cologne/download-zootopia-2-2025-hindi-dubbed-line-english-480p-720p-1080p-amzn-webrip/"
    },
    { 
        title: "Independence Day: Resurgence (2016)", 
        img: "https://m.media-amazon.com/images/M/MV5BMTA2MDgyNzc4MDFeQTJeQWpwZ15BbWU4MDg5MTUwMDkx._V1_.jpg", 
        downloadLink: "https://vegamovies.cologne/download-independence-day-2-resurgence-2016-hindi-org-english-480p-720p-1080p-bluray/"
    },
    { 
        title: "Godzilla x Kong: The New Empire (2024)", 
        img: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg", 
        downloadLink: "https://vegamovies.cologne/download-godzilla-x-kong-the-new-empire-2024-hindi-org-480p-720p-1080p-2160p-4k/"
    }
];

const movieGrid = document.getElementById('movieGrid');
const popModal = new bootstrap.Modal(document.getElementById('downloadModal'));

function load() {
    if(movieGrid) {
        movieGrid.innerHTML = movies.map(m => `
            <div class="movie-card" onclick="openPopup('${m.title}', '${m.downloadLink}')">
                <img src="${m.img}" alt="${m.title}"
                onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
                <div class="card-body">
                    <span class="fw-bold d-block mb-2 text-truncate">${m.title}</span>
                    <button class="btn btn-warning btn-sm w-100 fw-bold">Download</button>
                </div>
            </div>
        `).join('');
    }
}

function openPopup(title, link) {
    document.getElementById('popMovieTitle').innerText = "Download " + title;
    const downloadBtns = document.querySelectorAll('#downloadModal .fw-bold');
    downloadBtns.forEach(btn => {
        btn.onclick = () => {
            if(link !== "#") {
                window.open(link, '_blank');
            } else {
                alert("Download link not available.");
            }
        };
    });
    popModal.show();
}

const menuBtn = document.getElementById('menuToggle');
const icon = document.getElementById('menuIcon');
const side = document.getElementById('sidebar');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        side.classList.toggle('show');
        if (side.classList.contains('show')) {
            icon.classList.replace('bi-list', 'bi-x-lg');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.replace('bi-x-lg', 'bi-list');
            document.body.style.overflow = 'auto';
        }
    });
}

document.addEventListener('DOMContentLoaded', load);
