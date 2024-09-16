document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 로그인 예시
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'pi' && password === 'hello') {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
    } else {
        alert('Invalid login');
    }
});

// GPS 박스 클릭 시 위치 정보를 구글 지도에 표시
document.getElementById('gps-box').addEventListener('click', function() {
    // IP 정보를 통해 위치 좌표 가져오기 (ipinfo.io API 사용)
    fetch('https://ipinfo.io/json?token=YOUR_IPINFO_TOKEN')
        .then(response => response.json())
        .then(data => {
            const loc = data.loc.split(','); // loc 형식: "latitude,longitude"
            const latitude = parseFloat(loc[0]);
            const longitude = parseFloat(loc[1]);

            // Google Maps 초기화 및 마커 표시
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: latitude, lng: longitude },
                zoom: 14
            });

            const marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map
            });
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            alert('Failed to retrieve location data.');
        });
});
