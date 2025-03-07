// Google Analytics Initialization
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID

// Track Page Views
function trackPageView(pageTitle, pagePath) {
    gtag('event', 'page_view', {
        page_title: pageTitle,
        page_path: pagePath,
        page_location: window.location.href
    });
}

// Track Custom Events
function trackEvent(eventCategory, eventAction, eventLabel) {
    gtag('event', eventAction, {
        event_category: eventCategory,
        event_label: eventLabel
    });
}

// Track Form Submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
        gtag('event', 'form_submit', {
            form_name: form.getAttribute('name') || 'unnamed_form',
            form_id: form.getAttribute('id') || 'no_id'
        });
    });
});

// Track CTA Clicks
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        gtag('event', 'cta_click', {
            cta_text: button.innerText.trim(),
            cta_location: button.closest('section').id || 'unknown_section'
        });
    });
});

// Track Social Media Clicks
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', () => {
        gtag('event', 'social_click', {
            social_platform: link.getAttribute('aria-label'),
            link_url: link.getAttribute('href')
        });
    });
});

// Track Outbound Links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (link.hostname !== window.location.hostname) {
        link.addEventListener('click', () => {
            gtag('event', 'outbound_click', {
                link_url: link.href,
                link_text: link.innerText.trim()
            });
        });
    }
});

// Track Scroll Depth
window.addEventListener('scroll', () => {
    const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    if (scrollPercentage === 25 || scrollPercentage === 50 || scrollPercentage === 75 || scrollPercentage === 100) {
        gtag('event', 'scroll_depth', {
            scroll_percentage: scrollPercentage
        });
    }
});

// Track File Downloads
document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"], a[href$=".xls"]').forEach(link => {
    link.addEventListener('click', () => {
        gtag('event', 'file_download', {
            file_name: link.href.split('/').pop(),
            file_type: link.href.split('.').pop()
        });
    });
});

// Track Video Interactions
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', () => {
        gtag('event', 'video_play', {
            video_title: video.getAttribute('title') || 'untitled',
            video_duration: video.duration
        });
    });

    video.addEventListener('pause', () => {
        gtag('event', 'video_pause', {
            video_title: video.getAttribute('title') || 'untitled',
            video_duration: video.duration
        });
    });

    video.addEventListener('ended', () => {
        gtag('event', 'video_complete', {
            video_title: video.getAttribute('title') || 'untitled',
            video_duration: video.duration
        });
    });
});

// Track E-commerce Events (if applicable)
function trackPurchase(transactionId, value, currency, items) {
    gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency,
        items: items
    });
}

// Track User Timing (e.g., page load time)
window.addEventListener('load', () => {
    const loadTime = Math.round(performance.now());
    gtag('event', 'timing_complete', {
        name: 'page_load',
        value: loadTime,
        event_category: 'load_time'
    });
});

// Track Errors
window.addEventListener('error', (event) => {
    gtag('event', 'error', {
        error_message: event.message,
        error_filename: event.filename,
        error_lineno: event.lineno
    });
});