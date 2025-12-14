document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SETUP ---
    const proposalBtn = document.getElementById('proposal-button');
    const proposalModal = document.getElementById('proposal-modal');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    
    // Start initial animations
    animateHeroEntrance();
    startTypedWish();
    setupIntersectionObserver();
    // Removed: setupFrameObserver(); as the photo scroll is now CSS horizontal
    
    // --- 2. EVENT LISTENERS ---
    proposalBtn.addEventListener('click', handleProposalTrigger);
    yesButton.addEventListener('click', handleYesResponse);
    noButton.addEventListener('click', handleNoResponse);
});

// --- 3. HERO ENTRANCE (CSS Triggered) ---
function animateHeroEntrance() {
    // Simple delay to reveal the Hero elements
    document.querySelectorAll('#hero *[data-reveal]').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.2}s`;
        el.classList.add('revealed');
    });
}


// --- 4. TYPED.JS WISH EFFECT ---
function startTypedWish() {
    const typed = new Typed('#typing-wish', {
        strings: [
            "Initializing secure connection...", 
            "Running diagnostics: Heartbeat nominal.", 
            "Compiling birthday message...", 
            "You are the perfect logic in my system.",
            "Happy Birthday, My Code. My Constant.",
        ],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        bindInputFocusEvents: true,
        // Custom pre-processing to simulate a 'glitch' effect
        preStringTyped: (arrayPos, self) => {
            self.cursor.classList.add('neon-text-pink');
        }
    });
}


// --- 5. INTERSECTION OBSERVER FOR SCROLL REVEALS (Unchanged) ---
function setupIntersectionObserver() {
    const messageParagraphs = document.querySelectorAll('.message-paragraph[data-observer-target]');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // element is 50% visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the revealed class to trigger the CSS transition
                entry.target.classList.add('revealed');
                // Optional: Unobserve after first reveal
                // observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    messageParagraphs.forEach(p => observer.observe(p));
}

// NOTE: startSlideshow() and setupFrameObserver() are removed/not included 
// as the horizontal photo section is now purely CSS-driven.


// --- 6. PROPOSAL TRIGGER LOGIC (Unchanged) ---
function handleProposalTrigger() {
    const body = document.body;
    const proposalModal = document.getElementById('proposal-modal');
    const proposalLine = document.getElementById('modal-proposal-line');

    // 1. Cinematic Flash (Short, dramatic visual transition)
    body.style.transition = 'background-color 0.1s';
    body.style.backgroundColor = 'white'; 
    
    // 2. Play sound effect (Requires Audio object, commented out for direct copy/paste)
    // new Audio('sound/alert.mp3').play(); 

    setTimeout(() => {
        // Snap back to dark and show modal
        body.style.backgroundColor = 'black'; 
        proposalModal.classList.remove('hidden');
        proposalModal.style.opacity = '1';
        
        // 3. Start the final text sequence
        animateProposalText(proposalLine);
        
    }, 100); // Flash duration
}


// --- 7. FINAL TEXT ANIMATION (Unchanged) ---
function animateProposalText(proposalLine) {
    const finalMessage = "KANNUUUUU WILL YOU BE MY WIFE❤️";
    let pIndex = 0;
    proposalLine.textContent = ''; // Clear content for typing effect

    function typeProposal() {
        if (pIndex < finalMessage.length) {
            proposalLine.textContent += finalMessage.charAt(pIndex);
            pIndex++;
            // Faster typing for the start, slower for the end words
            const delay = (pIndex > finalMessage.length - 8) ? 150 : 80;
            setTimeout(typeProposal, delay);
        } else {
            // Final state: Buttons are ready.
        }
    }
    typeProposal();
}


// --- 8. RESPONSE HANDLERS (Unchanged) ---
function handleYesResponse() {
    alert("SYSTEM ACCEPTED! LOVE PROTOCOL ENGAGED.");
    // In a real site, trigger a confetti/fireworks library here
    const yesButton = document.getElementById('yes-button');
    yesButton.textContent = "SUCCESS: FOREVER🤍.";
    yesButton.disabled = true;
    document.getElementById('no-button').style.display = 'none';
}

function handleNoResponse() {
    alert("ERROR: This Soul cannot compute. Please change your decision and marry me😁.");
    // Simple reset or humor
}

// --- 9. BONUS: SIMPLE STAR FIELD GENERATION (Visual filler) (Unchanged) ---
(function generateStarField() {
    const starField = document.getElementById('star-field');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = `${Math.random() * 2}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.opacity = `${0.4 + Math.random() * 0.6}`;
        star.style.backgroundColor = 'white';
        star.style.position = 'absolute';
        star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite alternate`;
        starField.appendChild(star);
    }
})();