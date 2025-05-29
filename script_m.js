// Scroll-based active navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content > div'); // Sections to observe
    const navItems = document.querySelectorAll('.vertical-nav .nav-item');

    let currentSection = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust offset
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Highlight the active navigation item
    navItems.forEach((item) => {
        item.classList.remove('active');
        if (item.id === `nav-${currentSection}`) {
            item.classList.add('active');
        }
    });
});

document.querySelectorAll('.vertical-nav .nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default jump behavior

      const targetId = this.getAttribute('href').substring(1); // Get the ID (remove #)
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });


  window.addEventListener('load', () => {
    // Initially hide the main content
    document.querySelector('.main-content').classList.add('hide');
    
    // Wait 3 seconds before starting the fade-out effect
    setTimeout(() => { 
        // Apply fade-out effect to the .body element
        document.querySelector('.body').classList.add('fade-out');
        
        // After the fade-out, hide the .body element and show the .main-content
        setTimeout(() => {
            document.querySelector('.body').style.display = 'none';  // Hide .body after fade-out
            document.querySelector('.main-content').classList.remove('hide');  // Show the main content
            document.querySelector('.main-content').classList.add('fade-in');  // Apply fade-in effect to .main-content
        }, 1000);  // Wait for the fade-out to finish (1 second)
    }, 3000);  // Wait for 3 seconds before starting the fade-out
});

  




const sharedDescriptionStyle = `
  font-family: 'Lexend', sans-serif;
  font-size: 1.1rem;
  color: #444d60;
  line-height: 1.6;
  margin-bottom: 20px;
  word-wrap: break-word;
`;

const reviewAnalyzerDescription = `
  <div style="${sharedDescriptionStyle}">
    <p style="margin-bottom: 12px; font-weight: 700; color: rgb(178, 180, 183);">
      Sentiment Analysis Tool using VADER & RoBERTa
    </p>
    <p style="margin-bottom: 12px;">
      This command-line tool analyzes Amazon product reviews using rule-based (VADER) and deep learning (RoBERTa) models. It can:
    </p>
    <ul style="padding-left: 24px; margin-bottom: 12px;">
      <li>Analyze full datasets or individual reviews</li>
      <li>Filter results by sentiment (Positive, Neutral, Negative)</li>
      <li>Export analyzed reviews to CSV</li>
      <li>Visualize sentiment distribution with bar charts</li>
    </ul>
    <p style="font-weight: 600;">
      Libraries: pandas, seaborn, nltk, transformers, matplotlib
    </p>
  </div>
`;

const axonDescription = `
  <div style="${sharedDescriptionStyle}">
    <p style="margin-bottom: 12px; font-weight: 700; color:rgb(178, 180, 183);">
      AI Email Assistant 🤖📧
    </p>
    <p style="margin-bottom: 12px;">
      An intelligent email management system built with <strong>Gmail API</strong>, <strong>Natural Language Processing</strong>, and a smart database backend.
      Supports both <em>interactive</em> and <em>automated</em> modes for smooth inbox handling.
    </p>
    <p style="margin-bottom: 8px; font-weight: 600;">
      📦 Features:
    </p>
    <ul style="padding-left: 24px; margin-bottom: 12px;">
      <li>✨ NLP-powered classification (Intent, Sentiment, Importance)</li>
      <li>🤖 AI-generated smart replies with context</li>
      <li>🧵 Email thread analysis</li>
      <li>📎 Attachment handling & metadata extraction</li>
      <li>💾 Full MySQL storage for processed emails</li>
    </ul>
    <p style="font-weight: 600;">
      🛠️ Tech Stack: Python, Gmail API, Transformers, MySQL, ElectronJS
    </p>
    <p style="font-weight: 600;">
      📦 Dependencies: google-auth, transformers, torch, dotenv, mysql-connector, pyttsx3
    </p>
  </div>
`;

const housePricePredictionDescription = `
  <div style="${sharedDescriptionStyle.replace('1.1rem', '1rem')} color: #444; line-height: 1.5;">
    <p style="font-weight: 700; margin-bottom: 10px;">
      🏠 House Price Prediction Model
    </p>
    <p style="margin-bottom: 10px;">
      A machine learning pipeline to predict house prices using <strong>Polynomial Regression</strong> and other models like <em>Random Forest</em>, <em>SVR</em>, and <em>Decision Tree</em>. Designed for performance comparison and feature engineering.
    </p>
    <p style="font-weight: 600; margin-bottom: 8px;">
      ⚙️ Features:
    </p>
    <ul style="padding-left: 24px; margin-bottom: 10px;">
      <li>🏗️ Feature engineering (house age, renovation status, log transformation)</li>
      <li>📍 One-hot encoding of city & city-wise average price integration</li>
      <li>🧠 Trained using multiple regression techniques</li>
      <li>📊 Best R² Score achieved: <strong>0.65</strong> with Polynomial Regression (deg=2)</li>
    </ul>
    <p style="font-weight: 600;">
      🛠️ Libraries: pandas, numpy, sklearn, matplotlib
    </p>
    <p style="font-weight: 600;">
      📦 ML Models: Polynomial & Linear Regression, SVR, Decision Tree, Random Forest
    </p>
  </div>
`;

const gesturaDescription = `
  <div style="${sharedDescriptionStyle.replace('1.1rem', '1rem')} color: #444; line-height: 1.5;">
    <p style="font-weight: 700; margin-bottom: 10px;">
      🧠 Gestura – AI-Powered Computer Control Assistant
    </p>
    <p style="margin-bottom: 10px;">
      Gestura is a multimodal AI system designed to provide complete hands-free control over a computer using a combination of <strong>hand gestures</strong>, <strong>voice commands</strong>, and <strong>smart automation</strong>. It offers seamless interaction by merging computer vision, speech recognition, and action execution.
    </p>
    <p style="font-weight: 600; margin-bottom: 8px;">
      ⚙️ Key Abilities:
    </p>
    <ul style="padding-left: 24px; margin-bottom: 10px;">
      <li>🖐️ Real-time gesture tracking via webcam</li>
      <li>🎙️ Voice-controlled system commands and app launches</li>
      <li>✍️ Air-writing for typing text using finger movements</li>
      <li>🧠 Adaptive learning for custom gestures and command mappings</li>
      <li>💻 Executes OS-level actions (e.g., open apps, close windows, navigate tabs)</li>
    </ul>
    <p style="font-weight: 600;">
      📦 Tech Stack: Python, OpenCV, MediaPipe, SpeechRecognition, PyAutoGUI, Transformers
    </p>
    <p style="font-weight: 600;">
      🔮 Vision: Make AI the bridge between human intent and digital execution – all without touching the keyboard or mouse.
    </p>
  </div>
`;


function openModal(title, description, link) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalLink = document.getElementById("modalLink");

    modalTitle.textContent = title;
    modalDescription.innerHTML = description;

    if (link && link !== "#") {
        modalLink.href = link;
        modalLink.style.display = "inline-block";
    } else {
        modalLink.style.display = "none";
    }

    modal.style.display = "flex";

    // Trigger CSS transition
    requestAnimationFrame(() => {
        modal.classList.add("show");
    });

    // Close on outside click
    window.onclick = function (e) {
        if (e.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.classList.remove("show");

    modal.addEventListener(
        "transitionend",
        () => {
            if (!modal.classList.contains("show")) {
                modal.style.display = "none";
            }
        },
        { once: true }
    );

    window.onclick = null;
}






document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
    };

    try {
        const response = await fetch("http://127.0.0.1:5000/send_mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.status === "success") {
            alert("Message sent successfully! 💌");
            form.reset();
        } else {
            alert("Error sending message: " + result.error);
        }
    } catch (err) {
        alert("Server error: " + err.message);
    }
});
