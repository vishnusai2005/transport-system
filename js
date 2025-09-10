// Application Data
const appData = {
    drivers: [
        {
            driver_id: "DRV1000",
            name: "Driver 1",
            rating: 4.2,
            experience_years: 5,
            current_location: { lat: 13.0927, lng: 79.3015 },
            availability: "available",
            incentive_eligible: true,
            performance_score: 85,
            recent_trips: 15,
            vehicle_type: "auto"
        },
        {
            driver_id: "DRV1001",
            name: "Driver 2",
            rating: 4.8,
            experience_years: 3,
            current_location: { lat: 13.0727, lng: 79.2815 },
            availability: "busy",
            incentive_eligible: false,
            performance_score: 92,
            recent_trips: 28,
            vehicle_type: "bus"
        }
    ],
    events: [
        {
            event_id: "EVT3000",
            event_name: "College Fest",
            date: "2025-09-15",
            time: "14:00",
            expected_participants: 1500,
            location: "MBU Campus",
            surge_multiplier: 2.1,
            impact_level: "high"
        }
    ],
    transport_availability: [
        {
            location: "MBU Main Gate",
            auto_count: 8,
            bus_count: 3,
            estimated_wait_time: "5 minutes",
            last_updated: "2025-09-10 23:37:00",
            coordinates: { lat: 13.0827, lng: 79.2915 }
        },
        {
            location: "Tirupati Bus Stand",
            auto_count: 12,
            bus_count: 5,
            estimated_wait_time: "3 minutes",
            last_updated: "2025-09-10 23:37:00",
            coordinates: { lat: 13.1027, lng: 79.3115 }
        }
    ],
    emergency_services: [
        {
            service_type: "Police",
            number: "100",
            location: "Tirupati Police Station",
            coordinates: { lat: 13.6288, lng: 79.4192 }
        },
        {
            service_type: "Medical Emergency",
            number: "108",
            location: "Ruia Hospital",
            coordinates: { lat: 13.6307, lng: 79.4185 }
        },
        {
            service_type: "Fire Emergency",
            number: "101",
            location: "Fire Station Tirupati",
            coordinates: { lat: 13.6289, lng: 79.4170 }
        },
        {
            service_type: "University Security",
            number: "+91-877-2265259",
            location: "MBU Security Office",
            coordinates: { lat: 13.0827, lng: 79.2915 }
        }
    ],
    popular_routes: [
        {
            route_id: "RT001",
            from: "MBU Main Gate",
            to: "Tirupati Railway Station",
            distance_km: 35.2,
            estimated_time: 45,
            fare: 280
        },
        {
            route_id: "RT002",
            from: "MBU Campus",
            to: "Tirupati Bus Stand",
            distance_km: 33.8,
            estimated_time: 42,
            fare: 260
        },
        {
            route_id: "RT003",
            from: "Boys Hostel",
            to: "City Center Mall",
            distance_km: 38.1,
            estimated_time: 50,
            fare: 310
        }
    ]
};

// Global variables
let currentUser = null;
let currentRole = null;
let liveMap = null;
let driverMap = null;
let performanceChart = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing AI Transport Hub...');
    initializeApp();
    setupEventListeners();
    startRealTimeUpdates();
});

// App initialization
function initializeApp() {
    showScreen('loginScreen');
    console.log('App initialized successfully');
}

// Event listeners setup
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Role selection with better error handling
    const roleButtons = document.querySelectorAll('.role-btn');
    console.log('Found role buttons:', roleButtons.length);
    
    roleButtons.forEach((btn, index) => {
        console.log('Setting up listener for button', index, btn.dataset.role);
        btn.addEventListener('click', function(event) {
            console.log('Role button clicked:', this.dataset.role);
            selectRole(this.dataset.role, event);
        });
    });

    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        console.log('Login form listener added');
    }

    // Auto-update transport counts with animation
    updateTransportCounts();
    console.log('Event listeners setup complete');
}

// Role selection - Simplified and fixed
function selectRole(role, event) {
    console.log('selectRole called with:', role);
    
    if (!role) {
        console.error('No role provided');
        return;
    }

    // Remove selected class from all buttons
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked button
    const clickedButton = event.target.closest('.role-btn');
    if (clickedButton) {
        clickedButton.classList.add('selected');
        console.log('Button selected:', role);
    }
    
    currentRole = role;
    
    // Show login form with animation
    const loginFormContainer = document.querySelector('.login-form-container');
    if (loginFormContainer) {
        console.log('Showing login form...');
        loginFormContainer.classList.remove('hidden');
        loginFormContainer.style.animation = 'slideIn 0.5s ease-in-out';
    }
}

// Login handling
function handleLogin(e) {
    e.preventDefault();
    console.log('Login form submitted');
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    if (!currentRole) {
        showNotification('Please select a role first', 'error');
        return;
    }

    showLoading();
    console.log('Processing login for role:', currentRole);
    
    // Simulate authentication delay
    setTimeout(() => {
        const user = {
            username: username,
            role: currentRole,
            loginTime: new Date().toISOString()
        };
        
        currentUser = user;
        hideLoading();
        showDashboard(currentRole);
        console.log('Login successful, showing dashboard for:', currentRole);
    }, 1500);
}

// Dashboard display
function showDashboard(role) {
    console.log('Showing dashboard for role:', role);
    showScreen(`${role}Dashboard`);
    
    // Initialize role-specific features
    switch(role) {
        case 'student':
            initializeStudentDashboard();
            break;
        case 'driver':
            initializeDriverDashboard();
            break;
        case 'admin':
            initializeAdminDashboard();
            break;
        default:
            console.error('Unknown role:', role);
    }
}

// Student Dashboard
function initializeStudentDashboard() {
    console.log('Initializing student dashboard');
    updateTransportCounts();
    animateRecommendations();
}

// Driver Dashboard
function initializeDriverDashboard() {
    console.log('Initializing driver dashboard');
    updateDriverStats();
    setTimeout(() => initializeDriverMap(), 500);
    animateIncentiveProgress();
}

// Admin Dashboard
function initializeAdminDashboard() {
    console.log('Initializing admin dashboard');
    updateSystemOverview();
    setTimeout(() => initializePerformanceChart(), 500);
}

// Screen management
function showScreen(screenId) {
    console.log('Showing screen:', screenId);
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    } else {
        console.error('Screen not found:', screenId);
    }
}

// Transport availability
function showTransportAvailability() {
    console.log('Showing transport availability');
    const modal = document.getElementById('transportModal');
    const container = document.getElementById('transportLocations');
    
    container.innerHTML = '';
    
    appData.transport_availability.forEach(location => {
        const locationDiv = document.createElement('div');
        locationDiv.className = 'transport-location-item';
        locationDiv.style.animation = 'fadeIn 0.5s ease-in-out';
        
        locationDiv.innerHTML = `
            <h4>${location.location}</h4>
            <div class="transport-availability">
                <div class="availability-item">
                    🚐 <span class="availability-count">${location.auto_count}</span> Autos
                </div>
                <div class="availability-item">
                    🚌 <span class="availability-count">${location.bus_count}</span> Buses
                </div>
            </div>
            <p><strong>Wait time:</strong> ${location.estimated_wait_time}</p>
            <p class="last-updated">Last updated: ${location.last_updated}</p>
        `;
        
        container.appendChild(locationDiv);
    });
    
    modal.classList.remove('hidden');
}

// Distance calculator
function showDistanceCalculator() {
    console.log('Showing distance calculator');
    document.getElementById('distanceModal').classList.remove('hidden');
    document.getElementById('distanceResult').classList.add('hidden');
}

function calculateDistance() {
    console.log('Calculating distance');
    const from = document.getElementById('fromLocation').value;
    const to = document.getElementById('toLocation').value;
    
    if (!from || !to) {
        showNotification('Please select both locations', 'error');
        return;
    }
    
    if (from === to) {
        showNotification('From and To locations cannot be the same', 'error');
        return;
    }

    showLoading();
    
    // Simulate AI calculation delay
    setTimeout(() => {
        const route = findRoute(from, to);
        if (route) {
            displayRouteResult(route);
        } else {
            // Generate estimated route using AI simulation
            const estimatedRoute = generateEstimatedRoute(from, to);
            displayRouteResult(estimatedRoute);
        }
        hideLoading();
    }, 1000);
}

function findRoute(from, to) {
    return appData.popular_routes.find(route => 
        route.from === from && route.to === to
    );
}

function generateEstimatedRoute(from, to) {
    // AI-powered route estimation
    const baseDistance = Math.random() * 30 + 15; // 15-45 km
    const estimatedTime = Math.round(baseDistance * 1.2 + Math.random() * 10);
    const fare = Math.round(baseDistance * 8 + Math.random() * 50);
    
    return {
        from: from,
        to: to,
        distance_km: parseFloat(baseDistance.toFixed(1)),
        estimated_time: estimatedTime,
        fare: fare
    };
}

function displayRouteResult(route) {
    document.getElementById('routeDistance').textContent = route.distance_km;
    document.getElementById('routeTime').textContent = route.estimated_time;
    document.getElementById('routeFare').textContent = route.fare;
    document.getElementById('distanceResult').classList.remove('hidden');
}

// Holiday polls
function showHolidayPolls() {
    console.log('Showing holiday polls');
    document.getElementById('holidayModal').classList.remove('hidden');
}

function joinTrip() {
    showLoading();
    setTimeout(() => {
        const participantElement = document.querySelector('.participant-count');
        const currentCount = parseInt(participantElement.textContent);
        participantElement.textContent = currentCount + 1;
        
        showNotification('Successfully joined the trip!', 'success');
        hideLoading();
    }, 1000);
}

function voteTime() {
    showNotification('Vote recorded! We\'ll notify you of the final decision.', 'success');
}

// Live map
function showLiveMap() {
    console.log('Showing live map');
    const modal = document.getElementById('mapModal');
    modal.classList.remove('hidden');
    
    setTimeout(() => {
        initializeLiveMap();
    }, 300);
}

function initializeLiveMap() {
    console.log('Initializing live map');
    if (liveMap) {
        liveMap.remove();
    }
    
    try {
        liveMap = L.map('liveMap').setView([13.0827, 79.2915], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(liveMap);
        
        // Add location markers
        appData.transport_availability.forEach(location => {
            const marker = L.marker([location.coordinates.lat, location.coordinates.lng])
                .addTo(liveMap)
                .bindPopup(`
                    <b>${location.location}</b><br>
                    🚐 ${location.auto_count} Autos<br>
                    🚌 ${location.bus_count} Buses<br>
                    Wait: ${location.estimated_wait_time}
                `);
        });
        
        // Add moving vehicles simulation
        simulateMovingVehicles();
    } catch (error) {
        console.error('Error initializing live map:', error);
    }
}

function simulateMovingVehicles() {
    const vehicles = [
        { lat: 13.0827, lng: 79.2915, type: 'bus', id: 'bus1' },
        { lat: 13.0727, lng: 79.2815, type: 'auto', id: 'auto1' },
        { lat: 13.0927, lng: 79.3015, type: 'auto', id: 'auto2' }
    ];
    
    vehicles.forEach(vehicle => {
        try {
            const marker = L.marker([vehicle.lat, vehicle.lng])
                .addTo(liveMap)
                .bindPopup(`${vehicle.type.toUpperCase()} - Live tracking`);
            
            // Simulate movement
            setInterval(() => {
                const newLat = vehicle.lat + (Math.random() - 0.5) * 0.01;
                const newLng = vehicle.lng + (Math.random() - 0.5) * 0.01;
                marker.setLatLng([newLat, newLng]);
                vehicle.lat = newLat;
                vehicle.lng = newLng;
            }, 5000);
        } catch (error) {
            console.error('Error creating vehicle marker:', error);
        }
    });
}

// Emergency services
function showEmergency() {
    console.log('Showing emergency services');
    const modal = document.getElementById('emergencyModal');
    const container = document.getElementById('emergencyServices');
    
    container.innerHTML = '';
    
    appData.emergency_services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'emergency-service';
        serviceDiv.style.animation = 'fadeIn 0.5s ease-in-out';
        
        serviceDiv.innerHTML = `
            <div class="emergency-service-info">
                <h4>${service.service_type}</h4>
                <p>${service.location}</p>
            </div>
            <button class="emergency-call-btn" onclick="callEmergency('${service.number}')">
                📞 ${service.number}
            </button>
        `;
        
        container.appendChild(serviceDiv);
    });
    
    modal.classList.remove('hidden');
}

function callEmergency(number) {
    showNotification(`Calling ${number}...`, 'info');
    setTimeout(() => {
        showNotification('Call connected! Help is on the way.', 'success');
    }, 2000);
}

function triggerSOS() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        showNotification('🆘 SOS Alert sent! Emergency services notified.', 'error');
        setTimeout(() => {
            closeModal('emergencyModal');
        }, 2000);
    }, 1500);
}

// Driver map initialization
function initializeDriverMap() {
    console.log('Initializing driver map');
    try {
        if (driverMap) {
            driverMap.remove();
        }
        
        const driverLocation = appData.drivers[0].current_location;
        driverMap = L.map('driverMap').setView([driverLocation.lat, driverLocation.lng], 15);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(driverMap);
        
        L.marker([driverLocation.lat, driverLocation.lng])
            .addTo(driverMap)
            .bindPopup('Your current location')
            .openPopup();
    } catch (error) {
        console.error('Error initializing driver map:', error);
    }
}

// Admin performance chart
function initializePerformanceChart() {
    console.log('Initializing performance chart');
    try {
        const ctx = document.getElementById('performanceChart').getContext('2d');
        
        if (performanceChart) {
            performanceChart.destroy();
        }
        
        performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Rides Completed',
                    data: [12, 19, 23, 25, 22, 30, 28],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error initializing performance chart:', error);
    }
}

// Real-time updates
function startRealTimeUpdates() {
    console.log('Starting real-time updates');
    // Update transport counts every 30 seconds
    setInterval(() => {
        updateTransportCounts();
        updateDriverStats();
    }, 30000);
    
    // Update system stats every minute
    setInterval(() => {
        updateSystemOverview();
    }, 60000);
}

function updateTransportCounts() {
    // Simulate real-time changes
    appData.transport_availability.forEach(location => {
        location.auto_count = Math.max(0, location.auto_count + Math.floor(Math.random() * 5) - 2);
        location.bus_count = Math.max(0, location.bus_count + Math.floor(Math.random() * 3) - 1);
    });
    
    // Update UI
    const autoCountEl = document.getElementById('autoCount');
    const busCountEl = document.getElementById('busCount');
    
    if (autoCountEl) {
        animateNumber(autoCountEl, appData.transport_availability[0].auto_count);
    }
    if (busCountEl) {
        animateNumber(busCountEl, appData.transport_availability[0].bus_count);
    }
}

function updateDriverStats() {
    const ratingEl = document.getElementById('driverRating');
    const tripsEl = document.getElementById('recentTrips');
    const scoreEl = document.getElementById('performanceScore');
    
    if (ratingEl) {
        appData.drivers[0].rating += (Math.random() - 0.5) * 0.1;
        appData.drivers[0].rating = Math.max(1, Math.min(5, appData.drivers[0].rating));
        ratingEl.textContent = appData.drivers[0].rating.toFixed(1);
    }
    
    if (tripsEl) {
        if (Math.random() < 0.3) {
            appData.drivers[0].recent_trips += 1;
            animateNumber(tripsEl, appData.drivers[0].recent_trips);
        }
    }
    
    if (scoreEl) {
        appData.drivers[0].performance_score += Math.floor(Math.random() * 3) - 1;
        appData.drivers[0].performance_score = Math.max(0, Math.min(100, appData.drivers[0].performance_score));
        animateNumber(scoreEl, appData.drivers[0].performance_score);
    }
}

function updateSystemOverview() {
    // Simulate system stats changes
    const overviewNumbers = document.querySelectorAll('.overview-number');
    overviewNumbers.forEach(el => {
        const currentValue = parseInt(el.textContent);
        const change = Math.floor(Math.random() * 10) - 5;
        const newValue = Math.max(0, currentValue + change);
        animateNumber(el, newValue);
    });
}

// Animation functions
function animateNumber(element, targetValue) {
    const startValue = parseInt(element.textContent) || 0;
    const duration = 1000;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = Math.round(startValue + (targetValue - startValue) * progress);
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

function animateRecommendations() {
    const recommendations = document.querySelectorAll('.recommendation-item');
    recommendations.forEach((rec, index) => {
        rec.style.animation = `fadeIn 0.6s ease-in-out ${index * 0.2}s both`;
    });
}

function animateIncentiveProgress() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.width = '60%';
        }, 500);
    }
}

// Utility functions
function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

function showNotification(message, type = 'info') {
    console.log('Notification:', message, type);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-base);
        padding: var(--space-16);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease-in-out;
        max-width: 300px;
    `;
    
    // Set notification color based on type
    switch(type) {
        case 'success':
            notification.style.borderLeft = '4px solid var(--color-success)';
            break;
        case 'error':
            notification.style.borderLeft = '4px solid var(--color-error)';
            break;
        case 'warning':
            notification.style.borderLeft = '4px solid var(--color-warning)';
            break;
        default:
            notification.style.borderLeft = '4px solid var(--color-info)';
    }
    
    notification.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start; gap: var(--space-12);">
            <p style="margin: 0; font-size: var(--font-size-sm);">${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; cursor: pointer; font-size: var(--font-size-lg);">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'fadeOut 0.3s ease-in-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
    
    // Clean up maps when closing modals
    if (modalId === 'mapModal' && liveMap) {
        liveMap.remove();
        liveMap = null;
    }
}

function logout() {
    console.log('Logging out...');
    
    currentUser = null;
    currentRole = null;
    
    // Clean up maps
    if (liveMap) {
        liveMap.remove();
        liveMap = null;
    }
    if (driverMap) {
        driverMap.remove();
        driverMap = null;
    }
    if (performanceChart) {
        performanceChart.destroy();
        performanceChart = null;
    }
    
    showScreen('loginScreen');
    
    // Reset login form
    document.getElementById('loginForm').reset();
    document.querySelector('.login-form-container').classList.add('hidden');
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    showNotification('Successfully logged out', 'success');
}

// Add fadeOut animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
    
    .notification {
        transition: all 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

// Handle modal clicks outside content
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        const modalId = e.target.id;
        closeModal(modalId);
    }
});

// Handle escape key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal:not(.hidden)');
        if (openModal) {
            closeModal(openModal.id);
        }
    }
});

// Add some demo interactions for better UX
document.addEventListener('click', function(e) {
    // Add click animation to buttons
    if (e.target.classList.contains('btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Simulate AI recommendations update
setInterval(() => {
    const recommendations = [
        'Travel at 2:30 PM for 20% less wait time',
        'Use Route B for fastest journey to city center',
        'Book now - surge pricing ends in 15 minutes',
        'Alternative route available via MG Road'
    ];
    
    const recommendationElements = document.querySelectorAll('.recommendation-item p');
    if (recommendationElements.length > 0 && Math.random() < 0.3) {
        const randomRec = recommendations[Math.floor(Math.random() * recommendations.length)];
        const randomElement = recommendationElements[Math.floor(Math.random() * recommendationElements.length)];
        randomElement.textContent = randomRec;
        randomElement.parentElement.style.animation = 'pulse 0.5s ease-in-out';
    }
}, 45000);

console.log('AI Transport Hub initialized successfully!');
