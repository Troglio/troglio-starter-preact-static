import { React, markty } from "../../vendors"

const translations = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
}

const applyFormat = {
    "YYYY": (date, l) => (date.getFullYear()),
    "YY": (date, l) => (date.getFullYear().toString().substr(-2)),
    "M": (date, l) => (date.getMonth()+1),
    "MM": (date, l) => (date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1 ),
    "MMM": (date, l) => (translations[l][date.getMonth()].slice(0, 3)),
    "MMMM": (date, l) => (translations[l][date.getMonth()]),
    "D": (date, l) => (date.getDate()),
    "DD": (date, l) => (date.getDate() < 10 ? "0"+date.getDate() : date.getDate() ),
}

const DateFormat = ({date, format, lang}) => {
    if (date == null || new Date(date) == null) {
        return <span></span>
    } else {
        date = new Date(date)

        let output = markty(format, /((?:YY){1,2})|((?:M){1,4})|((?:D){1,2})/g, (string, match) => {
            let [t, y, m, d] = match
            if (y || m || d){ 
                let c = (y || m || d)
                return applyFormat[c](date, lang)
            }
        }, false)

        return <span>{output}</span>    
    }
}


export default DateFormat



// function applyFormat(fmt, date, lang) {
//     switch (fmt) {
//         case "YYYY":
//             return date.getFullYear()
//             break;
//         case "M":
//             return date.getFullYear()
//             break;
//         case "D":
//             return date.getDate()
//             break;
//         default:
//             break;
//     }
// }
