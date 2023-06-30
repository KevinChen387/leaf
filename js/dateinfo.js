// calculate date for Main Page and Calendar

const KAD1 = new Date(2020, 0, 18);
const KBD1 = new Date(2021, 0, 21);
const KCD1 = new Date(2020, 5, 2);
const WAD1 = new Date(2021, 8, 1);

const MONTH = {
    1: 'January', 2: 'February', 3: 'March',
    4: 'April', 5: 'May', 6: 'June',
    7: 'July', 8: 'August', 9: 'September',
    10: 'October', 11: 'November', 12: 'December'
}

const DAY = {
    1: 'Monday', 2: 'Tuesday', 3: 'Wednesday',
    4: 'Thursday', 5: 'Friday', 6: 'Saturday',
    0: 'Sunday'
}


// 0 means unsupport

function getKad(date) {
    let kad = (date - KAD1) / 86400000 + 1;
    if (kad >= 1) {
        return kad;
    } else {
        return 0;
    }
}

function getKbd(date) {
    let kbd = (date - KBD1) / 86400000 + 1;
    if (kbd >= 1) {
        return kbd;
    } else {
        return 0;
    }
}

function getKcd(date) {
    let kcd = (date - KCD1) / 86400000 + 1;
    if (kcd >= 1) {
        return kcd;
    } else {
        return 0;
    }
}

function getWad(date) {
    let wad = (date - WAD1) / 86400000 + 1;
    if (wad >= 1) {
        return wad;
    } else {
        return 0;
    }
}



function getDateInfo(dateString) {
    let date = new Date(dateString + " 00:00:00");

    let kad = getKad(date);
    let kbd = getKbd(date);
    let kcd = getKcd(date);
    let wad = getWad(date);

    if (!kad) { kad = '-'; }
    if (!kbd) { kbd = '-'; }
    if (!kcd) { kcd = '-'; }
    if (!wad) { wad = '-'; }

    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    alert(
`${y}-${m >= 10 ? m : "0" + m}-${d >= 10 ? d : "0" + d}

${kad} KAD
${kbd} KBD
${kcd} KCD
${wad} WAD`
    );
}


function getByKAD(kad) {
    if (kad > 0 && kad % 1 == 0) {
        let date = new Date(2020, 0, 18);
        date.setDate(date.getDate() + Number(kad) - 1);

        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();

        alert(
`${kad} KAD
${y}-${m >= 10 ? m : "0" + m}-${d >= 10 ? d : "0" + d}`
        );
    } else {
        alert("KAD must be a positive integer.")
    }
}


function today() {
    let now = new Date();
    let yearNumber = now.getFullYear();
    let monthNumber = now.getMonth();     // real month - 1
    let dateNumber = now.getDate();
    let dayNumber = now.getDay();

    let today = new Date(yearNumber, monthNumber, dateNumber);
    let kad = getKad(today);
    let wad = getWad(today);

    monthNumber++;
    let month = MONTH[monthNumber];
    let day = DAY[dayNumber];

    document.write(
`${day}, <strong>${month} ${dateNumber}</strong>, ${yearNumber}
${yearNumber}-${monthNumber >= 10 ? monthNumber : "0" + monthNumber}-${dateNumber >= 10 ? dateNumber : "0" + dateNumber}
${kad} KAD
${wad} WAD`
    );
}
