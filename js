const appData = {
    mbu_location: {
        "name": "MBU Campus",
        "coordinates": [79.4194, 13.6307],
        "type": "university"
    },
    destinations: [{
            "id": 1,
            "name": "Tirupati Temple",
            "coordinates": [79.4192, 13.6288],
            "distance": "2.2 km",
            "avg_time": "8 mins",
            "available_vehicles": 8,
            "type": "religious",
            "description": "Main temple complex"
        },
        {
            "id": 2,
            "name": "Railway Station",
            "coordinates": [79.4108, 13.6358],
            "distance": "3.8 km",
            "avg_time": "12 mins",
            "available_vehicles": 5,
            "type": "transport",
            "description": "Tirupati Railway Station"
        },
        {
            "id": 3,
            "name": "Bus Station",
            "coordinates": [79.4059, 13.6280],
            "distance": "4.2 km",
            "avg_time": "15 mins",
            "available_vehicles": 6,
            "type": "transport",
            "description": "APSRTC Bus Station"
        },
        {
            "id": 4,
            "name": "Saptagiri Mall",
            "coordinates": [79.4065, 13.6195],
            "distance": "5.1 km",
            "avg_time": "18 mins",
            "available_vehicles": 4,
            "type": "shopping",
            "description": "Major shopping destination"
        },
        {
            "id": 5,
            "name": "PVR Cinemas",
            "coordinates": [79.4200, 13.6150],
            "distance": "6.3 km",
            "avg_time": "22 mins",
            "available_vehicles": 3,
            "type": "entertainment",
            "description": "Multiplex cinema"
        }
    ],
    vehicles: [{
            "id": 1,
            "driver": "Raj Kumar",
            "type": "auto",
            "coordinates": [79.4194, 13.6307],
            "destination": "Tirupati Temple",
            "status": "available",
            "capacity": 3,
            "occupied": 0,
            "eta": "Now"
        },
        {
            "id": 2,
            "driver": "Suresh Babu",
            "type": "bus",
            "coordinates": [79.4180, 13.6250],
            "destination": "Railway Station",
            "status": "moving",
            "capacity": 20,
            "occupied": 12,
            "eta": "5 mins"
        },
        {
            "id": 3,
            "driver": "Ramesh Reddy",
            "type": "auto",
            "coordinates": [79.4100, 13.6300],
            "destination": "Bus Station",
            "status": "busy",
            "capacity": 3,
            "occupied": 3,
            "eta": "15 mins"
        },
        {
            "id": 4,
            "driver": "Venkat Rao",
            "type": "car",
            "coordinates": [79.4150, 13.6200],
            "destination": "Saptagiri Mall",
            "status": "available",
            "capacity": 4,
            "occupied": 1,
            "eta": "3 mins"
        },
        {
            "id": 5,
            "driver": "Krishna Murthy",
            "type": "bus",
            "coordinates": [79.4190, 13.6140],
            "destination": "PVR Cinemas",
            "status": "moving",
            "capacity": 25,
            "occupied": 18,
            "eta": "8 mins"
        },
        {
            "id": 6,
            "driver": "Srinivas",
            "type": "auto",
            "coordinates": [79.4170, 13.6320],
            "destination": "MBU Gate",
            "status": "available",
            "capacity": 3,
            "occupied": 0,
            "eta": "2 mins"
        }
    ],
    drivers: [{
            "id": 1,
            "name": "Raj Kumar",
            "location": "MBU Gate",
            "available": true,
            "performance": 85,
            "earnings_today": 450,
            "trips_completed": 8,
            "rating": 4.6
        },
        {
            "id": 2,
            "name": "Suresh Babu",
            "location": "Tirupati",
            "available": true,
            "performance": 92,
            "earnings_today": 620,
            "trips_completed": 12,
            "rating": 4.8
        },
        {
            "id": 3,
            "name": "Ramesh Reddy",
            "location": "Chandragiri",
            "available": false,
            "performance": 78,
            "earnings_today": 380,
            "trips_completed": 6,
            "rating": 4.2
        },
        {
            "id": 4,
            "name": "Venkat Rao",
            "location": "Bus Station",
            "available": true,
            "performance": 88,
            "earnings_today": 510,
            "trips_completed": 9,
            "rating": 4.5
        },
        {
            "id": 5,
            "name": "Krishna Murthy",
            "location": "Railway Station",
            "available": true,
            "performance": 95,
            "earnings_today": 700,
            "trips_completed": 14,
            "rating": 4.9
        }
    ],
    events: [{
            "id": 1,
            "name": "Tirupati Brahmotsavam",
            "date": "2025-09-15",
            "location": "Tirupati Temple",
            "expected_surge": 2.5,
            "type": "religious",
            "coordinates": [79.4192, 13.6288]
        },
        {
            "id": 2,
            "name": "Mall Weekend Sale",
            "date": "2025-09-14",
            "location": "Saptagiri Mall",
            "expected_surge": 1.8,
            "type": "shopping",
            "coordinates": [79.4065, 13.6195]
        },
        {
            "id": 3,
            "name": "New Movie Release",
            "date": "2025-09-13",
            "location": "PVR Cinemas",
            "expected_surge": 1.5,
            "type": "entertainment",
            "coordinates": [79.4200, 13.6150]
        },
        {
            "id": 4,
            "name": "College Festival",
            "date": "2025-09-20",
            "location": "MBU Campus",
            "expected_surge": 2.0,
            "type": "academic",
            "coordinates": [79.4194, 13.6307]
        },
        {
            "id": 5,
            "name": "Diwali Shopping",
            "date": "2025-10-30",
            "location": "Multiple Malls",
            "expected_surge": 3.0,
            "type": "festival",
            "coordinates": [79.4065, 13.6195]
        }
    ],
    polls: [{
            "id": 1,
            "title": "Weekend Tirupati Trip",
            "creator": "Arun",
            "destination": "Tirupati Temple",
            "coordinates": [79.4192, 13.6288],
            "options": [{
                    "id": 1,
                    "text": "Saturday 6:00 AM",
                    "votes": 15
                },
                {
                    "id": 2,
                    "text": "Saturday 7:00 AM",
                    "votes": 8
                },
                {
                    "id": 3,
                    "text": "Sunday 6:00 AM",
                    "votes": 22
                },
                {
                    "id": 4,
                    "text": "Sunday 7:00 AM",
                    "votes": 12
                }
            ],
            "status": "active",
            "estimated_cost": 50
        },
        {
            "id": 2,
            "title": "Movie Night at PVR",
            "creator": "Priya",
            "destination": "PVR Cinemas",
            "coordinates": [79.4200, 13.6150],
            "options": [{
                    "id": 1,
                    "text": "Friday 6:00 PM",
                    "votes": 18
                },
                {
                    "id": 2,
                    "text": "Friday 9:00 PM",
                    "votes": 25
                },
                {
                    "id": 3,
                    "text": "Saturday 3:00 PM",
                    "votes": 10
                },
                {
                    "id": 4,
                    "text": "Saturday 6:00 PM",
                    "votes": 14
                }
            ],
            "status": "active",
            "estimated_cost": 75
        }
    ],
    routes: [{
            "from": "MBU Campus",
            "to": "Tirupati Temple",
            "distance": "2.2 km",
            "time": "8 mins",
            "path": [
                [79.4194, 13.6307],
                [79.4193, 13.6295],
                [79.4192, 13.6288]
            ]
        },
        {
            "from": "MBU Campus",
            "to": "Railway Station",
            "distance": "3.8 km",
            "time": "12 mins",
            "path": [
                [79.4194, 13.6307],
                [79.4150, 13.6330],
                [79.4108, 13.6358]
            ]
        },
        {
            "from": "MBU Campus",
            "to": "Bus Station",
            "distance": "4.2 km",
            "time": "15 mins",
            "path": [
                [79.4194, 13.6307],
                [79.4120, 13.6290],
                [79.4059, 13.6280]
            ]
        },
        {
            "from": "MBU Campus",
            "to": "Saptagiri Mall",
            "distance": "5.1 km",
            "time": "18 mins",
            "path": [
                [79.4194, 13.6307],
                [79.4130, 13.6230],
                [79.4065, 13.6195]
            ]
        },
        {
            "from": "MBU Campus",
            "to": "PVR Cinemas",
            "distance": "6.3 km",
            "time": "22 mins",
            "path": [
                [79.4194, 13.6307],
                [79.4200, 13.6220],
                [79.4200, 13.6150]
            ]
        }
    ],
    current_stats: {
        active_drivers: 15,
        total_trips_today: 147,
        current_demand: "Medium",
        current_surge: 1.2,
        available_vehicles: 26,
        revenue_today: 8750
    },
    incentive_suggestions: [{
            "time_slot": "2:00 PM - 4:00 PM",
            "incentive": "₹50 bonus per trip",
            "reason": "Low demand period",
            "priority": "high",
            "affected_routes": ["Bus Station", "Railway Station"]
        },
        {
            "time_slot": "10:00 PM - 12:00 AM",
            "incentive": "₹75 bonus per trip",
            "reason": "Night shift coverage needed",
            "priority": "medium",
            "affected_routes": ["Tirupati Temple", "All destinations"]
        },
        {
            "time_slot": "6:00 AM - 8:00 AM",
            "incentive": "₹40 bonus per trip",
            "reason": "Morning rush support",
            "priority": "low",
            "affected_routes": ["Railway Station", "Bus Station"]
        }
    ]
};

// Global variables
let mainMap = null;
let dashboardMap = null;
let vehicleMarkers = {};
let destinationMarkers = {};
let overviewChart = null;
let driverChart = null;
let surgeChart = null;
let vehicleUpdateInterval = null;
let currentFilter = 'all';

// Custom icons for different vehicle types
const vehicleIcons = {
    auto: '🛺',
    bus: '🚌',
    car: '🚗'
};

const statusColors = {
    available: '#2ecc71',
    busy: '#e74c3c',
    moving: '#f39c12'
};

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Enhanced MBU Transport System...');

    // Initialize app components
    updateDashboardStats();
    renderIncentiveCards();
    renderEventsGrid();
    renderPollsGrid();
    renderDestinationsGrid();
    renderVehicleCards();
    updateDemandIndicator();

    // Set up event listeners
    setTimeout(() => {
        setupEventListeners();
        initializeCharts();
        initializeMaps();
        startVehicleTracking();
    }, 200);
});

function setupEventListeners() {
    console.log('🔧 Setting up event listeners...');

    // Tab navigation
    const tabs = document.querySelectorAll('.nav__tab');
    tabs.forEach(tab => {
        const tabId = tab.getAttribute('data-tab');
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            switchTab(tabId);
        });
    });

    // Quick action buttons
    const quickActionButtons = document.querySelectorAll('.quick-actions .btn');
    quickActionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.toLowerCase();
            if (text.includes('incentive')) switchTab('incentives');
            else if (text.includes('surge')) switchTab('surge');
            else if (text.includes('poll')) switchTab('polls');
            else if (text.includes('tracking') || text.includes('map')) switchTab('availability');
        });
    });

    // Map controls
    setupMapControls();

    // Modal setup
    setupModalListeners();
}

function setupMapControls() {
    const locateBtn = document.getElementById('locate-me');
    const refreshBtn = document.getElementById('refresh-vehicles');
    const filterSelect = document.getElementById('vehicle-filter');

    if (locateBtn) {
        locateBtn.addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const userLat = position.coords.latitude;
                    const userLon = position.coords.longitude;
                    if (mainMap) {
                        mainMap.setView([userLat, userLon], 15);
                        L.marker([userLat, userLon])
                            .addTo(mainMap)
                            .bindPopup('📍 Your Location')
                            .openPopup();
                    }
                    showNotification('📍 Location found! Centered map on your position.', 'success');
                }, function() {
                    showNotification('❌ Unable to get your location. Please enable location services.', 'error');
                });
            } else {
                showNotification('❌ Geolocation is not supported by this browser.', 'error');
            }
        });
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            updateVehiclePositions();
            showNotification('🔄 Vehicle positions refreshed!', 'success');
        });
    }

    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            currentFilter = this.value;
            filterVehicles();
        });
    }
}

function setupModalListeners() {
    const createPollBtn = document.getElementById('create-poll-btn');
    const modal = document.getElementById('create-poll-modal');
    const closeModal = document.getElementById('close-modal');
    const createPollForm = document.getElementById('create-poll-form');

    if (createPollBtn) {
        createPollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (modal) modal.classList.remove('hidden');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function(e) {
            e.preventDefault();
            if (modal) modal.classList.add('hidden');
        });
    }

    if (modal) {
        const backdrop = modal.querySelector('.modal__backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.add('hidden');
            });
        }
    }

    if (createPollForm) {
        createPollForm.addEventListener('submit', handleCreatePoll);
    }
}

function switchTab(tabId) {
    console.log('📱 Switching to tab:', tabId);

    // Remove active class from all tabs
    document.querySelectorAll('.nav__tab').forEach(tab => {
        tab.classList.remove('nav__tab--active');
    });

    // Add active class to clicked tab
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeTab) {
        activeTab.classList.add('nav__tab--active');
    }

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('section--active');
    });

    // Show active section
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add('section--active');
    }

    // Handle section-specific initialization
    setTimeout(() => {
        if (tabId === 'availability') {
            if (!mainMap) initializeMainMap();
            else {
                mainMap.invalidateSize();
                updateVehiclePositions();
            }
        } else if (tabId === 'incentives' && !driverChart) {
            initializeDriverChart();
        } else if (tabId === 'surge' && !surgeChart) {
            initializeSurgeChart();
        }
    }, 100);
}

function initializeMaps() {
    console.log('🗺️ Initializing maps...');
    initializeDashboardMap();
    // Main map will be initialized when the availability tab is first accessed
}

function initializeDashboardMap() {
    const mapContainer = document.getElementById('dashboard-map');
    if (!mapContainer || dashboardMap) return;

    try {
        dashboardMap = L.map('dashboard-map', {
            center: [13.6307, 79.4194],
            zoom: 12,
            zoomControl: false,
            attributionControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(dashboardMap);

        // Add MBU marker
        L.marker([13.6307, 79.4194])
            .addTo(dashboardMap)
            .bindPopup('<strong>🏫 MBU Campus</strong><br>Main Transport Hub');

        // Add some vehicle markers for preview
        appData.vehicles.slice(0, 3).forEach(vehicle => {
            const lat = vehicle.coordinates[1];
            const lon = vehicle.coordinates[0];
            const color = statusColors[vehicle.status];

            const marker = L.circleMarker([lat, lon], {
                radius: 6,
                fillColor: color,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(dashboardMap);

            marker.bindPopup(`${vehicleIcons[vehicle.type]} ${vehicle.driver}<br>Status: ${vehicle.status}`);
        });

    } catch (error) {
        console.error('Error initializing dashboard map:', error);
        mapContainer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--color-text-secondary);">🗺️ Map Preview</div>';
    }
}

function initializeMainMap() {
    const mapContainer = document.getElementById('main-transport-map');
    if (!mapContainer || mainMap) return;

    try {
        mainMap = L.map('main-transport-map', {
            center: [13.6307, 79.4194],
            zoom: 13
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18,
        }).addTo(mainMap);

        // Add MBU Campus marker
        const mbuMarker = L.marker([13.6307, 79.4194], {
            icon: L.divIcon({
                html: '<div style="background: #e74c3c; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 12px;">🏫</div>',
                className: 'custom-marker',
                iconSize: [26, 26]
            })
        }).addTo(mainMap);

        mbuMarker.bindPopup('<strong>🏫 MBU Campus</strong><br>Main Transport Hub<br><small>All routes start from here</small>');

        // Add destination markers
        addDestinationMarkers();

        // Add vehicle markers
        addVehicleMarkers();

        // Add routes
        addRouteLines();

        console.log('✅ Main map initialized successfully');

    } catch (error) {
        console.error('❌ Error initializing main map:', error);
        mapContainer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--color-text-secondary); flex-direction: column; gap: 10px;"><div>🗺️ Map Loading Error</div><div style="font-size: 12px;">Please check your internet connection</div></div>';
    }
}

function addDestinationMarkers() {
    if (!mainMap) return;

    appData.destinations.forEach(destination => {
        const lat = destination.coordinates[1];
        const lon = destination.coordinates[0];

        const icon = destination.type === 'religious' ? '🛕' :
            destination.type === 'transport' ? '🚂' :
            destination.type === 'shopping' ? '🛍️' :
            destination.type === 'entertainment' ? '🎬' : '📍';

        const marker = L.marker([lat, lon], {
            icon: L.divIcon({
                html: `<div style="background: #3498db; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 14px;">${icon}</div>`,
                className: 'custom-marker',
                iconSize: [30, 30]
            })
        }).addTo(mainMap);

        const popupContent = `
            <div style="text-align: center; min-width: 200px;">
                <strong>${destination.name}</strong><br>
                📏 Distance: ${destination.distance}<br>
                ⏱️ Avg Time: ${destination.avg_time}<br>
                🚗 Available: ${destination.available_vehicles} vehicles<br>
                <small>${destination.description}</small><br><br>
                <button onclick="bookRideFromMap('${destination.name}')" 
                        class="btn btn--primary btn--sm" 
                        style="margin-top: 8px; padding: 6px 12px; background: #1FB8CD; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    🚗 Book Ride
                </button>
            </div>
        `;

        marker.bindPopup(popupContent);
        destinationMarkers[destination.id] = marker;
    });
}

function addVehicleMarkers() {
    if (!mainMap) return;

    appData.vehicles.forEach(vehicle => {
        addVehicleMarker(vehicle);
    });
}

function addVehicleMarker(vehicle) {
    if (!mainMap) return;

    const lat = vehicle.coordinates[1];
    const lon = vehicle.coordinates[0];
    const color = statusColors[vehicle.status];
    const icon = vehicleIcons[vehicle.type];

    const marker = L.marker([lat, lon], {
        icon: L.divIcon({
            html: `<div style="background: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; font-size: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">${icon}</div>`,
            className: 'custom-vehicle-marker',
            iconSize: [24, 24]
        })
    });

    const occupancyPercentage = Math.round((vehicle.occupied / vehicle.capacity) * 100);

    const popupContent = `
        <div style="text-align: center; min-width: 180px;">
            <strong>${icon} ${vehicle.driver}</strong><br>
            📍 Going to: ${vehicle.destination}<br>
            ⭐ Status: <span style="color: ${color}; font-weight: bold;">${vehicle.status}</span><br>
            👥 Capacity: ${vehicle.occupied}/${vehicle.capacity} (${occupancyPercentage}%)<br>
            🕒 ETA: ${vehicle.eta}<br>
            ${vehicle.status === 'available' ? 
                `<button onclick="bookRideWithDriver('${vehicle.driver}', '${vehicle.type}')" 
                         class="btn btn--primary btn--sm" 
                         style="margin-top: 8px; padding: 6px 12px; background: #2ecc71; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    📱 Book This Vehicle
                </button>` : 
                '<small style="color: #e74c3c;">Not available for booking</small>'
            }
        </div>
    `;

    marker.bindPopup(popupContent);

    vehicleMarkers[vehicle.id] = marker;
    marker.addTo(mainMap);
}

function addRouteLines() {
    if (!mainMap) return;

    appData.routes.forEach(route => {
        const polyline = L.polyline(route.path.map(coord => [coord[1], coord[0]]), {
            color: '#3498db',
            weight: 3,
            opacity: 0.6,
            dashArray: '5, 10'
        }).addTo(mainMap);

        polyline.bindPopup(`
            <strong>Route: ${route.from} → ${route.to}</strong><br>
            📏 Distance: ${route.distance}<br>
            ⏱️ Time: ${route.time}
        `);
    });
}

function startVehicleTracking() {
    console.log('🔄 Starting real-time vehicle tracking...');

    // Update vehicle positions every 10 seconds
    vehicleUpdateInterval = setInterval(() => {
        updateVehiclePositions();
    }, 10000);

    // Also update immediately
    setTimeout(updateVehiclePositions, 2000);
}

function updateVehiclePositions() {
    appData.vehicles.forEach(vehicle => {
        // Simulate vehicle movement
        const currentLat = vehicle.coordinates[1];
        const currentLon = vehicle.coordinates[0];

        if (vehicle.status === 'moving') {
            // Add small random movement
            const latOffset = (Math.random() - 0.5) * 0.002;
            const lonOffset = (Math.random() - 0.5) * 0.002;

            vehicle.coordinates[1] = currentLat + latOffset;
            vehicle.coordinates[0] = currentLon + lonOffset;

            // Update marker position if it exists
            if (vehicleMarkers[vehicle.id] && mainMap) {
                vehicleMarkers[vehicle.id].setLatLng([vehicle.coordinates[1], vehicle.coordinates[0]]);
            }
        }

        // Randomly change some vehicle statuses
        if (Math.random() < 0.1) {
            const statuses = ['available', 'busy', 'moving'];
            vehicle.status = statuses[Math.floor(Math.random() * statuses.length)];

            // Update marker color
            if (vehicleMarkers[vehicle.id]) {
                const color = statusColors[vehicle.status];
                const icon = vehicleIcons[vehicle.type];
                vehicleMarkers[vehicle.id].setIcon(L.divIcon({
                    html: `<div style="background: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; font-size: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">${icon}</div>`,
                    className: 'custom-vehicle-marker',
                    iconSize: [24, 24]
                }));
            }
        }
    });

    // Update vehicle cards and stats
    renderVehicleCards();
    updateStats();
}

function filterVehicles() {
    if (!mainMap) return;

    appData.vehicles.forEach(vehicle => {
        const marker = vehicleMarkers[vehicle.id];
        if (marker) {
            const shouldShow = currentFilter === 'all' ||
                (currentFilter === 'available' && vehicle.status === 'available') ||
                (currentFilter === vehicle.type);

            if (shouldShow) {
                marker.addTo(mainMap);
            } else {
                mainMap.removeLayer(marker);
            }
        }
    });
}

function updateStats() {
    const availableCount = appData.vehicles.filter(v => v.status === 'available').length;
    const movingCount = appData.vehicles.filter(v => v.status === 'moving').length;
    const busyCount = appData.vehicles.filter(v => v.status === 'busy').length;

    appData.current_stats.available_vehicles = availableCount;
    appData.current_stats.active_drivers = availableCount + movingCount + busyCount;

    updateDashboardStats();
}

function updateDashboardStats() {
    const elements = {
        'active-drivers': appData.current_stats.active_drivers,
        'total-trips': appData.current_stats.total_trips_today,
        'current-surge': `${appData.current_stats.current_surge}x`,
        'current-demand': `${appData.current_stats.current_demand} Demand`,
        'surge-rate': `${appData.current_stats.current_surge}x Surge`,
        'vehicles-online': `${appData.current_stats.active_drivers} Online`
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function renderIncentiveCards() {
    const container = document.getElementById('incentive-cards');
    if (!container) return;

    container.innerHTML = '';

    appData.incentive_suggestions.forEach((incentive, index) => {
        const card = document.createElement('div');
        card.className = `incentive-card incentive-card--${incentive.priority}`;
        card.innerHTML = `
            <div class="incentive-card__time">⏰ ${incentive.time_slot}</div>
            <div class="incentive-card__bonus">${incentive.incentive}</div>
            <div class="incentive-card__reason">💡 ${incentive.reason}</div>
            <div class="incentive-card__routes">🛣️ Routes: ${incentive.affected_routes.join(', ')}</div>
            <div class="incentive-card__actions">
                <button class="btn btn--primary btn--sm activate-incentive" data-timeslot="${incentive.time_slot}">✅ Activate</button>
                <button class="btn btn--secondary btn--sm edit-incentive" data-timeslot="${incentive.time_slot}">✏️ Edit</button>
            </div>
        `;

        // Add event listeners
        const activateBtn = card.querySelector('.activate-incentive');
        const editBtn = card.querySelector('.edit-incentive');

        if (activateBtn) {
            activateBtn.addEventListener('click', () => activateIncentive(incentive.time_slot));
        }
        if (editBtn) {
            editBtn.addEventListener('click', () => editIncentive(incentive.time_slot));
        }

        container.appendChild(card);
    });
}

function renderEventsGrid() {
    const container = document.getElementById('events-grid');
    if (!container) return;

    container.innerHTML = '';

    appData.events.forEach(event => {
        const card = document.createElement('div');
        card.className = `event-card event-card--${event.type}`;

        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const typeIcon = event.type === 'religious' ? '🛕' :
            event.type === 'shopping' ? '🛍️' :
            event.type === 'entertainment' ? '🎬' :
            event.type === 'academic' ? '🎓' :
            event.type === 'festival' ? '🎉' : '📅';

        card.innerHTML = `
            <div class="event-card__name">${typeIcon} ${event.name}</div>
            <div class="event-card__date">📅 ${formattedDate}</div>
            <div class="event-card__location">📍 ${event.location}</div>
            <div class="event-card__surge">
                <span>Expected Surge:</span>
                <span class="surge-multiplier">${event.expected_surge}x</span>
            </div>
        `;

        card.addEventListener('click', () => {
            showEventDetails(event);
        });

        container.appendChild(card);
    });
}

function renderPollsGrid() {
    const container = document.getElementById('polls-grid');
    if (!container) return;

    container.innerHTML = '';

    appData.polls.forEach(poll => {
        const card = document.createElement('div');
        card.className = 'poll-card';

        const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

        let optionsHTML = '';
        poll.options.forEach(option => {
            const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
            optionsHTML += `
                <div class="poll-option" data-poll-id="${poll.id}" data-option-id="${option.id}">
                    <span class="poll-option__text">${option.text}</span>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <small>${percentage}%</small>
                        <span class="poll-option__votes">${option.votes}</span>
                    </div>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="poll-card__header">
                <div class="poll-card__title">🗳️ ${poll.title}</div>
                <div class="poll-card__meta">
                    👤 Created by ${poll.creator} • ${totalVotes} total votes<br>
                    📍 ${poll.destination} • 💰 Est. cost: ₹${poll.estimated_cost}/person
                </div>
            </div>
            <div class="poll-card__options">
                ${optionsHTML}
            </div>
        `;

        // Add click listeners to poll options
        const pollOptions = card.querySelectorAll('.poll-option');
        pollOptions.forEach(option => {
            option.addEventListener('click', function() {
                const pollId = parseInt(this.dataset.pollId);
                const optionId = parseInt(this.dataset.optionId);
                voteOnPoll(pollId, optionId);
            });
        });

        container.appendChild(card);
    });
}

function renderDestinationsGrid() {
    const container = document.getElementById('destinations-grid');
    if (!container) return;

    container.innerHTML = '';

    appData.destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';

        const availabilityStatus = destination.available_vehicles > 0 ?
            `${destination.available_vehicles} Available` : 'No Vehicles';

        const typeIcon = destination.type === 'religious' ? '🛕' :
            destination.type === 'transport' ? '🚂' :
            destination.type === 'shopping' ? '🛍️' :
            destination.type === 'entertainment' ? '🎬' : '📍';

        card.innerHTML = `
            <div class="destination-card__header">
                <div class="destination-card__name">${typeIcon} ${destination.name}</div>
                <div class="destination-card__availability">${availabilityStatus}</div>
            </div>
            <div class="destination-card__info">
                <div class="destination-info">
                    <div class="destination-info__label">Distance</div>
                    <div class="destination-info__value">${destination.distance}</div>
                </div>
                <div class="destination-info">
                    <div class="destination-info__label">Avg Time</div>
                    <div class="destination-info__value">${destination.avg_time}</div>
                </div>
            </div>
            <button class="btn btn--primary btn--full-width book-ride-btn" 
                    data-destination-id="${destination.id}"
                    ${destination.available_vehicles === 0 ? 'disabled' : ''}>
                ${destination.available_vehicles > 0 ? '🚗 Book Ride' : '❌ No Vehicles'}
            </button>
        `;

        // Add event listener to book ride button
        const bookBtn = card.querySelector('.book-ride-btn');
        if (bookBtn && !bookBtn.disabled) {
            bookBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const destinationId = parseInt(this.dataset.destinationId);
                const destinationData = appData.destinations.find(d => d.id === destinationId);
                if (destinationData) {
                    bookRide(destinationData.name);
                }
            });
        }

        container.appendChild(card);
    });
}

function renderVehicleCards() {
    const container = document.getElementById('vehicle-cards');
    if (!container) return;

    container.innerHTML = '';

    appData.vehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = `vehicle-card vehicle-card--${vehicle.status}`;

        const occupancyPercentage = Math.round((vehicle.occupied / vehicle.capacity) * 100);
        const icon = vehicleIcons[vehicle.type];

        card.innerHTML = `
            <div class="vehicle-icon">${icon}</div>
            <div class="vehicle-info">
                <h4>${vehicle.driver}</h4>
                <div class="vehicle-details">
                    📍 ${vehicle.destination}<br>
                    👥 ${vehicle.occupied}/${vehicle.capacity} (${occupancyPercentage}%)<br>
                    🕒 ETA: ${vehicle.eta}
                </div>
            </div>
            <div class="vehicle-status vehicle-status--${vehicle.status}">
                ${vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
            </div>
        `;

        card.addEventListener('click', () => {
            if (mainMap && vehicleMarkers[vehicle.id]) {
                switchTab('availability');
                setTimeout(() => {
                    mainMap.setView([vehicle.coordinates[1], vehicle.coordinates[0]], 16);
                    vehicleMarkers[vehicle.id].openPopup();
                }, 500);
            }
        });

        container.appendChild(card);
    });
}

function initializeCharts() {
    setTimeout(initializeOverviewChart, 300);
}

function initializeOverviewChart() {
    const ctx = document.getElementById('overviewChart');
    if (!ctx || overviewChart) return;

    const availableDrivers = appData.vehicles.filter(v => v.status === 'available').length;
    const onTripDrivers = appData.vehicles.filter(v => v.status === 'moving' || v.status === 'busy').length;
    const offlineDrivers = appData.current_stats.active_drivers - availableDrivers - onTripDrivers;

    overviewChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Available Drivers', 'On Trip', 'Offline'],
            datasets: [{
                data: [availableDrivers, onTripDrivers, offlineDrivers],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });
}

function initializeDriverChart() {
    const ctx = document.getElementById('driverChart');
    if (!ctx || driverChart) return;

    const driverNames = appData.drivers.map(d => d.name.split(' ')[0]);
    const performances = appData.drivers.map(d => d.performance);
    const earnings = appData.drivers.map(d => d.earnings_today);

    driverChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: driverNames,
            datasets: [{
                    label: 'Performance Score',
                    data: performances,
                    backgroundColor: '#1FB8CD',
                    borderRadius: 4,
                    yAxisID: 'y'
                },
                {
                    label: 'Earnings Today (₹)',
                    data: earnings,
                    backgroundColor: '#FFC185',
                    borderRadius: 4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Performance Score'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Earnings (₹)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}

function initializeSurgeChart() {
    const ctx = document.getElementById('surgeChart');
    if (!ctx || surgeChart) return;

    const eventNames = appData.events.map(e => e.name.length > 15 ? e.name.substring(0, 15) + '...' : e.name);
    const surgeLevels = appData.events.map(e => e.expected_surge);
    const eventDates = appData.events.map(e => new Date(e.date).toLocaleDateString());

    surgeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: eventDates,
            datasets: [{
                label: 'Expected Surge Multiplier',
                data: surgeLevels,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#1FB8CD',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    title: {
                        display: true,
                        text: 'Surge Multiplier'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Event Dates'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function updateDemandIndicator() {
    const demandLevel = document.getElementById('demand-level');
    const demandFill = document.getElementById('demand-fill');

    if (demandLevel) demandLevel.textContent = appData.current_stats.current_demand;

    if (demandFill) {
        let fillWidth = 50;
        if (appData.current_stats.current_demand === 'Low') fillWidth = 25;
        else if (appData.current_stats.current_demand === 'High') fillWidth = 85;

        demandFill.style.width = `${fillWidth}%`;
    }
}

// Global functions for map popup buttons
window.bookRideFromMap = function(destinationName) {
    bookRide(destinationName);
};

window.bookRideWithDriver = function(driverName, vehicleType) {
    showNotification(`🚗 Booking confirmed with ${driverName}!\n\n🚛 Vehicle: ${vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)}\n📱 Driver contact sent to your phone\n🕒 ETA: 5-8 minutes`, 'success');
};

// Action functions
function activateIncentive(timeSlot) {
    showNotification(`✅ Incentive activated for ${timeSlot}!\n\n🚀 Drivers in this time slot will now receive bonus payments.\n📱 Notifications sent to all active drivers.`, 'success');
}

function editIncentive(timeSlot) {
    showNotification(`✏️ Edit functionality for ${timeSlot} coming soon!\n\n📝 You'll be able to customize incentive amounts and conditions.`, 'info');
}

function showEventDetails(event) {
    const typeIcon = event.type === 'religious' ? '🛕' :
        event.type === 'shopping' ? '🛍️' :
        event.type === 'entertainment' ? '🎬' :
        event.type === 'academic' ? '🎓' :
        event.type === 'festival' ? '🎉' : '📅';

    showNotification(`${typeIcon} ${event.name}\n\n📅 Date: ${new Date(event.date).toLocaleDateString()}\n📍 Location: ${event.location}\n⚡ Expected Surge: ${event.expected_surge}x\n\n💡 Recommended: Increase driver availability during this period.`, 'info');
}

function voteOnPoll(pollId, optionId) {
    const poll = appData.polls.find(p => p.id === pollId);
    const option = poll.options.find(o => o.id === optionId);

    if (poll && option) {
        option.votes += 1;
        renderPollsGrid();
        showNotification(`🗳️ Vote recorded for "${option.text}"!\n\n✅ Total votes: ${option.votes}\n📊 Poll: ${poll.title}`, 'success');
    }
}

function bookRide(destinationName) {
    const destination = appData.destinations.find(d => d.name === destinationName);
    if (destination && destination.available_vehicles > 0) {
        destination.available_vehicles -= 1;
        renderDestinationsGrid();

        // Update current trips
        appData.current_stats.total_trips_today += 1;

        const typeIcon = destination.type === 'religious' ? '🛕' :
            destination.type === 'transport' ? '🚂' :
            destination.type === 'shopping' ? '🛍️' :
            destination.type === 'entertainment' ? '🎬' : '📍';

        showNotification(`🚗 Ride booked to ${destinationName}!\n\n${typeIcon} Estimated arrival: ${destination.avg_time}\n📏 Distance: ${destination.distance}\n💰 Estimated fare: ₹${Math.round(Math.random() * 100 + 50)}\n\n👤 Your driver will arrive in 5-10 minutes.\n📱 You'll receive SMS confirmation shortly.`, 'success');

        // Update dashboard stats
        updateDashboardStats();

    } else {
        showNotification(`❌ Sorry, no vehicles available for ${destinationName} at the moment.\n\n🔄 Please try again later or check alternative destinations.`, 'error');
    }
}

function handleCreatePoll(event) {
    event.preventDefault();

    const title = document.getElementById('poll-title').value.trim();
    const destination = document.getElementById('poll-destination').value;
    const optionsText = document.getElementById('poll-options').value.trim();

    if (!title || !destination || !optionsText) {
        showNotification('❌ Please fill in all fields to create the poll.', 'error');
        return;
    }

    const options = optionsText.split('\n')
        .filter(option => option.trim())
        .map((option, index) => ({
            id: index + 1,
            text: option.trim(),
            votes: 0
        }));

    if (options.length === 0) {
        showNotification('❌ Please provide at least one time option.', 'error');
        return;
    }

    const destinationData = appData.destinations.find(d => d.name === destination);
    const estimatedCost = Math.round(Math.random() * 50 + 30); // Random cost between 30-80

    const newPoll = {
        id: appData.polls.length + 1,
        title: title,
        creator: 'You',
        destination: destination,
        coordinates: destinationData ? destinationData.coordinates : [79.4194, 13.6307],
        options: options,
        status: 'active',
        estimated_cost: estimatedCost
    };

    appData.polls.unshift(newPoll);
    renderPollsGrid();

    // Close modal and reset form
    const modal = document.getElementById('create-poll-modal');
    if (modal) modal.classList.add('hidden');

    const form = document.getElementById('create-poll-form');
    if (form) form.reset();

    // Update stats
    updateDashboardStats();

    showNotification(`✅ Poll "${title}" created successfully!\n\n🗳️ Users can now vote on your travel poll.\n💰 Estimated cost: ₹${estimatedCost}/person\n📍 Destination: ${destination}`, 'success');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Allow manual close on click
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
}

// Cleanup function
window.addEventListener('beforeunload', () => {
    if (vehicleUpdateInterval) {
        clearInterval(vehicleUpdateInterval);
    }
});

console.log('✅ Enhanced MBU Transport Management System loaded successfully!');
