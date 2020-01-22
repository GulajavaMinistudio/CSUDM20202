const warriorsGames = [
    {
        awayTeam: {
            team: 'Golden State',
            points: 119,
            isWinner: true,
        },
        homeTeam: {
            team: 'Houston',
            points: 106,
            isWinner: false,
        },
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 105,
            isWinner: false,
        },
        homeTeam: {
            team: 'Houston',
            points: 127,
            isWinner: true,
        },
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true,
        },
        awayTeam: {
            team: 'Houston',
            points: 85,
            isWinner: false,
        },
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 92,
            isWinner: false,
        },
        awayTeam: {
            team: 'Houston',
            points: 95,
            isWinner: true,
        },
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 94,
            isWinner: false,
        },
        homeTeam: {
            team: 'Houston',
            points: 98,
            isWinner: true,
        },
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true,
        },
        awayTeam: {
            team: 'Houston',
            points: 86,
            isWinner: false,
        },
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 101,
            isWinner: true,
        },
        homeTeam: {
            team: 'Houston',
            points: 92,
            isWinner: false,
        },
    },
];

function showTampilanBasket() {
    const ulParent = document.createElement('ul');

    const panjangArray = warriorsGames.length;
    for (let i = 0; i < panjangArray; i += 1) {
        const pertandingan = warriorsGames[i];
        const { awayTeam, homeTeam } = pertandingan;

        const { team: nameTeamHome, points: pointsTeamHome } = homeTeam;
        const { team: nameTeamAway, points: pointsTeamAway } = awayTeam;

        const liElementPertandingan = document.createElement('li');
        let timPertandingan = `Pertandingan ${nameTeamAway} vs ${nameTeamHome}`;
        let skorPertandingan = `Skor Akhir ${pointsTeamAway} - ${pointsTeamHome}`;

        if (pointsTeamAway > pointsTeamHome) {
            timPertandingan = `Pertandingan <b>${nameTeamAway}</b> vs ${nameTeamHome}`;
            skorPertandingan = `Skor Akhir <b>${pointsTeamAway}</b> - ${pointsTeamHome}`;
        } else {
            timPertandingan = `Pertandingan ${nameTeamAway} vs <b>${nameTeamHome}</b>`;
            skorPertandingan = `Skor Akhir ${pointsTeamAway} -  <b>${pointsTeamHome}</b>`;
        }

        const objectJagoanMenangGoldenState =
            nameTeamHome === 'Golden State' ? homeTeam : awayTeam;

        const isJagoanMenangClass = objectJagoanMenangGoldenState.isWinner
            ? 'win'
            : 'lose';

        liElementPertandingan.innerHTML = `${timPertandingan} dengan ${skorPertandingan}`;
        liElementPertandingan.classList.add(isJagoanMenangClass);

        // tambahkan ke dalam ul element
        ulParent.appendChild(liElementPertandingan);
    }

    // tambahkan ke element html
    const divElementPertandingan = document.querySelector(
        '#hasil_pertandingan',
    );
    divElementPertandingan.append(ulParent);
}

showTampilanBasket();

// REFACTORING FUNGSI
