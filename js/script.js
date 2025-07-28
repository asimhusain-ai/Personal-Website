// This Code Written By -Asim Husain

// Transition Code Started
$(window).on('load', function () {
  gsap.to('#loader', {
    duration: 0,
    y: "-100%",
    opacity: 0,
    onComplete: function () {
      $('#loader').css("display", "none");
      $('#header').css("display", "block");
      gsap.fromTo(
        '#header',
        { scale: 0.6, opacity: 0 },
        { duration: 1.5, scale: 1, opacity: 1, ease: "power2.out" }
      );
    }
  });

  gsap.to('#navigation-content', { display: "none" });
  gsap.to('#navigation-content', { display: "flex", delay: 2 });
});

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666; }";
    document.body.appendChild(css);
  };
});
// Transition Code Ended



// Contact Popup Started
function openContactPopup() {
  const popup = document.getElementById('contactPopup');
  const content = popup.querySelector('.contact-content');

  document.body.classList.add('freeze-scroll');
  popup.style.display = 'flex';
  void content.offsetWidth;
  content.classList.add('show');
}

function closeContactPopup() {
  const popup = document.getElementById('contactPopup');
  const content = popup.querySelector('.contact-content');

  content.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none';
    document.body.classList.remove('freeze-scroll');
  }, 400);
}

function submitContact() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const sendBtn = document.getElementById('contactSendBtn');

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";

  emailjs.send("service_cqsx379", "template_u0ioohf", {
    from_name: name,
    reply_to: email,
    message: message
  }).then(() => {
    sendBtn.textContent = "Sent ✓";

    document.getElementById('contactName').value = "";
    document.getElementById('contactEmail').value = "";
    document.getElementById('contactMessage').value = "";

    setTimeout(() => {
      closeContactPopup();
      sendBtn.disabled = false;
    }, 1000);
  }).catch((error) => {
    console.error("❌ Email sending failed:", error);
    sendBtn.disabled = false;
    sendBtn.textContent = "Send";
    alert("Failed to send message. Please try again.");
  });
}
// Contact Popup Ended



// Resume Tooltip Started
let tooltipVisible = false;
let hideTimeout;

function showResumeTooltip() {
  const tooltip = document.getElementById("resumeTooltip");
  const button = document.getElementById("resumeBtn");

  if (tooltipVisible) {
    hideTooltip();
    return;
  }

  const rect = button.getBoundingClientRect();

  const topOffset = 60;
  const leftOffset = 0;

  tooltip.style.position = "fixed";
  tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2 - 50) + "px";
  tooltip.style.top = (rect.top - tooltip.offsetHeight - topOffset) + "px";
  tooltip.style.display = "block";

  tooltipVisible = true;
  hideTimeout = setTimeout(hideTooltip, 4000);

  document.addEventListener("click", handleOutsideClick);
}

function hideTooltip() {
  const tooltip = document.getElementById("resumeTooltip");
  const button = document.getElementById("resumeBtn");

  tooltip.style.display = "none";
  tooltipVisible = false;

  button.blur();

  clearTimeout(hideTimeout);
  document.removeEventListener("click", handleOutsideClick);
}

function handleOutsideClick(event) {
  const tooltip = document.getElementById("resumeTooltip");
  const button = document.getElementById("resumeBtn");

  if (!tooltip.contains(event.target) && !button.contains(event.target)) {
    hideTooltip();
  }
}
// Resume Tooltip Ended



// Privacy Popup Started
function openPrivacyPopup() {
    document.getElementById("privacyPopup").style.display = "flex";
  }

  function closePrivacyPopup() {
    document.getElementById("privacyPopup").style.display = "none";
  }
// Privacy Popup Ended