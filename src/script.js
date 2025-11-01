// --- Data Configuration ---
const projectsData = [
    {
        title: "What's in my Fridge?",
        description:
            "A web app that suggests recipes based on ingredients you have, helping to reduce food waste.",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        githubUrl: "https://github.com/DhruvilThummar/What-s-in-my-fridge",
        liveUrl: "https://dhruvilthummar.github.io/What-s-In-My-Fridge/",
        imageUrl: "https://placehold.co/600x400/000000/00BFFF?text=FridgeApp",
    },
    {
        title: "The Intelliverse",
        description:
            "A modern AI chatbot with voice input, integrated with the GPT API for intelligent, human-like conversations.",
        tags: ["Html", "Tailwind CSS", "JavaScript", "API"],
        githubUrl: "https://github.com/DhruvilThummar/The-Intelliverse",
        liveUrl: "https://dhruvilthummar.github.io/The-Intelliverse/",
        imageUrl: "https://placehold.co/600x400/000000/00F5D4?text=AI+Chat",
    },
    {
        title: "Tourism Management",
        description:
            "A Java-based system for booking tours and accommodations, featuring roles for Admins, Agents, and Customers.",
        tags: ["Java", "MySQL"],
        githubUrl:
            "https://github.com/DhruvilThummar/Tourism_Management_System",
        imageUrl:
            "https://placehold.co/600x400/000000/FFFFFF?text=Tourism+Management+System",
    },
    {
        title: "Hangman Game",
        description:
            "A console-based Hangman game in Java with multiple difficulty levels and a score tracker, using Java-related words.",
        tags: ["Java"],
        githubUrl: "https://github.com/DhruvilThummar/HangmanGame",
        imageUrl: "https://placehold.co/600x400/000000/00BFFF?text=Hangman",
    },
    {
        title: "Airline Reservation",
        description:
            "A comprehensive airline reservation system built with Java, allowing users to book, cancel, and manage flight reservations.",
        tags: ["Java"],
        githubUrl:
            "https://github.com/DhruvilThummar/Airline-Reservation-System",
        imageUrl:
            "https://placehold.co/600x400/000000/00F5D4?text=Airline+Reservation+System",
    },
    {
        title: "Stone Paper Scissors",
        description:
            "A simple Java implementation of the classic Stone-Paper-Scissors game, allowing users to play against the computer.",
        tags: ["Java"],
        githubUrl:
            "https://github.com/DhruvilThummar/Stone-Paper-Scissors-Game",
        imageUrl:
            "https://placehold.co/600x400/000000/FFFFFF?text=Stone+Paper+Scissors+Game",
    },
];
const skillsData = {
    Languages: [
        { name: "Java", icon: "devicon-java-plain", level: 85 },
        { name: "Python", icon: "devicon-python-plain", level: 70 },
        { name: "JavaScript", icon: "devicon-javascript-plain", level: 80 },
        { name: "SQL", icon: "fas fa-database", level: 75 },
        { name: "HTML", icon: "devicon-html5-plain", level: 90 },
        { name: "CSS", icon: "devicon-css3-plain", level: 85 },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", level: 70 },
        { name: "PHP", icon: "devicon-php-plain", level: 40 },
    ],
    Databases: [
        { name: "MySQL", icon: "devicon-mysql-plain", level: 80 },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: 65 },
    ],
    "Tools & Platforms": [
        { name: "Git", icon: "devicon-git-plain", level: 80 },
        { name: "GitHub", icon: "devicon-github-original", level: 82 },
        { name: "Figma", icon: "devicon-figma-plain", level: 60 },
        { name: "VS Code", icon: "devicon-vscode-plain", level: 90 },
        { name: "IntelliJ IDEA", icon: "devicon-intellij-plain", level: 85 },
        { name: "Android Studio", icon: "devicon-androidstudio-plain", level: 75 },
        { name: "Jupyter", icon: "devicon-jupyter-plain", level: 70 },
        { name: "pgAdmin", icon: "devicon-postgresql-plain", level: 80 }
    ],
};

// --- Core Application Logic ---
let animationFrameId;

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = projectsData
        .map(
            (p) =>
                `<article class="glass-card p-6 rounded-lg flex flex-col project-card"><img src="${p.imageUrl
                }" alt="${p.title
                } thumbnail" class="project-thumbnail" loading="lazy"><h3 class="font-display text-2xl text-accent-secondary mb-3">${p.title
                }</h3><p class="text-secondary mb-4 flex-grow">${p.description
                }</p><div class="mt-auto pt-4"><div class="flex items-center gap-4 flex-wrap"><a href="${p.githubUrl
                }" target="_blank" rel="noopener noreferrer" class="project-button secondary"><i class="fab fa-github" aria-hidden="true"></i> View Code</a>${p.liveUrl
                    ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-button primary"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Demo</a>`
                    : ""
                }</div></div></article>`
        )
        .join("");
}

function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;
    container.innerHTML = Object.entries(skillsData)
        .map(
            ([category, skills]) =>
                `<div class="skills-category mb-12"><h3 class="font-display text-2xl text-accent-secondary mb-8 text-center">${category}</h3><div class="skills-grid">${skills
                    .map(
                        (s) =>
                            `<div class="skill-button" data-level="${s.level}"><svg class="skill-button-progress" viewBox="0 0 100 100"><circle class="progress-ring-bg" cx="50" cy="50" r="45" stroke-width="6" fill="transparent" /><circle cx="50" cy="50" r="45" stroke="var(--accent-color)" stroke-width="6" fill="transparent" class="progress-ring"/></svg><div class="skill-content"><i class="${s.icon}" aria-hidden="true"></i><span class="skill-percentage">0%</span></div><span class="tooltip">${s.name}</span></div>`
                    )
                    .join("")}</div></div>`
        )
        .join("");
    document.querySelectorAll(".progress-ring").forEach((ring) => {
        const r = ring.r.baseVal.value;
        const c = 2 * Math.PI * r;
        ring.style.setProperty("--circumference", c);
        ring.style.strokeDasharray = `0 ${c}`;
    });
}

function initPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) {
        document.addEventListener("DOMContentLoaded", startMainContent);
        return;
    }

    const statusText = document.getElementById("status-text");
    const progressBar = document.getElementById("progress-bar");
    const logoPathSignature = document.getElementById(
        "preloader-logo-path-signature"
    );
    const logoPathStrike = document.getElementById(
        "preloader-logo-path-strike"
    );

    const pageLoaded = new Promise((resolve) =>
        window.addEventListener("load", resolve, { once: true })
    );

    const preloaderTL = gsap.timeline({
        paused: true,
        onComplete: () => {
            pageLoaded.then(() => {
                gsap.to(preloader, {
                    opacity: 0,
                    duration: 1,
                    delay: 0.5,
                    onComplete: () => {
                        preloader.style.display = "none";
                        startMainContent();
                    },
                });
            });
        },
    });

    const lenSig = logoPathSignature.getTotalLength();
    const lenStr = logoPathStrike.getTotalLength();
    gsap.set(logoPathSignature, {
        strokeDasharray: lenSig,
        strokeDashoffset: lenSig,
        opacity: 1,
    });
    gsap.set(logoPathStrike, {
        strokeDasharray: lenStr,
        strokeDashoffset: lenStr,
        opacity: 1,
    });

    preloaderTL
        .to(logoPathSignature, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
        })
        .to(
            logoPathStrike,
            { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" },
            "-=1.0"
        )
        .to(
            statusText,
            { text: "Calibrating...", duration: 0.5, ease: "none" },
            "<"
        )
        .to(
            progressBar,
            { width: "100%", duration: 2.5, ease: "power2.inOut" },
            "<0.5"
        )
        .to(
            statusText,
            { duration: 1, text: "Welcome.", ease: "none" },
            "-=0.5"
        );

    document.addEventListener("DOMContentLoaded", () => {
        document.body.style.overflow = "hidden";
        preloaderTL.play();
    });
}

function startMainContent() {
    document.body.style.overflow = "auto";
    scrambleHeroName();
    initMainAnimations();
    initChatbot();
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderSkills();
    setupSidebar();
    setupContactForm();
    setupThemeToggle();
    // We call these here too so they run after DOM is ready
    setupNavbarScroll();
    setupBackgroundCanvas();
    setupCustomCursor();
    setupVolumeControls();
});

function scrambleHeroName() {
    const el = document.getElementById("hero-name");
    if (!el) return;
    const original = el.dataset.value;
    const chars = "!<>-\\/[]{}—=+*^?#_";
    let frame = 0;
    const scrambleDur = original.length * 8;
    const revealDur = 4000;
    const scramble = () => {
        let scrambled = "";
        const progress = frame / scrambleDur;
        for (let i = 0; i < original.length; i++) {
            scrambled +=
                i < progress * original.length
                    ? original[i]
                    : chars[Math.floor(Math.random() * chars.length)];
        }
        el.textContent = scrambled;
        if (frame < scrambleDur) {
            frame++;
            setTimeout(() => {
                requestAnimationFrame(scramble);
            }, 50);
        } else {
            setTimeout(() => {
                frame = 0;
                requestAnimationFrame(scramble);
            }, revealDur);
        }
    };
    scramble();
}

function setupNavbarScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    let lastScrollTop = 0;
    window.addEventListener(
        "scroll",
        function () {
            let scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                gsap.to(navbar, { y: -100, duration: 0.4, ease: "power2.out" });
            } else {
                gsap.to(navbar, { y: 0, duration: 0.4, ease: "power2.out" });
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        },
        false
    );
}

function setupBackgroundCanvas() {
    const canvas = document.getElementById("background-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const setup = () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const isLightMode = document.body.classList.contains("light-mode");
        const fontSize = 16;
        const textColor = isLightMode
            ? "rgba(0, 119, 182, 0.4)"
            : "rgba(0, 191, 255, 0.4)";
        const bgColor = isLightMode
            ? "rgba(248, 249, 250, 0.05)"
            : "rgba(0, 0, 0, 0.05)";

        const characters =
            "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン01";
        const columns = Math.floor(canvas.width / fontSize);
        const drops = new Array(columns).fill(1);
        const charArray = characters.split("");

        function draw() {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = textColor;
            ctx.font = `${fontSize}px Roboto Mono`;

            for (let i = 0; i < drops.length; i++) {
                const text =
                    charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (
                    drops[i] * fontSize > canvas.height &&
                    Math.random() > 0.975
                ) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animationFrameId = requestAnimationFrame(draw);
        }
        draw();
    };

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setup, 250);
    });

    new MutationObserver(setup).observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
    });

    setup();
}

function setupCustomCursor() {
    const isHoverableDevice = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!isHoverableDevice) return;

    const cursorDot = document.querySelector(".cursor-dot");
    const cursorRing = document.querySelector(".cursor-ring");
    if (!cursorDot || !cursorRing) return;

    window.addEventListener("mousemove", (e) => {
        gsap.to(cursorDot, { duration: 0.2, x: e.clientX, y: e.clientY });
        gsap.to(cursorRing, {
            duration: 0.6,
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out",
        });
    });

    document
        .querySelectorAll("a, button, .glass-card, .magnetic-icon")
        .forEach((el) => {
            el.addEventListener("mouseenter", () =>
                document.body.classList.add("link-hover")
            );
            el.addEventListener("mouseleave", () =>
                document.body.classList.remove("link-hover")
            );
        });

    // *** CURSOR FIX FOR IFRAME ***
    // We need to wait a moment for the badge to potentially render
    setTimeout(() => {
        const linkedinBadge = document.querySelector(".LI-profile-badge");
        if (linkedinBadge) {
            linkedinBadge.addEventListener("mouseenter", () => {
                document.body.classList.add("cursor-iframe-hover");
            });
            linkedinBadge.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-iframe-hover");
            });
        }
    }, 1000); // Wait 1 sec for LinkedIn script to hopefully load
}

function setupContactForm() {
    const form = document.getElementById("contact-form"),
        button = form?.querySelector('button[type="submit"]'),
        toast = document.getElementById("form-toast"),
        toastIcon = document.getElementById("toast-icon"),
        toastMessage = document.getElementById("toast-message");
    if (!form || !button || !toast) return;

    const showToast = (message, isSuccess) => {
        toastMessage.textContent = message;
        toastIcon.innerHTML = isSuccess ? "✅" : "❌";
        toast.className = "show " + (isSuccess ? "success" : "error");
        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 4000);
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        audioManager.play("click");
        button.classList.add("loading");
        button.disabled = true;
        const formData = new FormData(form),
            object = {};
        formData.forEach((v, k) => {
            object[k] = v;
        });
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(object),
        })
            .then(async (res) => {
                let jsonRes = await res.json();
                if (res.status == 200) {
                    showToast("Thanks for reaching out! 🙏", true);
                    form.reset();
                } else {
                    showToast(jsonRes.message || "Something went wrong!", false);
                }
            })
            .catch(() => {
                showToast("An error occurred. Please try again.", false);
            })
            .finally(() => {
                button.classList.remove("loading");
                button.disabled = false;
            });
    });
}

function initChatbot() {
    const bubble = document.getElementById("chatbot-bubble");
    const windowEl = document.getElementById("chatbot-window");
    const messagesEl = document.getElementById("chat-messages");
    const inputEl = document.getElementById("chat-input");
    const sendBtn = document.getElementById("chat-send");
    const closeBtn = document.getElementById("chat-close-btn");
    const quickRepliesEl = document.getElementById(
        "quick-replies-container"
    );
    if (
        !bubble ||
        !windowEl ||
        !messagesEl ||
        !inputEl ||
        !sendBtn ||
        !closeBtn ||
        !quickRepliesEl
    )
        return;

    const knowledge = [
        {
            k: ["about", "who are you", "dhruvil"],
            r: "Dhruvil is a passionate Computer Engineering student at L.J. University, specializing in Java, Python, and web development. He loves building cool projects and solving problems.",
        },
        {
            k: ["skill", "tech", "know", "do", "proficient", "strong", "tools"],
            r: "Dhruvil's core strength is in Java and fundamental web technologies (HTML, CSS, JavaScript). He is also proficient with Python, SQL, and tools like Git, VS Code, IntelliJ, and Android Studio. He's actively improving in Tailwind CSS and database management.",
        },
        {
            k: ["project", "work", "experience"],
            r: "You can see his main projects above, like the 'What's in my Fridge?' app which uses a recipe API, and several Java-based systems. Each project was chosen to solve a specific problem and to help him learn a new technology or concept.",
        },
        {
            k: ["contact", "email", "hire", "connect"],
            r: "You can get in touch with Dhruvil by emailing him at dhruvithummar1303@gmail.com or by connecting on LinkedIn. All the links are in the Contact section at the bottom of the page.",
        },
        {
            k: ["education", "college", "university", "studying", "learning"],
            r: "He is currently pursuing his Bachelor of Technology in Computer Engineering at L J University in Ahmedabad, Gujarat (2024-2028). Alongside his coursework, he's diving deeper into backend development with Spring Boot and exploring modern frontend frameworks like React.",
        },
        {
            k: ["hobby", "interest", "free time"],
            r: "Besides coding, Dhruvil enjoys exploring new technologies and contributing to open-source projects. He's also a fan of problem-solving challenges and enjoys a good cup of coffee.",
        },
        {
            k: ["opportunity", "internship", "job", "role"],
            r: "Dhruvil is actively seeking internships or freelance opportunities in software development, particularly in roles involving Java or full-stack web development. He is eager to apply his skills in a real-world environment.",
        },
        {
            k: ["location", "where", "from"],
            r: "Dhruvil is from Ahmedabad, Gujarat, India.",
        },
        {
            k: ["goal", "ambition", "future"],
            r: "His goal is to become a full-stack developer who can build scalable and impactful applications from the ground up. He's focused on continuous learning to stay updated with the latest industry trends.",
        },
        {
            k: ["why java", "favorite language"],
            r: "Dhruvil enjoys Java for its robustness, platform independence, and vast ecosystem. It's the backbone of many of his projects, especially for building scalable server-side applications.",
        },
        {
            k: ["learning style", "how learn"],
            r: "He believes in learning by doing. Most of his skills come from hands-on project work, tackling real-world problems, and constantly experimenting with new technologies and frameworks.",
        },
        {
            k: ["portfolio purpose", "why this site"],
            r: "This portfolio is a live showcase of his skills and projects. It’s a way for him to document his journey as a developer and connect with potential collaborators and employers.",
        },
        {
            k: ["fun fact", "personality"],
            r: "A fun fact: Dhruvil is meticulous about code quality and believes that clean, well-documented code is just as important as the functionality itself. He's a problem-solver at heart!",
        },
        {
            k: ["proud of", "achievement"],
            r: "Dhruvil is particularly proud of 'The Intelliverse' project. It was a great learning experience in integrating external APIs and building a complex, interactive user interface from scratch.",
        },
        {
            k: ["approach"],
            r: "He approaches new projects by first breaking down the problem into smaller, manageable parts. He emphasizes planning and architecture before writing code, and he's a big fan of iterative development and getting feedback early and often.",
        },
        {
            k: ["team", "collaborate"],
            r: "Dhruvil thrives in collaborative environments where ideas are shared openly. He enjoys working with teams that are passionate about building high-quality products and are committed to mutual learning and support.",
        },
        {
            k: ["strength", "weakness"],
            r: "Dhruvil's greatest strength is his problem-solving ability and his dedication to writing clean, efficient code. As a student, he's still building experience in large-scale enterprise applications and cloud deployment, an area he is actively working on.",
        },
        {
            k: ["stay updated", "trends"],
            r: "He stays current by following tech blogs, contributing to open-source projects, and regularly building personal projects with new tools. He believes hands-on experience is the best way to learn and stay sharp.",
        },
        {
            k: ["good project", "ideal project"],
            r: "For Dhruvil, a good project is one that solves a real-world problem, challenges him to learn something new, and has a positive impact on its users. He values projects that are well-designed both in terms of user experience and code architecture.",
        },
        {
            k: ["favorite part", "enjoy most"],
            r: "He particularly enjoys the initial problem-solving and architectural design phase, where he gets to map out the solution. He also loves the final moment when all the pieces come together and the application works as intended—it's incredibly satisfying!",
        },
        {
            k: ["challenge", "bugs", "creative block"],
            r: "When faced with a tough bug or a creative block, he usually takes a step back. This might involve walking away from the code for a bit, sketching out the problem on paper, or discussing it with a peer. He finds that a fresh perspective is often the key to a breakthrough.",
        },
        {
            k: ["learn next", "future tech"],
            r: "He's very excited about the potential of cloud technologies and plans to learn more about AWS or Google Cloud Platform. He is also keen on exploring more advanced topics in machine learning to integrate smarter features into his applications.",
        },
        {
            k: ["thank you", "thanks"],
            r: "You're welcome! If you have any more questions about Dhruvil or his work, feel free to ask.",
        },
        {
            k: ["help", "support"],
            r: "I can answer questions about Dhruvil's skills, projects, and education. For anything else, please use the contact form or connect with him on LinkedIn.",
        },
        {
            k: ["bye", "goodbye", "see you"],
            r: "Goodbye! Feel free to reach out anytime if you have more questions about Dhruvil.",
        },
        {
            k: ["hello", "hi", "hey"],
            r: "Hello! I'm Info-Byte, Dhruvil's personal AI assistant. How can I help you today?",
        },
    ];

    const quickReplies = [
        "What's his ideal project?",
        "How does he handle bugs?",
        "What's he excited to learn next?",
    ];

    const getResponse = (input) => {
        const lower = input.toLowerCase();
        for (const item of knowledge) {
            if (item.k.some((key) => lower.includes(key))) return item.r;
        }
        return "I can answer questions about Dhruvil's skills, projects, and education. For anything else, please use the contact form or connect with him on LinkedIn.";
    };

    const addMessage = (text, sender) => {
        const isUser = sender === "user";
        const msgGroup = document.createElement("div");
        msgGroup.className = `chat-message-group ${sender}`;
        msgGroup.innerHTML = `<div class="chat-avatar"><i class="fas ${isUser ? "fa-user" : "fa-robot"
            }"></i></div><div class="chat-bubble">${text}</div>`;
        messagesEl.appendChild(msgGroup);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    };

    const showTyping = (show) => {
        document.querySelector(".typing-indicator")?.remove();
        if (show) {
            const typingEl = document.createElement("div");
            typingEl.className = "chat-message-group bot typing-indicator";
            typingEl.innerHTML = `<div class="chat-avatar"><i class="fas fa-robot"></i></div><div><span></span><span></span><span></span></div>`;
            messagesEl.appendChild(typingEl);
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }
    };

    const showQuickReplies = () => {
        quickRepliesEl.innerHTML = "";
        quickReplies.forEach((reply) => {
            const btn = document.createElement("button");
            btn.textContent = reply;
            btn.className = "quick-reply";
            btn.onclick = () => {
                audioManager.play("click");
                inputEl.value = reply;
                handleChat();
            };
            quickRepliesEl.appendChild(btn);
        });
    };

    const handleChat = () => {
        const input = inputEl.value.trim();
        if (!input) return;
        audioManager.play("click");
        addMessage(input, "user");
        inputEl.value = "";
        quickRepliesEl.innerHTML = "";
        showTyping(true);
        setTimeout(() => {
            const res = getResponse(input);
            showTyping(false);
            addMessage(res, "bot");
            showQuickReplies();
            audioManager.play("notification");
        }, 1200);
    };

    const toggleChat = (open) => {
        windowEl.classList.toggle("open", open);
        bubble.classList.toggle("open", open);
        const icon = bubble.querySelector("svg");
        gsap.to(icon, {
            rotation: open ? 135 : 0,
            duration: 0.4,
            ease: "back.out(1.7)",
        });
        if (open) inputEl.focus();
    };

    bubble.addEventListener("click", () => {
        audioManager.play("click");
        toggleChat(!windowEl.classList.contains("open"));
    });
    closeBtn.addEventListener("click", () => {
        audioManager.play("click");
        toggleChat(false);
    });
    sendBtn.addEventListener("click", handleChat);
    inputEl.addEventListener(
        "keypress",
        (e) => e.key === "Enter" && handleChat()
    );

    addMessage(
        "Hello! I'm Info-Byte, Dhruvil's personal AI assistant. How can I help you today?",
        "bot"
    );
    showQuickReplies();
}

function initMainAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const taglineEl = document.getElementById("hero-tagline");
    const originalTagline = taglineEl ? taglineEl.textContent.trim() : "";
    if (taglineEl) taglineEl.textContent = "";

    gsap
        .timeline({ delay: 0.2 })
        .from("#hero-name", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
        })
        .to(
            "#hero-tagline",
            {
                text: originalTagline,
                duration: 2.5,
                ease: "none",
            },
            "-=0.6"
        )
        .from(
            "#hero-university",
            { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
            "-=2"
        )
        .from(
            "#hero-cta-container",
            { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
            "-=1.8"
        );

    gsap.to("#hero-cta-container i", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
    });

    gsap.utils.toArray(".section-heading").forEach((h) =>
        gsap.from(h, {
            scrollTrigger: {
                trigger: h,
                start: "top 85%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        })
    );

    gsap.utils.toArray(".reveal-text").forEach((el) => {
        const childNodes = Array.from(el.childNodes);
        el.innerHTML = "";

        childNodes.forEach((node) => {
            if (node.nodeType === 3) {
                // Text node
                const text = node.textContent;
                const parts = text.split(/(\s+)/);
                parts.forEach((part) => {
                    if (part.trim().length > 0) {
                        const wrapper = document.createElement("span");
                        wrapper.className = "word-wrapper";
                        const inner = document.createElement("span");
                        inner.className = "word";
                        inner.textContent = part;
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                    } else {
                        el.appendChild(document.createTextNode(part));
                    }
                });
            } else if (node.nodeType === 1) {
                // Element node (the highlight)
                const wrapper = document.createElement("span");
                wrapper.className = "word-wrapper";
                node.classList.add("word");
                wrapper.appendChild(node.cloneNode(true));
                el.appendChild(wrapper);
            } else {
                el.appendChild(node.cloneNode(true));
            }
        });

        // Animate the inner .word elements
        gsap.from(el.querySelectorAll(".word"), {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
            },
            yPercent: 100,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.05,
        });
    });

    gsap.from(".education-card", {
        scrollTrigger: { trigger: "#education", start: "top 70%" },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
    });

    ScrollTrigger.batch(".project-card", {
        start: "top 80%",
        onEnter: (b) =>
            gsap.from(b, {
                opacity: 0,
                y: 50,
                stagger: 0.15,
                ease: "power3.out",
                duration: 0.8,
            }),
    });

    ScrollTrigger.batch(".skill-button", {
        start: "top 85%",
        onEnter: (b) => {
            gsap.to(b, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () =>
                    b.forEach((btn) => btn.classList.add("visible")),
            });
            b.forEach((btn) => {
                const level = parseInt(btn.dataset.level);
                const ring = btn.querySelector(".progress-ring");
                const percent = btn.querySelector(".skill-percentage");
                const c = parseFloat(
                    ring.style.getPropertyValue("--circumference")
                );
                const offset = c * (1 - level / 100);
                gsap.to(ring, {
                    strokeDasharray: `${c - offset} ${c}`,
                    duration: 1.5,
                    ease: "power3.out",
                    delay: 0.5,
                });
                gsap.to(
                    { v: 0 },
                    {
                        v: level,
                        duration: 1.5,
                        delay: 0.5,
                        ease: "power3.out",
                        onUpdate: function () {
                            percent.textContent = `${Math.round(this.targets()[0].v)}%`;
                        },
                    }
                );
            });
        },
    });

    gsap.from(".contact-content > *", {
        scrollTrigger: { trigger: "#contact", start: "top 70%" },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
    });

    // Add sound effects to project cards and skill buttons
    setTimeout(() => {
        // *** NEW: Add sound to Header Logo ***
        const headerLogo = document.getElementById('header-logo-link');
        if (headerLogo) {
            headerLogo.addEventListener('mouseenter', () => audioManager.play('hover'));
            headerLogo.addEventListener('click', () => audioManager.play('click'));
        }

        // *** NEW: Add sound to Footer Social Icons ***
        document.querySelectorAll('.magnetic-icon').forEach(link => {
            link.addEventListener('mouseenter', () => audioManager.play('hover'));
            link.addEventListener('click', () => audioManager.play('click'));
        });

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => audioManager.play('hover'));
            card.addEventListener('click', () => audioManager.play('click'));
        });

        document.querySelectorAll('.skill-button').forEach(button => {
            button.addEventListener('mouseenter', () => audioManager.play('hover'));
            button.addEventListener('click', () => audioManager.play('click'));
        });

        document.querySelectorAll('#hero-cta-container a').forEach(link => {
            link.addEventListener('mouseenter', () => audioManager.play('hover'));
            link.addEventListener('click', () => audioManager.play('click'));
        });

        // Add sound to LinkedIn badge in About section
        const linkedinBadge = document.querySelector('.LI-profile-badge');
        if (linkedinBadge) {
            linkedinBadge.addEventListener('mouseenter', () => audioManager.play('hover'));
            linkedinBadge.addEventListener('click', () => audioManager.play('click'));
        }

        // Add sound to Education card
        const educationCard = document.querySelector('.education-card');
        if (educationCard) {
            educationCard.addEventListener('mouseenter', () => audioManager.play('hover'));
            educationCard.addEventListener('click', () => audioManager.play('click'));
        }
    }, 1000); // Delay to ensure elements are rendered
}

function setupSidebar() {
    const menuBtn = document.getElementById("menu-toggle-btn"),
        closeBtn = document.getElementById("sidebar-close-btn"),
        sidebar = document.getElementById("sidebar-menu"),
        overlay = document.getElementById("sidebar-overlay"),
        links = document.querySelectorAll(".sidebar-link");
    if (!menuBtn || !closeBtn || !sidebar || !overlay) return;

    const open = () => {
        document.body.classList.add("no-scroll");
        sidebar.classList.add("open");
        overlay.classList.remove("hidden");
        gsap.to(overlay, { opacity: 1, duration: 0.3 });
        menuBtn.setAttribute("aria-expanded", "true");
        audioManager.play("click");
    };
    const close = () => {
        document.body.classList.remove("no-scroll");
        sidebar.classList.remove("open");
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => overlay.classList.add("hidden"),
        });
        menuBtn.setAttribute("aria-expanded", "false");
        audioManager.play("click");
    };
    menuBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", close);
    links.forEach((l) => l.addEventListener("click", close));

    // Add sound effects to navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => audioManager.play('click'));
    });
}

function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("theme-toggle-sun");
    const moonIcon = document.getElementById("theme-toggle-moon");
    if (!toggleBtn || !sunIcon || !moonIcon) return;

    const applyTheme = (theme) => {
        if (theme === "dark") {
            document.body.classList.remove("light-mode");
            sunIcon.classList.add("hidden");
            moonIcon.classList.remove("hidden");
        } else {
            document.body.classList.add("light-mode");
            sunIcon.classList.remove("hidden");
            moonIcon.classList.add("hidden");
        }
    };

    toggleBtn.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-mode");
        const newTheme = isLight ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
        // Play theme toggle sound
        audioManager.play("click");
    });

    // Load saved theme or default to dark mode
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || "dark");
}

function setupVolumeControls() {
    const volumeToggle = document.getElementById("volume-toggle");
    const volumeIcon = document.getElementById("volume-icon");
    const volumeSlider = document.getElementById("volume-slider");
    const volumePercentage = document.getElementById("volume-percentage");
    const volumeMute = document.getElementById("volume-mute");

    if (!volumeToggle || !volumeIcon || !volumeSlider || !volumePercentage || !volumeMute) return;

    // Load saved audio settings
    audioManager.loadSettings();

    // Update UI based on saved settings
    const updateVolumeUI = () => {
        const state = audioManager.getState();
        const volume = Math.round(state.volume * 100);
        volumeSlider.value = volume;
        volumePercentage.textContent = `${volume}%`;

        // Update icon based on volume and mute state
        if (state.muted || volume === 0) {
            volumeIcon.className = "fas fa-volume-mute";
            volumeMute.innerHTML = '<i class="fas fa-volume-up text-sm"></i>';
        } else if (volume < 50) {
            volumeIcon.className = "fas fa-volume-down";
            volumeMute.innerHTML = '<i class="fas fa-volume-mute text-sm"></i>';
        } else {
            volumeIcon.className = "fas fa-volume-up";
            volumeMute.innerHTML = '<i class="fas fa-volume-mute text-sm"></i>';
        }
    };

    // Volume slider change
    volumeSlider.addEventListener("input", (e) => {
        const volume = e.target.value / 100;
        audioManager.setVolume(volume);
        updateVolumeUI();
    });

    // Mute/unmute button
    volumeMute.addEventListener("click", () => {
        audioManager.toggleMute();
        updateVolumeUI();
    });

    // Volume toggle button (quick mute/unmute)
    volumeToggle.addEventListener("click", () => {
        audioManager.toggleMute();
        updateVolumeUI();
        audioManager.play("click");
    });

    // Initial UI update
    updateVolumeUI();

    // Add subtle hover sound to volume controls
    [volumeToggle, volumeMute].forEach(element => {
        element.addEventListener("mouseenter", () => {
            audioManager.play("hover", { delay: 0 });
        });
    });
}

// --- Initialize ---
// We initialize GSAP plugins at the top level of the module
gsap.registerPlugin(TextPlugin, ScrollTrigger);

// Preloader is the first thing to run
initPreloader();

// Other initializations are kicked off from DOMContentLoaded or startMainContent
document.addEventListener("DOMContentLoaded", () => {
    initAudioManager();
    setupThemeToggle();
    setupVolumeControls();
    initMainContent();
});