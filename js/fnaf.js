<script>
    function runIfElse(){
      const val = Number(document.getElementById('ifInput').value);
      let message;
      if (val === 1) {
        message = 'Freddy wychodzi ze sceny!';
      } else if (val === 2) {
        message = 'Bonnie przemieszcza się korytarzem...';
      } else if (val === 3) {
        message = 'Chica hałasuje w kuchni.';
      } else if (val === 4) {
        message = 'Foxy szykuje się do biegu ze swojej zatoki!';
      } else if (val === 5) {
        message = 'Golden Freddy pojawia się w biurze w złudzeniu!';
      } else if (val === 6) {
        message = 'Puppet wychodzi z pudełka jeśli nie nakręcisz pozytywki!';
      } else if (val === 7) {
        message = 'Springtrap skrada się przez korytarze Fazbear’s Fright!';
      } else if (val === 8) {
        message = 'Ballora tańczy w pobliżu, uważaj na muzykę...';
      } else {
        message = 'Podaj wartość od 1 do 8 (max = 8).';
      }
      document.getElementById('ifOutput').textContent = message;
    }
    let wynik = "Godziny nocnej zmiany:<br>";
for (let i = 1; i <= liczba; i++) {
  wynik += i + " AM<br>";
}
wynik += "— Koniec zmiany!";
document.getElementById("forResult").innerHTML = wynik;


    function runSwitch(){
      const room = Number(document.getElementById('switchInput').value);
      let name;
      switch(room){
        case 0:
          name = 'Jesteś w biurze — sprawdzaj kamery!';
          break;
        case 1:
          name = 'Scena główna — Freddy, Bonnie i Chica stoją spokojnie.';
          break;
        case 2:
          name = 'Korytarz — coś się porusza!';
          break;
        case 3:
          name = 'Kuchnia — słyszysz dziwne dźwięki, ale nie ma kamery.';
          break;
        case 4:
          name = 'Piracka zatoka — Foxy czai się w cieniu.';
          break;
        case 5:
          name = 'Magazyn pełen starych części animatroników.';
          break;
        case 6:
          name = 'Wentylacja — coś się tam przeciska...';
          break;
        default:
          name = 'Podaj wartość od 0 do 6 (max = 6).';
      }
      document.getElementById('switchOutput').textContent = name;
    }

    function runForLoop(){
      const n = Number(document.getElementById('forInput').value);
      if (!Number.isInteger(n) || n < 1 || n > 12) {
        document.getElementById('forOutput').textContent = 'Podaj poprawną liczbę godzin (1–12).';
        return;
      }
      let result = [];
      for (let i = 1; i <= n; i++){
        result.push((i === n) ? '6 AM — Koniec zmiany!' : i + ' AM');
      }
      document.getElementById('forOutput').textContent = 'Godziny nocnej zmiany: ' + result.join(', ');
    }

    function runWhileLoop(){
      let steps = Number(document.getElementById('whileInput').value);
      if (!Number.isFinite(steps) || steps <= 0 || steps > 20){
        document.getElementById('whileOutput').textContent = 'Podaj liczbę od 1 do 20 (max = 20).';
        return;
      }
      let position = 0;
      let log = [];
      while (position < steps){
        position++;
        log.push('Krok ' + position + ' — animatronik zbliża się do biura...');
      }
      log.push('Animatronik dotarł do drzwi!');
      document.getElementById('whileOutput').textContent = log.join('\n');
    }

    function runDoWhileLoop(){
      let checks = Number(document.getElementById('doWhileInput').value);
      if (!Number.isFinite(checks) || checks < 1 || checks > 10){
        document.getElementById('doWhileOutput').textContent = 'Podaj liczbę od 1 do 10 (max = 10).';
        return;
      }
      const log = [];
      let i = 0;
      do {
        i++;
        log.push('Sprawdzasz kamery... (' + i + ')');
      } while (i < checks);
      log.push('Zauważyłeś ruch na jednej z kamer!');
      document.getElementById('doWhileOutput').textContent = log.join('\n');
    }
  </script>