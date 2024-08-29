// Component that provides information to the user before starting the quiz
function JoinScreen({start}) {
    return (
        <div className="join-screen">
            <h2>Question App</h2>
            <ul>
                <li>Test toplam 10 sorudan oluşmaktadır.</li>
                <li>Cevaplar sorular yüklendikten 4sn sonra yüklenecektir.</li>
                <li>Her soru için 30sn süren var.</li>
                <li>Bu süre içinde cevaplamadığın soru yanlış kabul edilecek ve otomatik olarak bir sonraki soruya
                    yönlendirileceksin.</li>
                <li>Önceki sorulara geri dönemezsin.</li>
            </ul>
            <h3>Başarılar</h3>
            <button id="start" onClick={start}>Başla</button>
        </div>
    );
}

export default JoinScreen;