axios.defaults.baseURL = 'http://localhost:8580/';

var vm = new Vue({
    el: '#app',
    data: {
        result: {}
     },
    created: function () {
        this.fetch_all_data();
    },
    methods: {
        fetch_all_data: function () {

            var response = {

                "col_character": "c", 
                "col_interval_year": {},
                "col_varchar2": "test1",
                "col_clob": {}, 
                "col_character_varying": "string",
                "col_nvarchar2": "string",
                "col_national_char": "c",
                "col_nchar_varying": "string",
                "col_date": "Jan 14, 2020 12:00:00 AM",
                "col_integer": 123456, 
                "col_dec": 12345, 
                "col_nchar": "c",
                "col_national_character": "c",
                "col_national_character_varying": "12345.123",
                "col_real": 12345.123,
                "col_blob": {},
                "col_timestamp": {},
                "col_int": 237,
                "col_char": "c",
                "col_binary_double": 123.456,
                "col_varchar": "string",
                "col_interval_day": {},
                "col_smallint": 10,
                "col_binary_float": 123.4567,
                "col_number": 123456,
                "col_numeric": 12345,
                "col_decimal": 12345,
                "col_national_char_varying": "string",
                "col_nclob": {},
                "col_double_precision": 12345.12345,
                "col_float": 12345.12345,
                "col_char_varying": "string"

            };

        console.log(typeof(response["col_character"]));
        console.log(typeof(response["col_varchar2"]));
        console.log(typeof(response["col_date"]));
        console.log(typeof(response["col_national_character_varying"]));
        console.log(typeof(response["col_number"]));
        console.log(typeof(response["col_double_precision"]));
        console.log(typeof(response["col_nclob"]));
        console.log(typeof(response["col_float"]));

        },
    },
})
