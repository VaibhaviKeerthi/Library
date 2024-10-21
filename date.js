const moment = require('moment')


const parsedDate = moment("2023-11-06", 'YYYY-MM-DD');

            // Add 15 days
            const newDate = parsedDate.add(15, 'days');

            // Format the result as needed (e.g., in 'DD-MM-YYYY' format)
            const return_date = newDate.format('YYYY-MM-DD');

            console.log(return_date);